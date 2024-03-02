# Task Scheduler

Task Scheduler is a lightweight JavaScript package that allows you to schedule and manage tasks with ease. It's suitable for scenarios where you need to execute functions after a specified delay.

## Installation

To install the Task Scheduler package, use the following npm command:

```bash
npm install task-scheduler

// Import the TaskScheduler class
const TaskScheduler = require('task-scheduler');

// Create a new instance of TaskScheduler
const scheduler = new TaskScheduler();

// Schedule a task to execute after 2000 milliseconds (2 seconds)
const task1Id = scheduler.scheduleTask(() => {
  console.log("Task 1 executed!");
}, 2000);

// Schedule another task to execute after 4000 milliseconds (4 seconds)
const task2Id = scheduler.scheduleTask(() => {
  console.log("Task 2 executed!");
}, 4000);

// Uncomment the line below to cancel a task by ID
// scheduler.cancelTask(task1Id);
# TaskScheduler API

## `scheduleTask(callback, delay)`

Schedules a task to execute the provided callback function after the specified delay.

- `callback`: The function to be executed.
- `delay`: The time delay (in milliseconds) before executing the task.

**Returns:** The unique ID of the scheduled task.

### Example:

```javascript
const scheduler = new TaskScheduler();

// Schedule a task to log a message after 2000 milliseconds
const taskId = scheduler.scheduleTask(() => {
  console.log("Task executed!");
}, 2000);

console.log("Task scheduled with ID:", taskId);


Feel free to customize the documentation further based on your specific implementation or additional features.
