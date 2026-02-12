import { randLastName } from '@ngneat/falso';
import { bold, gray, green, yellow } from 'colorette';
import * as path from 'node:path';
import { Similarity } from './models.js';

export function isTsvFile(filename: string): boolean {
  return path.extname(filename).toLowerCase() === '.tsv';
}

export function normalizeLineToArray(line: string): string[] {
  return line
    .replace(/\uFEFF/g, '')
    .replace(/\u200B/g, '')
    .trim()
    .split('\t');
}

export function logWithColorette(result: Similarity): void {
  const { a, b, score } = result;
  const percentage = score * 100;

  const color = percentage >= 90 ? green : percentage >= 80 ? yellow : gray;
  const coloredText = bold(color(`${percentage.toFixed(2)}% <- ${a} vs ${b}`));

  console.log(coloredText);
}

const reset = '\x1b[0m';
const fgGreen = '\x1b[32m';
const fgYellow = '\x1b[33m';
const fgRed = '\x1b[31m';

export function simpleLogMatch(
  result: Similarity,
  hide: boolean = false,
): void {
  const { a, b, score } = result;
  const percentage = score * 100;

  let val = '';
  if (hide) {
    val = `${percentage.toFixed(2)}% <- ${randLastName()} vs ${randLastName()}`;
  } else {
    val = `${percentage.toFixed(2)}% <- ${a} vs ${b}`;
  }

  let coloredText = '';

  if (percentage >= 90) {
    coloredText = `${fgGreen} ${val} ${reset}`;
  } else if (percentage >= 80) {
    coloredText = `${fgYellow} ${val} ${reset}`;
  } else {
    coloredText = ` ${val} `;
  }

  console.log(coloredText);
}
