import React, { forwardRef } from "react";
import styles from "./UserDropdown.module.scss";
import { observer } from "mobx-react-lite";
import userState from "../../store/userState";
import LoadingDots from "../../atoms/LoadingDots";
import UserLink from "../UserContainer";

const UserDropdown = forwardRef((props, ref) => {
  const loading = userState.loading;

  return (
    <div ref={ref} className={styles.userDropdown}>
      <UserLink isCanvas />
      <div className={styles.logout} onClick={userState.logout}>
        { loading ? <LoadingDots /> : "Log Out"}
      </div>
    </div>
  );
});

export default observer(UserDropdown);
