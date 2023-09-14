import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskComponent } from './tasks/task/task.component';
import { TasksService } from './tasks.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InputFieldComponent,
    TasksComponent,
    TaskComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [TasksService],
  bootstrap: [AppComponent],
})
export class AppModule {}
