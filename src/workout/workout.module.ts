import { Module } from '@nestjs/common';
import { WorkoutsService } from './workout.service';
import { WorkoutsController } from './workout.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Workout } from './workout.model';
import { WorkoutExercise } from 'src/workout-exercise/workout-exercise.model';
import { WorkoutExerciseModule } from 'src/workout-exercise/workout-exercise.module';

@Module({
  controllers: [WorkoutsController],
  providers: [WorkoutsService],
   imports: [
    WorkoutExerciseModule,
    SequelizeModule.forFeature([Workout, WorkoutExercise])]})
export class WorkoutsModule {}
