import React, { useRef, useState } from "react";
import styles from "./Header.module.scss";
import { ReactComponent as Avatar } from "../../assets/icons/avatar.svg";
import userState from "../../store/userState";
import { observer } from "mobx-react-lite";
import Logo from "../../atoms/Logo";
import UserDropdown from "../UserDropdown";
import { useClickOutside } from "../../helper/useClickOutside";

export const Header = observer(({ isCanvas, title }) => {
  const user = userState.data;
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const avatarRef = useRef(null);

  useClickOutside(dropdownRef, avatarRef, () => setIsOpen(false));

  return (
    <header className={styles.header}>
      {
        isCanvas ?
          <>
            <div className={styles.naming}>
              <Logo />
              <span>PaintOnline</span>
            </div>
            <div className={styles.userSide}>
              <span>{user?.first_name || "Unidentified Artist"}</span>
              <div className={styles.avatar} onClick={() => setIsOpen(!isOpen)} ref={avatarRef}>
                <Avatar />
              </div>
              {
                isOpen && <UserDropdown ref={dropdownRef} />
              }
            </div>
          </>
          :
          <span className={styles.title}>{title}</span>
      }
    </header>
  );
});
