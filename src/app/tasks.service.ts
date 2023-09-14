import { EventEmitter } from '@angular/core';
import { Task } from './shared/task.model';

export class TasksService {
  tasksChanged = new EventEmitter<Task[]>();
  taskStatusChanged = new EventEmitter<Task>();

  private tasks: Task[] = [
    new Task('Todo Task 1', 'toComplete'),
    new Task('Completed Task', 'completed'),
  ];

  getTasks() {
    return this.tasks.slice();
  }

  addTask(taskName: string) {
    this.tasks.push(new Task(taskName, 'toComplete'));
    this.tasksChanged.emit(this.tasks.slice());
  }

  updateStatus(id: number, status: 'completed' | 'toComplete') {
    this.tasks[id].status = status;
    this.taskStatusChanged.emit(this.tasks[id]);
  }

  deleteTask(id: number) {
    this.tasks.splice(id, 1);
    this.tasksChanged.emit(this.tasks.slice());
    this.taskStatusChanged.emit(this.tasks[id]);
  }
}
