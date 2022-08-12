import './style.css';

const todoData = [
  {
    id: 1,
    text: 'Take out the trash',
    completed: true,
  },

  {
    id: 2,
    text: 'Grocery shopping',
    completed: false,
  },

  {
    id: 4,
    text: 'Clean gecko tank',
    completed: false,
  },

  {
    id: 3,
    text: 'Mow the lawn',
    completed: true,
  },
];

const listContent = document.querySelector('.list-data');

todoData.sort((a, b) => a.id - b.id);

todoData.forEach((item) => {
  const listItem = document.createElement('li');
  listItem.className = 'list-item';
  listItem.innerHTML = `
        <input type="checkbox" ${item.completed ? 'checked' : ''}>
        <span>${item.text}</span>
    `;
  listContent.appendChild(listItem);
});
