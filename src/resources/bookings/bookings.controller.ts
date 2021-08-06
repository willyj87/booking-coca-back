import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';

import { AuthGuard } from '@nestjs/passport';
import { BookingsService } from './bookings.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { User } from '../../decorators/user.decorator';

@Controller('bookings')
export class BookingsController {
  constructor(private readonly bookingsService: BookingsService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createBookingDto: CreateBookingDto, @User('sub') sub: string) {
    return this.bookingsService.create(createBookingDto, sub);
  }

  @Get()
  findAll() {
    return this.bookingsService.findAll();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookingsService.findOne(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBookingDto: UpdateBookingDto,
    @User('sub') sub: string,
  ) {
    return this.bookingsService.update(id, updateBookingDto, sub);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  remove(@Param('id') id: string, @User('sub') sub: string) {
    return this.bookingsService.remove(id, sub);
  }
}
