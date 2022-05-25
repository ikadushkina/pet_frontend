import styles from "./SideBar.module.scss";
import { Header } from "../Header";
import { ToolBar } from "../ToolBar";
import { Button } from "../../atoms/Button";
import { useNavigate } from "react-router-dom";

const SideBar = ({ children }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.layout}>
      <Header isCanvas />
      <div className={styles.content}>
        <div className={styles.sidebar}>
          <ToolBar />
          <Button onClick={() => navigate("/profile", { replace: true })}>Home</Button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default SideBar;
