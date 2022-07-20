import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/service.prisma';
import { User } from 'src/users/entities/users.entities';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import { LoginResponseDto } from './dto/login-response.dto';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async login(dto: LoginDto): Promise<LoginResponseDto> {
    const { email, password } = dto;
    //const email = dto.email;

    const user: User = await this.prisma.user.findUnique({ where: { email } });

    if (!user) {
      throw new NotFoundException(`Email ou senha inválidos`);
    }

    //O primeiro valor é a senha não criptografada, o segundo valor é a senha criptografada.
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw new NotFoundException(`Email ou senha inválidos`);
    }

    //Não retorna a senha, mesmo que esteja criptografada(Boas práticas)
    //A variável é uma referência aos dados;
    //Ele deleta a propriedade password;
    delete user.password;

    const token: string = this.jwtService.sign({ email });
    return { token, user };
  }
}
