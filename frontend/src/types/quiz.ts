export type QuestionType = "BOOLEAN" | "TEXT" | "CHECKBOX";

export type Question = {
  title: string;
  type: QuestionType;
  options?: string[];
  correctAnswer: boolean | string | string[];
};

export type CreateQuizPayload = {
  title: string;
  questions: Question[];
};
