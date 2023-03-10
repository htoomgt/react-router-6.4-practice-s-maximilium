import React from 'react';
import {useState, useEffect} from 'react';

import Posts  from '../components/Posts';

import { getPosts } from '../util/api';


const BlogPostsPage = () => {
  const [error, setError] = useState();
  const [posts, setPosts] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function loadPosts(){
      setIsLoading(true);

      try{
        const posts = await getPosts();
        console.log(posts.length);
        setPosts(posts);
      }catch(err){
        setError(err.message);
      }

      setIsLoading(false);
    }

    loadPosts();
  }, []);

  return (
   <>
    <h1> Our Blog Posts</h1>
    {isLoading && <p>Loading posts ...</p>}
    {error &&  <p>{error}</p>}
    {!error &&  posts && <Posts blogPosts={posts} />}
   </>
  )
}

export default BlogPostsPage