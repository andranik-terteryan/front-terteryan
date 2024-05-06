import React from 'react'
import styles from './blogWidget.module.scss'
import Modal from '../modal/Modal'
import { useBlogWidget } from './useBlogWidget'

const BlogWidget = ({title,text,tags,autor,img,img_2x,date,views}) => {
const {isOpen,openModal,onClose} = useBlogWidget()
  return (
    <>
    <div onClick={() => openModal()} className={styles['widget']} >
        <div className={styles['widget__image-overlay']} >
            <img className={styles['widget__image']}
            src={img} srcSet={`${img} 1x, ${img_2x} 2x`}
            alt="Post Image" />
        </div>
        <p className={styles['widget__tag']} >
        {tags}
        </p>
        <h3 className={styles['widget__name']} >
           {title}
        </h3>
        <div className={styles['widget__meta-infos']} >
            <p className={`${styles['widget__author']} ${styles['meta-info']}`} >
                {autor}
            </p>
            <p className={`${styles['widget__date']} ${styles['meta-info']}`} >
               {date}
            </p>
            <p className={`${styles['widget__views']} ${styles['meta-info']}`} >
                {views} Views
            </p>
        </div>
        <p className={styles['widget__text']} >
            {text}
        </p>
    </div>
    {
        isOpen ? 
        <Modal 
        title = {title}
        text = {text}
        tags = {tags}
        autor = {autor}
        img = {img}
        img_2x = {img_2x}
        date = {date}
        views = {views}
        onClose={onClose}
        /> :
         ' '
    }
    </>

  )
}

export default BlogWidget