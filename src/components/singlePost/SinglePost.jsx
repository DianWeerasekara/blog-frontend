import "./singlepost.css";
import { Link, useNavigate } from "react-router-dom";
const axios = require('axios').default;

export default function SinglePost({ blog }) {
    const navigator = useNavigate();
    async function deleteBlog() {
        try {
            const response = await axios.delete('http://localhost:8000/blogs/'+blog.id);
            console.log(response.data);
            alert(response.data.message);
            navigator("/", { replace: true });
        } catch (error) {
            console.error(error);
            alert(error);
        }
    }

    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
               <h1 className="singlePostTitle"> 
                   { blog.author}                    
               </h1>
               <p className="singlePostdescription">
                   {blog.description}
                   <div className="singlePostEdit">
                        <Link to={"/update/"+blog.id}>
                            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                        </Link>
                        <i onClick={deleteBlog} className="singlePostIcon fa-solid fa-trash"></i>
                    </div>
               </p>
            </div>
        </div>
    )
}