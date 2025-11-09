import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const PostForm = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // for editing existing post

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  // Check if user is logged in
  const token = localStorage.getItem("token");
  if (!token) {
    navigate("/login"); // redirect to login if not authenticated
  }

  useEffect(() => {
    if (id) {
      // Fetch post data for editing
      axios.get(`http://localhost:5000/api/posts/${id}`)
        .then(res => {
          setTitle(res.data.title);
          setContent(res.data.content);
        })
        .catch(err => console.log(err));
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };

      if (id) {
        // Update post
        await axios.put(`http://localhost:5000/api/posts/${id}`, { title, content }, config);
      } else {
        // Create post
        await axios.post("http://localhost:5000/api/posts", { title, content }, config);
      }

      navigate("/"); // redirect to homepage after success
    } catch (err) {
      setError(err.response?.data?.message || "Error submitting post");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{id ? "Edit Post" : "Create Post"}</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div>
        <label>Title:</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div>
        <label>Content:</label>
        <textarea value={content} onChange={(e) => setContent(e.target.value)} required />
      </div>
      <button type="submit">{id ? "Update" : "Create"}</button>
    </form>
  );
};

export default PostForm;

