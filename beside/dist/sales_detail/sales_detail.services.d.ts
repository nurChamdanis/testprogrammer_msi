import { CreateSalesDetailDto } from "src/sales_detail/dto/create_sales_desc.dto";
import { Repository } from "typeorm";
import { T_Sales_desc } from "./entities/t_sales_desc.entity";
export declare class SalesDescService {
    private readonly salesDescRepository;
    constructor(salesDescRepository: Repository<T_Sales_desc>);
    create(salesDetailDto: CreateSalesDetailDto): Promise<any>;
    getAllDetail(id: number): Promise<any>;
}
