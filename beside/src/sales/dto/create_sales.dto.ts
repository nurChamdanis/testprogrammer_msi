import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateSalesDto {
    @IsNotEmpty()
    @IsString()
    kode: string;

    @IsNotEmpty()
    @IsString()
    tgl: string;

    @IsNotEmpty()
    @IsString()
    cust_id: string;
   
    @IsNotEmpty()
    @IsString()
    subtotal: string;

    @IsNotEmpty()
    @IsString()
    diskon: string;

    @IsNotEmpty()
    @IsString()
    ongkir: string;
    
    @IsNotEmpty()
    @IsString()
    total_bayar: string;
    
}