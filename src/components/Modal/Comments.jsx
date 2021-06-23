import React from 'react';
import { useSelector } from 'react-redux';
import ReactLoading from 'react-loading';
import styles from './modal.module.css';

function Comments(props) {
  const loadingCom = useSelector((state) => state.modal.loadingCom);
  return loadingCom ? (
    <div className={styles.loadingMmodalCom}>
      <ReactLoading type="spin" color="#0044ff" height={15} width={15} />
    </div>
  ) : (
    <div className={styles.comments}>
      <div className={styles.commentsName}>
        <span>Имя:</span>
        <br />
        {props.comment.name}
      </div>
      <div className={styles.commentsText}>
        <span>Комментарий:</span>
        <br />
        {props.comment.text}
      </div>
    </div>
  );
}

export default Comments;
