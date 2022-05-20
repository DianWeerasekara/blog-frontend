import React, {  useEffect, useState } from 'react';
import "./posts.css"
import { Link } from "react-router-dom";
const axios = require('axios').default;

export default function Posts() {

    const [blogs, setBlogs] = useState([]);

    async function getBlog() {
        try {
            const response = await axios.get('http://localhost:8000/blogs');
            console.log(response.data);
            setBlogs(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
    getBlog();
    },[])

    return (
        <>
        {blogs.map((blog) => (<Link className="link" to={'/blog/' + blog.id}>
            <div className="post">
                <div className="postinfo">
                    <div className="postCats">
                        <span className="postcat">{blog.author}</span>
                    </div>
                    <span className="postTitle">
                        {blog.description}
                    </span>
                    <hr />
                </div>
            </div>
        </Link>))}
        </>
        
        
    )
}