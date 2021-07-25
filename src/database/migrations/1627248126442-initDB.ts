import {MigrationInterface, QueryRunner} from "typeorm";

export class initDB1627248126442 implements MigrationInterface {
    name = 'initDB1627248126442'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "compagny" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_0995bfe6289d6f1f2d6c94f94e7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "rooms" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "description" character varying NOT NULL, "compagnyId" integer, CONSTRAINT "PK_0368a2d7c215f2d0458a54933f2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "bookings" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "startTime" TIME NOT NULL, "endTime" TIME NOT NULL, "roomId" uuid, "bookerId" uuid, CONSTRAINT "PK_bee6805982cc1e248e94ce94957" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "booker" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "uuid" character varying NOT NULL, "compagnyId" integer, CONSTRAINT "PK_e08b3faee97fbc88ef59653f1a4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "rooms" ADD CONSTRAINT "FK_48f2085dfe9791fb36b3f347fd7" FOREIGN KEY ("compagnyId") REFERENCES "compagny"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "bookings" ADD CONSTRAINT "FK_0172b36e4e054d6ebb819d58efb" FOREIGN KEY ("roomId") REFERENCES "rooms"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "bookings" ADD CONSTRAINT "FK_90a688dc05b1e57bb15ce040d92" FOREIGN KEY ("bookerId") REFERENCES "booker"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "booker" ADD CONSTRAINT "FK_2c3f094f7d1244cd10d824989ac" FOREIGN KEY ("compagnyId") REFERENCES "compagny"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "booker" DROP CONSTRAINT "FK_2c3f094f7d1244cd10d824989ac"`);
        await queryRunner.query(`ALTER TABLE "bookings" DROP CONSTRAINT "FK_90a688dc05b1e57bb15ce040d92"`);
        await queryRunner.query(`ALTER TABLE "bookings" DROP CONSTRAINT "FK_0172b36e4e054d6ebb819d58efb"`);
        await queryRunner.query(`ALTER TABLE "rooms" DROP CONSTRAINT "FK_48f2085dfe9791fb36b3f347fd7"`);
        await queryRunner.query(`DROP TABLE "booker"`);
        await queryRunner.query(`DROP TABLE "bookings"`);
        await queryRunner.query(`DROP TABLE "rooms"`);
        await queryRunner.query(`DROP TABLE "compagny"`);
    }

}
