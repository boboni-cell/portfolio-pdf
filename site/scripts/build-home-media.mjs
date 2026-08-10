// Generate responsive WebP copies of homepage assets into public/media.
// Sources stay untouched in ../assets.
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';

const SRC = path.resolve('../assets/images');
const OUT = path.resolve('public/media');

const jobs = [
  // [source, outName, widths]
  ['xiaonuan/xn-home-hero.png', 'xn-home-hero', [420, 760]],
  ['xiaonuan/xn-home.png', 'xn-home', [420, 760]],
  ['xiaonuan/xn-chat.png', 'xn-chat', [420, 760]],
  ['xiaonuan/xn-diary.png', 'xn-diary', [420, 760]],
  ['xiaonuan/xn-schedule.png', 'xn-schedule', [420, 760]],
  ['xiaonuan/xn-wallet.png', 'xn-wallet', [420, 760]],
  ['comic/cw-full-ui.png', 'cw-full-ui', [900, 1440]],
  ['comic/cw-flow-03-preview.jpg', 'cw-flow-03', [900, 1440]],
  ['comic/cw-char-lib.png', 'cw-char-lib', [640, 1000]],
  ['comic/cw-history-records.png', 'cw-history', [640, 1000]],
  ['comic/cw-keyframe-1.png', 'cw-keyframe-1', [560, 900]],
  ['comic/cw-keyframe-2.png', 'cw-keyframe-2', [560, 900]],
  ['mr/mr-hero.png', 'mr-hero', [560, 900]],
];

await mkdir(OUT, { recursive: true });

for (const [src, name, widths] of jobs) {
  for (const w of widths) {
    const input = path.join(SRC, src);
    const output = path.join(OUT, `${name}-${w}.webp`);
    await sharp(input).resize({ width: w, withoutEnlargement: true }).webp({ quality: 82 }).toFile(output);
    console.log(`${name}-${w}.webp`);
  }
}
