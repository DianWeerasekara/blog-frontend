import "./updatepage.css"
import React, {  useEffect, useState } from 'react';
import {
    useParams,
    useNavigate
  } from "react-router-dom";
  const axios = require('axios').default;

export default function Updatepage() {
    let { id } = useParams();
    const navigator = useNavigate();
    const [blog, setBlog] = useState([]);

    async function getBlog() {
        try {
            const response = await axios.get('http://localhost:8000/blogs/'+id);
            console.log(response.data);
            setBlog(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    async function updateBlog() {
        try {
            const response = await axios.put('http://localhost:8000/blogs/'+id, blog);
            console.log(response.data.message);
            setBlog(response.data);
            alert(response.data.message);
            navigator("/", { replace: true });
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
    getBlog();
    },[])

    return (
        <div className="update">
            <form className="updateForm">
                <div className="updateFormGroup">
                    <input className="updateInput" type="text" id="nameInput" placeholder="Your name" value={blog.author} onChange={(e)=> {
                        console.log(e.target.value)
                        setBlog({
                            ...blog,
                            author: e.target.value
                        })
                    }}/>
                </div>
                <div className="updateFormGroup">
                    <textarea className="updateInput writeText" placeholder="Write your blog...." type="text" id="description" value={blog.description} onChange={(e)=> {
                        console.log(e.target.value)
                        setBlog({
                            ...blog,
                            description: e.target.value
                        })
                    }}></textarea>
                </div>
                <button className="writeSubmit" type="button" onClick={updateBlog}>Update</button>
            </form>
        </div>
    )
}