import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { StocksModule } from './stocks/stocks.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { SectorsModule } from './sectors/sectors.module';
import { TransactionsModule } from './transactions/transactions.module';

@Module({
  imports: [PrismaModule,ConfigModule.forRoot(), StocksModule, AuthModule, UsersModule, SectorsModule, TransactionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
