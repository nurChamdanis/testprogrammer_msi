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
exports.CustService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const m_customer_entity_1 = require("./entities/m_customer.entity");
let CustService = class CustService {
    constructor(custRepository) {
        this.custRepository = custRepository;
    }
    generateRandomString(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            result += characters.charAt(randomIndex);
        }
        return result;
    }
    async create_cust(createCustDto) {
        try {
            console.log(createCustDto);
            const cust = new m_customer_entity_1.M_customer();
            cust.kode = createCustDto.kode;
            cust.name = createCustDto.name;
            cust.telp = createCustDto.telp;
            const randomEmail = `${this.generateRandomString(10)}@example.com`;
            cust.email = randomEmail;
            await this.custRepository.save(cust);
            const savedCust = await this.custRepository.findOne({
                where: {
                    kode: cust.kode,
                    name: cust.name,
                },
            });
            return { status: 200, content: { msg: 'cust success', data: savedCust } };
        }
        catch (e) {
            return { status: 400, content: { msg: 'cust error', data: [] } };
        }
    }
};
exports.CustService = CustService;
exports.CustService = CustService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(m_customer_entity_1.M_customer)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CustService);
//# sourceMappingURL=cust.service.js.map