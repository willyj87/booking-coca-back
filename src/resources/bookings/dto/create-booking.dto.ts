import { ApiProperty } from '@nestjs/swagger';

export class CreateBookingDto {
  @ApiProperty({ required: true, type: 'string', format: 'date-time' })
  startTime: string;

  @ApiProperty({ required: true, type: 'string', format: 'date-time' })
  endTime: string;

  @ApiProperty({ required: true, type: 'string', format: 'uuid' })
  room: string;

  @ApiProperty({ required: true, type: 'string', format: 'uuid' })
  booker: string;
}
