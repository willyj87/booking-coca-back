import { Test, TestingModule } from '@nestjs/testing';
import { BookersController } from './bookers.controller';
import { BookersService } from './bookers.service';

describe('BookersController', () => {
  let controller: BookersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookersController],
      providers: [BookersService],
    }).compile();

    controller = module.get<BookersController>(BookersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
