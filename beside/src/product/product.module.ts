import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { M_barang } from './entities/m_barang.entity';  
import { ProductController } from './product.controller';

@Module({
  imports: [TypeOrmModule.forFeature([M_barang])],
  providers: [ProductService],
  exports: [ProductService],
  controllers: [ProductController]
})
export class ProductModule {}
