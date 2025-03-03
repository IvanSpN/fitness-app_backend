import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WorkoutsService } from './workout.service';
import { CreateWorkoutDto } from './dto/create-workout.dto';
import { UpdateWorkoutDto } from './dto/update-workout.dto';
import { CreateWorkoutExerciseDto } from 'src/workout-exercise/dto/create-workout-exercise.dto';

@Controller('workouts')
export class WorkoutsController {
  constructor(private readonly workoutsService: WorkoutsService) {}

  @Post()
  create(@Body() dto: CreateWorkoutDto,) {
    return this.workoutsService.createWorkout(dto);
  }

  @Get()
  findAll() {
    return this.workoutsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') uuid: string) {
    return this.workoutsService.findOne(uuid);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWorkoutDto: UpdateWorkoutDto) {
    return this.workoutsService.update(+id, updateWorkoutDto);
  }

  @Delete(':uuid')
  async remove(@Param('uuid') uuid: string) {
    const result = await this.workoutsService.remove(uuid)
    return {message: 'Тренировка успешно удалена', data: result}
  }
}
