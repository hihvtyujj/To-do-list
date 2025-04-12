function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText === '') return;

  const taskList = document.getElementById('taskList');

  const li = document.createElement('li');
  li.innerHTML = `
    <span class="task-text">${taskText}</span>
    <div class="task-buttons">
      <button onclick="toggleComplete(this)">✔️</button>
      <button onclick="deleteTask(this)">❌</button>
    </div>
  `;

  taskList.appendChild(li);
  taskInput.value = '';
}

function toggleComplete(button) {
  const li = button.closest('li');
  li.classList.toggle('completed');
}

function deleteTask(button) {
  const li = button.closest('li');
  li.remove();
}
