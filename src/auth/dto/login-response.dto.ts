import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/users/entities/users.entities';

export class LoginResponseDto {
  @ApiProperty({
    description: 'Token gerado no login',
    example:
      'eyJhbGciOiJIUzM4NCIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.bQTnz6AuMJvmXXQsVPrxeQNvzDkimo7VNXxHeSBfClLufmCVZRUuyTwJF311JHuh',
  })
  token: string;

  @ApiProperty({
    description: 'Dados do usuário que realizou o login',
  })
  user: User;
}
