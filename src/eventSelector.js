import dropElements from './drag.js';
import checkIsComplete from './embedMyList.js';
import storage from './localStorage.js';
// eslint-disable-next-line import/no-cycle
import { addMyNewList, deleteMyList, clearMyList } from './addRemove.js';

/**
 * It takes the data from the DOM and stores it in the database
 */
function updateMyList() {
  const checkMyBoxElements = document.querySelectorAll('.checkbox');
  const descriptionElements = document.querySelectorAll('.task-description');

  const dataBase = [];
  for (let i = 0; i < checkMyBoxElements.length; i += 1) {
    dataBase.push({
      description: descriptionElements[i].value,
      completed: checkMyBoxElements[i].checked,
      id: i + 1,
    });
  }
  storage(dataBase);
}
const dragDropEventListener = () => {
  const dragDropMyElements = document.querySelectorAll('.to-do-Element');
  const container = document.querySelectorAll('.div-container');
  const dataDragDrop = Array.from(dragDropMyElements);
  const dataContainer = Array.from(container);

  let dragElement = null;

  dataDragDrop.forEach((element) => {
    element.setAttribute('draggable', 'true');
    element.addEventListener('dragstart', () => {
      dragElement = element;
    });
    element.addEventListener('dragend', () => {
      dragElement = null;
    });
  });
  dataContainer.forEach((container) => {
    container.addEventListener('dragover', (e) => {
      e.preventDefault();
    });
    container.addEventListener('dragenter', (e) => {
      e.preventDefault();
    });
    container.addEventListener('drop', () => {
      dropElements(dragElement, container.firstElementChild);
      updateMyList();
    });
  });
};
const listMyCompletedElements = () => {
  const checkMyBoxElements = document.querySelectorAll('.checkbox');
  const checkMyBoxData = Array.from(checkMyBoxElements);
  checkMyBoxData.forEach((element) => {
    element.addEventListener('change', (e) => {
      checkIsComplete(e);
      updateMyList();
    });
  });
};

const addNewElements = () => {
  const inputData = document.querySelector('.task-input');
  inputData.addEventListener('keypress', (e) => {
    if (
      e.key === 'Enter'
      && inputData.value !== ''
      && e.target.matches('.task-input')
    ) {
      addMyNewList();
      updateMyList();
    }
  });
};
const editMyListElements = () => {
  const listInput = document.querySelectorAll('.task-description');
  const listData = Array.from(listInput);

  listData.forEach((data) => {
    data.addEventListener('input', () => {
      updateMyList();
    });
  });
};
const deleteMyListElements = () => {
  const myLists = document.querySelectorAll('.icon-trash');
  const myListData = Array.from(myLists);
  myListData.forEach((myLists) => {
    myLists.addEventListener('click', (e) => {
      deleteMyList(e);
      updateMyList();
    });
  });
};
const deleteAllMyListElements = () => {
  const clearLists = document.querySelector('.clear-all-btn');
  clearLists.addEventListener('click', () => {
    clearMyList();
    updateMyList();
  });
};

export {
  addNewElements,
  editMyListElements,
  deleteMyListElements,
  deleteAllMyListElements,
  dragDropEventListener,
  listMyCompletedElements,
};
