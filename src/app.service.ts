import { Injectable } from '@nestjs/common';

//Ele indica para o nest que essa função é um service, um recurso injetável
@Injectable()
export class AppService {
  getAppStatus(): string {
    return 'App running! Visit localhost:3333/docs for documentation';
  }
}
