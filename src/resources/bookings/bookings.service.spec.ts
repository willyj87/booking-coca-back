import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { repositoryMockFactory } from '../../helpers/repositoryMockFactory';
import { Booker } from '../bookers/entities/booker.entity';
import { Room } from '../rooms/entities/room.entity';
import { BookingsService } from './bookings.service';
import { Booking } from './entities/booking.entity';

describe('BookingsService', () => {
  let service: BookingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BookingsService,
        {
          provide: getRepositoryToken(Booking),
          useFactory: repositoryMockFactory,
        },
        {
          provide: getRepositoryToken(Room),
          useFactory: repositoryMockFactory,
        },
        {
          provide: getRepositoryToken(Booker),
          useFactory: repositoryMockFactory,
        },
      ],
    }).compile();

    service = module.get<BookingsService>(BookingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
