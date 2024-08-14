import styles from './splash.module.scss';

// Loader from https://cssloaders.github.io/

export function Splash() {
  return (
    <div className={styles.splash}>
      <div className={styles.splash__loader}></div>
    </div>
  );
}
