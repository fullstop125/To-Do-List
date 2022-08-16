/**
 * @param dragElement - the element that is being dragged
 * @param currentTask - the task that is currently in the column
 */
function dropElements(dragElement, currentTask) {
  const pastTask = currentTask;
  const pastCont = currentTask.parentNode;
  const newTask = dragElement;
  const newCont = dragElement.parentNode;
  pastCont.appendChild(newTask);
  newCont.appendChild(pastTask);
}

export default dropElements;