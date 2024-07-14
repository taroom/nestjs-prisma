import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { VideosModule } from './videos/videos.module';

@Module({
  imports: [DatabaseModule, VideosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
