import React from "react";
import PropTypes from "prop-types";
import { Button, Grid } from "semantic-ui-react";
import { toggleTodo } from "../action";
import { useDispatch } from "react-redux";

const Todo = ({ id, completed, text }) => {
  const dispatch = useDispatch();
  return completed ? null : (
    <li
      style={{
        textAlign: "left",
        wordBreak: "break-word",
        textDecoration: completed ? "line-through" : "none",
        padding: "5px",
        fontSize: "1.25rem"
      }}>
      <Grid columns={"equal"}>
        <Grid.Column>{text}</Grid.Column>
        <Grid.Column width={2}>
          <Button
            floated="right"
            icon="check"
            circular
            onClick={() => dispatch(toggleTodo(id, [-1, 1]))}
            style={{}}
          />
        </Grid.Column>
      </Grid>
    </li>
  );
};

// PropTypes
Todo.propTypes = {
  id: PropTypes.number.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
