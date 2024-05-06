import React from 'react'
import styles from './mainLayout.module.scss'
import Header from '../header/Header'
import Footer from '../footer/Footer'

const MainLayout = ({children,posts,setPosts,setSearchResult}) => {
  return (
    <div className={styles['page']} >
        <Header posts={posts} setPosts={setPosts} setSearchResult={setSearchResult} />
        <main className={styles['wrapper']} >
            {children}
        </main>
        <Footer />
    </div>
  )
}

export default MainLayout