import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepository: typeof User) {}
  create(CreateUserDto: CreateUserDto) {
    const user = this.userRepository.create(CreateUserDto);

  }

  findAll() {
    const users = this.userRepository.findAll();
    return users;
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new Error(`Пользователь с id=${id} не найден`);
    }
    return user;
  }

  async update(id: number, dto: UpdateUserDto) {
    const user = await this.userRepository.findByPk(id);

    if (!user) {
      throw new Error(`Пользователь с id=${id} не найден`);
    }
    await user.update(dto);

    return user;
  }

  async remove(id: number) {
    const user = await this.userRepository.findByPk(id);

    if (!user) {
      throw new Error(`Пользователь с id=${id} не найден`);
    }

    await user.destroy();

    return `Пользователь с id=${id} удалён`;
  }
}
