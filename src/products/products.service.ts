import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/service.prisma';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { handleErrorConstraintUnique } from 'src/utils/handle-error-unique.util';
import { FavoriteProductDto } from 'src/favorites/dto/favorite.dto';
import { User } from 'src/users/entities/users.entities';
import { Favorite } from 'src/favorites/entities/favorite.entity';
@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateProductDto): Promise<Product | void> {
    return this.prisma.product.create({ data: dto }).catch((error) => {
      throw new UnprocessableEntityException(error.message);
    });
  }

  findAll(): Promise<Product[]> {
    return this.prisma.product.findMany();
  }

  async verifyIdAndReturnProduct(id: string): Promise<Product> {
    const product: Product = await this.prisma.product.findUnique({
      where: { id },
    });

    if (!product) {
      throw new NotFoundException(`Entrada de id '${id}' não encontrada`);
    }

    return product;
  }

  findOne(id: string): Promise<Product> {
    return this.verifyIdAndReturnProduct(id);
  }

  async findUsersLiked(id: string) {
    const product: Product = await this.verifyIdAndReturnProduct(id);

    return this.prisma.favorite.findMany({
      where: { productName: product.name },
      select: {
        productName: true,
        user: { select: { id: true, email: true } },
      },
    });
  }

  async update(id: string, dto: UpdateProductDto) {
    await this.verifyIdAndReturnProduct(id);
    return this.prisma.product
      .update({ where: { id }, data: dto })
      .catch(handleErrorConstraintUnique);
  }

  async remove(id: string) {
    await this.verifyIdAndReturnProduct(id);
    return this.prisma.product.delete({ where: { id } });
  }

  async favorite(dto: FavoriteProductDto): Promise<Favorite> {
    const product: Product = await this.prisma.product.findUnique({
      where: { name: dto.productName },
    });

    if (!product) {
      throw new NotFoundException(
        `Produto de nome '${dto.productName}' não encontrado`,
      );
    }

    //Não está tipado com a entity User
    const user: User = await this.prisma.user.findUnique({
      where: { id: dto.userId },
    });

    if (!user) {
      throw new NotFoundException(
        `Usuário de id '${dto.userId}' não encontrado`,
      );
    }
    return this.prisma.favorite.create({ data: dto });
  }

  async unfav(id: string) {
    return this.prisma.favorite.delete({ where: { id } });
  }
}
