import { Injectable } from '@nestjs/common';
import { CreateBookerDto } from './dto/create-booker.dto';
import { UpdateBookerDto } from './dto/update-booker.dto';

@Injectable()
export class BookersService {
  create(createBookerDto: CreateBookerDto) {
    return 'This action adds a new booker';
  }

  findAll() {
    return `This action returns all bookers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} booker`;
  }

  update(id: number, updateBookerDto: UpdateBookerDto) {
    return `This action updates a #${id} booker`;
  }

  remove(id: number) {
    return `This action removes a #${id} booker`;
  }
}
