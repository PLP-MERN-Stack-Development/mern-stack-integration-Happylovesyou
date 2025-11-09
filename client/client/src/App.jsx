import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

// Import your components
import PostList from "./components/postList";
import Post from "./components/Post";
import PostForm from "./components/postForm";
import Navigation from "./components/Navigation"; 
import RegisterForm from "./components/registerForm";
import LoginForm from "./components/loginForm";

function App() {
  // Backend message state
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/") // backend URL
      .then((res) => setMessage(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Router>
      <div>
        {/* Display backend message */}
        <h1>MERN Blog Frontend</h1>
        <p>{message}</p>

        {/* Navigation bar */}
        <Navigation />

        {/* Routing for blog pages */}
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/create" element={<PostForm />} />
          <Route path="/edit/:id" element={<PostForm />} />
          {/* Auth routes */}
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;






