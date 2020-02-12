import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addTodo } from "../action";
import { Input } from "semantic-ui-react";

const pushTask = (task, setTask, setErrorFlag, dispatch) => {
  if (task.trim()) {
    dispatch(addTodo(task));
    setTask("");
  } else {
    setErrorFlag(true);
  }
};

const AddTodo = ({ dispatch }) => {
  const [task, setTask] = useState("");
  const [errorFlag, setErrorFlag] = useState(false);
  useEffect(() => {
    if (task.trim()) {
      setErrorFlag(false);
    }
  }, [task]);

  return (
    <div style={{ padding: "2vw" }}>
      <Input
        action={{
          content: "Add Todo",
          icon: "add",
          onClick: () => pushTask(task, setTask, setErrorFlag, dispatch)
        }}
        value={task}
        error={errorFlag}
        placeholder="Enter a Todo.."
        onChange={e => setTask(e.target.value)}
        onKeyPress={e => {
          if (e.key === "Enter") {
            pushTask(task, setTask, setErrorFlag, dispatch);
          }
        }}
      />
    </div>
  );
};

export default connect()(AddTodo);
