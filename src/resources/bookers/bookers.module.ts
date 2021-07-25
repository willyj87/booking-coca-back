import { Module } from '@nestjs/common';
import { BookersService } from './bookers.service';
import { BookersController } from './bookers.controller';

@Module({
  controllers: [BookersController],
  providers: [BookersService]
})
export class BookersModule {}
