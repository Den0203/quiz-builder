# Quiz Builder — Backend

Backend API for the Quiz Builder project, built with NestJS, Prisma, and SQLite.

---

## Tech Stack

- Node.js
- NestJS
- TypeScript
- Prisma ORM
- SQLite

---

## Setup

### 1. Install dependencies

```bash
npm install
```

---

### 2. Environment variables

Create a `.env` file in the `backend` directory:

```env
DATABASE_URL="file:./dev.db"
PORT=3001
```

---

### 3. Prisma setup

Generate Prisma client and apply migrations:

```bash
npx prisma generate
npx prisma migrate dev
```

---

### 4. Run the server

```bash
npm run start:dev
```

The API will be available at:

```
http://localhost:3001
```

---

## API Endpoints

### Create quiz

```
POST /quizzes
```

### Get all quizzes

```
GET /quizzes
```

Returns quiz title and number of questions.

### Get quiz by ID

```
GET /quizzes/:id
```

Returns full quiz details including all questions.

### Delete quiz

```
DELETE /quizzes/:id
```

---

## Notes

- CORS is enabled for frontend communication
- SQLite is used for local development
- Environment files are excluded from version control
