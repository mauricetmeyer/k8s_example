import { MigrationInterface, QueryRunner } from "typeorm";

export class RenameFieldProperties1716243111123 implements MigrationInterface {
    name = 'RenameFieldProperties1716243111123'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "fields" DROP COLUMN "type"`);
        await queryRunner.query(`ALTER TABLE "fields" DROP COLUMN "value"`);
        await queryRunner.query(`ALTER TABLE "fields" ADD "path" character varying(200)`);
        await queryRunner.query(`ALTER TABLE "fields" ADD "role" character varying(200) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "fields" DROP COLUMN "role"`);
        await queryRunner.query(`ALTER TABLE "fields" DROP COLUMN "path"`);
        await queryRunner.query(`ALTER TABLE "fields" ADD "value" character varying(200)`);
        await queryRunner.query(`ALTER TABLE "fields" ADD "type" character varying(200) NOT NULL`);
    }

}
