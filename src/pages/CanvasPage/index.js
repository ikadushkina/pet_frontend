import React, { useEffect } from "react";
import styles from "./CanvasPage.module.scss";
import Canvas from "../../atoms/Canvas";
import SideBar from "../../components/SideBar";
import { useNavigate } from "react-router-dom";
import userState from "../../store/userState";
import { observer } from "mobx-react";

const CanvasPage = () => {
  const navigate = useNavigate();
  const user = userState.data;

  useEffect(() => {
    if (!user) navigate("/sign-up", { replace: true });
  }, [user]);

  return (
    <div className={styles.home_page}>
      <SideBar>
        <Canvas />
      </SideBar>
    </div>
  );
};

export default observer(CanvasPage);
