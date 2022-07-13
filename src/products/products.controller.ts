import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Product } from './entities/product.entity';
import { FavoriteProductDto } from 'src/favorites/dto/favorite.dto';
import { Favorite } from 'src/favorites/entities/favorite.entity';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @ApiOperation({
    summary: 'Criação de produto',
  })
  create(@Body() dto: CreateProductDto) {
    return this.productsService.create(dto);
  }

  @Post('favorite')
  @ApiOperation({
    summary: 'Favoritar produto',
  })
  favorite(@Body() dto: FavoriteProductDto): Promise<Favorite> {
    return this.productsService.favorite(dto);
  }

  @Get()
  @ApiOperation({
    summary: 'Listagem de produto',
  })
  findAll(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  @Get(':id/users-liked')
  @ApiOperation({
    summary: 'Listagem de favoritos',
  })
  findUsersLiked(@Param('id') id: string) {
    return this.productsService.findUsersLiked(id);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Listagem de um produto',
  })
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Atualização de produto',
  })
  update(@Param('id') id: string, @Body() dto: UpdateProductDto) {
    return this.productsService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Exclusão de produto',
  })
  remove(@Param('id') id: string) {
    return this.productsService.remove(id);
  }

  @Delete('favorite/:id')
  @ApiOperation({
    summary: ' Desfavoritar produto',
  })
  unfav(@Param('id') id: string) {
    return this.productsService.unfav(id);
  }
}
