import type { ReactNode } from 'react';
import styles from './HUD.module.css';

interface HUDProps {
  children: ReactNode;
}

export function HUD({ children }: HUDProps) {
  return (
    <div className={styles.hud}>
      <div className={styles.topBar}>
        <span className={styles.label}>HALLUCINOVA OS v4.2</span>
        <span className={styles.label}>SECTOR 7-G</span>
        <span className={styles.label}>STATUS: HALLUCINATING</span>
      </div>
      <div className={styles.content}>
        {children}
      </div>
      <div className={styles.bottomBar}>
        <span className={styles.label}>CLICK TO MOVE</span>
        <span className={styles.label}>APPROACH NPCs TO TALK</span>
        <span className={styles.label}>SYS OK</span>
      </div>
      <div className={styles.cornerTL} />
      <div className={styles.cornerTR} />
      <div className={styles.cornerBL} />
      <div className={styles.cornerBR} />
    </div>
  );
}
