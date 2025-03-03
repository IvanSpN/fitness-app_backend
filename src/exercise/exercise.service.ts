import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Exercise } from './exercise.model';

@Injectable()
export class ExercisesService {
  constructor(
    @InjectModel(Exercise) private exerciseRepository: typeof Exercise,
  ) {}

  createExercise(dto: CreateExerciseDto) {
    const exercise = this.exerciseRepository.create(dto);
    return exercise;
  }

  findAll() {
    const exercises = this.exerciseRepository.findAll();
    return exercises;
  }

  findOne(id: number) {
    return `This action returns a #${id} exercise`;
  }

  update(id: number, updateExerciseDto: UpdateExerciseDto) {
    return `This action updates a #${id} exercise`;
  }

  async removeOne(uuid: string) {
    const exercise = await this.exerciseRepository.findByPk(uuid);
    if (!exercise) {
      throw new NotFoundException(`Упражнение с таким uuid:${uuid} не найдено`);
    }

    await exercise.destroy();
    return exercise;
  }
}
