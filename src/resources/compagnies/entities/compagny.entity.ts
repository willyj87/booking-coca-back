import { EntityHelper } from 'src/helpers/entityHelper';
import { Column, Entity } from 'typeorm';

@Entity('compagny')
export class Compagny extends EntityHelper {
  @Column()
  name: string;

  @Column()
  description: string;
}
