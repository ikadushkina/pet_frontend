import React from "react";
import styles from "./CanvasPage.module.scss";
import Canvas from "../../atoms/Canvas";
import SideBar from "../../components/SideBar";

export default () => (
  <div className={styles.home_page}>
    <SideBar>
      <Canvas />
    </SideBar>
  </div>
);
