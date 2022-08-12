function dropElements(dragElement, currentTask) {
  const pastTask = currentTask;
  const pastCont = currentTask.parentNode;
  const newTask = dragElement;
  const newCont = dragElement.parentNode;
  pastCont.appendChild(newTask);
  newCont.appendChild(pastTask);
}

export default dropElements;