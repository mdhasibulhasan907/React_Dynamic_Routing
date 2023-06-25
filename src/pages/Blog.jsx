
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { blogsData} from '../data';
import { useParams } from 'react-router-dom';


const Blog=()=>{
    const {title} = useParams();
    const [bodyData,setBodyData]=useState('');

    useEffect(
      ()=>{
        // eslint-disable-next-line no-unused-vars
        const blogData=blogsData.filter(
          (blog)=>blog.title=== title
        );
        setBodyData(blogsData[0].body);
      }
       
      // eslint-disable-next-line react-hooks/exhaustive-deps
      ,[]);
    return (
     <div>
     <h1>  { title } page</h1>
     <p>{bodyData.slice(0,500)}</p>
     <p>{bodyData.slice(501,1000)}</p>
    </div>
    )
}

export default Blog;
