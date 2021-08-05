import { Module } from '@nestjs/common';
import { BookersService } from './bookers.service';
import { BookersController } from './bookers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Booker } from './entities/booker.entity';
import { Compagny } from '../compagnies/entities/compagny.entity';

@Module({
  controllers: [BookersController],
  providers: [BookersService],
  imports: [
    TypeOrmModule.forFeature([Booker]),
    TypeOrmModule.forFeature([Compagny]),
  ],
})
export class BookersModule {}
