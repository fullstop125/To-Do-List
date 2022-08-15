/**
 * It adds or removes a class from the next sibling of the element that was clicked
 * @param e - the event object
 */
function checkIsComplete(e) {
  e.target.completed = e.target.checked;
  if (e.target.completed === true) {
    e.currentTarget.nextElementSibling.classList.add('marked');
  } else {
    e.currentTarget.nextElementSibling.classList.remove('marked');
  }
}

export default checkIsComplete;