import { EntityHelper } from 'src/helpers/entityHelper';
import { Booking } from 'src/resources/bookings/entities/booking.entity';
import { Compagny } from 'src/resources/compagnies/entities/compagny.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

@Entity('rooms')
export class Room extends EntityHelper {
  @Column()
  name: string;

  @Column()
  description: string;

  @ManyToOne(() => Compagny, (compagny) => compagny.booker)
  compagny: Compagny;

  @OneToMany(() => Booking, (booking) => booking.room)
  booking: Booking[];
}
