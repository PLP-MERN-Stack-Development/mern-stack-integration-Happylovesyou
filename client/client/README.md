# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


📝 MERN Blog Application
📌 Overview

The MERN Blog Application is a full-stack web project built using the MERN stack (MongoDB, Express.js, React.js, and Node.js).
It allows users to register, log in, and create, read, update, and delete blog posts.
This project was developed as part of the Power Learn Project (PLP) MERN Full-Stack Assignment.

🚀 Features

  .🔐 User authentication (Register & Login)
  .✏️ Create, edit, delete, and view blog posts
  .🗂️ Categorize posts
  .🌍 RESTful API built with Express & MongoDB
  .⚛️ Frontend powered by React (Vite)
  .🔄 Communication between frontend and backend via Axios

🛠️ Technologies Used
Backend:
 .Node.js
 .Express.js
 .MongoDB & Mongoose
 .dotenv
 .CORS
 .JSON Web Token (JWT)

Frontend:
 .React (Vite)
 .React Router DOM
 .Axios
 .CSS

⚙️ Project Setup
1️⃣ Clone the repository
git clone https://github.com/PLP-MERN-Stack-Development/mern-stack-integration-Happylovesyou.git

2️⃣ Setup the backend
   cd server
   npm install
Create a .env file inside the server folder:
MONGO_URI=mongodb+srv://Happylovesyou:Happylovesyou@cluster0.tmzx1uo.mongodb.net/blogdb?retryWrites=true&w=majority
JWT_SECRET=your-secret-key
PORT=5000
Then run:
    npm run dev

3️⃣ Setup the frontend
   cd ../client
   npm install
   npm run dev
✅ Open the frontend in your browser:
    http://localhost:5173

🌐 API Endpoints
🔑 Authentication
Method	Endpoint	Description
POST	/api/auth/register	Register a 
new user

POST	/api/auth/login	Login existing user

📝 Posts
Method	Endpoint	Description
GET	/api/posts	Get all blog posts
GET	/api/posts/:id	Get single post
POST	/api/posts	Create new post
PUT	/api/posts/:id	Update post
DELETE	/api/posts/:id	Delete post

🗂️ Categories
Method	Endpoint	Description
GET	/api/categories	Get all categories
POST	/api/categories	Create a new category

🧩 Folder Structure
mern-blog/
│
├── client/               # React Frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navigation.jsx
│   │   │   ├── PostList.jsx
│   │   │   ├── Post.jsx
│   │   │   ├── PostForm.jsx
│   │   │   ├── LoginForm.jsx
│   │   │   └── RegisterForm.jsx
│   │   └── App.jsx
│   └── package.json
│
├── server/               # Node Backend
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
└── README.md

🖼️ Screenshots
1️⃣ Home Page

2️⃣ Register Page

3️⃣ Login Page

4️⃣ Post List

👩‍💻 Author

Rose Maina
Power Learn Project — MERN Full Stack Development
🌐 [Egerton University | Student]
    

