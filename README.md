# Ephraim Tessema — Developer Portfolio

Personal developer portfolio of **Ephraim Tessema**, Computer Science and Engineering (CSE) student at **ASTU (Adama Science and Technology University)** in Ethiopia, and an aspiring Software Engineer.

> *"Curious mind. Builder's mindset. Engineer in progress."*

---

## 🚀 Live Tech Stack

- **Frontend**: React 19, Tailwind CSS v4, Framer Motion, Lucide Icons
- **Build System**: Vite 8, Rolldown / ESBuild
- **Mobile Expertise**: React Native, Expo, Flutter & Dart
- **Backend & Data**: Node.js, SQL, Supabase, Firebase
- **AI & Integrations**: Groq API (`llama-3.3-70b-versatile`), Optical Character Recognition (Amharic OCR)
- **Deployment**: Serverless Architecture ready for Vercel, Netlify, or custom Node hosting

---

## 🌟 Featured Projects

1. **[Study-Flow](https://github.com/ephraimtessema-lgtm/study-flow.git)** — Featured Highlight
   - Academic study planner and productivity OS combining task scheduling, session workflows, and an integrated AI study assistant.
2. **[Mama-Care](https://github.com/ephraimtessema-lgtm/Mama-Care.git)**
   - Maternal healthcare web platform providing prenatal guidance, symptom checklists, and structured health tracking.
3. **[CS-Toolkit](https://github.com/ephraimtessema-lgtm/cs-toolkit-pro.git)**
   - Algorithmic utility suite featuring data structure visualizers and computational converters for computer science students.
4. **[BethVerse](https://github.com/ephraimtessema-lgtm/bethverse.git)**
   - Mobile poetry vault integrating native Amharic OCR (Optical Character Recognition) to scan, transcribe, and archive physical verses.
5. **Yididya** (Private Mobile Application)
   - Choral management system for hymn repertory (SATB vocal parts) and rehearsal tracking.
6. **Johanan** (Private Mobile Application)
   - Editorial workflow mobile application for literature teams managing manuscripts and collaborative reviews.

---

## 🤖 Hybrid AI Portfolio Guide

The portfolio includes an on-site hybrid AI assistant:
- **Instant Predefined Router**: Answers common questions regarding technical skills, projects, background, and contact details with zero latency and zero token cost.
- **Groq AI Integration**: Routes open-ended queries to a serverless `/api/chat` endpoint powered by Groq (`llama-3.3-70b-versatile`), strictly grounded in Ephraim's verified portfolio information.
- **Security**: API keys are isolated on the server side and never exposed in the client bundle. Includes sliding-window rate limiting, input sanitization, and cost controls.

---

## 🛠️ Local Development & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ephraimtessema-lgtm/port-2.git
   cd port-2
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   ```bash
   cp .env.example .env
   ```
   Add your secret Groq API key in `.env`:
   ```env
   AI_PROVIDER=groq
   AI_API_KEY=gsk_your_groq_api_key_here
   AI_MODEL=llama-3.3-70b-versatile
   ```

4. **Start the local development server:**
   ```bash
   npm run dev
   ```

5. **Build for production:**
   ```bash
   npm run build
   ```

---

## 📬 Contact & Connect

- **Email**: [ephraimtessema@gmail.com](mailto:ephraimtessema@gmail.com)
- **Telegram**: [@ephion_dev](https://t.me/ephion_dev)
- **Instagram**: [@epha_tess](https://www.instagram.com/epha_tess)
- **GitHub**: [ephraimtessema-lgtm](https://github.com/ephraimtessema-lgtm)
