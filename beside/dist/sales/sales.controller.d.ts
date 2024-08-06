import { SalesService } from "./sales.service";
import { CreateSalesDto } from "./dto/create_sales.dto";
export declare class SalesController {
    private salesService;
    constructor(salesService: SalesService);
    createSales(createSales: CreateSalesDto): Promise<any>;
}
