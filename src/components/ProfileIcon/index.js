import React, { useState } from "react";
import { ReactComponent as SunIcon } from "../../assets/icons/sun.svg";
import styles from "./ProfileIcon.module.scss";
import { Button } from "../../atoms/Button";

export const ProfileIcon = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={styles.profile_icon}>
      <div className={styles.avatar} onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <SunIcon/>
      </div>

      {
                isMenuOpen && (
                <div className={styles.profile_menu}>
                  <div className={styles.options}>
                    <span>menu is here</span>
                    <span>menu is here</span>
                    <span>menu is here</span>
                    <span>menu is here</span>

                  </div>
                  <div className={styles.footer}>
                    <Button>My Profile</Button>
                  </div>
                </div>
                )
            }
    </div>
  );
};
