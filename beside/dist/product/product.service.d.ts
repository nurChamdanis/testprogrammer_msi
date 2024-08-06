import { Repository } from 'typeorm';
import { CreateBarangDto } from './dto/create_barang.dto';
import { M_barang } from './entities/m_barang.entity';
export declare class ProductService {
    private readonly barangRepository;
    constructor(barangRepository: Repository<M_barang>);
    filters(kode: number): Promise<any>;
    create(barangDto: CreateBarangDto): Promise<any>;
    update(id: number, barangDto: CreateBarangDto): Promise<any>;
    delete(id: number): Promise<any>;
}
