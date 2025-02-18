import { ApiProperty } from '@nestjs/swagger';
import { Column, Model, Table, DataType } from 'sequelize-typescript';

interface ExercisesCreationAttr {
  name: string;
  type: string;
  isWeight: boolean;
}

@Table({ tableName: 'exercises' })
export class Exercise extends Model<Exercise, ExercisesCreationAttr> {
  @ApiProperty({ example: '550e8400-e29b-41d4-a716-446655440000', description: 'UUID' })
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  uuid: string;

  @ApiProperty({ example: 'Отжимания', description: 'Название упражнения' })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  name: string;

  @ApiProperty({
    example: 'С собственным весом',
    description: 'Тип упражнения',
  })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  type: string;

  @ApiProperty({
    example: 'true',
    description: 'Определяет с отягощением упражнение или нет',
  })
  @Column({ type: DataType.BOOLEAN, allowNull: false })
  isWeight: boolean;
}
