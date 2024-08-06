import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersDTO } from './dto/create-user.dto';
import { User } from './entities/user.entity';  

// This should be a real class/interface representing a user entity
// export type User = any;

@Injectable()
export class UsersService {
  constructor(
      @InjectRepository
      (User) private readonly usersRepository: Repository<User>
    ) {}

  create(createUserDto: UsersDTO): Promise<User> {
    const user = new User();

    user.name = createUserDto.name;
    user.email = createUserDto.email;
    user.password = createUserDto.password;

    return this.usersRepository.save(user);
  }

  // async create_cust(createCustDto: CustDTO): Promise<M_customer> {
  //   const cust = new M_customer();
  //   cust.kode = createCustDto.kode;
  //   cust.name = createCustDto.name;
  //   cust.telp = createCustDto.telp;
  //   await this.custRepository.save(cust); // Make sure to await the save operation
  //   const savedCust = await this.custRepository.findOne({
  //     where: {
  //       kode: cust.kode,
  //       name: cust.name,
  //     },
  //   });
  //   return savedCust;
  // }


  async findAll(): Promise<User[]> {
    const rest = this.usersRepository.find();
    console.log(rest); 
    return rest;
  }

  findOne(email: string): Promise<User> {
    return this.usersRepository.findOne({
      where: {
        email: email
      } 
    });
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
