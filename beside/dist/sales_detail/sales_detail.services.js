"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesDescService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const t_sales_desc_entity_1 = require("./entities/t_sales_desc.entity");
let SalesDescService = class SalesDescService {
    constructor(salesDescRepository) {
        this.salesDescRepository = salesDescRepository;
    }
    async create(salesDetailDto) {
        try {
            console.log('Incoming salesDetailDto:', salesDetailDto);
            if (!salesDetailDto.item || typeof salesDetailDto.item !== 'string') {
                throw new Error('Invalid items: ' + salesDetailDto.item);
            }
            const sid = salesDetailDto.sales_id;
            const salesRecord = await this.salesDescRepository.query(`
                SELECT * FROM t_sales WHERE kode='${sid}' 
                `);
            console.log(salesRecord[0]['id ']);
            const sls_id = salesRecord[0]['id'];
            const items = JSON.parse(salesDetailDto.item);
            for (const item of items) {
                const sales_detail = new t_sales_desc_entity_1.T_Sales_desc();
                await this.salesDescRepository.query(`
                INSERT INTO t_sales_desc
                VALUES
                ($1, $2, $3, $4, $5, $6, $7, $8)
                `, [salesRecord[0]['id'], item.id_barang, item.harga, item.qty, item.discount_percent, item.discount_price, item.price_result, item.total]);
                console.log('Saving sales_detail:', sales_detail);
                try {
                    console.log('Successfully saved sales_detail:', sales_detail);
                }
                catch (saveError) {
                    console.error('Error saving sales_detail:', saveError);
                    throw new Error(`Failed to save item: ${JSON.stringify(item)}`);
                }
            }
            return {
                status: 200,
                message: 'Successfully created',
                data: [],
            };
        }
        catch (error) {
            console.error('Error creating Barang:', error.message || error);
            return {
                status: 400,
                message: 'Failed to create sales detail',
                data: [],
            };
        }
    }
    async getAllDetail(id) {
        try {
            const whereCondition = id === 0 ? 'WHERE de.sales_id = ' + id : '';
            const salesRecord = await this.salesDescRepository.query(`SELECT
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
            ${whereCondition}`);
            return {
                status: 200,
                message: 'Successfully retrieved sales details',
                data: salesRecord,
            };
        }
        catch (error) {
            console.error('Error retrieving sales details:', error.message || error);
            return {
                status: 400,
                message: 'Failed to retrieve sales detail',
                data: [],
            };
        }
    }
};
exports.SalesDescService = SalesDescService;
exports.SalesDescService = SalesDescService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(t_sales_desc_entity_1.T_Sales_desc)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SalesDescService);
//# sourceMappingURL=sales_detail.services.js.map