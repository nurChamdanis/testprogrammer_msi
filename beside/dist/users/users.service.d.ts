import { Repository } from 'typeorm';
import { UsersDTO } from './dto/create-user.dto';
import { User } from './entities/user.entity';
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: Repository<User>);
    create(createUserDto: UsersDTO): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(email: string): Promise<User>;
    remove(id: string): Promise<void>;
}
