import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DocumentEngineModule } from './document-engine/document-engine.module';

@Module({
  imports: [DocumentEngineModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
