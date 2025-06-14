function getAllUserTodos() {
  const todoList = document.getElementById('todoList');
  todoList.innerHTML = '<li>Yuklanmoqda...</li>';

  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(todos => {
      todoList.innerHTML = '';
      if (todos.length === 0) {
        todoList.innerHTML = "<li>Hech qanday topshiriq topilmadi.</li>";
      } else {
        todos.forEach(todo => {
          const li = document.createElement('li');
          li.textContent = `User ${todo.userId}: ${todo.title} [${todo.completed ? '✅' : '❌'}]`;
          todoList.appendChild(li);
        });
      }
    })
    .catch(error => {
      console.error("Xatolik:", error);
      todoList.innerHTML = "<li>Xatolik yuz berdi.</li>";
    });
}

function getUserTodos() {
  const userId = document.getElementById('userId').value;
  const completed = document.getElementById('completed').value;
  const todoList = document.getElementById('todoList');
  todoList.innerHTML = '';

  if (!userId) {
    alert("Iltimos, userId kiriting!");
    return;
  }
  let url = `https://jsonplaceholder.typicode.com/todos?userId=${userId}`;
  if (completed === 'true' || completed === 'false') {
    url += `&completed=${completed}`;
  }

  fetch(url)
    .then(response => response.json())
    .then(todos => {
      if (todos.length === 0) {
        todoList.innerHTML = "<li>Hech qanday topshiriq topilmadi.</li>";
      } else {
        todos.forEach(todo => {
          const li = document.createElement('li');
          li.textContent = `${todo.title} [${todo.completed ? '✅' : '❌'}]`;
          todoList.appendChild(li);
        });
      }
    })
    .catch(error => {
      console.error("Xatolik:", error);
      todoList.innerHTML = "<li>Xatolik yuz berdi.</li>";
    });
}