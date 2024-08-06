import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    private userService;
    constructor(authService: AuthService, userService: UsersService);
    login(req: any, res: any, body: any): Promise<void>;
    register(req: any, res: any, body: any): Promise<void>;
    signIn(body: {
        email: string;
        password: string;
    }, res: Response): Promise<any>;
}
