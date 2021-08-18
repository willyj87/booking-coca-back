import { BaseEntity } from '../../../helpers/baseEntity';
import { Booking } from '../../bookings/entities/booking.entity';
import { Compagny } from '../../compagnies/entities/compagny.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

@Entity('bookers')
export class Booker extends BaseEntity {
  @Column()
  uuid: string;

  @ManyToOne(() => Compagny, (compagny) => compagny.booker, { eager: true })
  compagny: Compagny;

  @OneToMany(() => Booking, (booking) => booking.booker, { eager: true })
  booking: Booking[];
}
