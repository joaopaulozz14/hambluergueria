import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, IsUrl, IsUUID } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Nome do produto',
    example: 'Hamburguer X-Bacon',
  })
  name: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Descrição do produto',
    example: 'Hamburguer bovino, bacon, queijo e salada',
  })
  description: string;
  @IsNumber({
    maxDecimalPlaces: 2,
  })
  @ApiProperty({
    description: 'Preço do produto',
    example: 19.99,
  })
  price: number;
  @IsUrl()
  @ApiProperty({
    description: 'Imagem do produto',
    example: 'https://localohost:2222',
  })
  image: string;

  @IsUUID()
  @ApiProperty({
    description: 'Id da categoria do produto',
    example: '08cf6bcd-9ce2-4d7b-8982-3b5b3fe601d5',
  })
  categoryId: string;
}
