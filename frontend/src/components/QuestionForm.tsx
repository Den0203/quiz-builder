import { Question, QuestionType } from "@/types/quiz";
import BooleanQuestion from "./BooleanQuestion";
import TextQuestion from "./TextQuestion";
import CheckboxQuestion from "./CheckboxQuestion";

type Props = {
  question: Question;
  onChange: (updated: Question) => void;
  onRemove: () => void;
};

export default function QuestionForm({ question, onChange, onRemove }: Props) {
  const handleTypeChange = (type: QuestionType) => {
    if (type === question.type) return;

    // reset fields based on type
    if (type === "BOOLEAN") {
      onChange({
        title: question.title,
        type,
        correctAnswer: false,
      });
    }

    if (type === "TEXT") {
      onChange({
        title: question.title,
        type,
        correctAnswer: "",
      });
    }

    if (type === "CHECKBOX") {
      onChange({
        title: question.title,
        type,
        options: [],
        correctAnswer: [],
      });
    }
  };

  return (
    <div style={{ marginBottom: 16 }}>
      <select
        value={question.type}
        onChange={(e) => handleTypeChange(e.target.value as QuestionType)}
        style={{ marginBottom: 8 }}
      >
        <option value="BOOLEAN">Boolean</option>
        <option value="TEXT">Text</option>
        <option value="CHECKBOX">Checkbox</option>
      </select>

      {question.type === "BOOLEAN" && (
        <BooleanQuestion
          question={question}
          onChange={onChange}
          onRemove={onRemove}
        />
      )}

      {question.type === "TEXT" && (
        <TextQuestion
          question={question}
          onChange={onChange}
          onRemove={onRemove}
        />
      )}

      {question.type === "CHECKBOX" && (
        <CheckboxQuestion
          question={question}
          onChange={onChange}
          onRemove={onRemove}
        />
      )}
    </div>
  );
}
