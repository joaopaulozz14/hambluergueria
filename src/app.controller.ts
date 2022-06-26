import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('status')
@Controller('/api')
export class AppController {
  //O constructor serve para relacionar o service;
  //O service tem que estar no module e aqui no controller;
  //O private está acessível somente dentro dessa class;
  //Poderia ser public pra ser acessado fora dessa class;
  constructor(private readonly appService: AppService) {}

  //Os métodos são importados do nest;
  //@Get é uma chamada para ler dados;
  @Get('/world')
  getAppStatus(): string {
    return this.appService.getAppStatus();
  }
}
