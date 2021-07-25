import { EntityHelper } from 'src/helpers/entityHelper';
import { Booking } from 'src/resources/bookings/entities/booking.entity';
import { Compagny } from 'src/resources/compagnies/entities/compagny.entity';
import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';

@Entity('booker')
export class Booker extends EntityHelper {
  @Column()
  uuid: string;

  @OneToOne(() => Compagny)
  @JoinColumn({ name: 'compangyId' })
  company: Compagny;

  @OneToMany(() => Booking, (booking) => booking.room)
  booking: Booking[];
}
