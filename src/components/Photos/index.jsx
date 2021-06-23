import React from "react";
import { useSelector } from "react-redux";
import Photo from "./Photo";
import styles from "./photos.module.css";
import ReactLoading from 'react-loading'

function Photos(props) {
  const photos = useSelector((state) => state.photo.items);
  const loading = useSelector((state) => state.photo.loading);

  return (
    <div className={styles.mainPhotos}>
      {loading ? (
        <div className={styles.loadingMmodal}>
          <ReactLoading type='spin' color='#0044ff' height={50} width={50}/>
        </div>
      ) : (
        photos.map((photo) => {
          return <Photo photo={photo} key={photo.id} />;
        })
      )}
    </div>
  );
}

export default Photos;
