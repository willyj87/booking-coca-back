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
  constructor(
    @InjectRepository(Booking)
    private bookingRepository: Repository<Booking>,
    @InjectRepository(Room)
    private roomRepository: Repository<Room>,
    @InjectRepository(Booker)
    private bookerRepository: Repository<Booker>,
  ) {}

  async create(createBookingDto: CreateBookingDto) {
    const booking = new Booking();
    booking.startTime = new Date(createBookingDto.startTime);
    booking.endTime = new Date(createBookingDto.endTime);
    booking.room = await this.roomRepository.findOne(createBookingDto.room);
    booking.booker = await this.bookerRepository.findOne(
      createBookingDto.booker,
    );
    this.bookingRepository.save(booking);
  }

  findAll(): Promise<Booking[]> {
    return this.bookingRepository.find();
  }

  findOne(id: string): Promise<Booking> {
    return this.bookingRepository.findOne(id);
  }

  findByBooker(booker: string): Promise<Booking[]> {
    return this.bookingRepository.find({ where: { booker } });
  }

  findByRoom(room: string): Promise<Booking[]> {
    return this.bookingRepository.find({
      where: { room },
    });
  }

  update(id: number, updateBookingDto: UpdateBookingDto) {
    return `This action updates a #${id} booking`;
  }

  remove(id: number) {
    return `This action removes a #${id} booking`;
  }
}
