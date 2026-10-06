import { createHash } from 'node:crypto';
export const socialCardKey = (title, image = '') => createHash('sha256').update(`${title}\0${image}`).digest('hex').slice(0, 16);
