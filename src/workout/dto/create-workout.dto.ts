import { ApiProperty } from '@nestjs/swagger';
import { CreateWorkoutExerciseDto } from 'src/workout-exercise/dto/create-workout-exercise.dto';

export class CreateWorkoutDto {
  @ApiProperty({
    example: '3422b448-2460-4fd2-9183-8000de6f8343',
    description: 'UUID пользователя',
  })
  readonly user_uuid: string;

  @ApiProperty({
    example: 'С собственным весом',
    description: 'Тип упражнения',
  })
  readonly type: string;
  @ApiProperty({
    example: 'Легкая',
    description: 'Интенсивность тренировки',
  })
  readonly intensity: string;

  @ApiProperty({
    example: '12.02.2025',
    description: 'Запланированная дата тренировки',
  })
  readonly date: string;

  @ApiProperty({
    example: 'true',
    description: 'Пропущена ли тренировка',
  })
  readonly isSkip: boolean;
  @ApiProperty({
    example: 'true',
    description: 'Выполнена ли тренировка',
  })
  readonly isDone: boolean;
  
  @ApiProperty({
    type: CreateWorkoutExerciseDto,
    isArray: true,
  })
  readonly exercises: CreateWorkoutExerciseDto[];
}
