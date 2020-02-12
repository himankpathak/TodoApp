import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../action";
import { Input } from "semantic-ui-react";

const pushTask = (task, setTask, dispatch) => {
  if (task) {
    dispatch(addTodo(task));
    setTask("");
  } else {
    alert("Please enter a valid task");
  }
};

const AddTodo = ({ dispatch }) => {
  const [task, setTask] = useState("");
  return (
    <div style={{ padding: "2vw" }}>
      <Input
        action={{
          content: "Add Todo",
          icon: "add",
          onClick: () => pushTask(task, setTask, dispatch)
        }}
        value={task}
        placeholder="Enter a Todo.."
        onChange={e => setTask(e.target.value)}
        onKeyPress={e => {
          if (e.key === "Enter") {
            pushTask(task, setTask, dispatch);
          }
        }}
      />
    </div>
  );
};

export default connect()(AddTodo);
