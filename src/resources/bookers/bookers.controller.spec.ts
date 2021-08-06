import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { BookersService } from './bookers.service';
import { Booker } from './entities/booker.entity';
import { repositoryMockFactory } from '../../helpers/repositoryMockFactory';
import { BookersController } from './bookers.controller';
import { Compagny } from '../compagnies/entities/compagny.entity';

describe('BookersController', () => {
  let controller: BookersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BookersController,
        BookersService,
        {
          provide: getRepositoryToken(Booker),
          useFactory: repositoryMockFactory,
        },
        {
          provide: getRepositoryToken(Compagny),
          useFactory: repositoryMockFactory,
        },
      ],
    }).compile();

    controller = module.get<BookersController>(BookersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
