import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/service.prisma';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';
import { Table } from './entities/table.entity';
import { handleErrorConstraintUnique } from 'src/utils/handle-error-unique.util';
@Injectable()
export class TablesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateTableDto): Promise<Table> {
    return this.prisma.table
      .create({ data: dto })
      .catch(handleErrorConstraintUnique);
  }
  async verifyIdAndReturnTable(id: string): Promise<Table> {
    const table: Table = await this.prisma.table.findUnique({ where: { id } });

    if (!table) {
      throw new NotFoundException(`Entrada de id '${id}' não encontrada`);
    }
    return table;
  }

  findAll(): Promise<Table[]> {
    return this.prisma.table.findMany();
  }

  findOne(id: string) {
    return this.verifyIdAndReturnTable(id);
  }

  async update(id: string, dto: UpdateTableDto) {
    await this.verifyIdAndReturnTable(id);

    return this.prisma.table
      .update({ where: { id }, data: dto })
      .catch(handleErrorConstraintUnique);
  }

  async remove(id: string) {
    await this.verifyIdAndReturnTable(id);

    return this.prisma.table.delete({ where: { id } });
  }
}
