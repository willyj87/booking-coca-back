import { Booker } from '../../bookers/entities/booker.entity';
import { Room } from '../../rooms/entities/room.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('compagnies')
export class Compagny {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @OneToMany(() => Booker, (booker) => booker.compagny)
  booker: Booker[];

  @OneToMany(() => Room, (room) => room.compagny)
  room: Room[];
}
