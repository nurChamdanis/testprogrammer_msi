import { Injectable } from '@nestjs/common'; // Assuming you're using NestJS
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSalesDto } from './dto/create_sales.dto'; // Adjust the import path as necessary
import { T_Sales } from './entities/t_sales.entity'; // Adjust the import path as necessary
import { CreateSalesDetailDto } from '../sales_detail/dto/create_sales_desc.dto';

@Injectable()
export class SalesService {
    constructor(
        @InjectRepository(T_Sales)
        private readonly salesRepository: Repository<T_Sales>
    ) { }

    async create(salesDto: CreateSalesDto): Promise<any> {
        try { 
            const sales = new T_Sales();
            sales.kode = salesDto.kode 
            sales.tgl = salesDto.tgl 
            sales.cust_id = Number(salesDto.cust_id) 
            sales.subtotal = salesDto.subtotal 
            sales.diskon = salesDto.diskon 
            sales.ongkir = salesDto.ongkir 
            sales.total_bayar = salesDto.total_bayar
            console.log(sales);
            
            const saveSales = this.salesRepository.save(sales);
            // Make sure to await the save operation
            // const savedCust = await this.salesRepository.query(
            //     `
            //     SELECT * FROM t_sales WHERE kode = $1
            //     `,
            //     [salesDto.kode]  // Use parameterized query
            // );
            
            const savedCust = await this
            .salesRepository.findOne({
                where: {
                    kode: salesDto.kode.trim()
                }
            }); 

            if (!savedCust) {
                console.error('No customer found with the given kode.');
            }
            return { status: 200, content: { msg: 'sales success', data: savedCust } };
        } catch (e) {
            console.log(e.message);
            
            return { status: 400, content: { msg: 'sales error', data: [] } };
        }
    }

}
