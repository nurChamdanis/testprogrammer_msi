import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
@Unique(['email'])
export class M_customer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    kode: string;

    @Column()
    name: string;

    @Column()
    telp: string; 
  
    @Column()
    email: string; 
  
}