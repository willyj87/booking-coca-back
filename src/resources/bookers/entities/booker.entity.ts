import { EntityHelper } from '../../../helpers/entityHelper';
import { Booking } from '../../bookings/entities/booking.entity';
import { Compagny } from '../../compagnies/entities/compagny.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

@Entity('bookers')
export class Booker extends EntityHelper {
  @Column()
  uuid: string;

  @ManyToOne(() => Compagny, (compagny) => compagny.booker, { eager: true })
  compagny: Compagny;

  @OneToMany(() => Booking, (booking) => booking.room, { eager: true })
  booking: Booking[];
}
