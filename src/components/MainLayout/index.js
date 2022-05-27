import styles from "./MainLayout.module.scss";
import { observer } from "mobx-react";
import { Header } from "../Header";
import Menu from "../Menu";
import { useNavigate } from "react-router-dom";
import userState from "../../store/userState";
import { useEffect } from "react";

const MainLayout = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    userState.loadData().then(() => {
      if (!userState.data && !userState.loading) navigate("/login");
    });
  }, []);

  return (
    <div className={styles.mainLayout}>
      <Menu />
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default observer(MainLayout);
