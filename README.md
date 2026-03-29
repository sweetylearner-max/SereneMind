# 🌿 SereneMind

> **Your mental wellness companion** — built for students, by a student who cares.

**Developed by Akanksha** · Next.js · Supabase · Gemini AI

---

## What is SereneMind?

SereneMind is an AI-powered mental health support platform designed for students. It combines empathetic AI assistance, anonymous peer connection, evidence-based screening tools, and mindfulness resources — all in one calm, accessible space.

The platform is built on a simple belief: **no student should feel alone**.

---

## ✨ Features

### 🤖 AI Support Chat
- 24/7 empathetic AI powered by Gemini
- Seamlessly transitions to a live peer when one is available
- Full chat history preserved across the handoff

### 🤝 Anonymous Peer Support
- Real-time anonymous chat with fellow students
- Room-based matching system
- Zero personal identifiers — complete privacy

### 📋 Mental Health Screening
- PHQ-9 (depression) and GAD-7 (anxiety) assessments
- Instant, personalised feedback
- Results stored securely and never shared

### 🌬️ Relax & Breathe
- Guided breathing exercises
- Ambient soundscapes
- Mindful Maze — a therapeutic, non-competitive mindfulness game

### 😊 Expression Analysis
- Camera-based facial emotion detection (MediaPipe + face-api.js)
- Real-time stress level insights
- Fully private — no video is stored or transmitted

### 📅 Counselor Booking
- Schedule appointments with campus counselors
- Calendar integration

### 📚 Resource Hub
- Curated articles, videos, and tools
- Personalised by screening results

### 📊 Admin Dashboard
- Anonymous usage analytics (Recharts)
- No student-identifiable data ever shown

---

## 🌍 Language Support

SereneMind is available in **5 languages**:

| Language | Native Script | RTL |
|----------|--------------|-----|
| English  | English      | No  |
| Telugu   | తెలుగు       | No  |
| Hindi    | हिन्दी        | No  |
| Spanish  | Español      | No  |
| Arabic   | العربية      | Yes |

The UI adapts to RTL layouts automatically. Language preference is saved locally.

---

## 🛠️ Tech Stack

**Frontend**
- [Next.js 14](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) — animations
- [Lucide Icons](https://lucide.dev/)
- [Recharts](https://recharts.org/) — admin analytics
- [i18next](https://www.i18next.com/) + [react-i18next](https://react.i18next.com/) — internationalisation
- [Tone.js](https://tonejs.github.io/) — ambient soundscapes

**Backend & Auth**
- [Supabase](https://supabase.com/) — PostgreSQL database, Auth, Realtime
- Row Level Security (RLS) enforced at database level

**AI & Vision**
- [Gemini API](https://deepmind.google/technologies/gemini/) — conversational AI
- [Genkit](https://firebase.google.com/docs/genkit) — AI orchestration
- [MediaPipe](https://mediapipe.dev/) — face mesh detection
- [face-api.js](https://github.com/justadudewhohacks/face-api.js) — emotion recognition

**State Management**
- [Zustand](https://zustand-demo.pmnd.rs/)
- [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) — form validation

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18 or later
- npm or yarn
- A [Supabase](https://supabase.com/) project
- A [Gemini API key](https://aistudio.google.com/)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/serenemind.git
cd serenemind

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
```

### Environment Variables

Create a `.env.local` file:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Gemini AI
GEMINI_API_KEY=your_gemini_api_key

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Database Setup

Run the SQL schemas in order:

```bash
# In Supabase SQL editor, run:
backend/db/schema.sql
backend/db/peer_support_schema.sql
backend/db/rls_policies.sql
```

---

## 📁 Project Structure

```
serenemind/
├── src/
│   ├── app/
│   │   ├── page.tsx                    # Landing page
│   │   ├── layout.tsx                  # Root layout
│   │   ├── globals.css                 # Design system + tokens
│   │   ├── login/page.tsx              # Auth
│   │   ├── register/page.tsx           # Auth
│   │   └── dashboard/
│   │       ├── layout.tsx              # Sidebar + nav
│   │       ├── page.tsx                # Dashboard home
│   │       ├── chatbot/                # AI chat
│   │       ├── peer-support/           # Anonymous peer chat
│   │       ├── screening/              # PHQ-9 / GAD-7
│   │       ├── expression-analysis/    # Emotion detection
│   │       ├── relax/                  # Breathing + mindfulness
│   │       ├── booking/                # Counselor scheduling
│   │       ├── resources/              # Resource hub
│   │       └── admin/                  # Analytics dashboard
│   ├── components/
│   │   ├── ui/
│   │   │   ├── LanguageSwitcher.tsx    # 5-language switcher
│   │   │   └── ...                     # shadcn/ui components
│   │   └── dashboard/
│   │       └── peer-support/           # Peer chat components
│   ├── lib/
│   │   ├── i18n.ts                     # Translation strings (5 languages)
│   │   ├── LangContext.tsx             # Language context + RTL support
│   │   └── supabaseClient.ts           # Supabase client
│   └── ai/
│       ├── flows/                      # Genkit AI flows
│       └── features/                   # Feature extraction
├── backend/
│   ├── db/                             # SQL schemas
│   └── src/                            # Express middleware
└── README.md
```

---

## 🔒 Privacy & Safety

SereneMind is built with privacy-first principles:

- **Anonymous peer chat** — no names, no profiles exposed to peers
- **Row Level Security** — enforced at the Postgres level via Supabase RLS
- **No video storage** — expression analysis is done entirely client-side
- **Secure auth** — Supabase Auth with JWT tokens
- **No ads, no data selling** — ever

---

## 🎨 Design Philosophy

SereneMind uses a **warm earth tone** palette — sand, sage, and terracotta — to create a calming, non-clinical environment. Typography uses *Fraunces* (a variable optical-size serif) for warmth and *DM Sans* for clarity. The design avoids sterile blues and cold whites that dominate clinical health tools.

---

## 🌱 Roadmap

- [ ] Mood journal with AI trend analysis
- [ ] Crisis detection & counselor auto-alert
- [ ] Voice journaling (speech-to-text + sentiment)
- [ ] Daily check-in streaks & badges
- [ ] More language support (Tamil, Bengali, French)
- [ ] Mobile app (React Native)
- [ ] Group therapy rooms (topic-based)

---

## 👩‍💻 Developer

**Akanksha**  
Full-stack developer passionate about using technology to improve student mental health.

> *"This project exists because mental health support should be accessible to everyone — in every language, at any hour, without judgment."*

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <br/>
  <strong>SereneMind</strong> · Built with care for student mental health
  <br/>
  <em>Developed by Akanksha</em>
</div>
