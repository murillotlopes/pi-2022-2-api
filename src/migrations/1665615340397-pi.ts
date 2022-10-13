import { MigrationInterface, QueryRunner } from "typeorm";

export class pi1665615340397 implements MigrationInterface {
    name = 'pi1665615340397'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "sensor_climatico" ("id" SERIAL NOT NULL, "nome_equipamento" character varying NOT NULL, "logradouro" character varying NOT NULL, "numero" character varying NOT NULL, "bairro" character varying NOT NULL, "cidade" character varying NOT NULL, "uf" character varying NOT NULL, "cep" integer NOT NULL, "latitude" character varying, "longitude" character varying, CONSTRAINT "PK_f8767e79e974d37317b6bf814af" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "dado_climatico" ("id" SERIAL NOT NULL, "data_registro" TIMESTAMP NOT NULL DEFAULT '2022-10-12T22:55:41.988Z', "precipitacao" integer NOT NULL, "vasao" character varying NOT NULL, "nivel" integer NOT NULL, "sensor_climatico_id" integer NOT NULL, CONSTRAINT "PK_2a6c7085279fa1876dacc4a559b" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "dado_climatico"`);
        await queryRunner.query(`DROP TABLE "sensor_climatico"`);
    }

}
