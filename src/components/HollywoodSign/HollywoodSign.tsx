import styles from './HollywoodSign.module.css';

const LETTERS = 'HALLUCINOVA'.split('');
const FLICKER_INDICES = [3, 7, 9]; // 'L', 'O', 'A' flicker

export function HollywoodSign() {
  return (
    <div className={styles.container}>
      {/* Animated background effects */}
      <div className={styles.glowOrb} />
      <div className={styles.glowOrbSecond} />
      <div className={styles.electricArcs}>
        <div className={styles.arc} />
        <div className={styles.arc} />
        <div className={styles.arc} />
      </div>
      <div className={styles.scanBeam} />

      {/* The sign */}
      <div className={styles.sign}>
        {LETTERS.map((letter, i) => (
          <span
            key={i}
            className={`${styles.letter} ${FLICKER_INDICES.includes(i) ? styles.flicker : ''}`}
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            {letter}
          </span>
        ))}
      </div>

      {/* Glitch duplicate */}
      <div className={styles.signGlitch} aria-hidden="true">
        {LETTERS.map((letter, i) => (
          <span key={i} className={styles.glitchLetter}>
            {letter}
          </span>
        ))}
      </div>

      <div className={styles.tagline}>
        &ldquo;Why Be Accurate When You Can Be Interesting?&rdquo;
      </div>

      {/* Dripping effect beneath */}
      <div className={styles.drips}>
        <div className={styles.drip} style={{ left: '20%', animationDelay: '0s' }} />
        <div className={styles.drip} style={{ left: '45%', animationDelay: '1.5s' }} />
        <div className={styles.drip} style={{ left: '72%', animationDelay: '3s' }} />
      </div>
    </div>
  );
}
