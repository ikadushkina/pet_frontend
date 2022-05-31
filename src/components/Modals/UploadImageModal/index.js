import ModalContainer from "../index";
import { useDropzone } from "react-dropzone";
import styles from "./UploadImageModal.module.scss";
import { useState } from "react";
import { Button } from "../../../atoms/Button";
import cs from "classnames";

const UploadImageModalContent = () => {
  const [image, setImage] = useState();
  const onDrop = acceptedFiles => {
    setImage(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className={styles.container}>
      <div {...getRootProps()} className={cs(styles.dropzoneContainer, { [styles.uploaded]: image })}>
        <input {...getInputProps()} />
        {
          isDragActive ?
            <p>Drop the files here ...</p> :
            <p>Drag-n-drop some files here, or click to select files</p>
        }
        {
          image &&
          <>
            <img src={URL.createObjectURL(image)} alt="avatar" />
            <div className={styles.reupload}>
              <Button>Upload new</Button>
            </div>
          </>
        }
      </div>
      <Button disabled={!image}>Upload</Button>
    </div>
  );
};

const UploadImageModal = props => {
  return (
    <ModalContainer {...props} title="Upload Image">
      <UploadImageModalContent {...props} />
    </ModalContainer>
  );
};

export default UploadImageModal;
