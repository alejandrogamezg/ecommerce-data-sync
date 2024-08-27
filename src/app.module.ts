import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { ItemsModule } from './items/items.module';
import { Item } from './items/entities/item.entity';
import { OrdersModule } from './orders/orders.module';
import { Order } from './orders/entities/order.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'sql5.freesqldatabase.com',
      port: 3306,
      username: 'sql5728164',
      password: 'H5CUj4Cvtk',
      database: 'sql5728164',
      entities: [User,Item, Order],
      synchronize: true,
    }),
    UsersModule,
    ItemsModule,
    OrdersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}