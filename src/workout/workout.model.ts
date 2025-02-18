import { ApiProperty } from '@nestjs/swagger';
import { Column, Model, Table, DataType } from 'sequelize-typescript';

interface WorkoutCreationAttr {
  user_uuid: string;
  type: string;
  intensity: string;
  date: string;
  isSkip: boolean;
  isDone: boolean;
}

@Table({ tableName: 'workouts' })
export class Workout extends Model<WorkoutCreationAttr> {
  @ApiProperty({
    example: '550e8400-e29b-41d4-a716-446655440000',
    description: 'UUID',
  })
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  uuid: string;

  @ApiProperty({
    example: 'C собственным весом',
    description: 'Тип тренировки',
  })
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  user_uuid: string;

  @ApiProperty({
    example: 'C собственным весом',
    description: 'Тип тренировки',
  })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  type: string;

  @ApiProperty({
    example: 'Легкая',
    description: 'Интенсивность тренировки',
  })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  intensity: string;

  @ApiProperty({
    example: '12.02.2025',
    description: 'Запланированная дата тренировки',
  })
  @Column({ type: DataType.DATE, allowNull: false })
  date: Date;

  @ApiProperty({
    example: 'true',
    description: 'Проущена ли тренировка',
  })
  @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: false })
  isSkip: boolean;

  @ApiProperty({
    example: 'true',
    description: 'Выполнена ли тренировка',
  })
  @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: false })
  isDone: boolean;
}
