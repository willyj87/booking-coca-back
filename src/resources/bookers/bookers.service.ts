import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Compagny } from '../compagnies/entities/compagny.entity';
import { CreateBookerDto } from './dto/create-booker.dto';
import { UpdateBookerDto } from './dto/update-booker.dto';
import { Booker } from './entities/booker.entity';

@Injectable()
export class BookersService {
  private readonly logger = new Logger('bookers');

  constructor(
    @InjectRepository(Booker)
    private bookerRepository: Repository<Booker>,
    @InjectRepository(Compagny)
    private compagnyRepository: Repository<Compagny>,
  ) {}
  async create(createBookerDto: CreateBookerDto, sub: string) {
    try {
      const booker = new Booker();
      booker.compagny = await this.compagnyRepository.findOneOrFail(
        createBookerDto.compagny,
      );
      booker.uuid = sub;
      this.bookerRepository.save(booker);
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  findAll(): Promise<Booker[]> {
    return this.bookerRepository.find();
  }

  findOne(id: string): Promise<Booker> {
    return this.bookerRepository.findOne(id);
  }

  findByUser(sub: string): Promise<Booker[]> {
    return this.bookerRepository.find({
      where: { uuid: sub },
    });
  }

  update(id: number, updateBookerDto: UpdateBookerDto) {
    return `This action updates a #${id} booker`;
  }

  remove(id: number) {
    return `This action removes a #${id} booker`;
  }
}
