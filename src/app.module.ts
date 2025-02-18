import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ExercisesModule } from './exercise/exercise.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from './user/user.module';
import { RolesModule } from './role/role.module';
import { WorkoutsModule } from './workout/workout.module';
import { WorkoutExerciseModule } from './workout-exercise/workout-exercise.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env`,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      autoLoadModels: true,
      logging: false,
      synchronize: true,
      retryAttempts: 1,
      sync: {
        alter: true,
      },
    }),
    ExercisesModule,
    UsersModule,
    RolesModule,
    WorkoutsModule,
    WorkoutExerciseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
