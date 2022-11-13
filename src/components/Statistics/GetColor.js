import { colors } from './Colors';

let i = 0;
export function randomColor() {
  const color = colors[i];
  if (i < 14) {
    i += 1;
  }

  return color;
}