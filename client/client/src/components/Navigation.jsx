import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>MERN Blog</h2>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/create" style={styles.link}>Create Post</Link>
        <Link to="/register" style={styles.link}>Register</Link>
        <Link to="/login" style={styles.link}>Login</Link>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#333",
    color: "#fff",
  },
  logo: {
    margin: 0,
  },
  links: {
    display: "flex",
    gap: "15px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
  },
};

export default Navigation;

