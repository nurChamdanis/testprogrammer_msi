import { Body, Controller, Post, Req, Res } from "@nestjs/common"; 
import { CustService } from "./cust.service";
@Controller('cust')
export class CustController {
    constructor(private custService: CustService) { }
    @Post('save')
    async register(@Req() req, @Res() res, @Body() body) {
        const auth = await this.custService.create_cust(body);
        res.status(auth.status).json(auth.content);
    }

}