const todoInput = document.getElementById("todoInput") as HTMLInputElement;
const addTodoBtn = document.getElementById("addTodoBtn") as HTMLButtonElement;
const todoList = document.getElementById("todoList") as HTMLUListElement;

let todos: string[] = [];

const renderTodos = () => {
  todoList.innerHTML = "";
  todos.forEach((todo) => {
    const todoItem = document.createElement("li");
    todoItem.classList.add("p-2", "border-b", "border-gray-400");
    todoItem.innerText = todo;
    todoList.appendChild(todoItem);
  });
};

addTodoBtn.addEventListener("click", () => {
  todos.push(todoInput.value);
  todoInput.value = "";
  renderTodos();
});

renderTodos();
