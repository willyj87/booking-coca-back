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
import { User } from '../../decorators/user.decorator';
import { BookersService } from './bookers.service';
import { CreateBookerDto } from './dto/create-booker.dto';
import { UpdateBookerDto } from './dto/update-booker.dto';

@Controller('bookers')
export class BookersController {
  constructor(private readonly bookersService: BookersService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('')
  create(@Body() createBookerDto: CreateBookerDto, @User('sub') sub: string) {
    return this.bookersService.create(createBookerDto, sub);
  }

  @Get()
  findAll() {
    return this.bookersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookerDto: UpdateBookerDto) {
    return this.bookersService.update(+id, updateBookerDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/find/byUser')
  findByUser(@User('sub') sub: string) {
    return this.bookersService.findByUser(sub);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookersService.remove(+id);
  }
}
