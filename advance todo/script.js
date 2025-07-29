const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

let todos = [];

function renderTodos() {
  todoList.innerHTML = '';

  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';

    const textSpan = document.createElement('span');
    textSpan.innerText = todo;

    const btnGroup = document.createElement('div');

    // Update Button
    const updateBtn = document.createElement('button');
    updateBtn.className = 'btn btn-sm btn-secondary me-2';
    updateBtn.innerText = 'Update';

    updateBtn.addEventListener('click', () => {
      const newText = prompt('Update your todo:', todo);
      if (newText !== null && newText.trim() !== '') {
        todos[index] = newText.trim(); // Update the todo
        renderTodos(); // Refresh list
      }
    });

    // Delete Button
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-sm btn-danger';
    deleteBtn.innerText = 'Delete';

    deleteBtn.addEventListener('click', () => {
      todos.splice(index, 1);
      renderTodos();
    });

    // Append buttons and text
    btnGroup.appendChild(updateBtn);
    btnGroup.appendChild(deleteBtn);
    li.appendChild(textSpan);
    li.appendChild(btnGroup);
    todoList.appendChild(li);
  });
}

todoForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const newTodo = todoInput.value.trim();
  if (newTodo !== '') {
    todos.push(newTodo);
    todoInput.value = '';
    renderTodos();
  }
});
