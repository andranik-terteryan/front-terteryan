import { useState, useEffect } from 'react';

const useHome = () => {
  const [posts, setPosts] = useState([]);
  const [searchResult,setSearchResult] = useState([])
  const [loading,setLoading] = useState(false)
  useEffect(() => {
    fetch('https://cloud.codesupply.co/endpoint/react/data.json')
      .then(response => response.json())
      .then(data => {
          setPosts(data);
      })
      .finally(setLoading(true))
      .catch(error => console.error('Error fetching data:', error));
  }, []);


  return {
    posts,
    setPosts,
    setSearchResult,
    searchResult,
    loading
  };
};

export default useHome;
