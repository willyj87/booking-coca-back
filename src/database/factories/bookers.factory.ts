import { define } from 'typeorm-seeding';
import { v4 as uuidv4 } from 'uuid';
import { Booker } from '../../resources/bookers/entities/booker.entity';

define(Booker, () => {
  const booker = new Booker();
  booker.uuid = uuidv4();
  return booker;
});
