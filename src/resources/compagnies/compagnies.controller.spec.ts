import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { repositoryMockFactory } from '../../helpers/repositoryMockFactory';
import { CompagniesController } from './compagnies.controller';
import { CompagniesService } from './compagnies.service';
import { Compagny } from './entities/compagny.entity';

describe('CompagniesController', () => {
  let controller: CompagniesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CompagniesController,
        CompagniesService,
        {
          provide: getRepositoryToken(Compagny),
          useFactory: repositoryMockFactory,
        },
      ],
    }).compile();

    controller = module.get<CompagniesController>(CompagniesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
