import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { FavoritesService } from './favorites.service';
import { FavoriteProductDto } from './dto/favorite-product.dto';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard())
@ApiTags('favorites')
@ApiBearerAuth()
@Controller('favorites')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Post()
  favoriteProduct(@Body() dto: FavoriteProductDto) {
    return this.favoritesService.favoriteProduct(dto);
  }

  @Delete('favorite/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: ' Desfavoritar produto',
  })
  @ApiBearerAuth()
  unfavoriteProduct(@Param('id') id: string) {
    return this.favoritesService.unfavoriteProduct(id);
  }

  @Get('user/:id')
  getUserFavorites(@Param('id') id: string) {
    return this.favoritesService.getUserFavorites(id);
  }

  @Get()
  @ApiOperation({
    summary: '  produto',
  })
  getAllUserFavorites() {
    return this.favoritesService.getAllUserFavorites();
  }
  @Get('product/:id')
  @ApiOperation({
    summary: 'Listar todos os usuários que favoritaram um determinado produto',
  })
  getUsersWhoFavoritedProduct(@Param('id') id: string) {
    return this.favoritesService.getUserWhoFavoritedProduct(id);
  }
}
