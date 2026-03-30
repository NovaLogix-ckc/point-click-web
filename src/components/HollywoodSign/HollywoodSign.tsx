import styles from './HollywoodSign.module.css';

const LETTERS = 'HALLUCINOVA'.split('');
const FLICKER_INDICES = [3, 7]; // 'L' and 'O' flicker

export function HollywoodSign() {
  return (
    <div className={styles.container}>
      <div className={styles.sign}>
        {LETTERS.map((letter, i) => (
          <span
            key={i}
            className={`${styles.letter} ${FLICKER_INDICES.includes(i) ? styles.flicker : ''}`}
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            {letter}
          </span>
        ))}
      </div>
      <div className={styles.tagline}>
        &ldquo;Why Be Accurate When You Can Be Interesting?&rdquo;
      </div>
      <div className={styles.hillside} />
    </div>
  );
}
