import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { CreateTaskDto } from '../dtos/create-task.dto';
import { OnlyMessageRespone } from '../../common/types';
import { TasksService } from '../services/tasks.service';
import { GetTasksListResponseModel } from '../types';
import { FindOneParamDto } from '../../common/dtos/find-one.param.dto';
import { SortQueryDto } from '../../common/dtos/sort.query.dto';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}
  @Post()
  async createTask(
    @Body() createTaskDto: CreateTaskDto,
  ): Promise<OnlyMessageRespone> {
    return this.taskService.createTask(createTaskDto);
  }

  @Get()
  async getTaskList(
    @Query() sortQueryDto: SortQueryDto,
  ): GetTasksListResponseModel {
    return this.taskService.getTaskList(sortQueryDto);
  }

  @Delete('/:id')
  async deleteTask(
    @Param() findOneParamDto: FindOneParamDto,
  ): Promise<OnlyMessageRespone> {
    return this.taskService.deleteTask(findOneParamDto);
  }
}
