let todoData = [];
const addTodo = document.getElementById('addTodo');
const newTodo = document.getElementById('newTodo');
const clearTask = document.getElementById('clearTask');
const todoList = document.getElementById('todoList');
const taskCount = document.getElementById('taskCount');

/**
 * 取得 TodoList 清單
 *
 * @returns TodoList 清單
 */
function getTodoListContent() {
  let str = '';
  todoData.forEach(function (item) {
    str += `<li class="list-group-item">
      <div class="d-flex">
      <div class="form-check">
      <input type="checkbox" class="form-check-input" ${item.completed ? 'checked' : ''} data-action="complete" data-id="${item.id}">
      <label class="form-check-label ${item.completed ? 'completed' : ''}" data-action="complete" data-id="${item.id}"> ${item.title}</label>
      </div>
      <button type="button" class="close ml-auto" aria-label="Close">
      <span aria-hidden="true" data-action="remove" data-id="${item.id}">&times;</span>
      </button>
      </div>
      </li>`;
  })

  return str;
}

/**
 * 新增 TodoList 資料
 *
 */
function addTotoData() {
  if (newTodo.value.trim() !== '') {
    todoData.push({
      id: Math.floor(Date.now()),
      title: newTodo.value,
      completed: false,
    })
    todoList.innerHTML = getTodoListContent();
    taskCount.textContent = todoData.length;
    newTodo.value = '';
  }
}

/**
 * 清除所有 TodoList 任務資料
 *
 * @param {object} e Javascript MouseEvent
 */
function clearAllTotoData(e) {
  console.log('clearAllTotoData', e);
  e.preventDefault();
  todoData = [];
  todoList.innerHTML = '';
  taskCount.textContent = todoData.length;
}

/**
 * 移除單一 TodoList 任務資料
 *
 * @param {string} removeId 所要移除資料 id
 */
function removeTotoData(removeId) {
  let newIndex = 0;
  todoData.forEach(function (item, key) {
    if (removeId == item.id) {
      newIndex = key;
    }
  })
  todoData.splice(newIndex, 1);
  todoList.innerHTML = getTodoListContent();
  taskCount.textContent = todoData.length;
}

/**
 * 切換使用者所點擊 TodoList 資料狀態
 *
 * @param {string} checkId 點擊 TodoList item 資料 id
 */
function checkCompleteClcikHandle(checkId) {
  todoData.forEach(function (item) {
    if (checkId == item.id) {
      if (item.completed) {
        item.completed = false;
      } else {
        item.completed = true;
      }
    }
  })
  todoList.innerHTML = getTodoListContent();
  taskCount.textContent = todoData.length;
}

/**
 * 處理 TodoList Click Event
 *
 * @param {object} e Javascript MouseEvent
 */
function todoListClickHandle(e) {
  let actionStatus = e.target.dataset.action;
  if (actionStatus) {
    switch (actionStatus) {
      case 'remove':
        removeTotoData(e.target.dataset.id);
        break;
      case 'complete':
        checkCompleteClcikHandle(e.target.dataset.id);
        break;
      default:
        break;
    }
  }
}

addTodo.addEventListener('click', addTotoData);
clearTask.addEventListener('click', clearAllTotoData);
todoList.addEventListener('click', todoListClickHandle);

