import { Module } from '@nestjs/common';
import { StockParserModule } from './stock-parser/stock-parser.module';

@Module({
  imports: [StockParserModule],
  providers: [],
})
export class AppModule {}
