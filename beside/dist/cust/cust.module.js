"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const cust_controller_1 = require("./cust.controller");
const m_customer_entity_1 = require("./entities/m_customer.entity");
const cust_service_1 = require("./cust.service");
let CustModule = class CustModule {
};
exports.CustModule = CustModule;
exports.CustModule = CustModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([m_customer_entity_1.M_customer])],
        providers: [cust_service_1.CustService],
        exports: [cust_service_1.CustService],
        controllers: [cust_controller_1.CustController]
    })
], CustModule);
//# sourceMappingURL=cust.module.js.map