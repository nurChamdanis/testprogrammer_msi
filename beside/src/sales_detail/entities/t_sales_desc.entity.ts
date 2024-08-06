import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class T_Sales_desc {
    @PrimaryGeneratedColumn()
    sales_id: number;

    @Column()
    barang_id: string;
    
    @Column()
    harga_bandrol: string;
    
    @Column()
    qty: string;
    
    @Column()
    diskon_pct: string;
    
    @Column()
    diskon_nilai: string;
    
    @Column()
    harga_diskon: string;
    
    @Column()
    total: string;

    
}