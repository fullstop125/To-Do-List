import checkIsComplete from "./embedMyList.js";
import storage from "./localStorage.js";
import dropElements from "./drag.js";

function updateMyList () {
    const checkMyBoxElements = document.querySelectorAll('.checkbox');
    const descriptionElements = document.querySelectorAll('.description-text');
    const dataBase = [];
    for (let i = 0; i < checkMyBoxElements.length; i+=1){
        dataBase.push({
            completed : checkMyBoxElements[i].checked,
            description : descriptionElements[i].value,
            id : i + 1,
        });
    }
    storage(dataBase);
}
const dragDropEventListener = () => {
  const dragDropMyElements = document.querySelectorAll('.to-do-Element');
  const container = document.querySelector('.container');
  const dataDragDrop = Array.from(dragDropMyElements);
  const dataContainer = Array.from(container);

    let dragElement = null;

    dataDragDrop.forEach((element) => {
    element.setAttribute('draggable', 'true');
    element.addEventListener('dragstart', () => {
        dragElement = element;
    }
    );
    element.addEventListener('dragend', () => {
        dragElement = null;
    }
    );
 }
  );
 dataContainer.forEach((container) => {
    container.addEventListener('dragover', (e) => {
        e.preventDefault();
    }
    );
    container.addEventListener('dragenter', (e) => {
        e.preventDefault(); 
    }
    );
    container.addEventListener('drop', () => {
        dropElements(dragElement, container.firstElementChild);
        updateMyList();
    }
    );
 }
 );
}
const listMyCompletedElements = () => {
    const checkMyBoxElements = document.querySelectorAll('.checkbox');
    const checkMyBoxData = Array.from(checkMyBoxElements);
    checkMyBoxData.forEach((element) => {
        element.addEventListener('change', (e) => {
            checkIsComplete(e) ;
            updateMyList();
        }
        );
    }
    );
}

const addNewElements = () => {
    const inputData = document.querySelector('.task-input');
    inputData.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && input.value !== '' && e.target.matches('.task-input') ){
            addNewData();
            updateMyList();
        }
    } ); 
} 
const editMyListElements = () => {
    const listInput = document.querySelectorAll('.description-text');
    const listData = Array.from(listInput);

    listData.forEach((data) => {
        data.addEventListener('input', () => {
            updateMyList();
        }
        );
    }
    );
}
const deleteMyListElements = () => {
    const myLists = document.querySelectorAll('.trash-icon');
    const myListData = Array.from(myLists);
    myListData.forEach((myLists) => {
        myLists.addEventListener('click', (e) => {
            deleteList(e);
            updateMyList();
        }
        );
    }
    );
}
 const deleteAllMyListElements = () => {
    const clearLists = document.querySelector('.clear-all-btn');
    clearLists.addEventListener('click', () => {
        deleteAllList();
        updateMyList();
    }
    );
}

export {addNewElements, editMyListElements, deleteMyListElements, deleteAllMyListElements, dragDropEventListener , listMyCompletedElements};