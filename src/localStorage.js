/**
 * It takes a todoList array and saves it to localStorage
 * @param todoList - The todo list that we want to save to local storage.
 */
function storage(todoList) {
  localStorage.setItem('todos', JSON.stringify(todoList));
}

export default storage;