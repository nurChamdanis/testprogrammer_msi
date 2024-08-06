import { Module } from '@nestjs/common';
import { SalesDescService } from './sales_detail.services';
import { TypeOrmModule } from '@nestjs/typeorm';  
import { T_Sales_desc } from './entities/t_sales_desc.entity';
import { SalesDescController } from './sales_detail.controller';

@Module({
    imports: [TypeOrmModule.forFeature([T_Sales_desc])],
    providers: [SalesDescService],
    exports: [SalesDescService],
    controllers: [SalesDescController]
})
export class SalesDetailModule { }
