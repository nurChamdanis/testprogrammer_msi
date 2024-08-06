import { Repository } from 'typeorm';
import { M_customer } from './entities/m_customer.entity';
import { CustDTO } from './dto/create-cust.dto';
export declare class CustService {
    private readonly custRepository;
    constructor(custRepository: Repository<M_customer>);
    private generateRandomString;
    create_cust(createCustDto: CustDTO): Promise<Record<string, any>>;
}
