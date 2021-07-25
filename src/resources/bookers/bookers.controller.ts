import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BookersService } from './bookers.service';
import { CreateBookerDto } from './dto/create-booker.dto';
import { UpdateBookerDto } from './dto/update-booker.dto';

@Controller('bookers')
export class BookersController {
  constructor(private readonly bookersService: BookersService) {}

  @Post()
  create(@Body() createBookerDto: CreateBookerDto) {
    return this.bookersService.create(createBookerDto);
  }

  @Get()
  findAll() {
    return this.bookersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookerDto: UpdateBookerDto) {
    return this.bookersService.update(+id, updateBookerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookersService.remove(+id);
  }
}
