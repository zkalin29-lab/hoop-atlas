// Runs before `astro build`. A photo the image library cannot decode is moved aside
// (src/assets/photos/_rejected/) with a warning, so one bad file never breaks the site.
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const dir = 'src/assets/photos';
const ok = /\.(jpe?g|png|webp|avif)$/i;
if (!fs.existsSync(dir)) process.exit(0);
for (const f of fs.readdirSync(dir)) {
  if (!ok.test(f)) { if (!f.startsWith('.') && fs.statSync(path.join(dir, f)).isFile()) console.warn(`[photos] ${f}: unsupported type (use jpg, png, webp or avif), ignored`); continue; }
  const p = path.join(dir, f);
  try {
    await sharp(p).resize(64).toBuffer();
  } catch (e) {
    console.warn(`[photos] ${f} cannot be decoded (${String(e.message).split('\n')[0]}); set aside. Re-export it as JPG.`);
    fs.mkdirSync(path.join(dir, '_rejected'), { recursive: true });
    fs.renameSync(p, path.join(dir, '_rejected', f));
  }
}
