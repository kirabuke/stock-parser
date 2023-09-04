import { Injectable } from '@nestjs/common';
import { CreateStockParserDto } from './dto/create-stock-parser.dto';
import { UpdateStockParserDto } from './dto/update-stock-parser.dto';

@Injectable()
export class StockParserService {
  create(createStockParserDto: CreateStockParserDto) {
    return 'This action adds a new stockParser';
  }

  findAll() {
    return `This action returns all stockParser`;
  }

  findOne(id: number) {
    return `This action returns a #${id} stockParser`;
  }

  update(id: number, updateStockParserDto: UpdateStockParserDto) {
    return `This action updates a #${id} stockParser`;
  }

  remove(id: number) {
    return `This action removes a #${id} stockParser`;
  }
}
