import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { JobsModule } from './jobs/jobs.module';

@Module({
  imports: [JobsModule, MongooseModule.forRoot(`mongodb://127.0.0.1:27017/jobs`)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
