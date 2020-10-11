import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService) {}

  async login(username: string, password: string) {
    const user = await this.usersService.findOne(username);
    if (user && user.password === password) {
      const payload = { username };

      return {
        access_token: this.jwtService.sign(payload, {
          secret: process.env.JWT_SECRET
        })
      };
    }
  }
}
