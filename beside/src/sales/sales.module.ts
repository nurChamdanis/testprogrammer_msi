import { Module } from '@nestjs/common';
import { SalesService } from './sales.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { T_Sales } from './entities/t_sales.entity';  
import { SalesController } from './sales.controller';

@Module({
  imports: [TypeOrmModule.forFeature([T_Sales])],
  providers: [SalesService],
  exports: [SalesService],
  controllers: [SalesController]
})
export class SalesModule {}
