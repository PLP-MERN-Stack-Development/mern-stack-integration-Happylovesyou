import axios from "axios";

// Base URL for the backend API
const API_URL = "http://localhost:5000/api";

// ----------------------- POSTS ----------------------- //

// Fetch all posts
export const fetchPosts = () => {
  return axios.get(`${API_URL}/posts`);
};

// Fetch a single post by ID
export const fetchPost = (id) => {
  return axios.get(`${API_URL}/posts/${id}`);
};

// Create a new post
export const createPost = (postData) => {
  return axios.post(`${API_URL}/posts`, postData);
};

// Update an existing post
export const updatePost = (id, postData) => {
  return axios.put(`${API_URL}/posts/${id}`, postData);
};

// Delete a post
export const deletePost = (id) => {
  return axios.delete(`${API_URL}/posts/${id}`);
};

// --------------------- CATEGORIES ------------------- //

// Fetch all categories
export const fetchCategories = () => {
  return axios.get(`${API_URL}/categories`);
};

// Create a new category
export const createCategory = (categoryData) => {
  return axios.post(`${API_URL}/categories`, categoryData);
};

