import React from "react";
import { Divider, Header, Icon, Button } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import Todo from "./Todo";
import DoneTodo from "./DoneTodo";
import { removeAllTodo } from "../action";

const TodoList = () => {
  const todosnew = useSelector(state => state.todos);
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();
  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
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

          {count[1] > 1 ? (
            <Button
              animated="vertical"
              onClick={() => dispatch(removeAllTodo())}>
              <Button.Content visible>Clear All</Button.Content>
              <Button.Content hidden>
                <Icon name="cancel" />
              </Button.Content>
            </Button>
          ) : null}

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

export default TodoList;
