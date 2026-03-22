# ⚔️ QuestCode Portfolio

A gaming-themed React portfolio inspired by the QuestCode language.

## 🚀 Getting Started

```bash
npm install
npm start
```

Opens at http://localhost:3000

## 📁 Project Structure

```
src/
├── App.jsx                    # Root component
├── data.js                    # ← EDIT THIS: your name, skills, projects, photos
├── index.css                  # Global styles & animations
└── components/
    ├── Nav.jsx                # Sticky navigation bar
    ├── HeroSection.jsx        # Landing / intro with typing animation
    ├── PhotoSection.jsx       # 📷 Photo gallery with upload support
    ├── SkillsSection.jsx      # Skill tree with XP bars
    ├── QuestsSection.jsx      # Project cards with code previews
    ├── PartySection.jsx       # Tech stack as RPG party
    ├── ContactSection.jsx     # Contact form with live code preview
    └── UI.jsx                 # Shared components (Tag, CodeLine, GlowButton…)
```

## ✏️ How to Customize

### 1. Your Info — edit `src/data.js`
- Change `YOUR NAME` in `HeroSection.jsx`
- Update `SKILLS`, `QUESTS`, `PARTY` arrays in `data.js`

### 2. Photos
- Place images in `/public/photos/` (e.g. `profile.jpg`)
- Update the `src` field in the `PHOTOS` array in `data.js`:
  ```js
  { src: '/photos/profile.jpg', label: 'PROFILE.QC', ... }
  ```
- Or use the **Upload Photo** buttons directly in the browser (session only)

### 3. Colors — edit `src/data.js` top of file
```js
export const C = {
  accent:  '#00ffcc',  // primary cyan
  a2:      '#ff3366',  // red/pink
  a3:      '#ffcc00',  // yellow
  a4:      '#7b2fff',  // purple
  ...
};
```

## 🎨 Color Palette

| Token    | Hex       | Used for              |
|----------|-----------|-----------------------|
| accent   | `#00ffcc` | Primary / keywords    |
| a2       | `#ff3366` | Accents / errors      |
| a3       | `#ffcc00` | Strings / XP rewards  |
| a4       | `#7b2fff` | Functions / tags      |
