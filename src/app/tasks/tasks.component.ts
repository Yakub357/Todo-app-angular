import { Component, Input, OnInit, OnChanges } from '@angular/core';
// import { Todo } from '../models/Todo';
import { Task } from '../shared/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  tasksCount: number = 0;
  completedTasksCount: number = 0;

  constructor(private tasksService: TasksService) {}

  ngOnInit(): void {
    this.tasks = this.tasksService.getTasks();
    this.tasksCount = this.tasksService.getTasks().length;
    this.completedTasksCount = this.tasksService
      .getTasks()
      .filter((tasksEl) => tasksEl.status === 'completed').length;

    // *Subscribing for the new tasks
    this.tasksService.tasksChanged.subscribe((tasks: Task[]) => {
      this.tasks = tasks;
      this.tasksCount = this.tasksService.getTasks().length;
    });

    this.tasksService.taskStatusChanged.subscribe((task: Task) => {
      this.completedTasksCount = this.tasksService
        .getTasks()
        .filter((tasksEl) => tasksEl.status === 'completed').length;
    });
  }
}
