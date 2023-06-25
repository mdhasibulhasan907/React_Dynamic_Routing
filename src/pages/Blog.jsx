
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useParams } from 'react-router-dom';


const Blog=()=>{
    const {title} = useParams();
    return (
     <div>
     <h1>  { title } page</h1>
    </div>
    )
}

export default Blog;
