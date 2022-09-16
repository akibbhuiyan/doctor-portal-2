import React from 'react';
import { blogData } from '../../../SeviceData';
import BlogPost from '../BlogPost/BlogPost';
import './Blog.css'
const Blog = () => {
    return (
        <section className='blogs my-5'>
            <div className="container">
                <div className="section-header text-center">
                    <h5 className='text-primary text-uppercase'>our blog</h5>
                    <h1>From our Blog Newa</h1>
                </div>
                <div className="row mt-5">
                    {
                        blogData.map(blog => <BlogPost key={blog.title} blog={blog} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Blog;