import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StockParserService } from './stock-parser.service';
import { CreateStockParserDto } from './dto/create-stock-parser.dto';
import { UpdateStockParserDto } from './dto/update-stock-parser.dto';

@Controller('stock-parser')
export class StockParserController {
  constructor(private readonly stockParserService: StockParserService) {}

  @Post()
  create(@Body() createStockParserDto: CreateStockParserDto) {
    return this.stockParserService.create(createStockParserDto);
  }

  @Get()
  findAll() {
    return this.stockParserService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stockParserService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStockParserDto: UpdateStockParserDto) {
    return this.stockParserService.update(+id, updateStockParserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stockParserService.remove(+id);
  }
}
