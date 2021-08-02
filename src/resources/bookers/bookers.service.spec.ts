import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { BookersService } from './bookers.service';
import { Booker } from './entities/booker.entity';
import { repositoryMockFactory } from '../../helpers/repositoryMockFactory';

describe('BookersService', () => {
  let service: BookersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BookersService,
        {
          provide: getRepositoryToken(Booker),
          useFactory: repositoryMockFactory,
        },
      ],
    }).compile();

    service = module.get<BookersService>(BookersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
