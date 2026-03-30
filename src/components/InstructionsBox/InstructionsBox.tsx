import styles from './InstructionsBox.module.css';

export function InstructionsBox() {
  return (
    <div className={styles.box}>
      <div className={styles.header}>
        <span className={styles.title}>// WELCOME, TRAVELER</span>
      </div>
      <div className={styles.slogan}>
        &ldquo;The world&rsquo;s first website you have to <em>walk</em> through.&rdquo;
      </div>
      <div className={styles.divider} />
      <ul className={styles.instructions}>
        <li><span className={styles.key}>CLICK</span> anywhere to move your character</li>
        <li><span className={styles.key}>APPROACH</span> a glowing NPC to see the TALK prompt</li>
        <li><span className={styles.key}>CLICK</span> the NPC to start a conversation</li>
        <li><span className={styles.key}>PICK</span> one of 3 dialogue options (or press A/B/C)</li>
        <li><span className={styles.key}>ESC</span> or [WALK AWAY] to leave a conversation</li>
      </ul>
      <div className={styles.footer}>
        This is a point-and-click adventure disguised as a website. Enjoy the hallucinations.
      </div>
    </div>
  );
}
