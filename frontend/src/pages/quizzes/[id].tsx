import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getQuizById, Quiz } from "../../services/quizzes.service";

export default function QuizDetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id || Array.isArray(id)) return;

    getQuizById(Number(id))
      .then((data) => setQuiz(data))
      .catch(() => setError("Failed to load quiz"))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!quiz) return <p>Quiz not found</p>;

  return (
    <div style={{ padding: "24px" }}>
      <h1>{quiz.title}</h1>

      {quiz.questions.map((q, index) => (
        <div key={q.id} style={{ marginBottom: "24px" }}>
          <h3>
            {index + 1}. {q.title}
          </h3>

          <p>
            <strong>Type:</strong> {q.type}
          </p>

          {q.type === "CHECKBOX" && q.options && (
            <ul>
              {q.options.map((opt: string, i: number) => (
                <li key={i}>{opt}</li>
              ))}
            </ul>
          )}

          {q.type === "BOOLEAN" && <p>Answer type: True / False</p>}
          {q.type === "TEXT" && <p>Answer type: Text input</p>}
        </div>
      ))}
    </div>
  );
}
