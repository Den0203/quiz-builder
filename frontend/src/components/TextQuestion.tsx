import { Question } from "@/types/quiz";

type Props = {
  question: Question;
  onChange: (updated: Question) => void;
  onRemove: () => void;
};

export default function TextQuestion({ question, onChange, onRemove }: Props) {
  return (
    <div style={{ border: "1px solid #ccc", padding: 12, marginBottom: 12 }}>
      <input
        type="text"
        placeholder="Question title"
        value={question.title}
        onChange={(e) => onChange({ ...question, title: e.target.value })}
        style={{ width: "100%", marginBottom: 8 }}
      />

      <input
        type="text"
        placeholder="Correct answer"
        value={String(question.correctAnswer ?? "")}
        onChange={(e) =>
          onChange({ ...question, correctAnswer: e.target.value })
        }
        style={{ width: "100%", marginBottom: 8 }}
      />

      <button type="button" onClick={onRemove} style={{ color: "red" }}>
        Remove question
      </button>
    </div>
  );
}
