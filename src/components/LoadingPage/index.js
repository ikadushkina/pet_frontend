import styles from "./LoadingPage.module.scss";
import LoadingDots from "../../atoms/LoadingDots";

const LoadingPage = () => (
  <div className={styles.root}>
    <LoadingDots />
  </div>
);

export default LoadingPage;
