import Link from "next/link";
import { useEffect, useState } from "react";
import {
  getQuizzes,
  deleteQuiz,
  QuizListItem,
} from "@/services/quizzes.service";

export default function QuizzesPage() {
  const [quizzes, setQuizzes] = useState<QuizListItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getQuizzes()
      .then(setQuizzes)
      .catch(() => setError("Failed to load quizzes"))
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = async (id: number) => {
    const confirmed = confirm("Delete this quiz?");
    if (!confirmed) return;

    try {
      await deleteQuiz(id);
      setQuizzes((prev) => prev.filter((q) => q.id !== id));
    } catch {
      alert("Failed to delete quiz");
    }
  };

  if (loading) return <p style={{ padding: 24 }}>Loading...</p>;
  if (error) return <p style={{ padding: 24 }}>{error}</p>;

  return (
    <main style={{ padding: 24, maxWidth: 800, margin: "0 auto" }}>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 24,
        }}
      >
        <h1>Quizzes</h1>
        <Link href="/create">➕ Create quiz</Link>
      </header>

      {quizzes.length === 0 && <p>No quizzes yet</p>}

      <ul style={{ listStyle: "none", padding: 0 }}>
        {quizzes.map((quiz) => (
          <li
            key={quiz.id}
            style={{
              border: "1px solid #ddd",
              padding: 16,
              borderRadius: 8,
              marginBottom: 12,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <Link href={`/quizzes/${quiz.id}`}>
                <strong>{quiz.title}</strong>
              </Link>
              <p style={{ margin: 0 }}>{quiz.questionsCount} questions</p>
            </div>

            <button
              onClick={() => handleDelete(quiz.id)}
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                fontSize: 18,
              }}
              title="Delete quiz"
            >
              🗑
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}
