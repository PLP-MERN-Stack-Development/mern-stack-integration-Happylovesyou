import React, { useState, useEffect } from "react";
import { fetchPost } from "../services/api";
import { useParams, Link } from "react-router-dom";

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const loadPost = async () => {
      try {
        const res = await fetchPost(id);
        setPost(res.data);
      } catch (err) {
        console.error("Error fetching post:", err);
      }
    };
    loadPost();
  }, [id]);

  if (!post) return <p>Loading post...</p>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>Category: {post.category?.name || "Uncategorized"}</p>
      <Link to="/">Back to Posts</Link>
    </div>
  );
};

export default Post;