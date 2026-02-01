# 🎬 CinePicks

A curated collection of movies — a modern movie browsing app built with React, Redux Toolkit, and Tailwind CSS.

## Features

- **Genre Filtering** — Filter movies by genre with smooth state management
- **Dark Theme** — Beautiful dark UI with radial gradients and cyan accents
- **Responsive Design** — Fully responsive from mobile to desktop
- **Modern Animations** — Hover effects with glowing shadows and smooth transitions
- **Redux State Management** — Centralized state with Redux Toolkit

## Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 19** | UI Components |
| **Redux Toolkit** | State Management |
| **React-Redux** | React bindings for Redux |
| **Tailwind CSS 4** | Styling & Animations |
| **Vite** | Build Tool & Dev Server |

## Project Structure

```
cinepicks/
├── public/
├── src/
│   ├── assets/              # Static assets (favicon, images)
│   ├── components/
│   │   ├── Header.jsx       # App header with genre filter buttons
│   │   ├── Container.jsx    # Movie grid container
│   │   ├── Card.jsx         # Individual movie card component
│   │   └── Footer.jsx       # App footer
│   ├── hooks/
│   │   └── useFilterGenre.js # Custom hook for extracting unique genres
│   ├── utils/
│   │   ├── appStore.js      # Redux store configuration
│   │   ├── filterMovieSlice.js # Redux slice for genre filtering
│   │   └── constants.js     # Movie data
│   ├── App.jsx              # Main app component
│   ├── App.css              # Global styles & custom scrollbar
│   └── main.jsx             # App entry point
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/cinepicks.git
   cd cinepicks
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
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
npm run preview
```

## UI Components

### Header
- Radial gradient background
- Responsive title with Plus Jakarta Sans font
- Horizontally scrollable genre filter buttons
- Cyan glow effect on selected/hovered buttons

### Movie Cards
- Dark gradient background (`gray-800` → `gray-900`)
- Responsive sizing: 2 cards per row on mobile → up to 5 on desktop
- Hover animations:
  - Scale up with cyan glow shadow
  - Image zoom & brightness increase
  - Title color change to cyan
  - Genre badge highlight

### Footer
- Semi-transparent dark background
- Cyan accent border with subtle glow

## Configuration

### Tailwind Config
```js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
}
```

### Redux Store
The app uses Redux Toolkit with a single slice for managing:
- `genre` — Currently selected genre filter
- `movies` — Filtered movie list

## Available Genres

- All
- Drama
- Action
- Sci-Fi
- Comedy
- Crime
- Romance
- Animation
- Horror
- Thriller
- Adventure

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

