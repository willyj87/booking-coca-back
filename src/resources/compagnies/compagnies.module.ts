import { Module } from '@nestjs/common';
import { CompagniesService } from './compagnies.service';
import { CompagniesController } from './compagnies.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Compagny } from './entities/compagny.entity';

@Module({
  controllers: [CompagniesController],
  providers: [CompagniesService],
  imports: [TypeOrmModule.forFeature([Compagny])],
})
export class CompagniesModule {}
