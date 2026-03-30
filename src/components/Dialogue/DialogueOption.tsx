import styles from './DialogueOption.module.css';
import type { DialogueOption as DialogueOptionType } from '../../data/dialogues/types';

interface DialogueOptionProps {
  option: DialogueOptionType;
  index: number;
  onSelect: (nextNodeId: string) => void;
}

const LABELS = ['A', 'B', 'C'];

export function DialogueOption({ option, index, onSelect }: DialogueOptionProps) {
  return (
    <button
      className={`${styles.option} ${styles[option.tone]}`}
      onClick={() => onSelect(option.nextNodeId)}
    >
      <span className={styles.key}>[{LABELS[index]}]</span>
      <span className={styles.text}>{option.label}</span>
    </button>
  );
}
