# 🎓 STUDYLAH - Malaysian Secondary School AI Study Companion

> **An AI-powered revision and study platform specifically tailored for Malaysian secondary school students (KSSM Tingkatan 1–6).**  
> Covers all core subjects, complete syllabus units, interactive mindmaps, UASA/SPM-format quizzes, flashcards, past year paper trends, and bilingual/trilingual learning aids.

---

## ✨ Features

- 📚 **Full KSSM Syllabus Coverage**:
  - Covers all 11 Form 1 subjects: **Bahasa Melayu, English, Matematik, Sains, Sejarah, Geografi, Asas Sains Komputer (ASK), Reka Bentuk dan Teknologi (RBT), Pendidikan Moral, Pendidikan Islam, Bahasa Cina (华文)**.
  - Complete 122+ units mapped directly to textbook chapters and Kurikulum Standard Sekolah Menengah standards.
- 🧠 **Interactive Mind Maps**:
  - Visually rich concept maps with expandable nodes, connections, and key exam takeaways.
- 📝 **UASA & SPM Exam Summaries**:
  - In-depth topic notes highlighting high-yield exam tips, formulas, historical timelines, and definitions.
- 🎯 **Self-Assessment Quizzes**:
  - Instant scoring, detailed explanations, and question-level breakdowns based on standard Malaysian exam formats.
- 🗂️ **Interactive Flashcards**:
  - Active-recall digital flashcards with flip animations and master tracking.
- 📊 **Past Year Paper & Trend Analysis**:
  - Topic frequency analysis, common exam traps, and model answering techniques.
- 🌐 **Trilingual Support**:
  - Seamlessly switch between Bahasa Melayu, English, and 中文 explanations.
- ☁️ **Cloud Storage & Offline Fallback**:
  - Firebase Firestore integration for bookmarking and study records, with comprehensive built-in pre-generated syllabus data for instant loading.

---

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript, Tailwind CSS v4, Lucide React, Motion (Framer Motion)
- **Backend**: Express.js with Vite middleware (`tsx server.ts`)
- **AI Engine**: Google GenAI SDK (`@google/genai`)
- **Database & Auth**: Firebase Firestore
- **Bundler & Tooling**: Vite 6, esbuild, TypeScript

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or 20+ recommended)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)
- A [Google Gemini API Key](https://aistudio.google.com/app/apikey) (Free tier available)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/<your-username>/studylah.git
   cd studylah
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env` file in the root directory (or copy from `.env.example`):
   ```bash
   cp .env.example .env
   ```
   Edit `.env` and add your Gemini API Key:
   ```env
   GEMINI_API_KEY=your_actual_gemini_api_key_here
   PORT=3000
   ```

4. **Run Development Server**:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:3000` to start using STUDYLAH!

---

## 📦 Production Build

To build the client and bundle the backend server:

```bash
# Build frontend and compile backend
npm run build

# Start production server
npm run start
```

---

## 🚀 How to Publish to GitHub (上传至 GitHub 步骤)

### Method 1: Using Git Command Line (推荐命令行)

1. Open your terminal in the project directory:
   ```bash
   # Initialize git repository (if not already initialized)
   git init

   # Stage all files
   git add .

   # Commit
   git commit -m "feat: initial commit of STUDYLAH platform"

   # Rename branch to main
   git branch -M main
   ```

2. Go to [GitHub](https://github.com/new) and create a **new repository** named `studylah` (leave "Initialize with README" unchecked).

3. Link your local repository to GitHub and push:
   ```bash
   git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/studylah.git
   git push -u origin main
   ```

---

### Method 2: Using GitHub Desktop (使用 GitHub 客户端)

1. Download and open [GitHub Desktop](https://desktop.github.com/).
2. Click **File** -> **Add Local Repository...** and select this project folder.
3. If prompted to create a repository, click **Create a repository here**.
4. Click **Publish repository** to push it directly to your GitHub account!

---

## 📁 Project Directory Structure

```text
├── public/                 # Static assets & public files
├── src/
│   ├── components/         # UI Components (Navigation, Dashboard, UnitSelector, etc.)
│   │   └── tools/          # Interactive study tools (Mindmap, Quiz, Flashcards, Notes)
│   ├── data/
│   │   └── preGeneratedSyllabus.ts # Complete KSSM Form 1-6 syllabus & study data
│   ├── services/           # Firebase & API client services
│   ├── App.tsx             # Main application orchestrator
│   ├── main.tsx            # React DOM entry point
│   └── index.css           # Global Tailwind CSS styles
├── server.ts               # Express API backend & Vite dev server
├── .env.example            # Environment variables template
├── .gitignore              # Files excluded from git
├── package.json            # Project manifest & dependencies
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite configuration
```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
