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
exports.SalesDescController = void 0;
const common_1 = require("@nestjs/common");
const sales_detail_services_1 = require("./sales_detail.services");
const create_sales_desc_dto_1 = require("./dto/create_sales_desc.dto");
let SalesDescController = class SalesDescController {
    constructor(salesService) {
        this.salesService = salesService;
    }
    async createSales(createSalesDescDto) {
        return this.salesService.create(createSalesDescDto);
    }
    async getSalesDetailAll(id) {
        return this.salesService.getAllDetail(id);
    }
};
exports.SalesDescController = SalesDescController;
__decorate([
    (0, common_1.Post)('/save'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_sales_desc_dto_1.CreateSalesDetailDto]),
    __metadata("design:returntype", Promise)
], SalesDescController.prototype, "createSales", null);
__decorate([
    (0, common_1.Get)('/all/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SalesDescController.prototype, "getSalesDetailAll", null);
exports.SalesDescController = SalesDescController = __decorate([
    (0, common_1.Controller)('sales_detail'),
    __metadata("design:paramtypes", [sales_detail_services_1.SalesDescService])
], SalesDescController);
//# sourceMappingURL=sales_detail.controller.js.map