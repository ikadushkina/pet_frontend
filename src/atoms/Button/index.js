import styles from "./Button.module.scss";

export const Button = ({ children, ...props }) => (
  <button className={styles.button} {...props}>{children}</button>
);
