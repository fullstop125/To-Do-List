import './style.css';
import { displayMyList, setMyEventListeners } from './addRemove.js';
import storage from './localStorage.js';

let listData = [];

if (localStorage.getItem('todos')) {
  listData = JSON.parse(localStorage.getItem('todos'));
  displayMyList(listData);
  setMyEventListeners();
} else {
  storage(listData);
  displayMyList(listData);
  setMyEventListeners();
}
