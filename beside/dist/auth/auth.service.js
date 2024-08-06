"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var AuthService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcryptjs_1 = require("bcryptjs");
const create_user_dto_1 = require("../users/dto/create-user.dto");
const class_validator_1 = require("class-validator");
const logger_service_1 = require("../logger/logger.service");
const users_service_1 = require("../users/users.service");
const bcrypt = __importStar(require("bcrypt"));
const EXPIRE_TIME = 20 * 1000;
let AuthService = AuthService_1 = class AuthService {
    constructor(logger = new common_1.Logger(AuthService_1.name), jwtService, userservice) {
        this.logger = logger;
        this.jwtService = jwtService;
        this.userservice = userservice;
    }
    async login(user) {
        let isOk = false;
        const userDTO = new create_user_dto_1.UsersDTO();
        userDTO.email = user.email;
        userDTO.password = user.password;
        const payload = userDTO;
        await (0, class_validator_1.validate)(userDTO).then((errors) => {
            if (errors.length > 0) {
                this.logger.debug(`${errors}`);
            }
            else {
                isOk = true;
            }
        });
        if (isOk) {
            const userDetails = await this.userservice.findOne(user.email);
            if (userDetails == null) {
                return { status: 401, msg: { msg: 'Invalid credentials' } };
            }
            const isValid = (0, bcryptjs_1.compareSync)(user.password, userDetails.password);
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
            }
            else {
                return { status: 401, msg: { msg: 'Invalid credentials' } };
            }
        }
        else {
            return { status: 400, msg: { msg: 'Invalid fields.' } };
        }
    }
    async register(body) {
        let isOk = false;
        const userDTO = new create_user_dto_1.UsersDTO();
        userDTO.email = body.email;
        userDTO.name = body.name;
        userDTO.password = (0, bcryptjs_1.hashSync)(body.password, 10);
        await (0, class_validator_1.validate)(userDTO).then((errors) => {
            if (errors.length > 0) {
                this.logger.debug(`${errors}`);
            }
            else {
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
            }
            else {
                return { status: 400, content: { msg: 'User already exists' } };
            }
        }
        else {
            return { status: 400, content: { msg: 'Invalid content' } };
        }
    }
    async validateUser(email, password) {
        const user = this.users.find(user => user.email === email);
        if (user && await bcrypt.compare(password, user.password)) {
            return user;
        }
        return null;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = AuthService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [logger_service_1.LoggerService,
        jwt_1.JwtService,
        users_service_1.UsersService])
], AuthService);
//# sourceMappingURL=auth.service.js.map