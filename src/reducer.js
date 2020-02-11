import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from "./action";

function mainReducer(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ],
        count: [state.count[0] + 1, state.count[1]]
      });
    case TOGGLE_TODO:
      return Object.assign({}, state, {
        todos: state.todos.map(todo => {
          if (todo.id === action.index) {
            console.log("hellozzz", todo.completed);
            return Object.assign({}, todo, {
              completed: !todo.completed
            });
          }
          return todo;
        }),
        count: [state.count[0] - 1, state.count[1] + 1]
      });
    case REMOVE_TODO:
      var arr = state.todos.filter(todo => todo.id !== action.index);
      return Object.assign({}, state, {
        todos: arr,
        count: [state.count[0], state.count[1] - 1]
      });
    default:
      return state;
  }
}

export default mainReducer;
