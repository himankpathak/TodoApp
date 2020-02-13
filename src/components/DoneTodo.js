import React from "react";
import PropTypes from "prop-types";
import { Button, Grid } from "semantic-ui-react";
import { toggleTodo, removeTodo } from "../action";
import { useDispatch } from "react-redux";

const DoneTodo = ({ id, completed, text }) => {
  const dispatch = useDispatch();
  return completed ? (
    <li
      style={{
        textAlign: "left",
        wordBreak: "break-word",
        textDecoration: completed ? "line-through" : "none",
        padding: "5px",
        fontSize: "1.25rem"
      }}>
      <Grid columns={"equal"} verticalAlign={"middle"}>
        <Grid.Column>{text}</Grid.Column>
        <Grid.Column
          mobile={7}
          tablet={4}
          computer={4}
          style={{ padding: "12px" }}>
          <Button
            icon="cancel"
            floated="right"
            circular
            onClick={() => dispatch(removeTodo(id))}
            style={{ marginLeft: "10px" }}
          />
          <Button
            icon="arrow up"
            floated="right"
            circular
            onClick={() => dispatch(toggleTodo(id, [1, -1]))}
            style={{ marginLeft: "10px" }}
          />
        </Grid.Column>
      </Grid>
    </li>
  ) : null;
};

// PropTypes
DoneTodo.propTypes = {
  id: PropTypes.number.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default DoneTodo;
