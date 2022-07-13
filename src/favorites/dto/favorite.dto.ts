import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class FavoriteProductDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Nome do produto que está sendo favoritado pelo usuário',
    example: 'X-Salada',
  })
  productName: string;

  @IsUUID()
  @ApiProperty({
    description: 'Id do usuário que está favoritando o produto',
    example: '78d2497e-38e4-43c8-b724-c6a99397269d',
  })
  userId: string;
}
