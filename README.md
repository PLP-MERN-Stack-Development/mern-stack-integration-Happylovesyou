📘 MERN Blog Integration Project
Week 7 – Deployment & CI/CD Assignment

-This project is a MERN stack blog application built as part of the Power Learn Project curriculum.
-The goal of Week 7 is to integrate deployment, CI/CD, and monitoring, while preparing the project for production.

🚀 Live Demo Links
Frontend (Render)

👉https://mern-stack-integration-happylovesyou-1.onrender.com

Backend (Render)

👉 https://mern-stack-backend2-p7fc.onrender.com

📌 Project Overview

The MERN Blog App allows users to:
  .Create, read, update, and delete blog posts (CRUD)
  .Interact with a clean UI built in React
  .Store and retrieve data from a cloud MongoDB database
  .Authenticate users (if enabled in your version)

This version is fully integrated with CI/CD pipelines (GitHub Actions) and deployed on modern platforms.

🛠️ Tech Stack
Frontend
 .React
 .Axios
 .Vercel Deployment
Backend
 .Node.js
 .Express.js
 .MongoDB Atlas
 .Render Deployment
CI/CD
 .GitHub Actions
 .Automated tests (optional)
 .Automatic deployment on push to main
Monitoring
 .Render logs
 .GitHub Actions workflow logs

 ⚙️ How to Run the Project Locally
1️⃣ Clone the Repository
git clone https://github.com/Happylovesyou/mern-stack-integration-happylovesyou.git
cd mern-stack-integration-happylovesyou

2️⃣ Backend Setup
cd backend
npm install

Create a .env file:
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
PORT=5000

Run backend:
Runs on:
👉 http://localhost:5000

3️⃣ Frontend Setup
cd frontend
npm install
npm start

Runs on:
👉 http://localhost:3000

🔄 CI/CD Setup (GitHub Actions)
 -This project includes four GitHub Actions workflows:

✔ Backend CI (backend-ci.yml)
 .Installs backend dependencies
 .Runs tests
 .Ensures backend builds properly

✔ Frontend CI (frontend-ci.yml)
 .Installs React dependencies
 .Builds the application
 .Ensures frontend compiles successfully

✔ Backend CD (backend-cd.yml)
 .Triggers Render deployment via:
  RENDER_DEPLOY_HOOK

✔ Frontend CD (frontend-cd.yml)
 .Deploys React app to Vercel using:
 VERCEL_TOKEN  
 VERCEL_PROJECT_ID  
 VERCEL_ORG_ID

📸 CI/CD Workflow Screenshots
-Screenshots proving automation are located inside:

They include:
 .CI running successfully
 .CD auto-deploying
 .Render successful deployment

 🗄️ Folder Structure
mern-stack-integration-happylovesyou/
 ├── backend/
 ├── frontend/
 ├── .github/workflows/
 ├── deployment/
 ├── monitoring/
 ├── screenshots/
 └── README.md

🌍 Deployment Summary
Backend (Render)
 .Deployed as a Node + Express web service
 .CI/CD triggers auto deployment after every push to main
 .Uses Build Hook URL

Frontend (Vercel)
 .Deployed using GitHub → Vercel integration
 .CI verifies build
 .CD publishes automatically using Vercel token

 👤 Author

Rose Maina
GitHub: Happylovesyou