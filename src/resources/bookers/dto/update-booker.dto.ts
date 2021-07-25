import { PartialType } from '@nestjs/mapped-types';
import { CreateBookerDto } from './create-booker.dto';

export class UpdateBookerDto extends PartialType(CreateBookerDto) {}
