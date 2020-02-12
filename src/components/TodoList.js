import React from "react";
import PropTypes from "prop-types";
import { Divider, Header, Icon } from "semantic-ui-react";

import Todo from "./Todo";
import { useSelector } from "react-redux";
import DoneTodo from "./DoneTodo";

const TodoList = () => {
  const todosnew = useSelector(state => state.todos);
  const count = useSelector(state => state.count);
  return (
    <div style={{ paddingRight: "20vw", paddingLeft: "20vw" }}>
      <Divider horizontal>
        <Header as="h3">
          <Icon name="pin" />
          ToDo
        </Header>
      </Divider>

      {count[0] ? (
        <ul>
          {todosnew.map(todo => (
            <Todo id={todo.id} key={todo.id} {...todo} />
          ))}
        </ul>
      ) : (
        <Header as="h4">All Todos Completed!</Header>
      )}

      {count[1] ? (
        <div style={{ paddingTop: "10px" }}>
          <Divider horizontal>
            <Header as="h3">
              <Icon name="check square outline" />
              Completed
            </Header>
          </Divider>
          <ul>
            {todosnew.map(todo => (
              <DoneTodo id={todo.id} key={todo.id} {...todo} />
            ))}
          </ul>
        </div>
      ) : (
        <br />
      )}
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
};

export default TodoList;
