import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { LoggerModule } from './logger/logger.module';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './utilits/http-exception.filter';

@Module({
  imports: [UserModule, LoggerModule],
  controllers: [AppController],
  providers: [AppService,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    }
  ],
})
export class AppModule { }
