import { PartialType } from '@nestjs/mapped-types';
import { CreateStockParserDto } from './create-stock-parser.dto';

export class UpdateStockParserDto extends PartialType(CreateStockParserDto) {}
