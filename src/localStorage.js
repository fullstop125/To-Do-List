function storage(todoList) {
  localStorage.setItem('todos', JSON.stringify(todoList));
}

export default storage;