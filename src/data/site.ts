import { parse } from 'yaml';
import legacy from '../../config.yaml?raw';

export const site = parse(legacy) as any;
export const profile = site.params;
export const socials = [
  { name: 'GitHub', url: 'https://github.com/Mishalabdullah' },
  { name: 'X / Twitter', url: 'https://x.com/mishalabdula' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/mishalat/' },
  { name: 'YouTube', url: 'https://www.youtube.com/@Mishal-Abdullah' },
];
