# Welcome to your BillBoard Project

##Project Info

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## 🚀 Deployment Approach

1. Frontend (Next.js) → Deploy on Vercel

Fork or clone the repo.

In the root directory, check if there’s a Next.js app (likely in /client or root).

Push it to your own GitHub repo.

Go to Vercel Dashboard
.

Click New Project → Import GitHub Repo.

Choose the repo → Configure project:

Framework: Next.js (Vercel will auto-detect).

Build command: npm run build (default).

Output directory: .next.

Add required environment variables (e.g., API URLs for backend).

Deploy → you get a https://your-app.vercel.app domain.

2. Backend (Flask API) → Deploy Separately

Vercel doesn’t support long-running Python APIs. Options:

Render.com (free tier) – Easiest.

Railway.app / Heroku – Good alternatives.

AWS / GCP / Azure – If you need scale.

Steps (for Render as example):

Create a new repo with just the Flask backend code (/server folder).

Add requirements.txt and Procfile:

web: gunicorn app:app


Push to GitHub.

On Render
, create a Web Service, connect the repo.

Set runtime = Python 3.x.

Deploy → you get https://your-backend.onrender.com.

3. Connect Frontend to Backend

In the Next.js frontend, update the API base URL:

const API_URL = "https://your-backend.onrender.com";


Add this as an environment variable in Vercel (NEXT_PUBLIC_API_URL).

Redeploy frontend.

4. Test Flow

Open frontend (Vercel URL).

Upload image / click detection → API call goes to Flask backend.

Backend processes → returns result.

Frontend displays violation info.

⚡ End Result:

Frontend → Vercel (fast, global edge deployment).

Backend → Render/Railway/Heroku (Python API hosting).

They talk over REST API.
