import type { DialogueTree } from './types';
import { veraDialogue } from './vera';
import { glitchDialogue } from './glitch';
import { four04Dialogue } from './four04';
import { sargeDialogue } from './sarge';
import { patchesDialogue } from './patches';
import { docDialogue } from './doc';

export const dialogueTrees: Record<string, DialogueTree> = {
  vera: veraDialogue,
  glitch: glitchDialogue,
  four04: four04Dialogue,
  sarge: sargeDialogue,
  patches: patchesDialogue,
  doc: docDialogue,
};
