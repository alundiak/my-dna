import * as fs from 'node:fs/promises';
import * as path from 'node:path';

import { Profile, Similarity } from './models.js';
import { isTsvFile, normalizeLineToArray, simpleLogMatch } from './utils.js';

const DIR = './data/FGC63213';
// const DIR = './data/FT8963';

function similarity(a: string[], b: string[]): number {
  const max = Math.max(a.length, b.length);
  let matches = 0;
  let compared = 0;

  for (let i = 0; i < max; i++) {
    const va = a[i];
    const vb = b[i];
    if (!va || !vb) continue;

    compared++;

    if (va === vb) matches++;
  }

  return compared === 0 ? 0 : matches / compared;
}

async function loadProfiles(): Promise<Profile[]> {
  const allFiles = await fs.readdir(DIR);
  const tsvFiles = allFiles.filter(isTsvFile);

  const profiles: Profile[] = [];

  for (const file of tsvFiles) {
    const full = path.join(DIR, file);
    const stat = await fs.stat(full);

    if (!stat.isFile()) continue;

    const content = await fs.readFile(full, 'utf8');
    const line = content.split(/\r?\n/).find(Boolean);

    if (!line) continue;

    profiles.push({
      name: path.parse(file).name,
      markers: normalizeLineToArray(line),
    });
  }

  return profiles;
}

async function main() {
  const profiles = await loadProfiles();

  const results: Similarity[] = [];

  for (let i = 0; i < profiles.length; i++) {
    for (let j = i + 1; j < profiles.length; j++) {
      const a = profiles[i];
      const b = profiles[j];
      const score = similarity(a.markers, b.markers);
      results.push({ a: a.name, b: b.name, score });
    }
  }

  results.sort((x, y) => y.score - x.score);

  for (const r of results) {
    const percentage = r.score * 100;
    // maybe optional
    if (percentage > 70) {
      // logWithColorette(r); // does have bad performance
      simpleLogMatch(r);
    }
  }
}

main();
