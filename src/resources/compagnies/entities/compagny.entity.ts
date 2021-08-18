import { Column, Entity, OneToMany } from 'typeorm';

import { Booker } from '../../bookers/entities/booker.entity';
import { Room } from '../../rooms/entities/room.entity';
import { BaseEntity } from '../../../helpers/baseEntity';

@Entity('compagnies')
export class Compagny extends BaseEntity {
  @Column()
  name: string;

  @Column()
  description: string;

  @OneToMany(() => Booker, (booker) => booker.compagny)
  booker: Booker[];

  @OneToMany(() => Room, (room) => room.compagny)
  room: Room[];
}
