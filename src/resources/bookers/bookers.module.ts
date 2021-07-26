import { Module } from '@nestjs/common';
import { BookersService } from './bookers.service';
import { BookersController } from './bookers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Booker } from './entities/booker.entity';

@Module({
  controllers: [BookersController],
  providers: [BookersService],
  imports: [TypeOrmModule.forFeature([Booker])],
})
export class BookersModule {}
