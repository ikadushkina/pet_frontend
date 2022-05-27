import styles from "./ProfileItem.module.scss";
import { useEffect, useState } from "react";
import { Button } from "../../atoms/Button";
import userState from "../../store/userState";

const ProfileItem = ({ fieldName, title, value }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedValue, setEditedValue] = useState(value);

  useEffect(() => {
    setEditedValue(value);
  }, [value]);

  const handleOk = () => {
    const data = {
      [fieldName]: editedValue
    };
    userState.updateUser(data);
    setIsEditMode(false);
  };

  return (
    <div className={styles.profileItem}>
      <span>{title}</span>
      {
          isEditMode ?
            <div className={styles.editContainer}>
              <input value={editedValue} onChange={e => setEditedValue(e.target.value)} />
              <Button onClick={handleOk}>Ok</Button>
            </div>
            :
            <div className={styles.value}>
              <span>{value}</span>
              <div className={styles.edit} onClick={() => setIsEditMode(true)}>
                Edit
              </div>
            </div>
        }
    </div>
  );
};

export default ProfileItem;
