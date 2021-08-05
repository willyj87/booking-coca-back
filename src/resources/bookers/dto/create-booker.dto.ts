import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateBookerDto {
  @ApiProperty({ required: true, type: 'string' })
  @IsNotEmpty()
  @IsString()
  compagny: string;
}
