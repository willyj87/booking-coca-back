import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBookerDto } from './dto/create-booker.dto';
import { UpdateBookerDto } from './dto/update-booker.dto';
import { Booker } from './entities/booker.entity';

@Injectable()
export class BookersService {
  constructor(
    @InjectRepository(Booker)
    private bookerRepository: Repository<Booker>,
  ) {}
  create(createBookerDto: CreateBookerDto) {
    return 'This action adds a new booker';
  }

  findAll(): Promise<Booker[]> {
    return this.bookerRepository.find();
  }

  findOne(id: string): Promise<Booker> {
    return this.bookerRepository.findOne(id);
  }

  update(id: number, updateBookerDto: UpdateBookerDto) {
    return `This action updates a #${id} booker`;
  }

  remove(id: number) {
    return `This action removes a #${id} booker`;
  }
}
