/***
 * GOAL: CREATE METHOD TO GET INCOMPLETE TASKS
 * 1. Define getTaskTodo method
 * 2. Use the fiter to return use the incomplete task (arrow function)
 * 3. Test your work by running the script
 */
const tasks = {
  tasks: [
    { text: "Grocery shopping", completed: true },
    { text: "Clean ard", completed: false },
    { text: "Film course", completed: false },
  ],

  getTaskTodo() {
    return this.tasks.filter((task) => task.completed == false);
  },
};
console.log(tasks.getTaskTodo());
