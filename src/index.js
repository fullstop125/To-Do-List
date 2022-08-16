import './style.css';
import { displayMyList, setMyEventListeners } from './addRemove.js';
import storage from './localStorage.js';

let listData = [];

/* This is checking to see if there is a local storage item called todos. If there is, it will parse
the data and display it. If there is not, it will create a new local storage item called todos and
display it. */
if (localStorage.getItem('todos')) {
  listData = JSON.parse(localStorage.getItem('todos'));
  displayMyList(listData);
  setMyEventListeners();
} else {
  storage(listData);
  displayMyList(listData);
  setMyEventListeners();
}
