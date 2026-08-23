# OOSC Hackathon-
Hackathon project 

# 🎓 Scholar Hunt — MERN Scholarship & Grant Discovery Portal

A full-stack, student-centric scholarship discovery and grant application portal. Students can browse, filter, and apply for national & international scholarships, while scholarship providers, universities, and trusts can publish grant opportunities and manage applicants.

Features **Email OTP verification**, **secure password reset**, **multi-criteria filtering** (Course, State, Income, Amount, Documents), and **AI-powered scholarship recommendations**.

> **Built with the MERN Stack** (MongoDB, Express, React 18, Node.js) + Tailwind CSS & Framer Motion.

---

## ✨ Key Features

### 🌟 For Everyone (Public Access)
- **Interactive Discovery:** Explore verified scholarships, filter by Course, State, Gender, Family Income, and Grant Amount.
- **AI-Powered Matching:** LLM-powered recommendations on scholarship detail pages suggesting relevant grants based on criteria.
- **Modern Student UI:** Responsive layout with interactive cursor lighting, animated carousels, and glassmorphic cards.

### 🎓 For Students (Applicants)
- **Email OTP Verification:** Secure signup with email OTP verification before login.
- **Auto-Login:** Instant auto-login upon successful OTP verification.
- **One-Click Application:** Apply directly to verified scholarship schemes and grant programs.
- **Bookmark / Saved Scholarships:** Save high-value scholarships to track deadlines.
- **Student Profile:** Manage academic profile, bio, document links, and track application status history.
- **Secure Password Reset:** OTP-verified password change and recovery flow.

### 🏛️ For Scholarship Providers / Admin (Trusts, Foundations & Universities)
- **Provider Dashboard:** Register and manage institutional/foundation profiles.
- **Grant Management:** Post, update, and manage scholarship openings (positions/seats, grant amount, eligibility criteria, deadlines).
- **Applicant Review:** View and evaluate student applications and submitted qualifications.

### 🛡️ Security & Authentication
- **Email OTP Verification** via Nodemailer & Gmail OAuth2.
- **JWT Authentication** stored in secure `httpOnly` cookies.
- **Password Hashing** with `bcryptjs`.
- **Cloudinary Integration** for secure student profile photo and asset storage.

### 🤖 AI Recommendation Engine
- Intelligent scholarship recommendations powered by an LLM (GPT-OSS / OpenAI-compatible endpoint).
- Automatic fallback to category and location matching if the AI service is unavailable.

---

## 🛠 Tech Stack

### Frontend
- **React 18** with **Vite**
- **Redux Toolkit** + **Redux Persist** (Global State Management)
- **React Router DOM v6** (Client-side Routing)
- **Tailwind CSS** + **shadcn/ui** (Modern UI Primitives)
- **Framer Motion** (Smooth Micro-interactions & Animations)
- **Lucide React** (Modern Icons) & **Sonner** (Toast Notifications)
- **Axios** (API Requests)

### Backend
- **Node.js** + **Express.js** (REST API)
- **MongoDB** + **Mongoose** (Database)
- **JSON Web Tokens (JWT)** + **bcryptjs** (Authentication & Encryption)
- **Multer** + **Cloudinary** (Document & Media Uploads)
- **Nodemailer** (Gmail OAuth2 API for OTP Emails)
- **Native Fetch** (AI Recommendations Integration)

---

## 📁 Project Structure

```text
SCHOLAR-HUNT/
├── Backend/
│   ├── controllers/      # Route controllers (user, job/scholarship, company/provider, application)
│   ├── models/           # Mongoose schemas (User, Job, Company, Application)
│   ├── routes/           # Express API route definitions
│   ├── middleware/       # JWT Auth verification & Multer file upload handlers
│   ├── utils/            # Database connection, Cloudinary, Nodemailer, AI client
│   ├── index.js          # Express server entry point
│   └── .env              # Backend environment variables
│
└── Frontend/
    ├── public/           # Static assets (images, logos, icons)
    ├── src/
    │   ├── components/   # UI components (Navbar, Header, JobCards, Filtercard, Categories)
    │   ├── redux/        # Redux store, authSlice, jobSlice
    │   ├── hooks/        # Custom data hooks (useGetAllJobs, etc.)
    │   ├── utils/        # API endpoints & utility helpers
    │   ├── App.jsx       # App router configuration
    │   └── index.css     # Global styles & ambient mesh background
    └── vite.config.js
