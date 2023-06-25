// eslint-disable-next-line no-unused-vars
import React,{useState} from 'react'

import { blogsData } from '../data'
import { Link } from 'react-router-dom';

const Blogs = () => {
  // eslint-disable-next-line no-unused-vars
  const [blogs,setBlogs]=useState(blogsData);
  return (
    <div>
        <h3>Blogs</h3>
        <section>
          {
            blogs.map((blog) => {
              const {id,title,body}=blog;
              return  <article key={id}>
                <h3>{title}</h3>
                <p>{body}</p>
               {/* <Link to='/title'>leran more</Link> */}
              </article>
             })
          }
        </section>
     
    </div>
  )
}

export default Blogs