import React from "react";
import styles from "./Logo.module.scss";
import { ReactComponent as MonaLisaSvg } from "../../assets/icons/mona-liza.svg";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <MonaLisaSvg />
    </div>
  );
};

export default Logo;
