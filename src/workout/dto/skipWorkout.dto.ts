import { PartialType, PickType } from '@nestjs/swagger';
import { CreateWorkoutDto } from './create-workout.dto';
import { CreateWorkoutExerciseDto } from 'src/workout-exercise/dto/create-workout-exercise.dto';
import { UpdateWorkoutDto } from './update-workout.dto';

export class skipWorkout extends PickType(UpdateWorkoutDto, [
  'uuid',
  'isSkip',
]) {}
