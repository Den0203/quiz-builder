import { Question } from "@/types/quiz";

type Props = {
  question: Question;
  onChange: (updated: Question) => void;
  onRemove: () => void;
};

export default function CheckboxQuestion({
  question,
  onChange,
  onRemove,
}: Props) {
  const options = question.options ?? [];
  const correctAnswers = Array.isArray(question.correctAnswer)
    ? question.correctAnswer
    : [];

  const updateOption = (index: number, value: string) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    onChange({ ...question, options: updatedOptions });
  };

  const addOption = () => {
    onChange({
      ...question,
      options: [...options, ""],
    });
  };

  const removeOption = (index: number) => {
    const updatedOptions = options.filter((_, i) => i !== index);
    const updatedCorrect = correctAnswers.filter(
      (ans) => ans !== options[index],
    );

    onChange({
      ...question,
      options: updatedOptions,
      correctAnswer: updatedCorrect,
    });
  };

  const toggleCorrect = (value: string) => {
    const isSelected = correctAnswers.includes(value);

    onChange({
      ...question,
      correctAnswer: isSelected
        ? correctAnswers.filter((v) => v !== value)
        : [...correctAnswers, value],
    });
  };

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
        <strong>Options:</strong>

        {options.map((opt, index) => (
          <div key={index} style={{ marginTop: 4 }}>
            <input
              type="text"
              value={opt}
              placeholder={`Option ${index + 1}`}
              onChange={(e) => updateOption(index, e.target.value)}
            />

            <label style={{ marginLeft: 8 }}>
              <input
                type="checkbox"
                checked={correctAnswers.includes(opt)}
                onChange={() => toggleCorrect(opt)}
              />
              Correct
            </label>

            <button
              type="button"
              onClick={() => removeOption(index)}
              style={{ marginLeft: 8 }}
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      <button type="button" onClick={addOption} style={{ marginTop: 8 }}>
        Add option
      </button>

      <br />

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
