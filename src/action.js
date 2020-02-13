export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const REMOVE_ALL_TODO = "REMOVE_ALL_TODO";
let nextTodoId = 1;

export function addTodo(text) {
  return { type: ADD_TODO, id: nextTodoId++, text };
}
export function toggleTodo(index, payload) {
  return { type: TOGGLE_TODO, index, payload };
}
export function removeTodo(index) {
  return { type: REMOVE_TODO, index };
}
export function removeAllTodo() {
  return { type: REMOVE_ALL_TODO };
}
