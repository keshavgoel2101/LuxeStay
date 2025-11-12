# 🏨 LuxeStay

LuxeStay is a modern **hotel booking platform** built with a **MERN-style full-stack architecture** (MongoDB, Express, React, Node.js).  
It allows users to **register, log in, and manage bookings** securely using **JWT authentication**.

---

## 📁 Folder Structure

LUXESTAY/
│
├── backend/ # Backend server code (Node.js + Express)
│ ├── config/ # Configuration files (e.g., DB connection, JWT setup)
│ ├── middleware/ # Authentication and validation middleware
│ ├── models/ # Prisma or Mongoose models for database schemas
│ ├── prisma/ # Prisma ORM setup and schema files
│ ├── routes/ # Express routes for API endpoints
│ │ └── auth.js # Routes for login, signup, and JWT handling
│ ├── server.js # Entry point for backend server
│ ├── .env # Environment variables for backend
│ └── .env.example # Example of environment configuration
│
├── frontend/ # Frontend client (React + Vite)
│ ├── src/ # Source code for frontend
│ │ ├── components/ # Reusable React components
│ │ │ ├── Login.jsx # Login page component
│ │ │ ├── Register.jsx # Signup/registration page component
│ │ │ └── Profile.jsx # User profile/dashboard page
│ │ ├── api.js # API service to communicate with backend
│ │ ├── App.jsx # Root React component
│ │ ├── main.jsx # Application entry point
│ │ └── styles.css # Global styles
│ ├── public/ # Static assets (favicon, images, etc.)
│ ├── index.html # Main HTML template
│ ├── vite.config.js # Vite configuration file
│ ├── package.json # Frontend dependencies
│ └── .env # Environment variables for frontend
│
├── .gitignore # Files and folders to ignore in Git
├── package.json # Root dependency management (optional)
├── package-lock.json # Lock file for consistent dependency versions
└── README.md # Project documentation

---

## ⚙️ Features

- 🔐 **JWT Authentication** (Login & Signup)
- 🧾 **User registration and profile management**
- 🏨 **Hotel booking system** (extendable)
- ⚡ **Full-stack architecture (Backend + Frontend)**
- 🧠 **Prisma ORM** for easy database interaction
- 🎨 **React + Vite** for a fast, modular frontend

---

## 🛠️ Tech Stack

### Frontend:
- React.js (Vite)
- Axios (for API calls)
- CSS (custom styling)

### Backend:
- Node.js + Express.js
- Prisma ORM (with PostgreSQL / MySQL / SQLite)
- JWT (JSON Web Token) for authentication
- dotenv for environment configuration

---

## 🚀 Getting Started


