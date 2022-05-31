import styles from "./MainLayout.module.scss";
import { observer } from "mobx-react";
import { Header } from "../Header";
import Menu from "../Menu";
import userState from "../../store/userState";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MainLayout = ({ children, title }) => {
  const navigate = useNavigate();
  const localData = JSON.parse(localStorage.getItem("AUTH_DATA") || "{}");
  const user = userState.data;

  useEffect(() => {
    userState.loadData();
    if (user?.email) {
      userState.me(user?.email || localData?.user?.email);
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <div className={styles.mainLayout}>
      <Menu />
      <div className={styles.container}>
        <Header title={title}/>
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default observer(MainLayout);
