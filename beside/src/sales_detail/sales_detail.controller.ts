import { Body, Controller, Param, Post, Get } from "@nestjs/common";
import { SalesDescService } from "./sales_detail.services"; 
import { CreateSalesDetailDto } from "src/sales_detail/dto/create_sales_desc.dto";

@Controller('sales_detail')
export class SalesDescController {
    constructor(
        private salesService: SalesDescService) { }

    @Post('/save')
    async createSales(@Body() createSalesDescDto: CreateSalesDetailDto) {
        return this.salesService.create(createSalesDescDto);
    } 


    @Get('/all/:id')
    async getSalesDetailAll(@Param('id') id: number) {
        return this.salesService.getAllDetail(id);
    }



}