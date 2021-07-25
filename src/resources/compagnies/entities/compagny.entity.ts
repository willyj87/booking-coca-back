import { Booker } from 'src/resources/bookers/entities/booker.entity';
import { Room } from 'src/resources/rooms/entities/room.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('compagny')
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
