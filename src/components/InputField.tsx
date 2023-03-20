import React, { useRef } from "react";
import "./styles.css";

const InputField = ({
  toDo,
  setToDo,
  handleSubmit,
}: {
  toDo: string;
  setToDo: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent) => void;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleSubmit(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        type="input"
        placeholder="Enter a task!"
        className="input__box"
        value={toDo}
        onChange={(e) => setToDo(e.target.value)}
      />
      <button type="submit" className="input__submit">
        Go!
      </button>
    </form>
  );
};

export default InputField;
