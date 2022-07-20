<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## API Hambluergueria

Projeto Desenvolvido em conjunto com a turma C013 da Blue EdTech. Desenvolvemos ele com o intuito de aprender os conceitos para trabalhar com Nest.js + Prisma.
Trabalhamos também com conceitos de autenticação, filtragem de buscas, documentação de projetos e bancos de dados relacionais.

## Pré-requisitos

- Node com versão superior ou igual ao 16.15.0 - <a href="https://nodejs.org/pt-br/download/" target="_blank">Node Download</a>
- NPM com versão superior ou igual ao 8.5.5 - <a href="https://www.npmjs.com/package/download" target="_blank">Npm Download</a>
- Nest.js com versão superior ou igual ao 8.5.5 - <a href="https://docs.nestjs.com/" target="_blank">Nest Download</a>
- PostgresSQL com versão superior ou igual ao 8.2.6 - <a href="https://www.postgresql.org/download/" target="_blank">PostgresSQL Download</a>

## Instalação

Clone esse projeto em seu computador com o comando (Chave SSH necessária):

```bash
$ git clone https://github.com/joaopaulozz14/hambluergueria.git
```

Acesse a pasta do projeto

```bash
$ cd hamburgueria
```

Instale as dependências com o seguinte comando

```bash
$ npm install
```

## Execução

Após ter instalado as dependências, use o seguinte comando para rodar o projeto em um servidor local:

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

Para conseguir trabalhar com o banco de dados você deverá criar um arquivo .env e adicionar uma url de conexão com seu Postgres local com a chave DATABASE_URL.

```bash
DATABASE_URL="postgresql://postgres:admin@localhost:5432/hamburgueria"
```

## Funcionalidades

Para acessar a lista de endpoints e funcionalidades da aplicação, acesse nossa documentação do <a href="">Swagger</a>, lá você poderá testar todas as rotas.

## Extensões

```bash
Nome: EditorConfig for VS Code
Link do Marketplace do VS: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
