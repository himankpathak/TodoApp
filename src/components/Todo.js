import React from "react";
import PropTypes from "prop-types";
import { Button } from "semantic-ui-react";
import { toggleTodo } from "../action";
import { useDispatch } from "react-redux";

const Todo = ({ id, completed, text }) => {
  const dispatch = useDispatch();
  return completed ? null : (
    <li
      style={{
        textAlign: "left",
        textDecoration: completed ? "line-through" : "none",
        padding: "5px",
        fontSize: "1.25rem"
      }}>
      {text}
      <Button
        icon="check"
        circular
        onClick={() => dispatch(toggleTodo(id, [-1, 1]))}
        style={{ marginLeft: "20px" }}
      />
    </li>
  );
};

// PropTypes
Todo.propTypes = {
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
