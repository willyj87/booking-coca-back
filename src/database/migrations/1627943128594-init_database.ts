import { MigrationInterface, QueryRunner } from 'typeorm';

export class initDatabase1627943128594 implements MigrationInterface {
  name = 'initDatabase1627943128594';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE `compagnies` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `description` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB',
    );
    await queryRunner.query(
      'CREATE TABLE `rooms` (`id` varchar(36) NOT NULL, `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `name` varchar(255) NOT NULL, `description` varchar(255) NOT NULL, `compagnyId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB',
    );
    await queryRunner.query(
      'CREATE TABLE `bookings` (`id` varchar(36) NOT NULL, `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `startTime` time NOT NULL, `endTime` time NOT NULL, `roomId` varchar(36) NULL, `bookerId` varchar(36) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB',
    );
    await queryRunner.query(
      'CREATE TABLE `bookers` (`id` varchar(36) NOT NULL, `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `uuid` varchar(255) NOT NULL, `compagnyId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB',
    );
    await queryRunner.query(
      'ALTER TABLE `rooms` ADD CONSTRAINT `FK_48f2085dfe9791fb36b3f347fd7` FOREIGN KEY (`compagnyId`) REFERENCES `compagnies`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION',
    );
    await queryRunner.query(
      'ALTER TABLE `bookings` ADD CONSTRAINT `FK_0172b36e4e054d6ebb819d58efb` FOREIGN KEY (`roomId`) REFERENCES `rooms`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION',
    );
    await queryRunner.query(
      'ALTER TABLE `bookings` ADD CONSTRAINT `FK_90a688dc05b1e57bb15ce040d92` FOREIGN KEY (`bookerId`) REFERENCES `bookers`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION',
    );
    await queryRunner.query(
      'ALTER TABLE `bookers` ADD CONSTRAINT `FK_e6a75a2601660ab2a5f807b812a` FOREIGN KEY (`compagnyId`) REFERENCES `compagnies`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `bookers` DROP FOREIGN KEY `FK_e6a75a2601660ab2a5f807b812a`',
    );
    await queryRunner.query(
      'ALTER TABLE `bookings` DROP FOREIGN KEY `FK_90a688dc05b1e57bb15ce040d92`',
    );
    await queryRunner.query(
      'ALTER TABLE `bookings` DROP FOREIGN KEY `FK_0172b36e4e054d6ebb819d58efb`',
    );
    await queryRunner.query(
      'ALTER TABLE `rooms` DROP FOREIGN KEY `FK_48f2085dfe9791fb36b3f347fd7`',
    );
    await queryRunner.query('DROP TABLE `bookers`');
    await queryRunner.query('DROP TABLE `bookings`');
    await queryRunner.query('DROP TABLE `rooms`');
    await queryRunner.query('DROP TABLE `compagnies`');
  }
}
