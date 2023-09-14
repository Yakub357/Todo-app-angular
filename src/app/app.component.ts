import { Component, OnInit } from '@angular/core';
import { Task } from './shared/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private tasksService: TasksService) {}
}
