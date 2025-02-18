import { Injectable } from '@nestjs/common';
import { CreateWorkoutDto } from './dto/create-workout.dto';
import { UpdateWorkoutDto } from './dto/update-workout.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Workout } from './workout.model';
import { WorkoutExercise } from 'src/workout-exercise/workout-exercise.model';

@Injectable()
export class WorkoutsService {
  constructor(
    @InjectModel(Workout) private workoutRepository: typeof Workout,
    @InjectModel(WorkoutExercise)
    private workoutExerciseRepository: typeof WorkoutExercise,
  ) {}

  async createWorkout(dto: CreateWorkoutDto) {
    const transaction = await this.workoutRepository.sequelize.transaction();
    const { exercises, ...createWorkoutDto } = dto;
    try {
      // Создаем тренировку
      const workout = await this.workoutRepository.create(createWorkoutDto, {
        transaction,
      });

      // Для каждого упражнения создаем запись в таблице workout_exercises
      for (const exerciseDto of exercises) {
        const exerciseData = { ...exerciseDto, workout_uuid: workout.uuid };
        await this.workoutExerciseRepository.create(exerciseData, {
          transaction,
        });
      }

      // Подтверждаем транзакцию
      await transaction.commit();
      return workout;
    } catch (error) {
      // В случае ошибки откатываем транзакцию
      await transaction.rollback();
      throw error;
    }
  }

  findAll() {
    return `This action returns all workouts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} workout`;
  }

  update(id: number, updateWorkoutDto: UpdateWorkoutDto) {
    return `This action updates a #${id} workout`;
  }

  remove(id: number) {
    return `This action removes a #${id} workout`;
  }
}
