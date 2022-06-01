import styles from "./Rating.module.scss";

const RatingLabel = ({ rate }) => (
  <div className={styles.rateFrame}>{rate} rank</div>
);

export default RatingLabel;
