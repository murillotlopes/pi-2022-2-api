import { MigrationInterface, QueryRunner } from "typeorm";

export class pi1665843463776 implements MigrationInterface {
    name = 'pi1665843463776'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "usuario" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying NOT NULL, "email" character varying NOT NULL, "senha" character varying NOT NULL, "administrador" boolean NOT NULL DEFAULT false, CONSTRAINT "UQ_2863682842e688ca198eb25c124" UNIQUE ("email"), CONSTRAINT "PK_a56c58e5cabaa04fb2c98d2d7e2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "sensor_climatico" ADD "data_criacao" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "dado_climatico" ADD "sensor_id" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "dado_climatico" ALTER COLUMN "data_registro" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "dado_climatico" ADD CONSTRAINT "FK_589ac24d837f7de4cec9206d3c3" FOREIGN KEY ("sensor_id") REFERENCES "sensor_climatico"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "dado_climatico" DROP CONSTRAINT "FK_589ac24d837f7de4cec9206d3c3"`);
        await queryRunner.query(`ALTER TABLE "dado_climatico" ALTER COLUMN "data_registro" SET DEFAULT '2022-10-12 22:55:41.988'`);
        await queryRunner.query(`ALTER TABLE "dado_climatico" DROP COLUMN "sensor_id"`);
        await queryRunner.query(`ALTER TABLE "sensor_climatico" DROP COLUMN "data_criacao"`);
        await queryRunner.query(`DROP TABLE "usuario"`);
    }

}
