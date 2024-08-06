import { CustService } from "./cust.service";
export declare class CustController {
    private custService;
    constructor(custService: CustService);
    register(req: any, res: any, body: any): Promise<void>;
}
