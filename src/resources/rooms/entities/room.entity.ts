import { EntityHelper } from '../../../helpers/entityHelper';
import { Booking } from '../../bookings/entities/booking.entity';
import { Compagny } from '../../compagnies/entities/compagny.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

@Entity('rooms')
export class Room extends EntityHelper {
  @Column()
  name: string;

  @Column()
  description: string;

  @ManyToOne(() => Compagny, (compagny) => compagny.room, { eager: true })
  compagny: Compagny;

  @OneToMany(() => Booking, (booking) => booking.room)
  booking: Booking[];
}
