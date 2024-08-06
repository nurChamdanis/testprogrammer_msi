import { Body, Controller, Get, Param, Post } from "@nestjs/common";  
import { ProductService } from "./product.service"; 
import { CreateBarangDto } from "./dto/create_barang.dto";

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) { }
    
    @Get('/find/:id')
    filters(@Param('id') id: string) {
        return this.productService.filters(Number(id));
    }

    @Post('/save')
    create(@Body() createBarangDto: CreateBarangDto) {
        return this.productService.create(createBarangDto); 
    }

    @Post('/update/:id')
    update(@Param('id') id: string, @Body() updateBarangDto: CreateBarangDto) {
        return this.productService.update(Number(id), updateBarangDto);
    }

    @Get('/delete/:id')
    delete(@Param('id') id: string) {
        return this.productService.delete(Number(id));
    }


}