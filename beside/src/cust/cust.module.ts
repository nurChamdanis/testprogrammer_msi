import { Module } from '@nestjs/common'; 
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { CustController } from './cust.controller';
import { M_customer } from './entities/m_customer.entity';
import { CustService } from './cust.service';

@Module({
  imports: [TypeOrmModule.forFeature([M_customer])],
  providers: [CustService],
  exports: [CustService],
  controllers: [CustController]
})
export class CustModule {}
