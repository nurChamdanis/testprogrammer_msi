import { ProductService } from "./product.service";
import { CreateBarangDto } from "./dto/create_barang.dto";
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    filters(id: string): Promise<any>;
    create(createBarangDto: CreateBarangDto): Promise<any>;
    update(id: string, updateBarangDto: CreateBarangDto): Promise<any>;
    delete(id: string): Promise<any>;
}
