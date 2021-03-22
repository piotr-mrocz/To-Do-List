import { Component } from '@angular/core';
import { Task } from './models/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 header = 'To co robimy?';
  
  constructor() {
    this.sortTasks();
  }
 
  tasks: Task[] = [
    {
      task: 'Siłownia',
      date: '22.03.2021',
      hour: '15:20',
      idDone: false,
    },
    {
      task: 'Nauka',
      date: '12.03.2021',
      hour: '18:20',
      idDone: true,
    },
    {
      task: 'Sprzątanie',
      date: '15.04.2022',
      hour: '10:15',
      idDone: false,
    },
    {
      task: 'Ugotować obiad',
      date: '12.05.2021',
      hour: '13:00',
      idDone: false,
    },
  ];

  showList(value) {
    this.tasks.push(value);
    this.sortTasks();
  }


  markAsDone(task: Task) {
    task.idDone = true;
    this.sortTasks();
  }


  deleteTask(task: Task) {
    this.tasks = this.tasks.filter( e => e !== task);
    this.sortTasks();
  }


  private sortTasks() {
    this.tasks = this.tasks.sort((a: Task, b: Task) =>
    a.idDone === b.idDone ? 0 : a.idDone ? 1 : -1);
  }

}
