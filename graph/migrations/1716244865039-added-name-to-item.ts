import { MigrationInterface, QueryRunner } from "typeorm";

export class AddedNameToItem1716244865039 implements MigrationInterface {
    name = 'AddedNameToItem1716244865039'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "items" ADD "name" character varying(200) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "items" DROP COLUMN "name"`);
    }

}
