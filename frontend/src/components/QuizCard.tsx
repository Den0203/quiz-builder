import Link from "next/link";
import styles from "./QuizCard.module.css";
import { QuizListItem } from "@/services/quizzes.service";

type QuizCardProps = {
  quiz: QuizListItem;
  onDelete: (id: number) => Promise<void>;
};

export default function QuizCard({ quiz, onDelete }: QuizCardProps) {
  return (
    <div className={styles.card}>
      <Link href={`/quizzes/${quiz.id}`} className={styles.link}>
        <h3>{quiz.title}</h3>
        <p>{quiz.questionsCount} questions</p>
      </Link>

      <button className={styles.delete} onClick={() => onDelete(quiz.id)}>
        🗑
      </button>
    </div>
  );
}
