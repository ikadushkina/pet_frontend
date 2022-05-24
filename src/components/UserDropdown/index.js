import React, { forwardRef } from "react";
import styles from "./UserDropdown.module.scss";
import { observer } from "mobx-react-lite";
import userState from "../../store/userState";
import { ReactComponent as Avatar } from "../../assets/icons/avatar.svg";
import LoadingDots from "../../atoms/LoadingDots";

const UserDropdown = forwardRef((props, ref) => {
  const user = userState.data;
  const loading = userState.loading;

  return (
    <div ref={ref} className={styles.userDropdown}>
      <div className={styles.userContainer}>
        <div className={styles.avatar}>
          <Avatar />
        </div>
        <div className={styles.userName}>
          <div>{user.name}</div>
          <div className={styles.email}>{user.email}</div>
        </div>
      </div>
      <div className={styles.logout} onClick={userState.logout}>
        { loading ? <LoadingDots /> : "Log Out"}
      </div>
    </div>
  );
});

export default observer(UserDropdown);
