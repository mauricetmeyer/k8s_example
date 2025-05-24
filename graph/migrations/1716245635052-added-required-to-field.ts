import { MigrationInterface, QueryRunner } from "typeorm";

export class AddedRequiredToField1716245635052 implements MigrationInterface {
    name = 'AddedRequiredToField1716245635052'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "fields" ADD "required" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "fields" DROP COLUMN "required"`);
    }

}
