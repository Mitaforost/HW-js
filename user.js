class User {
  constructor(task) {
    this.task = task;
  }
  do() {
    this.task.run();
  }
}
module.exports = User;
