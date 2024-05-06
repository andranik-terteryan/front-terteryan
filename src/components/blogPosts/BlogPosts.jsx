import React from 'react'
import styles from './blogPosts.module.scss'
import BlogWidget from '../blogWidget/BlogWidget';
import { v4 as uuidv4 } from 'uuid';

const BlogPosts = ({posts}) => {
  return (
    <section className={styles['section-blog']} >
      <div className="container">
        <div className={styles['section-blog__main-panel']}>
          {
            posts.map(post => {
              return(
                <div className={styles['widget-overlay']} key={uuidv4()} >
                  <BlogWidget 
                  title = {post.title}
                  text = {post.text}
                  tags = {post.tags}
                  autor = {post.autor}
                  img = {post.img}
                  img_2x = {post.img_2x}
                  date = {post.date}
                  views = {post.views}
                  />
                </div>
              )
            })
          }
        </div>

      </div>
    </section>
  )
}

export default BlogPosts