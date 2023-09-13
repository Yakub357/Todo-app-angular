import { Component } from '@angular/core';
import { Todo } from '../models/Todo';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent {
  tasks: Todo[] = [
    { content: 'Wash the dishes', status: 'toComplete' },
    { content: 'Make the things', status: 'completed' },
    { content: 'Complete the coding', status: 'toComplete' },
  ];
}
