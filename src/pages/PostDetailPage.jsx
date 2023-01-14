import React from 'react';
import {useState, useEffect} from 'react';

import { useParams } from 'react-router-dom';

import BlogPost from '../components/BlogPost';
import {getPost}  from '../util/api';






const PostDetailPage = () => {
  const [error, setError] = useState(false);
  const [post, setPost] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const params =  useParams();
  const {id} =  params;

  useEffect(() => {
    async function loadPost(){
      setIsLoading(true);

      try{
        const post = await getPost(id);

        setPost(post);
      }catch(err){
        setError(err.message);
      }

      setIsLoading(false);
    }

    loadPost();

  }, [id])




  return (
    <>
      { isLoading && <p>Loading post ...</p> }
      { error &&  <p>{error.message}</p> }
      { !error &&  <BlogPost title={post.title} text={post.body} />}
      
    </>
  )
}

export default PostDetailPage