import { Injectable } from '@nestjs/common';
import { User } from './entities/users.entities';
import { PrismaService } from 'src/prisma/service.prisma';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcryptjs';
import { UpdateUserDto } from './dto/update-user.dto';
@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}
  getAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  getById(id: string): Promise<User> {
    return this.prisma.user.findUnique({ where: { id: id } });
  }

  create(dto: CreateUserDto): Promise<User> {
    //hashSync não precisa do async e do await
    const hashedPassword = bcrypt.hashSync(dto.password, 8);
    const data: CreateUserDto = {
      name: dto.name,
      email: dto.email,
      password: hashedPassword,
    };
    return this.prisma.user.create({ data });
  }

  async delete(id: string) {
    await this.prisma.user.delete({ where: { id } });
  }

  update(id: string, dto: UpdateUserDto) {
    return this.prisma.user.update({ where: { id }, data: dto });
  }
}
