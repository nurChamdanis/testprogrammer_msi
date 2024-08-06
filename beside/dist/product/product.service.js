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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const m_barang_entity_1 = require("./entities/m_barang.entity");
let ProductService = class ProductService {
    constructor(barangRepository) {
        this.barangRepository = barangRepository;
    }
    async filters(kode) {
        try {
            let res = null;
            if (kode == 0) {
                res = await this.barangRepository.find();
            }
            else {
                res = await this.barangRepository.findBy({
                    kode: String(kode)
                });
            }
            return {
                status: 200,
                message: 'Successfully created',
                data: res,
            };
        }
        catch (error) {
            console.error('Error creating Barang:', error);
            return {
                status: 500,
                message: 'Failed to create Barang',
                error: error.message,
            };
        }
    }
    async create(barangDto) {
        try {
            console.log(barangDto);
            const newBarang = this.barangRepository.create(barangDto);
            const savedBarang = await this.barangRepository.save(newBarang);
            return {
                status: 200,
                message: 'Successfully created',
                data: savedBarang,
            };
        }
        catch (error) {
            console.error('Error creating Barang:', error);
            return {
                status: 500,
                message: 'Failed to create Barang',
                error: error.message,
            };
        }
    }
    async update(id, barangDto) {
        try {
            console.log('Update method called with:', id, barangDto);
            const existingBarang = await this.barangRepository.findOne({
                where: { id: id }
            });
            if (!existingBarang) {
                return {
                    status: 404,
                    message: 'Barang not found',
                };
            }
            this.barangRepository.merge(existingBarang, barangDto);
            const updatedBarang = await this.barangRepository.save(existingBarang);
            return {
                status: 200,
                message: 'Successfully updated',
                data: updatedBarang,
            };
        }
        catch (error) {
            console.error('Error updating Barang:', error);
            return {
                status: 500,
                message: 'Failed to update Barang',
                error: error.message,
            };
        }
    }
    async delete(id) {
        try {
            console.log('Delete method called with ID:', id);
            const result = await this.barangRepository.delete(id);
            if (result.affected === 0) {
                return {
                    status: 404,
                    message: 'Barang not found',
                };
            }
            return {
                status: 200,
                message: 'Successfully deleted',
            };
        }
        catch (error) {
            console.error('Error deleting Barang:', error);
            return {
                status: 500,
                message: 'Failed to delete Barang',
                error: error.message,
            };
        }
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(m_barang_entity_1.M_barang)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProductService);
//# sourceMappingURL=product.service.js.map