import { Question } from "@/types/quiz";

type Props = {
  question: Question;
  onChange: (updated: Question) => void;
  onRemove: () => void;
};

export default function BooleanQuestion({
  question,
  onChange,
  onRemove,
}: Props) {
  return (
    <div style={{ border: "1px solid #ccc", padding: 12, marginBottom: 12 }}>
      <input
        type="text"
        placeholder="Question title"
        value={question.title}
        onChange={(e) => onChange({ ...question, title: e.target.value })}
        style={{ width: "100%", marginBottom: 8 }}
      />

      <div>
        <label>
          <input
            type="radio"
            checked={question.correctAnswer === true}
            onChange={() => onChange({ ...question, correctAnswer: true })}
          />
          True
        </label>

        <label style={{ marginLeft: 16 }}>
          <input
            type="radio"
            checked={question.correctAnswer === false}
            onChange={() => onChange({ ...question, correctAnswer: false })}
          />
          False
        </label>
      </div>

      <button
        type="button"
        onClick={onRemove}
        style={{ marginTop: 8, color: "red" }}
      >
        Remove question
      </button>
    </div>
  );
}
