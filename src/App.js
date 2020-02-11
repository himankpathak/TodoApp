import React from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { Container, Header, Icon } from "semantic-ui-react";

const App = () => {
  return (
    <Container fluid style={{ padding: "10vw", paddingTop: "4vw" }}>
      <Header as="h2" icon textAlign="center">
        <Icon name="code" circular />
        <Header.Content>Todo App</Header.Content>
      </Header>
      <Container
        fluid
        style={{
          textAlign: "center",
          paddingLeft: "5vw",
          paddingRight: "5vw"
        }}>
        <AddTodo />
        <TodoList />
      </Container>
    </Container>
  );
};

export default App;
