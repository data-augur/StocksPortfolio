import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as md5 from 'md5'

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService, private jwtService: JwtService) {}

    async signIn(username: string, pass: string): Promise<any> {
        const user = await this.usersService.findOneByUserName(username);
        if (user?.password !== md5(pass)) {
          throw new UnauthorizedException();
        }
        const payload = { username: user.username, sub: user.id };
        return {
            access_token: await this.jwtService.signAsync(payload),
          };
      }


}