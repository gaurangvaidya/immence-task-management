import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GetTaskList, Task } from '../task-list/types';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ToastrService } from 'ngx-toastr';
import { CommonResponse } from './types';

@Injectable({
  providedIn: 'root',
})
export class TaskListService {
  taskList$ = new BehaviorSubject<Task[]>([]);
  url = environment.URL + 'tasks';
  constructor(private httpClient: HttpClient, private toastr: ToastrService) {}

  getTaskList(order: number = 0): void {
    this.httpClient
      .get<GetTaskList>(this.url, { params: { order } })
      .subscribe((res) => {
        this.taskList$.next(res.data);
      });
  }

  deleteTask(id: number): void {
    this.httpClient
      .delete<CommonResponse<null>>(this.url + `/${id}`)
      .subscribe((res) => {
        this.toastr.success(res.message);
        this.getTaskList();
      });
  }

  createTask(task: any): void {
    this.httpClient
      .post<CommonResponse<null>>(this.url, task)
      .subscribe((res) => {
        this.toastr.success(res.message);
        this.getTaskList();
      });
  }
}
