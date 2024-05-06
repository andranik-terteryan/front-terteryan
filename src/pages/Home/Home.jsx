import React from 'react'
import MainLayout from '../../components/mainLayout/MainLayout'
import BlogPosts from '../../components/blogPosts/BlogPosts'
import useHome from './useHome'
import Loader from '../../components/loader/Loader'

const Home = () => {
  const {posts,setPosts,setSearchResult,searchResult,loading} = useHome()
  return (
    <MainLayout setSearchResult={setSearchResult} posts={posts} setPosts={setPosts} >
      {
        !loading ? <Loader /> : <BlogPosts posts={searchResult} />
      }
         
    </MainLayout>
  )
}

export default Home