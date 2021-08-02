import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { Room } from '../../resources/rooms/entities/room.entity';

define(Room, (faker: typeof Faker) => {
  const room = new Room();
  room.description = faker.lorem.paragraphs(2);
  room.name = faker.name.title();
  room.description = faker.lorem.paragraph(3);
  return room;
});
