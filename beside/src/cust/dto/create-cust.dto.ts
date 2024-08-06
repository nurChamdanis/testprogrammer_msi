import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CustDTO { 
    @IsString()
    kode: string;
 
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    telp: string;
}
