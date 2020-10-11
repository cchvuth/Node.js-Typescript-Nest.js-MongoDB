import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserCredentialDto } from './dto/user-credential.dto';

@Controller('auth')
export class AuthController {
  constructor(private authSv: AuthService) {}

  @Post('login')
  login(@Body() body: UserCredentialDto) {
    return this.authSv.login(body.username, body.password);
  }
}
