import { NavLink } from "react-router-dom";
import styles from "./MenuItem.module.scss";

const MenuItem = ({ path, title, icon }) => (
  <NavLink to={path} className={styles.navlink}>
    {icon}
    <span>{title}</span>
  </NavLink>
);

export default MenuItem;
