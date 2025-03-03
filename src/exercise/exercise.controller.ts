import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExercisesService } from './exercise.service';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Упражнения')
@Controller('exercises')
export class ExercisesController {
  constructor(private readonly exercisesService: ExercisesService) {}

  @ApiOperation({summary: 'Добавление упражнения в базу'})
  @ApiResponse({ status: 200, description: 'Упражнение добавлено в базу', type: CreateExerciseDto })
  @Post()
  create(@Body() dto: CreateExerciseDto) {
    return this.exercisesService.createExercise(dto)
  }

  @Get()
  findAll() {
    return this.exercisesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.exercisesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExerciseDto: UpdateExerciseDto) {
    return this.exercisesService.update(+id, updateExerciseDto);
  }

  @ApiOperation({summary: 'Удаление упражнения из базы'})
  @ApiParam({ name: 'uuid', type: String, description: 'UUID упражнения' })
  @ApiResponse({ status: 200, description: 'Удалённое упражнение', type: CreateExerciseDto })
  @ApiResponse({ status: 404, description: 'Упражнение не найдено' })
  @Delete(':uuid')
  removeOne(@Param('uuid') uuid: string) {
    return this.exercisesService.removeOne(uuid);
  }
}
