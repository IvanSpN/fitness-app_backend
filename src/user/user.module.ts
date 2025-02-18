import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { UsersService } from './user.service';
import { UsersController } from './user.controller';
import { User } from './user.model';
import { Role } from 'src/role/role.model';
import { UserRoles } from 'src/role/user-role.model ';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [SequelizeModule.forFeature([User, Role, UserRoles])],
})
export class UsersModule {}
