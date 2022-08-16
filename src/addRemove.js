// eslint-disable-next-line import/no-cycle
import {
  addNewElements,
  editMyListElements,
  deleteMyListElements,
  deleteAllMyListElements,
  dragDropEventListener,
  listMyCompletedElements,
} from './eventSelector.js';

const createToDo = (todo) => {
  const divCont = document.createElement('div');
  const li = document.createElement('li');
  const checkMyClass = todo.completed === true ? 'marked' : '';
  const checkMyValue = todo.completed === true ? 'checked' : '';
  divCont.classList.add('div-container');
  li.classList.add('to-do-Element');

  li.innerHTML = `
  <label class = "task-label">
  <input type="checkbox" class="checkbox" ${checkMyValue}>
  <input type="text" class="task-description ${checkMyClass}" value="${todo.description}">
  <input type ="hidden" class ="" value = "${todo.id}">
  
  </label>
  <i class="icon-ellipsis-vertical"></i>
  <i class="icon-trash"></i>
  
  
  `;
  divCont.appendChild(li);
  return divCont;
};
function setMyEventListeners() {
  addNewElements();
  editMyListElements();
  deleteMyListElements();
  deleteAllMyListElements();
  dragDropEventListener();
  listMyCompletedElements();
}
const displayMyList = (todos) => {
  const listDisplay = document.querySelector('.list-data');
  todos.forEach((todo) => {
    const div = createToDo(todo);
    listDisplay.appendChild(div);
  });
};
function addMyNewList() {
  const inputData = document.querySelector('.task-input');
  const listDisplay = document.querySelector('.list-data');
  let listData = [];
  if (localStorage.getItem('todos')) {
    listData = JSON.parse(localStorage.getItem('todos'));
  }
  listData.push({ description: inputData.value, completed: false, id: listData.length + 1 });
  inputData.value = '';
  listDisplay.innerHTML = '';
  displayMyList(listData);
  setMyEventListeners();
}
function deleteMyList(e) {
  const listDisplay = document.querySelector('.list-data');
  const removeElement = e.target.parentNode.parentNode;
  listDisplay.removeChild(removeElement);
}
function clearMyList() {
  const listDisplay = document.querySelector('.list-data');
  const removeList = document.querySelectorAll('.marked');

  removeList.forEach((e) => {
    const removeElement = e.parentElement.parentElement.parentElement;
    listDisplay.removeChild(removeElement);
  });
}
export {
  addMyNewList, deleteMyList, clearMyList, setMyEventListeners, displayMyList,
};