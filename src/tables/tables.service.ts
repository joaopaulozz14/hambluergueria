import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/service.prisma';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';
import { Table } from './entities/table.entity';
@Injectable()
export class TablesService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateTableDto): Promise<Table> {
    return this.prisma.table.create({ data: dto });
  }

  findAll(): Promise<Table[]> {
    return this.prisma.table.findMany();
  }

  findOne(id: string) {
    return this.prisma.table.findUnique({ where: { id } });
  }

  update(id: string, dto: UpdateTableDto) {
    return this.prisma.table.update({ where: { id }, data: dto });
  }

  remove(id: string) {
    return this.prisma.table.delete({ where: { id } });
  }
}
