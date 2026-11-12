// Photos are discovered at build time from src/assets/photos/. Nothing to register per photo.
// Filename: <slot>-<anything>[__Caption words].<ext>  e.g. court-01__Hardwood at dusk.jpg
import fs from 'node:fs';
import type { ImageMetadata } from 'astro';

const mods = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/photos/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}',
  { eager: true },
);
const SLOTS = ['hero', 'court', 'rules', 'positions', 'eras'];

export type Photo = { src: ImageMetadata; slot: string; caption: string; file: string };

const all: Photo[] = Object.entries(mods)
  .map(([path, m]) => {
    const file = path.split('/').pop()!;
    const [id, cap = ''] = file.replace(/\.[^.]+$/, '').split('__');
    const lead = id.split('-')[0].toLowerCase();
    try {
      const mb = fs.statSync(path.slice(1)).size / 1048576;
      if (mb > 8) console.warn(`[photos] ${file} is ${mb.toFixed(1)} MB: consider exporting it smaller (limit ~8 MB).`);
    } catch { /* size check is best-effort */ }
    return { src: m.default, slot: SLOTS.includes(lead) ? lead : 'gallery', caption: cap.replace(/_/g, ' ').trim(), file };
  })
  .sort((a, b) => a.file.localeCompare(b.file));

export const photosFor = (slot: string) => all.filter((p) => p.slot === slot);
