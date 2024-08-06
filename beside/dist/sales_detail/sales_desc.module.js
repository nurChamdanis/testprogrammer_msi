"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesDetailModule = void 0;
const common_1 = require("@nestjs/common");
const sales_detail_services_1 = require("./sales_detail.services");
const typeorm_1 = require("@nestjs/typeorm");
const t_sales_desc_entity_1 = require("./entities/t_sales_desc.entity");
const sales_detail_controller_1 = require("./sales_detail.controller");
let SalesDetailModule = class SalesDetailModule {
};
exports.SalesDetailModule = SalesDetailModule;
exports.SalesDetailModule = SalesDetailModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([t_sales_desc_entity_1.T_Sales_desc])],
        providers: [sales_detail_services_1.SalesDescService],
        exports: [sales_detail_services_1.SalesDescService],
        controllers: [sales_detail_controller_1.SalesDescController]
    })
], SalesDetailModule);
//# sourceMappingURL=sales_desc.module.js.map