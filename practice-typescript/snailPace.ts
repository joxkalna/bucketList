export default function cockroachSpeed(s: number): number {
  let cmPerSecond = s * 27.7777777778;
  cmPerSecond = Math.floor(cmPerSecond);
  return cmPerSecond;
}