import { Test, TestingModule } from '@nestjs/testing';
import { BookersService } from './bookers.service';

describe('BookersService', () => {
  let service: BookersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookersService],
    }).compile();

    service = module.get<BookersService>(BookersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
