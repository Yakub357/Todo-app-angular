import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  @Input('task-content') content: string = '';
  @Input('task-status') status: 'completed' | 'toComplete' = 'toComplete';
}
