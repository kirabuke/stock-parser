import { Test, TestingModule } from '@nestjs/testing';
import { StockParserService } from './stock-parser.service';

describe('StockParserService', () => {
  let service: StockParserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StockParserService],
    }).compile();

    service = module.get<StockParserService>(StockParserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
