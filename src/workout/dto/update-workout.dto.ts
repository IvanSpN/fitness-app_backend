import { PartialType } from '@nestjs/swagger';
import { CreateWorkoutDto } from './create-workout.dto';
import { CreateWorkoutExerciseDto } from 'src/workout-exercise/dto/create-workout-exercise.dto';

export class UpdateWorkoutDto extends PartialType(CreateWorkoutDto) {
  uuid: string;
  user_uuid: string;
  type: string;
  intensity: string;
  date: string;
  isSkip: true;
  isDone: false;
  deletedAt: string | null;
  createdAt: string;
  updatedAt: string;
  exercises?: CreateWorkoutExerciseDto[];
}
