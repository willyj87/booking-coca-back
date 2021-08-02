import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { repositoryMockFactory } from '../../helpers/repositoryMockFactory';
import { Booker } from '../bookers/entities/booker.entity';
import { Room } from '../rooms/entities/room.entity';
import { BookingsController } from './bookings.controller';
import { BookingsService } from './bookings.service';
import { Booking } from './entities/booking.entity';

describe('BookingsController', () => {
  let controller: BookingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BookingsController,
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

    controller = module.get<BookingsController>(BookingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
