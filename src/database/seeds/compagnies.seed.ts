import { Compagny } from '../../resources/compagnies/entities/compagny.entity';
import * as Faker from 'faker';
import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

export default class CompagniesSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Compagny)
      .values([
        {
          name: 'Coke',
          description: Faker.lorem.lines(1),
        },
      ])
      .execute();

    await connection
      .createQueryBuilder()
      .insert()
      .into(Compagny)
      .values([
        {
          name: 'Pepsi',
          description: Faker.lorem.lines(1),
        },
      ])
      .execute();
  }
}
