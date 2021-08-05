import {MigrationInterface, QueryRunner} from "typeorm";

export class updateBooker1628120561072 implements MigrationInterface {
    name = 'updateBooker1628120561072'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `bookings` ADD `description` longtext NOT NULL");
        await queryRunner.query("ALTER TABLE `bookings` ADD `title` varchar(255) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `bookings` DROP COLUMN `title`");
        await queryRunner.query("ALTER TABLE `bookings` DROP COLUMN `description`");
    }

}
