import { Component, Output, EventEmitter } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css'],
})
export class InputFieldComponent {
  inputText: string = '';

  constructor(private tasksService: TasksService) {}

  addTask() {
    if (this.inputText !== '') {
      this.tasksService.addTask(this.inputText);
      this.inputText = '';
    }
  }

  onEnterKeyPressed(e: any) {
    if (e.key === 'Enter') {
      this.addTask();
    }
  }
}
