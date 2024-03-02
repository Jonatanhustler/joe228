// Filename: task-scheduler.js

class TaskScheduler {
    constructor() {
      this.tasks = [];
    }
  
    scheduleTask(callback, delay) {
      const task = {
        id: Date.now(),
        callback,
        delay,
        timeoutId: null,
      };
  
      this.tasks.push(task);
      this._scheduleTimeout(task);
  
      return task.id;
    }
  
    cancelTask(taskId) {
      const taskIndex = this.tasks.findIndex((task) => task.id === taskId);
  
      if (taskIndex !== -1) {
        const task = this.tasks[taskIndex];
        clearTimeout(task.timeoutId);
        this.tasks.splice(taskIndex, 1);
        console.log(`Task with ID ${taskId} has been canceled.`);
      } else {
        console.log(`Task with ID ${taskId} not found.`);
      }
    }
  
    _scheduleTimeout(task) {
      task.timeoutId = setTimeout(() => {
        task.callback();
        this._removeTask(task.id);
      }, task.delay);
    }
  
    _removeTask(taskId) {
      const taskIndex = this.tasks.findIndex((task) => task.id === taskId);
  
      if (taskIndex !== -1) {
        this.tasks.splice(taskIndex, 1);
        console.log(`Task with ID ${taskId} has been completed.`);
      }
    }
  }
  
  // Example usage:
  const scheduler = new TaskScheduler();
  
  const task1Id = scheduler.scheduleTask(() => {
    console.log("Task 1 executed!");
  }, 2000);
  
  const task2Id = scheduler.scheduleTask(() => {
    console.log("Task 2 executed!");
  }, 4000);
  
  // Uncomment the line below to cancel a task by ID
  // scheduler.cancelTask(task1Id);
  