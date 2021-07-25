import { getManager } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { Compagny } from 'src/resources/compagnies/entities/compagny.entity';
import { Booker } from 'src/resources/bookers/entities/booker.entity';

export default class BookersSeed implements Seeder {
  public async run(factory: Factory): Promise<any> {
    const entityManager = getManager();
    const pepsi = await entityManager.findOne(Compagny, 2);
    const coke = await entityManager.findOne(Compagny, 1);
    await factory(Booker)().createMany(3, { compagny: coke });
    await factory(Booker)().createMany(3, { compagny: pepsi });
  }
}
