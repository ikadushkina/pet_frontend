import { observer } from "mobx-react";
import MainLayout from "../../components/MainLayout";
import styles from "./Profile.module.scss";
import userState from "../../store/userState";
import RatingLabel from "../../atoms/RatingLabel";
import ProfileItem from "../../components/ProfileItem";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import LoadingDots from "../../atoms/LoadingDots";
import { useEffect, useState } from "react";
import LoadingPage from "../../components/LoadingPage";
import UploadImageModal from "../../components/Modals/UploadImageModal";
import Avatar from "../../atoms/Avatar";
dayjs.extend(utc);

const Profile = () => {
  const { data: user, loading, updating } = userState;
  const [isLoading, setIsLoading] = useState(true);
  const [isOpenUploading, setIsOpenUploading] = useState(false);

  useEffect(() => {
    if (user?.email && !loading) setIsLoading(false);
  }, [user, loading]);

  const showUserTime = () => {
    const mins = dayjs().diff(dayjs(user?.registered_at), "m");
    const hours = dayjs().diff(dayjs(user?.registered_at), "h");
    const days = dayjs().diff(dayjs(user?.registered_at), "d");

    if (mins < 60) return `${mins} minutes`;
    if (hours < 24) return `${hours} hours`;
    return `${days} days`;
  };

  return (
    <MainLayout title="Profile">
      {
        isLoading ?
          <div className={styles.loading}>
            <LoadingDots/>
          </div>
          :
          <div className={styles.profileContainer}>
            <div className={styles.userContainer}>
              <div className={styles.avatar} onClick={() => setIsOpenUploading(true)}>
                <Avatar url={user?.avatar} isProfile />
              </div>
              <div className={styles.nameContainer}>
                <div>
                  <span className={styles.name}>
                    {user?.first_name} {user?.last_name}
                    <RatingLabel rate={user?.rating}/>
                  </span>
                  <span className={styles.registered}>You was registered {showUserTime()} ago</span>
                </div>
              </div>
            </div>
            <div className={styles.details}>
              <ProfileItem fieldName="first_name" title="First name" value={user?.first_name}/>
              <ProfileItem fieldName="last_name" title="Last name" value={user?.last_name}/>
              <ProfileItem fieldName="phone_number" title="Phone Number" value={user?.phone_number}/>
              <ProfileItem fieldName="email" title="Email" value={user?.email}/>
            </div>
          </div>
      }
      { updating && <LoadingPage /> }
      <UploadImageModal open={isOpenUploading} onClose={() => setIsOpenUploading(false)} />
    </MainLayout>
  );
};

export default observer(Profile);
