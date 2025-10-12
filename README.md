# 💫 DevFolio – Personal Portfolio Website

A **modern, lightning-fast, and fully responsive personal portfolio** built using **React + Vite**, designed to showcase creativity, technical skills, and projects in a professional and engaging way. It reflects my journey as a **Web Developer and AIML Enthusiast**, combining clean UI, elegant animations, and seamless performance for a truly dynamic web experience.

## 🚀 Features

### Core Features

* **⚡ React + Vite Architecture**: Ultra-fast performance with Hot Module Replacement (HMR)
* **🎨 Modern UI/UX**: Minimal, aesthetic, and responsive design built with Tailwind CSS
* **🌗 Dark & Light Mode**: Instantly toggle between themes for a personalized experience
* **💼 Portfolio Showcase**: Dedicated sections for About, Skills, Projects, and Contact
* **🧠 Interactive Animations**: Powered by Framer Motion for smooth and elegant transitions
* **📱 100% Responsive**: Optimized for mobile, tablet, and desktop devices
* **🔍 SEO Optimized**: Structured and metadata-friendly for better visibility
* **💬 Contact Form Integration**: Real-time email functionality using EmailJS or similar APIs

### Advanced Features

* **Dynamic Project Cards**: Auto-generated from a single configuration file
* **Animated Text & Scroll Effects**: Subtle motion and fade transitions across components
* **Social Links Integration**: Direct access to GitHub, LinkedIn, and other profiles
* **Custom Cursor & Micro-interactions**: Interactive design elements for user engagement
* **Progressive Deployment**: One-click deploy to Vercel, Netlify, or GitHub Pages

---
# 📁PROJECT STRUCTURE

Portfolio/
├── 📄 Configuration Files
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── README.md
│   └── vite.config.js
│
├── 📁 public/ (Static Assets)
│   ├── NEXA.png
│   ├── Screenshot 2025-10-12 110014.png
│   └── vite.svg
│
└── 📁 src/ (Source Code)
    ├── 📄 App.jsx (Main App Component)
    ├── 📄 index.css (Global Styles)
    ├── 📄 main.jsx (Entry Point)
    │
    ├── 📁 assets/
    │   └── react.svg
    │
    ├── 📁 components/ (React Components)
    │   ├── AboutSection.jsx
    │   ├── ContactSection.jsx
    │   ├── Footer.jsx
    │   ├── HeroSection.jsx
    │   ├── Navbar.jsx
    │   ├── ProjectsSection.jsx ⭐ (Your updated component)
    │   ├── SkillsSection.jsx
    │   ├── StarBackground.jsx
    │   ├── ThemeToggle.jsx
    │   │
    │   └── 📁 ui/ (UI Components)
    │       ├── toast.jsx
    │       └── toaster.jsx
    │
    ├── 📁 hooks/
    │   └── use-toast.js
    │
    ├── 📁 lib/
    │   └── utils.js
    │
    └── 📁 pages/
        ├── Home.jsx (Main page with all sections)
        └── Notfound.jsx (404 page)
---

## 🛠️ Technology Stack

* **Frontend**: React + Vite
* **Styling**: Tailwind CSS / CSS Modules
* **Animations**: Framer Motion
* **Linting & Formatting**: ESLint + Prettier
* **Icons**: React Icons / Lucide React
* **Hosting**: Vercel / Netlify / GitHub Pages
* **Build Tools**: Babel, SWC (Fast Refresh), and Rollup

---

## 🚀 Getting Started

### Prerequisites

* Node.js (v16 or later)
* npm or yarn package manager
* Code editor (VS Code recommended)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/<your-username>/<your-portfolio>.git
   cd <your-portfolio>
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

---

## 🎨 Customization

1. Update **personal details** in `src/data/` (name, bio, social links).
2. Add your **project details** in the Projects section file.
3. Modify theme colors in `tailwind.config.js`.
4. Replace images and icons in the `assets/` folder.
5. (Optional) Connect your domain and deploy on Vercel or Netlify.

---

## 🧠 Key Components

### Hero Section

* Animated introduction with name, title, and social icons
* Smooth scroll CTA to other sections

### About Section

* Personal details, skills overview, and short bio

### Skills Section

* Interactive skill badges categorized by frontend, backend, and tools

### Projects Section

* Showcases real projects with links, GitHub repos, and live demos

### Contact Section

* Functional contact form with direct email integration

### Footer

* Minimal design with copyright and quick navigation

---

## 🌈 Animations & UI Highlights

* **Framer Motion** for fade, slide, and hover transitions
* **Custom Cursor & Hover Effects** for interactivity
* **Dynamic Typing Animation** in hero section
* **Smooth Scroll Navigation** between sections

---

## 📱 Responsive Design

Fully responsive layout optimized for:

* 🖥️ Desktop (1200px+)
* 💻 Tablets (768px–1199px)
* 📱 Mobile (320px–767px)

Built using **Tailwind’s grid and flexbox utilities** to ensure fluid adaptability.

---

## 🧩 Available Scripts

| Command           | Description                  |
| ----------------- | ---------------------------- |
| `npm run dev`     | Start development server     |
| `npm run build`   | Build production-ready app   |
| `npm run preview` | Preview the production build |
| `npm run lint`    | Run ESLint checks            |

---

## 🔮 Future Enhancements

* 🌟 **Blog Section** – Add a personal blog with Markdown support
* 🎭 **Theme Customizer** – Allow users to pick accent colors
* 🧠 **AI Chat Assistant** – Integrate an AI-powered chatbot (like Nexa or Reshma)
* 💬 **Testimonials** – Dynamic feedback and collaboration section
* 📊 **Analytics Integration** – Track portfolio engagement

---

## 👨‍💻 Author

**Hardik Singh**
🎓 B.Tech CSE | 💻 Web Developer | 🤖 AIML Enthusiast
🔗 [Portfolio](#) • [LinkedIn](#) • [GitHub](#)

---

## 📜 License

This project is licensed under the **MIT License** – feel free to use, modify, and enhance it.

---

## 🌟 Acknowledgements

* [React Documentation](https://react.dev/)
* [Vite Official Guide](https://vite.dev/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Framer Motion](https://www.framer.com/motion/)
* [Lucide React](https://lucide.dev/)

