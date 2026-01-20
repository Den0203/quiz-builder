const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

/* ================= TYPES ================= */

export type QuestionType = "BOOLEAN" | "TEXT" | "CHECKBOX";

export type Question = {
  id: number;
  title: string;
  type: QuestionType;
  options: string[] | null;
  correctAnswer: string | boolean | string[];
};

export type Quiz = {
  id: number;
  title: string;
  questions: Question[];
};

export type QuizListItem = {
  id: number;
  title: string;
  questionsCount: number;
};

/* ================= API ================= */

export async function getQuizzes(): Promise<QuizListItem[]> {
  const res = await fetch(`${API_URL}/quizzes`);
  if (!res.ok) throw new Error("Failed to fetch quizzes");
  return res.json();
}

export async function getQuizById(id: number): Promise<Quiz> {
  const res = await fetch(`${API_URL}/quizzes/${id}`);
  if (!res.ok) throw new Error("Failed to fetch quiz");
  return res.json();
}

export async function deleteQuiz(id: number): Promise<void> {
  const res = await fetch(`${API_URL}/quizzes/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Failed to delete quiz");
}
