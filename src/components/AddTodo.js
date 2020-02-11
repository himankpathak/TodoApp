import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../action";
import { Input } from "semantic-ui-react";

const AddTodo = ({ dispatch }) => {
  const [task, setTask] = useState("");
  return (
    <div style={{ padding: "2vw" }}>
      <Input
        action={{
          content: "Add Todo",
          icon: "add",
          onClick: () => {
            dispatch(addTodo(task));
            setTask("");
          }
        }}
        value={task}
        placeholder="Enter a Todo.."
        onChange={e => setTask(e.target.value)}
      />
    </div>
  );
};

export default connect()(AddTodo);
