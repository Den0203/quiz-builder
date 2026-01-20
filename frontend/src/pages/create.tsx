import { useState } from "react";
import { useRouter } from "next/router";
import QuestionForm from "@/components/QuestionForm";
import { CreateQuizPayload, Question } from "@/types/quiz";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export default function CreateQuizPage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [questions, setQuestions] = useState<Question[]>([]);

  const addQuestion = () => {
    setQuestions((prev) => [
      ...prev,
      {
        title: "",
        type: "BOOLEAN",
        correctAnswer: false,
      },
    ]);
  };

  const updateQuestion = (index: number, updated: Question) => {
    setQuestions((prev) => prev.map((q, i) => (i === index ? updated : q)));
  };

  const removeQuestion = (index: number) => {
    setQuestions((prev) => prev.filter((_, i) => i !== index));
  };

  const submit = async () => {
    if (!title.trim()) {
      alert("Quiz title is required");
      return;
    }

    if (questions.length === 0) {
      alert("Add at least one question");
      return;
    }

    const payload: CreateQuizPayload = {
      title,
      questions,
    };

    const res = await fetch(`${API_URL}/quizzes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      alert("Failed to create quiz");
      return;
    }

    router.push("/quizzes");
  };

  return (
    <main style={{ padding: 24, maxWidth: 800, margin: "0 auto" }}>
      <h1>Create Quiz</h1>

      <input
        type="text"
        placeholder="Quiz title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{
          width: "100%",
          padding: 8,
          marginBottom: 16,
        }}
      />

      {questions.map((q, index) => (
        <QuestionForm
          key={index}
          question={q}
          onChange={(updated) => updateQuestion(index, updated)}
          onRemove={() => removeQuestion(index)}
        />
      ))}

      <button type="button" onClick={addQuestion}>
        ➕ Add question
      </button>

      <br />
      <br />

      <button type="button" onClick={submit}>
        ✅ Create quiz
      </button>
    </main>
  );
}
