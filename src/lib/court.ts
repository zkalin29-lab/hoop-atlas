// Half-court geometry in 1/10 ft units. Basket centre at (250, 417.5); baseline at y = 470.
export type Spec = { w: number; l: number; f: number; t: number; c: number; r: number };
export const SPEC: Record<'nba' | 'fiba', Spec> = {
  nba: { w: 160, l: 190, f: 60, t: 237.5, c: 220, r: 40 },   // lane width, lane length, FT radius, 3pt top, 3pt corner, restricted radius
  fiba: { w: 161, l: 190, f: 59, t: 221.5, c: 216.5, r: 41 }, // 4.9 m, 5.8 m, 1.80 m, 6.75 m, 6.60 m, 1.25 m
};
export function geometry(s: Spec): Record<string, string> {
  const X = 250, B = 470, by = 417.5, ly = B - s.l;
  const cy = (by - Math.sqrt(s.t ** 2 - s.c ** 2)).toFixed(1);
  return {
    three: `M${X - s.c} ${B}V${cy}A${s.t} ${s.t} 0 0 1 ${X + s.c} ${cy}V${B}`,
    paint: `M${X - s.w / 2} ${B}V${ly}H${X + s.w / 2}V${B}`,
    ft: `M${X - s.f} ${ly}A${s.f} ${s.f} 0 0 1 ${X + s.f} ${ly}`,
    ftLow: `M${X - s.f} ${ly}A${s.f} ${s.f} 0 0 0 ${X + s.f} ${ly}`,
    ftZone: `M${X - s.f} ${ly}A${s.f} ${s.f} 0 1 1 ${X + s.f} ${ly}A${s.f} ${s.f} 0 1 1 ${X - s.f} ${ly}Z`,
    ra: `M${X - s.r} ${by}A${s.r} ${s.r} 0 0 1 ${X + s.r} ${by}`,
  };
}
// [title, NBA text, FIBA text]
export const READ: Record<string, [string, string, string]> = {
  paint: ['The paint', '16 ft wide. Its far end is the free-throw line, 19 ft from the baseline.', '4.9 m wide, free-throw line 5.8 m from the baseline. A rectangle since the 2010 rule change.'],
  three: ['Three-point line', '23 ft 9 in from the basket at the top of the arc, 22 ft in the corners.', '6.75 m from the basket at the top of the arc, 6.60 m in the corners.'],
  ft: ['Free-throw circle', '6 ft radius around the free-throw line.', '1.80 m radius around the free-throw line.'],
  ra: ['Restricted area', 'A 4 ft arc under the basket: a defender standing inside it cannot draw an offensive charge.', 'A 1.25 m no-charge semicircle under the basket.'],
};
