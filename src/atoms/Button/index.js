import styles from "./Button.module.scss";
import cs from "classnames";

export const Button = ({ children, className, ...props }) => (
  <button className={cs(styles.button, className)} {...props}>{children}</button>
);
