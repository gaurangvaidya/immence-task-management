import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { GetTaskList, PageEvent, Task } from './types';
import { TableLazyLoadEvent, TableModule } from 'primeng/table';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { PaginateLimits } from '../common/constants';
import { TaskListService } from '../common/task-list.service';
import { ContextMenuModule } from 'primeng/contextmenu';
import { MenuItem, SortEvent } from 'primeng/api';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    TableModule,
    PaginatorModule,
    ContextMenuModule,
  ],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  items!: MenuItem[];
  selectedTask!: Task;
  constructor(private taskListService: TaskListService) {}
  ngOnInit(): void {
    this.items = [
      {
        label: 'Delete',
        command: () => this.deleteTask(this.selectedTask),
      },
    ];
    this.taskListService.taskList$.subscribe((res) => {
      this.tasks = res;
    });
  }

  deleteTask(task: Task): void {
    this.taskListService.deleteTask(task.id);
  }

  customSort(event: TableLazyLoadEvent): void {
    this.taskListService.getTaskList(event.sortOrder ?? 0);
  }
}
