import { Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compareSync, hashSync } from 'bcryptjs';
import { UsersDTO } from 'src/users/dto/create-user.dto';
import { validate } from 'class-validator';
import { LoggerService } from 'src/logger/logger.service';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/entities/user.entity';
import * as bcrypt from 'bcrypt';


const EXPIRE_TIME = 20 * 1000;

@Injectable()
export class AuthService {
  users: any;
  constructor(
    private readonly logger: LoggerService = new Logger(AuthService.name),
    private jwtService: JwtService,
    private userservice: UsersService,
  ) {}

  async login(user: any): Promise<Record<string, any>> {
    // Validation Flag
    let isOk = false;

    // Transform body into DTO
    const userDTO = new UsersDTO();
    userDTO.email = user.email;
    userDTO.password = user.password;

    const payload = userDTO;

    // TODO: Refactor this section with try catch block and return error message in the catch block
    // Validate DTO against validate function from class-validator
    await validate(userDTO).then((errors) => {
      if (errors.length > 0) {
        this.logger.debug(`${errors}`);
      } else {
        isOk = true;
      }
    });

    if (isOk) {
      // Get user information
      const userDetails = await this.userservice.findOne(user.email);

      // Check if user exists
      if (userDetails == null) {
        return { status: 401, msg: { msg: 'Invalid credentials' } };
      }

      // Check if the given password match with saved password
      const isValid = compareSync(user.password, userDetails.password);
      if (isValid) {
        const accessToken = this.jwtService.sign({ email: user.email });
        return {
          status: 200,
          msg: {
            user: user,
            accessToken: await this.jwtService.signAsync({
            username: userDTO.email,
            sub: {
              name: userDTO.name,
            },
          }, {
          expiresIn: '20s',
            secret: process.env.jwtSecretKey,
              }),
            refreshToken: await this.jwtService.signAsync({
              username: userDTO.email,
              sub: {
                name: userDTO.name,
              },
            }, {
              expiresIn: '7d',
              secret: process.env.jwtRefreshTokenKey,
            }), 
            expiresIn: new Date().setTime(new Date().getTime() + EXPIRE_TIME),
          },
        };
      } else { 
        return { status: 401, msg: { msg: 'Invalid credentials' } };
      }
    } else {
      return { status: 400, msg: { msg: 'Invalid fields.' } };
    }
  }

  async register(body: any): Promise<Record<string, any>> {
    // Validation Flag
    let isOk = false;

    // Transform body into DTO
    const userDTO = new UsersDTO();
    userDTO.email = body.email;
    userDTO.name = body.name;
    userDTO.password = hashSync(body.password, 10);

    // Validate DTO against validate function from class-validator
    await validate(userDTO).then((errors) => {
      if (errors.length > 0) {
        this.logger.debug(`${errors}`);
      } else {
        isOk = true;
      }
    });
    if (isOk) {
      await this.userservice.create(userDTO).catch((error) => {
        this.logger.debug(error.message);
        isOk = false;
      });
      if (isOk) {
        return { status: 201, content: { msg: 'User created with success' } };
      } else {
        return { status: 400, content: { msg: 'User already exists' } };
      }
    } else {
      return { status: 400, content: { msg: 'Invalid content' } };
    }
  }


  async validateUser(email: string, password: string): Promise<User | null> {
    const user = this.users.find(user => user.email === email);
    if (user && await bcrypt.compare(password, user.password)) {
      return user;
    }
    return null;
  }

}
