import User from "./user.js";
import Task from "./task.js";

const task = new Task("Task is running!");
const user = new User(task);

user.do();
