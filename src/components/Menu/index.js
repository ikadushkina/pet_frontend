import { observer } from "mobx-react-lite";
import styles from "./Menu.module.scss";
import UserLink from "../UserContainer";
import MenuItem from "../MenuItem";
import ImageIcon from "../../atoms/Icons/ImageIcon";
import ImageLibraryIcon from "../../atoms/Icons/ImageLibraryIcon";
import { Button } from "../../atoms/Button";
import userState from "../../store/userState";
import Logo from "../../atoms/Logo";

const Menu = () => {
  return (
    <div className={styles.menu}>
      <div>
        <div className={styles.logo}>
          <Logo />
          Paint Online
        </div>
        <UserLink />
        <MenuItem title="Canvas" path={"/canvas"} icon={<ImageIcon color="white" />} />
        <MenuItem title="Image Library (soon)" path={"/image-library"} icon={<ImageLibraryIcon color="white" />} />
      </div>
      <Button onClick={userState.logout}>Log out</Button>
    </div>
  );
};

export default observer(Menu);
