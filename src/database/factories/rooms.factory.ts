import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { Room } from '../../resources/rooms/entities/room.entity';

define(Room, (faker: typeof Faker) => {
  const room = new Room();
  room.description = faker.lorem.lines(1);
  room.name = faker.random.word();
  room.description = faker.lorem.lines(1);
  return room;
});
