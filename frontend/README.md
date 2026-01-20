# Quiz Builder — Frontend

Frontend application for the Quiz Builder project, built with Next.js and TypeScript.

---

## Tech Stack

- Next.js
- React
- TypeScript

---

## Setup

### 1. Install dependencies

```bash
npm install
```

---

### 2. Environment variables

Create a `.env.local` file in the `frontend` directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

---

### 3. Run the application

```bash
npm run dev
```

The application will be available at:

```
http://localhost:3000
```

---

## Pages

### `/quizzes`

- Displays a list of all quizzes
- Shows quiz title and number of questions
- Clickable quiz cards navigate to quiz details
- Allows deleting quizzes

### `/quizzes/[id]`

- Displays full quiz details
- Renders all questions in read-only mode

### `/create`

- Create a new quiz
- Supports question types:
  - Boolean (True / False)
  - Text input
  - Checkbox (multiple correct answers)

---

## Structure

```
src/
├── components/
├── pages/
├── services/
├── types/
```

---

## Notes

- Uses API services for backend communication
- Navigation handled via Next.js routing
- ESLint and Prettier are enabled for code quality
