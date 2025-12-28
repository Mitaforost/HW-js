const newTask = {
  tasks: [
    {
      id: 1,
      name: "тест",
      description: "описание",
      order: 0,
    },
  ],
};

const TaskManager = {
  tasks: [],

  addTask(id, name, description, order) {
    this.tasks.push({
      id,
      name,
      description,
      order,
    });
  },

  removeTask(id) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  },

  updateTaskById(id, newName, newDescription, newOrder) {
    const task = this.tasks.find((task) => task.id === id);
    if (!task) return;

    if (newName !== undefined) task.name = newName;
    if (newDescription !== undefined) task.description = newDescription;
    if (newOrder !== undefined) task.order = newOrder;
  },

  sortByOrder() {
    this.tasks.sort((a, b) => a.order - b.order);
  },
};

// инициализация задач из newTask
TaskManager.tasks = [...newTask.tasks];

// последовательное применение всех методов
TaskManager.addTask(2, "вторая задача", "ещё описание", 2);
TaskManager.addTask(3, "третья задача", "доп. описание", 1);

TaskManager.updateTaskById(1, "обновлённый тест", "обновлённое описание", 3);

TaskManager.removeTask(2);

TaskManager.sortByOrder();

console.log(TaskManager.tasks);
