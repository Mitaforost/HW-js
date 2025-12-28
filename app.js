const ToDoList = {
  tasks: [],
  addTask(title, id, priority) {
    this.tasks.push({
      title,
      id,
      priority,
    });
  },
  removeTask(id) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  },
  updateTaskById(id, newTitle, newPriority) {
    const task = this.tasks.find((task) => task.id === id);
    if (!task) return;
    if (newTitle !== undefined) {
      task.title = newTitle;
    }
    if (newPriority !== undefined) {
      task.priority = newPriority;
    }
  },
  sortByPriority() {
    this.tasks = this.tasks.sort((a, b) => a.priority - b.priority);
  },
};
ToDoList.addTask("Помыть посуду", 1, 3);
ToDoList.addTask("Купить хлеб", 2, 1);
ToDoList.addTask("Сделать домашку", 3, 2);

ToDoList.updateTaskById(1, "Помыть посуду и кухню", 1);
ToDoList.removeTask(2);
ToDoList.sortByPriority();

console.log(ToDoList.tasks);
