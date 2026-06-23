# Union — Arcade Game Suite PWA

A Progressive Web App featuring six classic arcade games, installable to Android/iOS home screen via GitHub Pages.

## Games Included
| Game | File |
|------|------|
| Block Blast | `games/block-blast.html` |
| 2048 | `games/2048.html` |
| Snake | `games/snake.html` |
| Pac-Man | `games/pacman.html` |
| Minesweeper | `games/minesweeper.html` |
| Sugar Blast | `games/sugar-blast.html` |

## Deploying to GitHub Pages (Free Hosting)

### Step 1 — Create a GitHub repo
1. Go to [github.com](https://github.com) → **New repository**
2. Name it `union` (or any name)
3. Set visibility to **Public** (required for free GitHub Pages)
4. Click **Create repository**

### Step 2 — Upload files
Upload the entire project structure:
```
union/
├── index.html
├── manifest.json
├── sw.js
├── icon-192.png
├── icon-512.png
├── favicon.ico
└── games/
    ├── block-blast.html
    ├── 2048.html
    ├── snake.html
    ├── pacman.html
    ├── minesweeper.html
    └── sugar-blast.html
```

### Step 3 — Enable GitHub Pages
1. Go to repo **Settings** → **Pages**
2. Source: **Deploy from branch**
3. Branch: `main` / `root`
4. Save → Your app URL: `https://YOUR_USERNAME.github.io/union/`

### Step 4 — Install on Android
1. Open `https://YOUR_USERNAME.github.io/union/` in **Chrome**
2. Tap the **⋮** menu → **Add to Home screen**
3. Confirm → Union icon appears on your home screen

### Step 5 — Install on iOS
1. Open the URL in **Safari**
2. Tap the **Share** button → **Add to Home Screen**
3. Tap **Add**

---

## Firebase Setup (Optional — for remote announcements & policy)

### Create Firebase project
1. Go to [console.firebase.google.com](https://console.firebase.google.com)
2. Create new project → Enable **Firestore Database**
3. Copy your Firebase config object

### Add config to index.html
Replace the `FIREBASE_CONFIG` block in `index.html`:
```js
const FIREBASE_CONFIG = {
  apiKey: "YOUR_REAL_API_KEY",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  ...
};
```

### Firestore document structure
Create a document at **`app_config/main`** with these fields:

| Field | Type | Purpose |
|-------|------|---------|
| `announcement_title` | String | Banner title on home screen |
| `announcement_body` | String | Banner message |
| `notification` | String | Push a notification to users |
| `policy_text` | String | Privacy policy / terms text |

To update announcements: just edit the Firestore document — users see it on next app launch.

### Firestore security rules (allow public read)
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /app_config/{doc} {
      allow read: if true;
      allow write: if false;  // only write via Firebase Console
    }
  }
}
```

---

## Android Studio / WebView Notes
- Requires `javaScriptEnabled = true`
- Requires `domStorageEnabled = true` (for localStorage progress saving)
- Service worker works in Chrome-based WebViews (Android 5+)

## Color Palette
```
Primary:    #1736F5  (blue)
Secondary:  #ffc709  (yellow)
Embellish:  #d9d9d9  (light grey)
Background: #010418  (dark navy)
```
