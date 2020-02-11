import React from "react";
import PropTypes from "prop-types";
import { Button } from "semantic-ui-react";
import { toggleTodo, removeTodo } from "../action";
import { useDispatch } from "react-redux";

const DoneTodo = ({ id, completed, text }) => {
  const dispatch = useDispatch();
  return completed ? (
    <li
      style={{
        textAlignLast: "start",
        textDecoration: completed ? "line-through" : "none",
        padding: "5px",
        fontSize: "1.25rem"
      }}>
      {text}
      <Button
        icon="cancel"
        circular
        onClick={() => dispatch(removeTodo(id))}
        style={{ marginLeft: "20px" }}
      />
    </li>
  ) : null;
};

// PropTypes
DoneTodo.propTypes = {
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default DoneTodo;
