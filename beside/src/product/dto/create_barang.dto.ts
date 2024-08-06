import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateBarangDto {
    @IsNotEmpty()
    @IsString()
    kode: string;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    harga: string;
}