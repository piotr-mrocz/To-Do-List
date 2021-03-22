import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-add-new-task-form',
  templateUrl: './add-new-task-form.component.html',
  styleUrls: ['./add-new-task-form.component.css']
})
export class AddNewTaskFormComponent {
  date: string;
  hour: string;
  taskName: string;
  @Output() tasksList = new EventEmitter();


 
  // set task date
  setDate(value: string) {
    this.date = value;
  }

  // set task time
  setHour(value: string) {
    this.hour = value;
  }

  // add new task to do
  addNewTask() {
      const task: Task = {
        task: this.taskName,
        date: this.date,
        hour: this.hour,
        idDone: false,
      };
      this.tasksList.emit(task);

      // clear value
      this.taskName = '';
    
  }
}
