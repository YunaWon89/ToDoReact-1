import { useState } from "react";
import PropTypes from "prop-types"

type Props = {
  addTask: (text: string) => void;
};

function NewTaskForm({ addTask }: Props) {
  const [text, setText] = useState("");
  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addTask(text);
            setText("");
          }
        }}
      />
    </header>
  );
}

NewTaskForm.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default NewTaskForm;
