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
exports.SalesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const t_sales_entity_1 = require("./entities/t_sales.entity");
let SalesService = class SalesService {
    constructor(salesRepository) {
        this.salesRepository = salesRepository;
    }
    async create(salesDto) {
        try {
            const sales = new t_sales_entity_1.T_Sales();
            sales.kode = salesDto.kode;
            sales.tgl = salesDto.tgl;
            sales.cust_id = Number(salesDto.cust_id);
            sales.subtotal = salesDto.subtotal;
            sales.diskon = salesDto.diskon;
            sales.ongkir = salesDto.ongkir;
            sales.total_bayar = salesDto.total_bayar;
            console.log(sales);
            const saveSales = this.salesRepository.save(sales);
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
        }
        catch (e) {
            console.log(e.message);
            return { status: 400, content: { msg: 'sales error', data: [] } };
        }
    }
};
exports.SalesService = SalesService;
exports.SalesService = SalesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(t_sales_entity_1.T_Sales)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SalesService);
//# sourceMappingURL=sales.service.js.map