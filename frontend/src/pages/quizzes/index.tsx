import { useEffect, useState } from "react";
import {
  getQuizzes,
  deleteQuiz,
  QuizListItem,
} from "@/services/quizzes.service";
import QuizCard from "@/components/QuizCard";

export default function QuizzesPage() {
  const [quizzes, setQuizzes] = useState<QuizListItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getQuizzes()
      .then(setQuizzes)
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = async (id: number) => {
    await deleteQuiz(id);
    setQuizzes((prev) => prev.filter((q) => q.id !== id));
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ padding: 24 }}>
      <h1>Quizzes</h1>

      {quizzes.length === 0 && <p>No quizzes yet</p>}

      {quizzes.map((quiz) => (
        <QuizCard key={quiz.id} quiz={quiz} onDelete={handleDelete} />
      ))}
    </div>
  );
}
