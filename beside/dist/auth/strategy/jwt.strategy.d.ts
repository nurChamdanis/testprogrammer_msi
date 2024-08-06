import { User } from 'src/users/entities/user.entity';
import { AuthService } from '../auth.service';
import { UsersService } from 'src/users/users.service';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly authService;
    private userservice;
    constructor(authService: AuthService, userservice: UsersService);
    validate(payload: any): Promise<User>;
}
export {};
