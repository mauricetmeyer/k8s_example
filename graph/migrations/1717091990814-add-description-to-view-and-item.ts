import { MigrationInterface, QueryRunner } from "typeorm";

export class AddDescriptionToViewAndItem1717091990814 implements MigrationInterface {
    name = 'AddDescriptionToViewAndItem1717091990814'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "views" ADD "description" character varying(2000)`);
        await queryRunner.query(`ALTER TABLE "items" ADD "description" character varying(2000)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "items" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "views" DROP COLUMN "description"`);
    }

}
