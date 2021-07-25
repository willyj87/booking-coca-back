import { EntityHelper } from 'src/helpers/entityHelper';
import { Booking } from 'src/resources/bookings/entities/booking.entity';
import { Compagny } from 'src/resources/compagnies/entities/compagny.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

@Entity('booker')
export class Booker extends EntityHelper {
  @Column()
  uuid: string;

  @ManyToOne(() => Compagny, (compagny) => compagny.booker)
  compagny: Compagny;

  @OneToMany(() => Booking, (booking) => booking.room)
  booking: Booking[];
}
