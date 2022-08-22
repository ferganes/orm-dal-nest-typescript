import { Module } from '@nestjs/common';
import { MysqlModule } from 'nest-mysql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseController } from './database/database.controller';
import { DatabaseModule } from './database/database.module';
import { DatabaseService } from './database/database.service';

@Module({
  imports: [
    MysqlModule.forRoot({
      host: 'localhost',
      database: 'articles',
      password: '12345',
      user: 'tester',
      port: 3306,
    }),
    DatabaseModule,
  ],
  controllers: [AppController,DatabaseController],
  providers: [AppService,DatabaseService],
})

export class AppModule {}
