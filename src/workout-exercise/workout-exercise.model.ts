import { Exercise } from './../exercise/exercise.model';
import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  Model,
  Table,
  DataType,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { Workout } from 'src/workout/workout.model';

interface WorkoutExerciseCreationAttr {
  sets: number;
  reps: number;
  weight: number;
  workout_uuid: string;
  exercise_uuid: string;
}

@Table({ tableName: 'workout_exercises' })
export class WorkoutExercise extends Model<
  WorkoutExercise,
  WorkoutExerciseCreationAttr
> {
  @ApiProperty({
    example: '550e8400-e29b-41d4-a716-446655440000',
    description: 'UUID упражнения',
  })
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  uuid: string;

  // @ApiProperty({ example: 'Отжимания', description: 'Название упражнения' })
  // @Column({
  //   type: DataType.STRING,
  //   allowNull: false,
  // })
  // name: string;

  @ApiProperty({ example: '5', description: 'Количество подходов в упражнении' })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  sets: number;

  @ApiProperty({
    example: '10',
    description: 'Количество повторов в упражнении',
  })
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  reps: number;

  @ApiProperty({
    example: '100',
    description: 'Вес используемый в упражнении с отягощением',
  })
  @Column({ type: DataType.INTEGER, allowNull: false })
  weight: number;

  @ForeignKey(() => Workout)
  @Column({ type: DataType.UUID, allowNull: false })
  workout_uuid: string;
  @BelongsTo(() => Workout, {onDelete: 'CASCADE'})
  workout: Workout;

  @ForeignKey(() => Exercise)
  @Column({ type: DataType.UUID, allowNull: false })
  exercise_uuid: string;

  @BelongsTo(() => Exercise)
  exercise: Exercise;
}
