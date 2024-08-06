import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateSalesDetailDto {
    @IsNotEmpty()
    @IsString()
    sales_id: string;

    @IsNotEmpty()
    @IsString()
    item: string;
/*
    @IsNotEmpty()
    @IsString()
    harga_bandrol: string;

    @IsNotEmpty()
    @IsString()
    qty: string;

    @IsNotEmpty()
    @IsString()
    diskon_pct: string;
    
    @IsNotEmpty()
    @IsString()
    diskon_nilai: string;
    
    @IsNotEmpty()
    @IsString()
    harga_diskon: string;
    
    @IsNotEmpty()
    @IsString()
    total: string;
*/
}