import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  NgForm,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Category, GetCategoryResponseModel } from './types';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonResponse } from '../common/types';
import { TaskListService } from '../common/task-list.service';
import { GetTaskList } from '../task-list/types';

export class ErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}
@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    NgIf,
  ],
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss'],
})
export class CreateTaskComponent implements OnInit {
  categories: Category[] = [];
  taskNameFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[a-zA-Z]+$/),
  ]);

  taskDescriptionFormControl = new FormControl('', [Validators.required]);
  taskCategoryIdFormControl = new FormControl(1, [Validators.required]);
  matcher = new ErrorStateMatcher();
  url = environment.URL;

  constructor(
    private httpClient: HttpClient,
    private taskListService: TaskListService
  ) {}

  ngOnInit(): void {
    this.httpClient
      .get<GetCategoryResponseModel>(this.url + 'categories')
      .subscribe((res) => {
        this.categories = res.data;
      });
  }

  addTask(): void {
    const dataToSent = {
      categoryId: this.taskCategoryIdFormControl.value,
      name: this.taskNameFormControl.value,
      description: this.taskDescriptionFormControl.value,
    };

    this.taskListService.createTask(dataToSent);
  }
}
