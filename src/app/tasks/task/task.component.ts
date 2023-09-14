import { Component, Input, OnInit } from '@angular/core';
import { TasksService } from 'src/app/tasks.service';
import { Task } from 'src/app/shared/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  @Input() index: number = 0;
  task: Task;

  constructor(private tasksService: TasksService) {
    this.task = this.tasksService.getTasks()[this.index];
  }

  ngOnInit(): void {
    this.task = this.tasksService.getTasks()[this.index];
  }

  onToggle() {
    this.tasksService.updateStatus(
      this.index,
      this.task.status === 'toComplete' ? 'completed' : 'toComplete'
    );
  }

  onDelete() {
    this.tasksService.deleteTask(this.index);
  }
}
