import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';


@Module({
  providers: [AuthService, ConfigService],
  controllers: [AuthController],
  imports: [UsersModule, JwtModule.registerAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    global: true,
    useFactory: async (configService: ConfigService) => ({
      secret: configService.get("JWTSECRET"),
      signOptions: { expiresIn: '60s' }
    }),
    }),
  ]
})
export class AuthModule {}
