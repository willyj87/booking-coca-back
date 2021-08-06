import { EntityHelper } from '../../../helpers/entityHelper';
import { Booker } from '../../bookers/entities/booker.entity';
import { Room } from '../../rooms/entities/room.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity('bookings')
export class Booking extends EntityHelper {
  @ManyToOne(() => Room, (room) => room.booking, { eager: true })
  room: Room;

  @ManyToOne(() => Booker, (booker) => booker.booking)
  booker: Booker;

  @Column('time')
  startTime: Date;

  @Column('time')
  endTime: Date;

  @Column('longtext')
  description: string;

  @Column()
  title: string;
}
