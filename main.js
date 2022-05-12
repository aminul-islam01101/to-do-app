/* eslint-disable no-plusplus */
const newTask = document.querySelector('#new-task');
const form = document.querySelector('form');
const incompleteUl = document.querySelector('#incomplete');
const completeUl = document.querySelector('#complete');

const createTask = function name(tasks) {
    const listItem = document.createElement('li');
    const checkBox = document.createElement('input');
    const label = document.createElement('label');

    label.innerText = tasks;
    checkBox.type = 'checkbox';

    listItem.appendChild(checkBox);
    listItem.appendChild(label);

    return listItem;
};

const incompleteBinding = function name(taskItem, doTask) {
    const checkBox = taskItem.querySelector('input[type="checkbox"]');
    checkBox.onchange = doTask;
};

const completeBinding = function name(taskItem, removeTask) {
    const deleteBtn = taskItem.querySelector('#button');
    deleteBtn.onclick = removeTask;
};

const deleteTask = function name() {
    const listItem = this.parentNode;
    completeUl.removeChild(listItem);
};

const completeTask = function name() {
    const listItem = this.parentNode;
    const deleteBtn = document.createElement('button');
    deleteBtn.type = 'button';
    deleteBtn.id = 'button';
    deleteBtn.innerText = 'Delete';
    listItem.appendChild(deleteBtn);
    const checkBox = document.querySelector('input[type ="checkbox"]');

    listItem.removeChild(checkBox);
    completeUl.appendChild(listItem);
    completeBinding(listItem, deleteTask);
};

const addTask = function name(event) {
    event.preventDefault();
    const listItem = createTask(newTask.value);
    incompleteUl.appendChild(listItem);
    newTask.value = '';

    incompleteBinding(listItem, completeTask);
};

for (let i = 0; i < incompleteUl.children.length; i++) {
    incompleteBinding(incompleteUl.children[i], completeTask);
}

for (let i = 0; i < completeUl.children.length; i++) {
    completeBinding(completeUl.children[i], deleteTask);
}
form.addEventListener('submit', addTask);
