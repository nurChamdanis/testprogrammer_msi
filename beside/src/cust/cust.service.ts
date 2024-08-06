import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm'; 
import { M_customer } from './entities/m_customer.entity';
import { CustDTO } from './dto/create-cust.dto';

// This should be a real class/interface representing a user entity
// export type User = any;

@Injectable()
export class CustService {
  constructor(
      @InjectRepository
      (M_customer) private readonly custRepository: Repository<M_customer>
    ) {} 

  private generateRandomString(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    return result;
  }
  async create_cust(createCustDto: CustDTO): Promise<Record<string, any>> {
    try{
      console.log(createCustDto);
      
      const cust = new M_customer();
      cust.kode = createCustDto.kode;
      cust.name = createCustDto.name;
      cust.telp = createCustDto.telp;
      const randomEmail = `${this.generateRandomString(10)}@example.com`;
      cust.email = randomEmail; 
      await this.custRepository.save(cust); // Make sure to await the save operation
      const savedCust = await this.custRepository.findOne({
        where: {
          kode: cust.kode,
          name: cust.name,
        },
      });
      return { status: 200, content: { msg: 'cust success', data: savedCust } };
    }catch(e){
      return { status: 400, content: { msg: 'cust error', data: [] } }; 
    }
  }


}