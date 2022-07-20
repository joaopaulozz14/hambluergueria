import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/service.prisma';
import { Product } from 'src/products/entities/product.entity';
import { FavoriteProductDto } from './dto/favorite-product.dto';

@Injectable()
export class FavoritesService {
  constructor(private readonly prisma: PrismaService) {}
  favoriteProduct(dto: FavoriteProductDto) {
    const data: Prisma.FavoriteCreateInput = {
      user: {
        connect: {
          id: dto.userId,
        },
      },
      product: {
        connect: {
          name: dto.productName,
        },
      },
    };
    return this.prisma.favorite.create({ data });
  }

  async unfavoriteProduct(id: string) {
    return this.prisma.favorite.delete({ where: { id } });
  }

  getUserFavorites(id: string) {
    return this.prisma.favorite.findMany({ where: { id } });
  }
  getAllUserFavorites() {
    return this.prisma.favorite.findMany();
  }

  async getUserWhoFavoritedProduct(id: string) {
    const product: Product = await this.prisma.product.findUnique({
      where: { id },
    });

    if (!product) {
      throw new NotFoundException(`Entrada de ${id} não encontrada`);
    }

    return this.prisma.favorite.findMany({ where: { product: { id } } });
  }
}
