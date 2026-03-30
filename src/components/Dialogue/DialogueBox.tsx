import { useEffect, useState } from 'react';
import { useGameStore } from '../../store/gameStore';
import { dialogueTrees } from '../../data/dialogues';
import { npcs } from '../../data/npcs';
import { DialogueOption } from './DialogueOption';
import styles from './DialogueBox.module.css';

export function DialogueBox() {
  const activeNPCId = useGameStore((s) => s.activeNPCId);
  const currentNodeId = useGameStore((s) => s.currentNodeId);
  const advanceDialogue = useGameStore((s) => s.advanceDialogue);
  const endDialogue = useGameStore((s) => s.endDialogue);

  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const tree = activeNPCId ? dialogueTrees[activeNPCId] : null;
  const node = tree && currentNodeId ? tree.nodes[currentNodeId] : null;
  const npc = activeNPCId ? npcs.find((n) => n.id === activeNPCId) : null;

  useEffect(() => {
    if (!node) {
      setDisplayedText('');
      return;
    }

    setIsTyping(true);
    setDisplayedText('');
    let i = 0;
    const text = node.text;

    const interval = setInterval(() => {
      i++;
      setDisplayedText(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [node?.id]);

  if (!activeNPCId || !node || !npc) return null;

  const handleOptionSelect = (nextNodeId: string) => {
    if (isTyping) return;
    const nextNode = tree?.nodes[nextNodeId];
    if (nextNode?.isTerminal) {
      setDisplayedText(nextNode.text);
      setTimeout(() => endDialogue(), 2000);
    } else {
      advanceDialogue(nextNodeId);
    }
  };

  const skipTyping = () => {
    if (isTyping && node) {
      setDisplayedText(node.text);
      setIsTyping(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.header}>
          <span
            className={styles.speaker}
            style={{ color: npc.spriteConfig.bodyColor }}
          >
            {node.speaker}
          </span>
          <span className={styles.sectionTag}>{npc.title}</span>
          <button className={styles.closeBtn} onClick={endDialogue}>
            [WALK AWAY]
          </button>
        </div>

        <div className={styles.textArea} onClick={skipTyping}>
          <span className={styles.text}>{displayedText}</span>
          {isTyping && <span className={styles.cursor}>_</span>}
        </div>

        {!isTyping && !node.isTerminal && (
          <div className={styles.options}>
            {node.options.map((opt, i) => (
              <DialogueOption
                key={opt.nextNodeId}
                option={opt}
                index={i}
                onSelect={handleOptionSelect}
              />
            ))}
          </div>
        )}

        {node.isTerminal && !isTyping && (
          <div className={styles.terminal}>
            <span>[CONVERSATION ENDED]</span>
          </div>
        )}
      </div>
    </div>
  );
}
