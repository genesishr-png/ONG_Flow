import { Test, TestingModule } from '@nestjs/testing';
import { DocumentEngineController } from './document-engine.controller';

describe('DocumentEngineController', () => {
  let controller: DocumentEngineController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DocumentEngineController],
    }).compile();

    controller = module.get<DocumentEngineController>(DocumentEngineController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
