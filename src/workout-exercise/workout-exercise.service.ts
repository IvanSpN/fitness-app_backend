import { Injectable } from '@nestjs/common';
import { CreateWorkoutExerciseDto } from './dto/create-workout-exercise.dto';
import { UpdateWorkoutExerciseDto } from './dto/update-workout-exercise.dto';
import { InjectModel } from '@nestjs/sequelize';
import { WorkoutExercise } from './workout-exercise.model';

@Injectable()
export class WorkoutExerciseService {
  constructor(
    @InjectModel(WorkoutExercise)
    private workoutExerciseRepository: typeof WorkoutExercise,
  ) {}

  async createExercise(createWorkoutExerciseDto: CreateWorkoutExerciseDto) {
    return this.workoutExerciseRepository.create(createWorkoutExerciseDto);
  }

  findAll() {
    return `This action returns all workoutExercise`;
  }

  findOne(id: number) {
    return `This action returns a #${id} workoutExercise`;
  }

  update(id: number, updateWorkoutExerciseDto: UpdateWorkoutExerciseDto) {
    return `This action updates a #${id} workoutExercise`;
  }

  remove(id: number) {
    return `This action removes a #${id} workoutExercise`;
  }
}
