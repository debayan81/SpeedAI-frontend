# SpeedAI 🚀

SpeedAI is a comprehensive full-stack Artificial Intelligence SaaS platform that provides users with a suite of powerful AI tools in a single, unified dashboard. From generating images to analyzing resumes and writing articles, SpeedAI is designed to be fast, reliable, and user-friendly.
Backend - github.com/debayan81/SpeedAI-backend

## ✨ Features

- **🔐 Secure Authentication:** Seamless user login and registration powered by Clerk.
- **💳 Credit System:** Users receive 10 free credits upon signup, with automatic credit deduction per tool usage.
- **🎨 AI Image Generation:** Generate high-quality realistic, anime, or digital art images from text prompts using Pollinations AI.
- **✂️ Background & Object Removal:** Instantly remove backgrounds or unwanted objects from images via Cloudinary's AI transformations.
- **📄 AI Resume Review:** Upload PDF or DOCX resumes and get structured, actionable feedback (Summary, Strengths, Weaknesses, Improvements) powered by Google's Gemini 2.5 Flash model.
- **✍️ Article Writer & Summarizer:** Generate professional articles or summarize long blocks of text instantly.
- **🌍 Community Feed:** Users can choose to publish their AI generations to a public community feed to share with others.

## 🛠️ Technology Stack

### Frontend
- **Framework:** React (Vite)
- **Styling:** Tailwind CSS & Lucide React Icons
- **Auth:** Clerk React SDK
- **Routing:** React Router DOM

### Backend
- **Runtime:** Node.js & Express.js
- **Database:** PostgreSQL (Neon Serverless)
- **Database Driver:** `postgres.js`
- **Authentication Validation:** Svix (for Clerk Webhooks)
- **File Processing:** Multer, `pdf-parse`, `mammoth` (for parsing PDF and Word documents)
- **AI & Cloud Services:** Google Gemini API, Cloudinary SDK, Pollinations AI

## 🚀 Getting Started

### Prerequisites
- Node.js (v20 LTS recommended)
- A PostgreSQL Database (e.g., Neon)
- API Keys for Clerk, Gemini, and Cloudinary

### Environment Variables

Create a `.env` file in the `server/` directory and add the following:

```env
# Clerk Authentication
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_WEBHOOK_SECRET=your_clerk_webhook_secret

# Database
DATABASE_URL=postgresql://user:password@host/db?sslmode=require

# AI & Media Services
GEMINI_API_KEY=your_gemini_api_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:5173
```

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/speedai.git
   ```

2. **Install Frontend Dependencies:**
   ```bash
   cd client
   npm install
   npm run dev
   ```

3. **Install Backend Dependencies:**
   ```bash
   cd ../server
   npm install
   npm run server
   ```

## 🏗️ Architecture Highlights

- **Auto-User Provisioning:** The backend automatically provisions users and grants introductory credits upon their first API call if webhook delivery is delayed.
- **Resilient Database Connections:** Utilizes explicit URL parsing and a 3-attempt retry logic with exponential backoff to gracefully handle Neon DB cold starts in serverless environments.
- **Binary Data Parsing:** Directly extracts raw text from PDF and DOCX file buffers in memory before constructing LLM prompts, ensuring 100% compatibility with Gemini's text-based APIs.
- **Error Handling:** Robust global error boundaries catching everything from rate limits (`429`) to connection timeouts (`ECONNREFUSED`), ensuring the server never crashes silently.

