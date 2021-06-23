import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { commentsAdd, loadModal } from '../../redux/actions';
import styles from './modal.module.css';
import Comments from './Comments';
import ReactLoading from 'react-loading';

function Modal(props) {
  const modal = useSelector((state) => state.modal.items);
  const loading = useSelector((state) => state.modal.loading);
  const dispatch = useDispatch();
  const id = useParams().id;

  useEffect(() => {
    dispatch(loadModal(id));
  }, [dispatch, id]);

  const [name, setName] = useState('');
  const [text, setText] = useState('');

  const handelName = (e) => {
    setName(e.target.value);
  };
  const handelText = (e) => {
    setText(e.target.value);
  };

  const handleAddCom = (name,text,id) => {
    setText('');
    setName('');
    dispatch(commentsAdd(name,text,id));
  };

  return loading ? (
    <div className={styles.loadingMmodal}>
      <ReactLoading type="spin" color="#0044ff" height={50} width={50} />
    </div>
  ) : (
    <div className={styles.modalWindow}>
      <div className={styles.modalWindow_img}>
        <img src={modal.url} alt="" />
        <div className={styles.modalWindow_form}>
          <input
            type="text"
            placeholder="ведите имя"
            value={name}
            onChange={handelName}
          />
          <input
            type="text"
            placeholder="ведите комментарий"
            value={text}
            onChange={handelText}
          />
          <button onClick={() => handleAddCom(name, text, props.id)}>
            Добавить комментарий
          </button>
        </div>
      </div>
      <div className={styles.modalWindow_comments}>
        {modal.comments !== undefined ? (
          modal.comments.map((comment, id) => {
            return <Comments comment={comment} key={id} id={id} />;
          })
        ) : (
          <div>no com</div>
        )}
      </div>
      <div>
        <NavLink to="/" activeClassName={styles.selected}>
          ×
        </NavLink>
      </div>
    </div>
  );
}

export default Modal;
