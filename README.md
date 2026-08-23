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


## ⚙️ Setup & Installation

### 1. Clone / Download the Project

Clone the repository and navigate into the project:

```bash
git clone https://github.com/ankitpathak62/JOB-PORTAL.git
cd JOB-PORTAL
```

### 2. Backend Setup

Open a terminal and navigate to the backend:

```bash
cd Backend
npm install
```

Create a file named **`.env`** inside the `Backend/` folder:

```env
# Database
MONGO_URI=your_mongodb_connection_string

# Authentication
JWT_SECRET=any_long_random_secret

# Cloudinary (Image Uploads)
CLOUD_NAME=your_cloud_name
CLOUD_API=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret

# Server
PORT=5011
NODE_ENV=development

# Allowed Frontend Origins
# Use comma-separated URLs for multiple origins
CORS_ORIGIN=http://localhost:5173

# AI (Job Recommendations)
AI_BASE_URL=https://api.clod.io/v1
AI_API_KEY=your_ai_api_key
AI_MODEL=openai/gpt-oss-120b

# Email (Gmail OAuth2 - OTP Verification)
EMAIL_USER=your_gmail_address
CLIENT_ID=your_google_oauth_client_id
CLIENT_SECRET=your_google_oauth_client_secret
REFRESH_TOKEN=your_google_oauth_refresh_token
```

Start the backend server:

```bash
npm run dev
```

The backend will run at:

**http://localhost:5011**

> **Note:** Keep `NODE_ENV=development` while developing locally so the backend does not try to serve the production frontend build.

### 3. Frontend Setup

Open a **new terminal** and navigate to the frontend:

```bash
cd Frontend
npm install
npm run dev
```

The frontend will run at:

**http://localhost:5173**

The frontend communicates with the backend using the URLs configured in:

```text
Frontend/src/utils/data.js
```

The default backend URL is:

```text
http://localhost:5011
```

Change it if your backend is running on a different host or port.

---

## ▶️ Running the App

| Step | Command       | Folder      | URL                   |
| ---- | ------------- | ----------- | --------------------- |
| 1    | `npm run dev` | `Backend/`  | http://localhost:5011 |
| 2    | `npm run dev` | `Frontend/` | http://localhost:5173 |

### Quick Start

**Terminal 1 — Backend**

```bash
cd JOB-PORTAL/Backend
npm install
npm run dev
```

**Terminal 2 — Frontend**

```bash
cd JOB-PORTAL/Frontend
npm install
npm run dev
```

Then open:

**http://localhost:5173**

🎉 The Job Portal should now be running locally.

---

## 🔐 How the OTP / Authentication Flows Work

### Register → Verify → Auto Login

1. Fill out the registration form.
2. The backend creates an unverified account.
3. A **6-digit OTP** is sent to the registered email address.
4. You are redirected to the **Verify Email** page.
5. Enter the OTP received by email.
6. After successful verification, you are automatically logged in and redirected to the home page.

### Forgot Password

1. Click **"Forgot Password?"** on the login page.
2. Enter your registered email address.
3. A password-reset OTP is sent to your email.
4. Enter the OTP.
5. Enter your new password.
6. Your password is updated successfully.

### Change Password

1. Open your **Profile**.
2. Click the **Edit / Pencil** button.
3. Select **Change Password**.
4. An OTP is automatically sent to your registered email.
5. Enter the OTP.
6. Enter your new password.
7. Your password is updated successfully.

---

## 🌐 Main API Endpoints

### Base URL

```text
http://localhost:5011
```

### 👤 User API — `/api/user`

| Method | Endpoint           | Description                     |
| ------ | ------------------ | ------------------------------- |
| `POST` | `/register`        | Register user and send OTP      |
| `POST` | `/verify-otp`      | Verify email OTP and auto-login |
| `POST` | `/resend-otp`      | Resend signup OTP               |
| `POST` | `/forgot-password` | Send password-reset OTP         |
| `POST` | `/reset-password`  | Reset password using OTP        |
| `POST` | `/login`           | Login user                      |
| `POST` | `/logout`          | Logout user                     |
| `POST` | `/profile/update`  | Update user profile             |

### 💼 Jobs API — `/api/job`

