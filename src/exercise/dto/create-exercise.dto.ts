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
    example: 'true',
    description: 'Упражнение с отягощением или нет',
  })
  readonly isWeight: boolean;
}
