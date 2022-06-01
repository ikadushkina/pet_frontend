import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./UserContainer.module.scss";
import userState from "../../store/userState";
import { observer } from "mobx-react-lite";
import cs from "classnames";
import Avatar from "../../atoms/Avatar";

const UserLink = ({ isCanvas }) => {
  const user = userState.data;

  return (
    <NavLink to={"/profile"} className={cs({ [styles.canvasPage]: isCanvas })}>
      <div className={cs(styles.userContainer, { [styles.canvasPage]: isCanvas })}>
        <div className={styles.avatar}>
          <Avatar url={user?.avatar}/>
        </div>
        <div className={styles.userName}>
          <div>{user?.first_name} {user?.last_name}</div>
          <div className={styles.email}>{user?.email}</div>
        </div>
      </div>
    </NavLink>
  );
};

export default observer(UserLink);
