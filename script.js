// 1. Получаем нужные элементы
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

// 2. Обработчик кнопки "Добавить"
addTaskBtn.addEventListener('click', function () {
  const taskText = taskInput.value.trim(); // убираем лишние пробелы

  if (taskText === '') {
    alert('Введите задачу!');
    return;
  }

  // 3. Создаем элементы
  const li = document.createElement('li');
  li.textContent = taskText;

  // 4. Кнопка удаления
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Удалить';
  deleteBtn.addEventListener('click', function () {
    li.remove(); // удаляем задачу при клике
  });

  // 5. Добавляем кнопку внутрь li и li в список
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  // 6. Очищаем поле
  taskInput.value = '';
});
