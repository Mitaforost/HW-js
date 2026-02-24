const Task = require("./task");
const User = require("./user");

const task = new Task("Hi");
const user = new User(task);
user.do();
