import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WorkoutsService } from './workout.service';
import { CreateWorkoutDto } from './dto/create-workout.dto';
import { UpdateWorkoutDto } from './dto/update-workout.dto';
import { skipWorkout } from './dto/skipWorkout.dto';

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
  update(@Param('uuid') uuid: string, @Body() updateWorkoutDto: UpdateWorkoutDto) {
    return this.workoutsService.update(uuid, updateWorkoutDto);
  }
  @Patch(':uuid/toggle-skip')
  skipWorkout(@Param('uuid') uuid: string,) {
    return this.workoutsService.markSkipWorkout(uuid)
  }

  @Delete(':uuid')
  async remove(@Param('uuid') uuid: string) {
    const result = await this.workoutsService.remove(uuid)
    return {message: 'Тренировка успешно удалена', data: result}
  }
}
