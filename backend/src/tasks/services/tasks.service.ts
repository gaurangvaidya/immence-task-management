import { HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from '../dtos/create-task.dto';
import { OnlyMessageRespone } from '../../common/types';
import { PrimsaService } from '../../primsa.service';
import { ResponseHandler } from '../../common/response-handler';
import { GetTasksListResponseModel } from '../types';
import { FindOneParamDto } from '../../common/dtos/find-one.param.dto';
import { SortQueryDto } from '../../common/dtos/sort.query.dto';

@Injectable()
export class TasksService {
  constructor(private prismaService: PrimsaService) {}
  async createTask(createTaskDto: CreateTaskDto): Promise<OnlyMessageRespone> {
    const category = await this.prismaService.category.findFirst({
      where: { id: createTaskDto.categoryId },
    });
    if (!category) {
      throw new NotFoundException('Category Not Found');
    }

    await this.prismaService.task.create({
      data: {
        description: createTaskDto.description,
        name: createTaskDto.name,
        category_id: category.id,
      },
    });

    return ResponseHandler.success(
      null,
      HttpStatus.CREATED,
      'Created Task Successfully',
    );
  }

  async getTaskList(sortQueryDto: SortQueryDto): GetTasksListResponseModel {
    const data = await this.prismaService.task.findMany({
      ...(sortQueryDto.order === 0
        ? {}
        : {
            orderBy: {
              category: { name: sortQueryDto.order === 1 ? 'asc' : 'desc' },
            },
          }),
      select: {
        id: true,
        name: true,
        created: true,
        description: true,
        category: {
          select: {
            name: true,
          },
        },
      },
    });
    const dataToSent = data.map(
      ({
        id,
        name,
        created,
        category: { name: categoryName },
        description,
      }) => ({
        id,
        name,
        created: created.toISOString(),
        categoryName,
        description,
      }),
    );
    return ResponseHandler.success(dataToSent, HttpStatus.OK, '');
  }

  async deleteTask(
    findOneParamDto: FindOneParamDto,
  ): Promise<OnlyMessageRespone> {
    const category = await this.prismaService.task.findFirst({
      where: { id: findOneParamDto.id },
    });
    if (!category) throw new NotFoundException('Task Not Found');

    await this.prismaService.task.delete({ where: { id: category.id } });
    return ResponseHandler.success(
      null,
      HttpStatus.OK,
      'Task Deleted Successfully',
    );
  }
}
