# Quiz Builder

Quiz Builder is a full-stack web application for creating and managing custom quizzes with different types of questions.

This project was built as a technical assignment to demonstrate full-stack development skills, including backend API design and frontend integration.

---

## Tech Stack

### Frontend

- Next.js
- React
- TypeScript

### Backend

- NestJS
- TypeScript
- Prisma ORM
- SQLite

---

## Project Structure

```
quiz-builder/
├── frontend/   # Next.js frontend application
├── backend/    # NestJS backend API
└── README.md   # Root documentation
```

---

## Getting Started

### 1. Backend

```bash
cd backend
npm install
npm run start:dev
```

Backend runs on:

```
http://localhost:3001
```

---

### 2. Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:3000
```

---

## Documentation

- [Frontend README](./frontend/README.md)
- [Backend README](./backend/README.md)

---

## Features

- Create quizzes with multiple question types
- View all available quizzes
- View quiz details
- Delete quizzes
- Full frontend ↔ backend integration

---

## Code Quality

ESLint and Prettier are configured for basic code quality checks and consistent formatting.

Some rules are intentionally relaxed to allow faster development and focus on core functionality for this assignment.

---

## Notes

- Environment variables are not committed to the repository
- SQLite is used for local development simplicity
- The application is intended for local usage and demonstration purposes
