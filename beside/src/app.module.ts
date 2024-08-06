import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScheduleModule } from '@nestjs/schedule'; 
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config';
import { TasksModule } from './tasks/tasks.module';
import { ProductModule } from './product/product.module'; 
import { SalesModule } from './sales/sales.module';
import { SalesDetailModule } from './sales_detail/sales_desc.module';
import { CustModule } from './cust/cust.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => configService.get('database'),
      inject: [ConfigService],
    }),
    ScheduleModule.forRoot(),
    AuthModule,
    UsersModule, 
    CustModule,
    TasksModule,
    ProductModule,
    SalesModule,
    SalesDetailModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
