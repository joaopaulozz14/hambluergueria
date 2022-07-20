import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/service.prisma';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
import { handleErrorConstraintUnique } from 'src/utils/handle-error-unique.util';
@Injectable()
export class CategoriesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateCategoryDto): Promise<Category> {
    return this.prisma.category
      .create({ data: dto })
      .catch(handleErrorConstraintUnique);
  }

  findAll(): Promise<Category[]> {
    return this.prisma.category.findMany();
  }

  findOne(id: string): Promise<Category> {
    return this.prisma.category.findUnique({ where: { id: id } });
  }

  update(id: string, dto: UpdateCategoryDto): Promise<Category> {
    return this.prisma.category.update({ where: { id: id }, data: dto });
  }

  async remove(id: string) {
    await this.prisma.category.delete({ where: { id } });
  }
}
