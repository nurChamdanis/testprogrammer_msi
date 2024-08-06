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
exports.CustController = void 0;
const common_1 = require("@nestjs/common");
const cust_service_1 = require("./cust.service");
let CustController = class CustController {
    constructor(custService) {
        this.custService = custService;
    }
    async register(req, res, body) {
        const auth = await this.custService.create_cust(body);
        res.status(auth.status).json(auth.content);
    }
};
exports.CustController = CustController;
__decorate([
    (0, common_1.Post)('save'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], CustController.prototype, "register", null);
exports.CustController = CustController = __decorate([
    (0, common_1.Controller)('cust'),
    __metadata("design:paramtypes", [cust_service_1.CustService])
], CustController);
//# sourceMappingURL=cust.controller.js.map