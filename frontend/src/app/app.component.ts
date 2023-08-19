import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgSwitch, NgSwitchDefault, NgSwitchCase } from '@angular/common';
import { CreateTaskComponent } from './create-task/create-task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { HttpClient } from '@angular/common/http';
import { GetTaskList, Task } from './task-list/types';
import { environment } from '../environments/environment';
import { TaskListService } from './common/task-list.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    NgSwitch,
    NgSwitchDefault,
    NgSwitchCase,
    RouterOutlet,
    CreateTaskComponent,
    TaskListComponent,
  ],
})
export class AppComponent implements OnInit {
  url = environment.URL;

  tasks: Task[] = [];
  constructor(private taskListService: TaskListService) {}
  ngOnInit(): void {
    this.taskListService.getTaskList();
  }
  title = 'frontend';
}
