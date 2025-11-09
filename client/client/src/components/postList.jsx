import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const token = localStorage.getItem("token"); // check if logged in

  useEffect(() => {
    axios.get("http://localhost:5000/api/posts")
      .then(res => setPosts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>All Posts</h2>
      {token && <p>Welcome, you are logged in!</p>}
      <ul>
        {posts.map(post => (
          <li key={post._id}>
            <Link to={`/post/${post._id}`}>{post.title}</Link>
            {token && <Link to={`/edit/${post._id}`} style={{ marginLeft: "10px" }}>Edit</Link>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;

