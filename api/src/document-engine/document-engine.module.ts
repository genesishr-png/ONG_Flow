import { Module } from '@nestjs/common';
import { DocumentEngineController } from './document-engine.controller';
import { DocumentEngineService } from './document-engine.service';

@Module({
  controllers: [DocumentEngineController],
  providers: [DocumentEngineService]
})
export class DocumentEngineModule {}
