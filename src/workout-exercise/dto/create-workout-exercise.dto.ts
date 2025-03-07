export class CreateWorkoutExerciseDto {}
import { ApiProperty } from '@nestjs/swagger';

export class CreateExerciseDto {
  @ApiProperty({ example: 'Ожимания', description: 'Название упражнения' })
  readonly name: string;

  @ApiProperty({
    example: 'С собственным весом',
    description: 'Тип упражнения',
  })
  readonly type: string;

  @ApiProperty({
    example: '3',
    description: 'Количество подходов',
  })
  readonly sets: number;

  @ApiProperty({
    example: '10',
    description: 'Количество повторов в подходе',
  })
  readonly reps: number;

  @ApiProperty({
    example: '120',
    description: 'Вес используемый для отягощения',
  })
  readonly weight: number;
}
