import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateSalesDetailDto } from "src/sales_detail/dto/create_sales_desc.dto";
import { Repository } from "typeorm";
import { T_Sales_desc } from "./entities/t_sales_desc.entity";

@Injectable()
export class SalesDescService {
    constructor(
        @InjectRepository(T_Sales_desc)
        private readonly salesDescRepository: Repository<T_Sales_desc>
    ) { }

    async create(salesDetailDto: CreateSalesDetailDto): Promise<any> {
        try {
            // Log the incoming data
            console.log('Incoming salesDetailDto:', salesDetailDto);

            // Check if items is defined and is a string
            if (!salesDetailDto.item || typeof salesDetailDto.item !== 'string') {
                throw new Error('Invalid items: ' + salesDetailDto.item);
            }
            const sid = salesDetailDto.sales_id;
            // i need query raw from repositiory
            const salesRecord = await this.salesDescRepository.query(
                `
                SELECT * FROM t_sales WHERE kode='${sid}' 
                `   // Use parameterized query
            );
            
            console.log(salesRecord[0]['id ']);
            
            // Parse the items from JSON
            const sls_id = salesRecord[0]['id'];
            const items = JSON.parse(salesDetailDto.item);
            
            // Process each item
            for (const item of items) {
                const sales_detail = new T_Sales_desc();
                // console.log();
                // sales_detail.sales_id = Number();
                // sales_detail.barang_id = item.id_barang;
                // sales_detail.harga_bandrol = item.harga;
                // sales_detail.qty = item.qty;
                // sales_detail.diskon_pct = item.discount_percent;
                // sales_detail.diskon_nilai = item.discount_price;
                // sales_detail.harga_diskon = item.price_result;
                // sales_detail.total = item.total            ;

                await this.salesDescRepository.query(
                    `
                INSERT INTO t_sales_desc
                VALUES
                ($1, $2, $3, $4, $5, $6, $7, $8)
                `, [salesRecord[0]['id'], item.id_barang, item.harga, item.qty, item.discount_percent, item.discount_price, item.price_result, item.total]);
                // Log the item details before saving
                console.log('Saving sales_detail:', sales_detail);
                // await this.salesDescRepository.save(sales_detail);

                try {
                    // Save the sales detail
                    console.log('Successfully saved sales_detail:', sales_detail);
                } catch (saveError) {
                    console.error('Error saving sales_detail:', saveError);
                    throw new Error(`Failed to save item: ${JSON.stringify(item)}`);
                }
            }

            return {
                status: 200,
                message: 'Successfully created',
                data: [],
            };
        } catch (error) {
            console.error('Error creating Barang:', error.message || error);
            return {
                status: 400,
                message: 'Failed to create sales detail',
                data: [],
            };
        }
    }


    async getAllDetail(id: number): Promise<any> {
        try {
            // Prepare the condition for the WHERE clause based on the id
            const whereCondition = id === 0 ? 'WHERE de.sales_id = '+id : '';

            // Execute the query
            const salesRecord = await this.salesDescRepository.query(
                `SELECT
                    de.sales_id ,
                    ts.tgl ,
                    mc."name" ,
                    de.qty ,
                    ts.subtotal ,
                    ts.diskon ,
                    ts.ongkir  ,
                    ts.total_bayar
                FROM t_sales ts
                JOIN t_sales_desc de ON de.sales_id = ts.id
                JOIN m_customer mc ON mc.id = ts.cust_id
            ${whereCondition}`  // Use an empty array if id is 0, otherwise pass id
            );

            return {
                status: 200,
                message: 'Successfully retrieved sales details',
                data: salesRecord, // Return the actual records
            };
        } catch (error) {
            console.error('Error retrieving sales details:', error.message || error);
            return {
                status: 400,
                message: 'Failed to retrieve sales detail',
                data: [],
            };
        }
    }


}
