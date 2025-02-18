import { Module } from '@nestjs/common';
import { WorkoutExerciseService } from './workout-exercise.service';
import { WorkoutExerciseController } from './workout-exercise.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { WorkoutExercise } from './workout-exercise.model';

@Module({
  controllers: [WorkoutExerciseController],
  providers: [WorkoutExerciseService],
  exports: [WorkoutExerciseService],
  imports: [SequelizeModule.forFeature([WorkoutExercise])],
})
export class WorkoutExerciseModule {}
