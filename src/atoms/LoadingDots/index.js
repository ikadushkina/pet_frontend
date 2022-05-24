import styles from "./LoadingDots.module.scss";

const LoadingDots = () => (
  <div className={styles.dots}>
    <div className={styles.dot} />
    <div className={styles.dot} />
    <div className={styles.dot} />
  </div>
);

export default LoadingDots;
