import { Test, TestingModule } from '@nestjs/testing';
import { StockParserController } from './stock-parser.controller';
import { StockParserService } from './stock-parser.service';

describe('StockParserController', () => {
  let controller: StockParserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StockParserController],
      providers: [StockParserService],
    }).compile();

    controller = module.get<StockParserController>(StockParserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
