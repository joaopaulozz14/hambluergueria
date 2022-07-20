import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaModule } from 'src/prisma/module.prisma';
import { JwtModule } from '@nestjs/jwt';

@Module({
  //O register é a configuração do token(o segredo e o tempo)
  //O segredo é uma string que o token usa para criar o token
  imports: [
    PrismaModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '24h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
