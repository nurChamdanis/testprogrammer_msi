import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
export class M_barang {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    kode: string;
    
    @Column()
    name: string;
    
    @Column()
    harga: string;

    
}