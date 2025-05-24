import { MigrationInterface, QueryRunner } from "typeorm";

export class AddTypeToViews1717090863877 implements MigrationInterface {
    name = 'AddTypeToViews1717090863877'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "views" ADD "type" character varying(200) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "events" DROP CONSTRAINT "FK_09f256fb7f9a05f0ed9927f406b"`);
        await queryRunner.query(`ALTER TABLE "events" DROP CONSTRAINT "FK_92e1d5a5d1caca084d47b1ace2b"`);
        await queryRunner.query(`ALTER TABLE "events" ALTER COLUMN "user_id" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "events" ALTER COLUMN "item_id" SET NOT NULL`);
        await queryRunner.query(`CREATE INDEX "IDX_6faf5db4d4b383e3ab37a7c7b0" ON "views" ("type") `);
        await queryRunner.query(`ALTER TABLE "events" ADD CONSTRAINT "FK_09f256fb7f9a05f0ed9927f406b" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "events" ADD CONSTRAINT "FK_92e1d5a5d1caca084d47b1ace2b" FOREIGN KEY ("item_id") REFERENCES "items"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "events" DROP CONSTRAINT "FK_92e1d5a5d1caca084d47b1ace2b"`);
        await queryRunner.query(`ALTER TABLE "events" DROP CONSTRAINT "FK_09f256fb7f9a05f0ed9927f406b"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_6faf5db4d4b383e3ab37a7c7b0"`);
        await queryRunner.query(`ALTER TABLE "events" ALTER COLUMN "item_id" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "events" ALTER COLUMN "user_id" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "events" ADD CONSTRAINT "FK_92e1d5a5d1caca084d47b1ace2b" FOREIGN KEY ("item_id") REFERENCES "items"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "events" ADD CONSTRAINT "FK_09f256fb7f9a05f0ed9927f406b" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "views" DROP COLUMN "type"`);
    }

}
