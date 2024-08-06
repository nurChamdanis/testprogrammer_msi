import { Body, Controller, Get, Param, Post } from "@nestjs/common";  
import { SalesService } from "./sales.service"; 
import {  CreateSalesDto } from "./dto/create_sales.dto"; 

@Controller('sales')
export class SalesController {
    constructor(
        private salesService: SalesService) { } 

    @Post('/save')
    async createSales(@Body() createSales: CreateSalesDto) {
        return this.salesService.create(createSales); 
    }  


}