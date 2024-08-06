import { Body, Controller, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService, private userService: UsersService) {}

  @Post('token')
  async login(@Req() req, @Res() res, @Body() body) {
    const auth = await this.authService.login(body);
    res.status(auth.status).json(auth.msg);
  }

  @Post('register')
  async register(@Req() req, @Res() res, @Body() body) {
    const auth = await this.authService.register(body);
    res.status(auth.status).json(auth.content);
  }

  @Post('signin/credentials')
  async signIn(@Body() body: { email: string; password: string }, @Res() res: Response) {
    const user = await this.authService.validateUser(body.email, body.password); 
    const stat_ok = HttpStatus.OK; 
    if(res.ok){
      return res.json();
    }else{
      return res.json();
    }
  }

}
