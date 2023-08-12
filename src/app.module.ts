import { Module } from '@nestjs/common';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [
    AuthModule,
    CacheModule.register({
      ttl: 10,
      max: 100000,
      isGlobal: true,
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AppModule {}
