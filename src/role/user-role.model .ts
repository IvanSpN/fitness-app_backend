import { ApiProperty } from '@nestjs/swagger';
import { BelongsToMany, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from 'src/user/user.model';
import { Role } from './role.model';



@Table({ tableName: 'user_roles', createdAt: false, updatedAt: false })
export class UserRoles extends Model<UserRoles> {

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

  @ForeignKey(()=> Role)
  @Column({
    type: DataType.INTEGER
  })
  rolesUuid: number;

  @ForeignKey(()=> User)
  @Column({
    type: DataType.INTEGER,
  })
  userUuid: number;

}
