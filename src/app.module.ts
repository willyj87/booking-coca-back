import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoomsModule } from './resources/rooms/rooms.module';
import { BookingsModule } from './resources/bookings/bookings.module';
import { BookersModule } from './resources/bookers/bookers.module';
import { CompagniesModule } from './resources/compagnies/compagnies.module';

@Module({
  imports: [RoomsModule, BookingsModule, BookersModule, CompagniesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
