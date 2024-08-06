import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
export class T_Sales {
    @PrimaryGeneratedColumn()
    id: number;

    @Column() 
    kode: string;
    
    @Column()
    tgl: string; 
    
    @Column()
    cust_id: number; 
    
    @Column()
    subtotal: string; 
    
    @Column() 
    diskon: string;
    
    @Column()  
    ongkir: string;
    
    @Column()   
    total_bayar: string;



    
}