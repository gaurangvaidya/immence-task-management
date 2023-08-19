import { Module } from '@nestjs/common';
import { TasksController } from './controllers/tasks.controller';
import { TasksService } from './services/tasks.service';
import { PrimsaService } from '../primsa.service';

@Module({
  controllers: [TasksController],
  providers: [TasksService, PrimsaService],
})
export class TasksModule {}
