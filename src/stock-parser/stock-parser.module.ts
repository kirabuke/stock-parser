import { Module } from '@nestjs/common';
import { StockParserService } from './stock-parser.service';
import { StockParserController } from './stock-parser.controller';

@Module({
  controllers: [StockParserController],
  providers: [StockParserService],
})
export class StockParserModule {}
