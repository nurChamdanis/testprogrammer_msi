import { SalesDescService } from "./sales_detail.services";
import { CreateSalesDetailDto } from "src/sales_detail/dto/create_sales_desc.dto";
export declare class SalesDescController {
    private salesService;
    constructor(salesService: SalesDescService);
    createSales(createSalesDescDto: CreateSalesDetailDto): Promise<any>;
    getSalesDetailAll(id: number): Promise<any>;
}
