import { Module } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { BookingsController } from './bookings.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Booking } from './entities/booking.entity';
import { Room } from '../rooms/entities/room.entity';
import { Booker } from '../bookers/entities/booker.entity';

@Module({
  controllers: [BookingsController],
  providers: [BookingsService],
  imports: [
    TypeOrmModule.forFeature([Booking]),
    TypeOrmModule.forFeature([Room]),
    TypeOrmModule.forFeature([Booker]),
  ],
})
export class BookingsModule {}
