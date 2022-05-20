import React, {  useEffect, useState } from 'react';
import SinglePost from "../../components/singlePost/SinglePost";
import "./single.css";

import {
    useParams
  } from "react-router-dom";
  const axios = require('axios').default;


export default function Single() {
    let { id } = useParams();

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

    useEffect(() => {
    getBlog();
    },[])

    return(
        <div className="single">
            <SinglePost blog={blog} />
        </div>
    )
}