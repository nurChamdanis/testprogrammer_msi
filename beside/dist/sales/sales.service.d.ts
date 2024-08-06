import { Repository } from 'typeorm';
import { CreateSalesDto } from './dto/create_sales.dto';
import { T_Sales } from './entities/t_sales.entity';
export declare class SalesService {
    private readonly salesRepository;
    constructor(salesRepository: Repository<T_Sales>);
    create(salesDto: CreateSalesDto): Promise<any>;
}
