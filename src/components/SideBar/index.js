import styles from "./SideBar.module.scss";
import { ButtonIcon } from "../../atoms/ButtonIcon";
import { Header } from "../Header";
import { ToolBar } from "../ToolBar";

const SideBar = ({ children }) => (
  <div className={styles.layout}>
    <Header />
    <div className={styles.content}>
      <div className={styles.sidebar}>
        <ToolBar />
        <div className={styles.footer}>
          <ButtonIcon type="settings" />
        </div>
      </div>
      {children}
    </div>
  </div>
);

export default SideBar;
