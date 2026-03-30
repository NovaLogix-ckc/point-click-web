import { useGameStore } from '../../store/gameStore';
import styles from './Character.module.css';

export function Character() {
  const position = useGameStore((s) => s.characterPosition);
  const isWalking = useGameStore((s) => s.isWalking);
  const facingDirection = useGameStore((s) => s.facingDirection);

  return (
    <div
      className={`${styles.character} ${isWalking ? styles.walking : ''}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px) scaleX(${facingDirection === 'left' ? -1 : 1})`,
      }}
    >
      {/* Head */}
      <div className={styles.head}>
        <div className={styles.visor} />
      </div>
      {/* Body */}
      <div className={styles.body}>
        <div className={styles.screen} />
      </div>
      {/* Legs */}
      <div className={styles.legs}>
        <div className={`${styles.leg} ${styles.leftLeg}`} />
        <div className={`${styles.leg} ${styles.rightLeg}`} />
      </div>
      {/* Label */}
      <div className={styles.label}>YOU</div>
    </div>
  );
}