| Method | Endpoint               | Description                        |
| ------ | ---------------------- | ---------------------------------- |
| `GET`  | `/get`                 | List and search all jobs           |
| `GET`  | `/get/:id`             | Get a single job                   |
| `GET`  | `/recommendations/:id` | Get AI-powered job recommendations |
| `POST` | `/post`                | Post a job                         |
| `GET`  | `/getadminjobs`        | Get recruiter's posted jobs        |

### 🏢 Company API — `/api/company`

Company-related operations include:

* Create company
* Get company details
* Update company information

### 📄 Application API — `/api/application`

Application-related operations include:

* Apply for a job
* View job applications
* View applicants
* Manage applications

---

## 🧰 Available Scripts

### Backend

```bash
npm run dev
```

Start the backend development server using Nodemon.

```bash
npm start
```

Start the backend server normally.

### Frontend

```bash
npm run dev
```

Start the Vite development server.

```bash
npm run build
```

Create a production build.

```bash
npm run preview
```

Preview the production build locally.

```bash
npm run lint
```

Run ESLint to check the frontend code.

---

## 🩺 Troubleshooting

### CORS Error

Make sure your frontend URL is included in the backend `.env` file:

```env
CORS_ORIGIN=http://localhost:5173
```

After changing `.env`, restart the backend server.

### OTP Email Not Sending

Check the following Gmail OAuth2 credentials:

```env
EMAIL_USER=
CLIENT_ID=
CLIENT_SECRET=
REFRESH_TOKEN=
```

Make sure:

* The Gmail address is correct.
* The Google OAuth Client ID is correct.
* The Client Secret is correct.
* The Refresh Token is valid.
* Gmail send permissions/scopes are enabled.

### Can't Log In After Adding Email Verification

If the user account was created before email verification was implemented, the `isVerified` field may be missing or unset.

Update the user's verification status in the database or create a new account through the current registration flow.

### `.env` Changes Are Not Applied

Restart the backend server after changing environment variables:

```bash
Ctrl + C
npm run dev
```

> Nodemon does not necessarily reload environment variables automatically.

### AI Job Recommendations Not Showing

Check your AI configuration:

```env
AI_BASE_URL=
AI_API_KEY=
AI_MODEL=
```

Then restart the backend server.

Also verify that the configured AI endpoint and model are available.

### MongoDB Connection Error

Check your MongoDB connection string:

```env
MONGO_URI=your_mongodb_connection_string
```

Make sure:

* MongoDB Atlas is running.
* Your database user credentials are correct.
* Your current IP address is allowed in MongoDB Atlas Network Access.
* The connection string is valid.

---

## 🔒 Environment Variables

Never commit your `.env` file to GitHub.

Add the following to your `.gitignore`:

```gitignore
.env
.env.*
!.env.example
```

You can provide a safe example file such as:

```text
Backend/.env.example
```

without including real API keys, passwords, OAuth secrets, or database credentials.

---

## 🚀 Production Notes

Before deploying the project:

1. Set `NODE_ENV=production`.
2. Use a production MongoDB database.
3. Configure production CORS origins.
4. Add production Cloudinary credentials.
5. Configure Gmail OAuth2 credentials securely.
6. Add the production AI API configuration.
7. Build the frontend:

```bash
cd Frontend
npm run build
```

8. Never expose secret keys in frontend code.
9. Never commit `.env` files or OAuth credentials to GitHub.

---

## 📌 Project Structure

```text
JOB-PORTAL/
│
├── Backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── .env
│   ├── index.js
│   └── package.json
│
├── Frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   ├── utils/
│   │   └── ...
│   ├── index.html
│   └── package.json
│
└── README.md
```

---

## 🎯 Features

* 🔐 User authentication
* 📧 Email OTP verification
* 🔑 Forgot password with OTP
* 🔄 Change password with OTP
* 👤 User profile management
* 💼 Job posting and searching
* 🏢 Company management
* 📄 Job applications
* 🤖 AI-powered job recommendations
* ☁️ Cloudinary image uploads
* 🔒 JWT-based authentication
* 📱 Responsive frontend
* ⚡ React + Vite frontend
* 🚀 Node.js + Express backend
* 🍃 MongoDB database

