import { MigrationInterface, QueryRunner } from "typeorm";

export class pi1665852874995 implements MigrationInterface {
    name = 'pi1665852874995'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "dado_climatico" DROP COLUMN "sensor_climatico_id"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "dado_climatico" ADD "sensor_climatico_id" integer NOT NULL`);
    }

}
