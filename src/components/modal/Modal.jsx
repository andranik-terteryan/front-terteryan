import React, { useRef } from 'react';
import styles from './modal.module.scss';
import { useOutsideClick } from '../../helpers/helpers';
import CloseIcon from '../../svg/CloseIcon';

const Modal = ({ title, text, tags, autor, img, img_2x, date, views, onClose }) => {
    const popupRef = useRef(null);

    useOutsideClick(popupRef, onClose);

    return (
        <div className={styles['modal-overlay']}>
            <div ref={popupRef} className={styles['modal-content']} style={{backgroundImage: `url(${img})`}}>
                <div className={styles['modal-content__inner']}>
                    <h3 className={styles['post__name']}>{title}</h3>
                    <p className={styles['post__tag']}>{tags}</p>
                    <p className={styles['post__text']}>{text}</p>
                    <div className={styles['widget__meta-infos']}>
                        <p className={`${styles['widget__author']} ${styles['meta-info']}`}>{autor}</p>
                        <p className={`${styles['widget__date']} ${styles['meta-info']}`}>{date}</p>
                        <p className={`${styles['widget__views']} ${styles['meta-info']}`}>{views} Views</p>
                    </div>
                </div>
                <button onClick={onClose} className={styles['modal-close-button']}>
                    <CloseIcon fill="#fff" />
                </button>
            </div>
        </div>
    );
};

export default Modal;
