import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsDateString, IsUUID } from 'class-validator';

export class CreateBookingDto {
  @ApiProperty({ required: true, type: 'string', format: 'date-time' })
  @IsNotEmpty()
  @IsDateString()
  startTime: string;

  @ApiProperty({ required: true, type: 'string', format: 'date-time' })
  @IsNotEmpty()
  @IsDateString()
  endTime: string;

  @ApiProperty({ required: true, type: 'string', format: 'uuid' })
  @IsNotEmpty()
  @IsUUID()
  room: string;
}
