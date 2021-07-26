import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoomsModule } from './resources/rooms/rooms.module';
import { BookingsModule } from './resources/bookings/bookings.module';
import { BookersModule } from './resources/bookers/bookers.module';
import { CompagniesModule } from './resources/compagnies/compagnies.module';
import { AuthzModule } from './authz/authz.module';

@Module({
  imports: [
    RoomsModule,
    BookingsModule,
    BookersModule,
    CompagniesModule,
    TypeOrmModule.forRoot(),
    AuthzModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
