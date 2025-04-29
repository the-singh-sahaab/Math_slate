# Math Magic Slate

Math Magic Slate is a web application that allows users to draw mathematical expressions or problems on a canvas, which are then analyzed and solved using AI (Google Gemini API). The project consists of a React + TypeScript frontend and a Python FastAPI backend.

---

## Features

- Draw math expressions, equations, or graphical problems on a digital slate.
- AI-powered recognition and solving of math problems, including variable assignments and graphical/word problems.
- Supports variable memory and assignment across multiple calculations.
- Interactive, draggable LaTeX-rendered answers on the canvas.
- Color swatches for drawing in different colors.

---

## Project Structure

```
Math_magic_slate/      # Frontend (React + Vite)
python_backend/        # Backend (FastAPI + Gemini API)
```

---

## Prerequisites

- Node.js (v18+ recommended)
- Python 3.10+
- [pip](https://pip.pypa.io/en/stable/)
- Google Gemini API Key

---

## Setup Instructions

### 1. Clone the Repository

```sh
git clone <your-repo-url>
cd <your-repo-folder>
```

---

### 2. Backend Setup (`python_backend`)

#### a. Install Python dependencies

```sh
cd python_backend
pip install -r requirements.txt
```

If `requirements.txt` does not exist, install manually:

```sh
pip install fastapi uvicorn python-dotenv google-generativeai pillow
```

#### b. Configure Environment Variables

Create a `.env` file in `python_backend/`:

```
GEMINI_API_KEY=your_google_gemini_api_key
```

#### c. Run the Backend Server

```sh
uvicorn main:app --reload
```

The backend will start at `http://localhost:8900`.

---

### 3. Frontend Setup (`Math_magic_slate`)

#### a. Install Node dependencies

```sh
cd ../Math_magic_slate
npm install
```

#### b. Configure API URL

Create a `.env.local` file in `Math_magic_slate/`:

```
VITE_API_URL=http://localhost:8900
```

#### c. Start the Frontend

```sh
npm run dev
```

The frontend will be available at `http://localhost:5173` (or as indicated in the terminal).

---

## Usage

1. Open the frontend in your browser.
2. Draw a math expression or problem on the canvas.
3. Select color swatches as needed.
4. Click **Calculate** to send the drawing to the backend for analysis.
5. The AI will process the image and display the result as a draggable LaTeX-rendered answer on the canvas.
6. Use **Reset** to clear the canvas and start over.

---

## File Overview

- [`src/screens/home/index.tsx`](src/screens/home/index.tsx): Main drawing and interaction logic.
- [`python_backend/main.py`](../python_backend/main.py): FastAPI server entry point.
- [`python_backend/apps/calculator/utlis.py`](../python_backend/apps/calculator/utlis.py): AI image analysis logic.
- [`python_backend/constants.py`](../python_backend/constants.py): Environment variable and config management.

---

## Customization

- To change the backend port or environment, edit [`python_backend/constants.py`](../python_backend/constants.py).
- To add more color swatches, edit [`src/constants.ts`](src/constants.ts).

---

## Troubleshooting

- Ensure both backend and frontend are running.
- Make sure the API URL in `.env.local` matches the backend address.
- Check browser console and terminal for errors.

---

## License

MIT

---

## Credits

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [FastAPI](https://fastapi.tiangolo.com/)
- [Google Gemini API](https://ai.google.dev/)
- [Mantine UI](https://mantine.dev/)
- [MathJax](https://www.mathjax.org/)
