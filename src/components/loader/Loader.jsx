import React from 'react'
import styles from './loader.module.scss'
const Loader = () => {
  return (
    <div className={styles['loader-overlay']}>
     <div className={styles['loader']}></div>
    </div>
  )
}

export default Loader