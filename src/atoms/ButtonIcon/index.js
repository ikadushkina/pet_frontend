import styles from "./ButtonIcon.module.scss";
import { ReactComponent as EditIcon } from "../../assets/icons/edit_icon.svg";
import { ReactComponent as AddIcon } from "../../assets/icons/plus_icon.svg";
import { ReactComponent as TrashIcon } from "../../assets/icons/delete_icon.svg";
import { ReactComponent as SettingsIcon } from "../../assets/icons/settings.svg";
import cs from "classnames";

export const ButtonIcon = ({ type, active, ...props }) => {
  const iconType = () => {
    switch (type) {
      case "add": return <AddIcon />;
      case "edit": return <EditIcon />;
      case "delete": return <TrashIcon />;
      case "settings": return <SettingsIcon />;
      default:
    }
  };

  return (
    <div className={cs(styles.icon_button, { [styles.active]: active })} {...props}>
      {iconType()}
    </div>
  );
};
