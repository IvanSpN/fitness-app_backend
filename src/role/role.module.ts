import { Module } from '@nestjs/common';
import { RolesService } from './role.service';
import { RolesController } from './role.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Role } from './role.model';
import { User } from 'src/user/user.model';
import { UserRoles } from './user-role.model ';

@Module({
  controllers: [RolesController],
  providers: [RolesService],
  imports: [
    SequelizeModule.forFeature([Role, User, UserRoles])
  ]}
)
export class RolesModule {}
