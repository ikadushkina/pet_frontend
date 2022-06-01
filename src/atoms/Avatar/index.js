import { ReactComponent as NoAvatar } from "../../assets/icons/avatar.svg";
import styles from "./Avatar.module.scss";
import cs from "classnames";
import { ReactComponent as AddPhoto } from "../../assets/icons/add_photo.svg";

const Avatar = ({ url, isProfile }) => {
  return (
    url ?
      <div className={cs(styles.frame, { [styles.big]: isProfile })}>
        <img alt="avatar" src={url} />
        {
          isProfile &&
          <div>
            <AddPhoto />
          </div>
        }
      </div>
      :
      <NoAvatar />
  );
};

export default Avatar;
