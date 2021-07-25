import { EntityHelper } from 'src/helpers/entityHelper';
import { Booker } from 'src/resources/bookers/entities/booker.entity';
import { Room } from 'src/resources/rooms/entities/room.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity('bookings')
export class Booking extends EntityHelper {
  @ManyToOne(() => Room, (room) => room.booking)
  room: Room;

  @ManyToOne(() => Booker, (booker) => booker.booking)
  booker: Booker;

  @Column('time')
  startTime: Date;

  @Column('time')
  endTime: Date;
}
