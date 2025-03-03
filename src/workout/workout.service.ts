import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateWorkoutDto } from './dto/create-workout.dto';
import { UpdateWorkoutDto } from './dto/update-workout.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Workout } from './workout.model';
import { WorkoutExercise } from 'src/workout-exercise/workout-exercise.model';
import { Exercise } from 'src/exercise/exercise.model';

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

  async findAll() {
    const workouts = await this.workoutRepository.findAll({
      include: [{
        model: WorkoutExercise,
        as: 'exercises',
      }]
    });
    return workouts;
  }

  findOne(uuid: string) {
    const workout = this.workoutRepository.findOne({ where: { uuid } });
    return workout;
  }

  update(id: number, updateWorkoutDto: UpdateWorkoutDto) {
    return `This action updates a #${id} workout`;
  }

 async remove(uuid: string) {

const workout = await this.workoutRepository.findByPk(uuid)

if (!workout){
  throw new NotFoundException(`Тренировка с ${uuid} не найдена`)
}

await this.workoutRepository.destroy({where: {uuid}})

return workout
  }
}
