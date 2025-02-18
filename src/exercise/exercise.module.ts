import { Module } from '@nestjs/common';
import { ExercisesService } from './exercise.service';
import { ExercisesController } from './exercise.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Exercise } from './exercise.model';

@Module({
  controllers: [ExercisesController],
  providers: [ExercisesService],
  imports: [SequelizeModule.forFeature([Exercise])]
})
export class ExercisesModule {}
