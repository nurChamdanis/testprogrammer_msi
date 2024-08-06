import { JwtService } from '@nestjs/jwt';
import { LoggerService } from 'src/logger/logger.service';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/entities/user.entity';
export declare class AuthService {
    private readonly logger;
    private jwtService;
    private userservice;
    users: any;
    constructor(logger: LoggerService, jwtService: JwtService, userservice: UsersService);
    login(user: any): Promise<Record<string, any>>;
    register(body: any): Promise<Record<string, any>>;
    validateUser(email: string, password: string): Promise<User | null>;
}
