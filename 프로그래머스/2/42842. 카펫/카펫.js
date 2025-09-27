function solution(B, Y) {
  const N = B + Y;
  const S = (B + 4) / 2;
  const discriminant = S * S - 4 * N;

  if (discriminant < 0) return null;

  const sqrtD = Math.sqrt(discriminant);

  const w1 = (S + sqrtD) / 2;
  const w2 = (S - sqrtD) / 2;

  const candidates = [w1, w2].filter((n) => Number.isInteger(n));

  if (candidates.length === 0) return null;

  const width = Math.max(...candidates);

  return [width, (B + Y) / width];
}