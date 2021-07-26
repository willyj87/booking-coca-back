import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCompagnyDto } from './dto/create-compagny.dto';
import { UpdateCompagnyDto } from './dto/update-compagny.dto';
import { Compagny } from './entities/compagny.entity';

@Injectable()
export class CompagniesService {
  constructor(
    @InjectRepository(Compagny)
    private compagnyRepository: Repository<Compagny>,
  ) {}
  create(createCompagnyDto: CreateCompagnyDto) {
    return 'This action adds a new compagny';
  }

  findAll(): Promise<Compagny[]> {
    return this.compagnyRepository.find();
  }

  findOne(id: string): Promise<Compagny> {
    return this.compagnyRepository.findOne(id);
  }

  update(id: number, updateCompagnyDto: UpdateCompagnyDto) {
    return `This action updates a #${id} compagny`;
  }

  remove(id: number) {
    return `This action removes a #${id} compagny`;
  }
}
