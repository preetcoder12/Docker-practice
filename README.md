# Task Master: Minimal Fullstack Docker App

A sleek, modern task management application built with Node.js, Express, and Vanilla JavaScript, fully containerized with Docker.

## 🚀 Quick Start with Docker

The easiest way to get the app running is using Docker.

### Prerequisites
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed and running.

### Installation
1.  **Clone the repository**:
    ```bash
    git clone https://github.com/preetcoder12/Docker-practice.git
    cd Docker-practice/simple-fullstack
    ```

2.  **Start the application**:
    ```bash
    docker-compose up --build
    ```

### Accessing the App
-   **Frontend**: [http://localhost:2005](http://localhost:2005)
-   **Backend API**: [http://localhost:5001/api/items](http://localhost:5001/api/items)

---

## 🛠️ Project Structure
-   **`backend/`**: Node.js & Express server.
-   **`frontend/`**: Vanilla JS, CSS (Glassmorphism), and Vite.
-   **`docker-compose.yml`**: Orchestrates the multi-container setup.

## 💻 Manual Development (Alternative)

If you prefer to run it without Docker:

### 1. Start the Backend
```bash
cd simple-fullstack/backend
npm install
npm run dev
```

### 2. Run the Frontend
```bash
cd simple-fullstack/frontend
npm install
npm run dev
```

---

## ✨ Features
*   **Full CRUD**: Add and delete tasks seamlessly.
*   **Aesthetic UI**: Smooth animations, Google Fonts (Outfit), and a glassmorphism design.
*   **Local Persistence**: Syncs with `localStorage` for offline access.
*   **Docker Optimized**: Multi-stage builds for a lightweight frontend image using Nginx.
