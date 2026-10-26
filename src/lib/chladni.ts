/**
 * Contour map of a vibrating wooden plate (a Chladni figure), generated as SVG.
 * It is the site's visual language wherever a photograph has not been supplied.
 */

export interface ChladniOptions {
  n: number;
  m: number;
  width: number;
  height: number;
  levels: number;
  resolution: number;
  tone: "dark" | "light";
}

type Point = [number, number];

// Marching-squares edge ids: 0 top, 1 right, 2 bottom, 3 left
const CASES: Record<number, [number, number][]> = {
  1: [[3, 0]],
  2: [[0, 1]],
  3: [[3, 1]],
  4: [[1, 2]],
  5: [[3, 0], [1, 2]],
  6: [[0, 2]],
  7: [[3, 2]],
  8: [[3, 2]],
  9: [[0, 2]],
  10: [[0, 1], [3, 2]],
  11: [[1, 2]],
  12: [[3, 1]],
  13: [[0, 1]],
  14: [[3, 0]],
};

/** Standing-wave pattern on a square plate: its zero set is the nodal line. */
function plate(n: number, m: number, x: number, y: number) {
  return (
    Math.cos(n * Math.PI * x) * Math.cos(m * Math.PI * y) -
    Math.cos(m * Math.PI * x) * Math.cos(n * Math.PI * y)
  );
}

function contourPath(
  field: number[][],
  cols: number,
  rows: number,
  level: number,
  w: number,
  h: number
) {
  const sx = w / cols;
  const sy = h / rows;
  const lerp = (v1: number, v2: number) => (level - v1) / (v2 - v1);
  let d = "";

  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      const a = field[j][i];
      const b = field[j][i + 1];
      const c = field[j + 1][i + 1];
      const e = field[j + 1][i];
      const idx =
        (a > level ? 1 : 0) |
        (b > level ? 2 : 0) |
        (c > level ? 4 : 0) |
        (e > level ? 8 : 0);
      const segs = CASES[idx];
      if (!segs) continue;

      const edge = (id: number): Point => {
        switch (id) {
          case 0: return [(i + lerp(a, b)) * sx, j * sy];
          case 1: return [(i + 1) * sx, (j + lerp(b, c)) * sy];
          case 2: return [(i + lerp(e, c)) * sx, (j + 1) * sy];
          default: return [i * sx, (j + lerp(a, e)) * sy];
        }
      };

      for (const [p, q] of segs) {
        const [x1, y1] = edge(p);
        const [x2, y2] = edge(q);
        d += `M${x1.toFixed(1)} ${y1.toFixed(1)}L${x2.toFixed(1)} ${y2.toFixed(1)}`;
      }
    }
  }
  return d;
}

export function chladniSvg({ n, m, width, height, levels, resolution, tone }: ChladniOptions) {
  const cols = resolution;
  const rows = Math.round(resolution * (height / width));

  const field: number[][] = [];
  for (let j = 0; j <= rows; j++) {
    const row: number[] = [];
    for (let i = 0; i <= cols; i++) row.push(plate(n, m, i / cols, j / rows));
    field.push(row);
  }

  const fine = tone === "dark" ? "#cdb27a" : "#8b3a1e";
  const strong = tone === "dark" ? "#f6f1e8" : "#1a1511";
  const step = 1.6 / (levels + 1);

  let contours = "";
  for (let k = 1; k <= levels; k++) {
    for (const sign of [1, -1]) {
      contours += contourPath(field, cols, rows, sign * k * step, width, height);
    }
  }
  const nodal = contourPath(field, cols, rows, 0, width, height);

  return (
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" preserveAspectRatio="xMidYMid slice">` +
    `<path d="${contours}" fill="none" stroke="${fine}" stroke-width="0.22" stroke-linecap="round" opacity="0.55"/>` +
    `<path d="${nodal}" fill="none" stroke="${strong}" stroke-width="0.5" stroke-linecap="round" opacity="0.9"/>` +
    `</svg>`
  );
}
