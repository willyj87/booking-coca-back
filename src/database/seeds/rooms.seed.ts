import { Room } from 'src/resources/rooms/entities/room.entity';
import { getManager } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { Compagny } from 'src/resources/compagnies/entities/compagny.entity';

export default class RoomsSeed implements Seeder {
  public async run(factory: Factory): Promise<any> {
    const entityManager = getManager();
    const coke = await entityManager.findOne(Compagny, 1);
    const pepsi = await entityManager.findOne(Compagny, 2);
    await factory(Room)().createMany(10, { compagny: coke });
    await factory(Room)({ compagny: pepsi }).createMany(10, {
      compagny: pepsi,
    });
  }
}
