import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        username,
        email,
        password,
      });

      setMessage(res.data.message || "Registration successful!");
      alert("✅ Registration successful! You can now log in.");
      navigate("/login"); // Redirect to login page
    } catch (error) {
      console.error("Registration error:", error);
      setMessage(error.response?.data?.message || "Registration failed.");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "30px auto", textAlign: "center" }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label><br />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="Enter your username"
          />
        </div>
        <div>
          <label>Email:</label><br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label>Password:</label><br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter a password"
          />
        </div>
        <button type="submit" style={{ marginTop: "10px" }}>
          Register
        </button>
      </form>

      {message && <p style={{ marginTop: "10px", color: "blue" }}>{message}</p>}
    </div>
  );
}

export default RegisterForm;

