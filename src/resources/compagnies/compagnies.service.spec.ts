import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { repositoryMockFactory } from '../../helpers/repositoryMockFactory';
import { CompagniesService } from './compagnies.service';
import { Compagny } from './entities/compagny.entity';

describe('CompagniesService', () => {
  let service: CompagniesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CompagniesService,
        {
          provide: getRepositoryToken(Compagny),
          useFactory: repositoryMockFactory,
        },
      ],
    }).compile();

    service = module.get<CompagniesService>(CompagniesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
