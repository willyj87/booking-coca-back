import { HttpException, HttpStatus, Logger } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Booker } from '../bookers/entities/booker.entity';
import { Room } from '../rooms/entities/room.entity';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { Booking } from './entities/booking.entity';

@Injectable()
export class BookingsService {
  private readonly logger = new Logger('bookings');
  constructor(
    @InjectRepository(Booking)
    private bookingRepository: Repository<Booking>,
    @InjectRepository(Room)
    private roomRepository: Repository<Room>,
    @InjectRepository(Booker)
    private bookerRepository: Repository<Booker>,
  ) {}

  async create(createBookingDto: CreateBookingDto, booker: string) {
    try {
      const booking = new Booking();
      booking.startTime = new Date(createBookingDto.startTime);
      booking.endTime = new Date(createBookingDto.endTime);
      booking.description = createBookingDto.description;
      booking.title = createBookingDto.title;
      booking.room = await this.roomRepository.findOneOrFail(
        createBookingDto.room,
      );
      console.log(' uuid ', booker);
      const bookerDb = await this.bookerRepository.find({
        where: { uuid: booker },
      });
      if (bookerDb.length === 0) {
        throw new HttpException(
          {
            status: HttpStatus.FORBIDDEN,
            error: 'You are not authorize to create this resource',
          },
          HttpStatus.FORBIDDEN,
        );
      } else {
        this.bookingRepository.save(booking);
      }
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  findAll(): Promise<Booking[]> {
    return this.bookingRepository.find();
  }

  findOne(id: string): Promise<Booking> {
    return this.bookingRepository.findOne(id);
  }

  async update(id: string, updateBookingDto: UpdateBookingDto, booker: string) {
    try {
      const booking = await this.bookingRepository.findOne(id);
      if (booking.booker.uuid !== booker) {
        throw new HttpException(
          {
            status: HttpStatus.FORBIDDEN,
            error: 'You are not authorize to update this resource',
          },
          HttpStatus.FORBIDDEN,
        );
      }
      booking.startTime = new Date(updateBookingDto.startTime);
      booking.endTime = new Date(updateBookingDto.endTime);
      booking.room = await this.roomRepository.findOne(updateBookingDto.room);
      this.bookingRepository.save(booking);
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  async remove(id: string, uuid: string) {
    try {
      const booking = await this.bookingRepository.findOne(id);
      if (booking.booker.uuid !== uuid) {
        throw new HttpException(
          {
            status: HttpStatus.FORBIDDEN,
            error: 'You are not authorize to delete this resource',
          },
          HttpStatus.FORBIDDEN,
        );
      }
      this.bookingRepository.delete(booking);
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
