import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { TablesService } from './tables.service';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';
import { Table } from './entities/table.entity';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard())
@ApiTags('tables')
@ApiBearerAuth()
@Controller('tables')
export class TablesController {
  constructor(private readonly tablesService: TablesService) {}

  @Post()
  @ApiOperation({
    summary: 'Criação de table',
  })
  create(@Body() dto: CreateTableDto) {
    return this.tablesService.create(dto);
  }

  @Get()
  @ApiOperation({
    summary: 'Listagem de table',
  })
  findAll(): Promise<Table[]> {
    return this.tablesService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Listagem de uma table',
  })
  findOne(@Param('id') id: string) {
    return this.tablesService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Atualização de uma table',
  })
  update(@Param('id') id: string, @Body() dto: UpdateTableDto) {
    return this.tablesService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Exclusão de uma table',
  })
  remove(@Param('id') id: string) {
    return this.tablesService.remove(id);
  }
}
