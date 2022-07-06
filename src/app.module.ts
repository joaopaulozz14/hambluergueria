import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { TablesModule } from './tables/tables.module';
//Importa o Module do nest
//O module é a central para relacionar o controller, o service;
@Module({
  imports: [UsersModule, ProductsModule, CategoriesModule, TablesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
