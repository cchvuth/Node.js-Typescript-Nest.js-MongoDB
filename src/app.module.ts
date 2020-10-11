import { HttpModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SlackController } from './slack/slack.controller';
import { SlackService } from './slack/slack.service';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { UsersService } from './users/users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LionModule } from './lion/lion.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1d' }
    }),
    MongooseModule.forRoot(process.env.MONGODB_URI),
    HttpModule,
    LionModule
  ],
  controllers: [AppController, SlackController, AuthController],
  providers: [AppService, SlackService, AuthService, UsersService]
})
export class AppModule {}
