import styles from "./AuthLayout.module.scss";
import { observer } from "mobx-react";
import { useEffect } from "react";
import userState from "../../store/userState";
import { useNavigate } from "react-router-dom";
import Logo from "../../atoms/Logo";

const AuthLayout = ({ children }) => {
  const navigate = useNavigate();
  userState.loadData();

  useEffect(() => {
    if (userState.data) navigate("/canvas");
  }, [userState.data]);

  return (
    <div className={styles.root}>
      <div className={styles.form}>
        <Logo />
        {children}
      </div>
    </div>
  );
};

export default observer(AuthLayout);
