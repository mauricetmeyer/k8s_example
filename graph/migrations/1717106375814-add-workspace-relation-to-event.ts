import { MigrationInterface, QueryRunner } from "typeorm";

export class AddWorkspaceRelationToEvent1717106375814 implements MigrationInterface {
    name = 'AddWorkspaceRelationToEvent1717106375814'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "events" ADD "workspace_id" character varying NOT NULL`);
        await queryRunner.query(`CREATE INDEX "IDX_a4a6e94b5357bba950eb90120f" ON "events" ("workspace_id") `);
        await queryRunner.query(`ALTER TABLE "events" ADD CONSTRAINT "FK_a4a6e94b5357bba950eb90120fe" FOREIGN KEY ("workspace_id") REFERENCES "workspaces"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "events" DROP CONSTRAINT "FK_a4a6e94b5357bba950eb90120fe"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a4a6e94b5357bba950eb90120f"`);
        await queryRunner.query(`ALTER TABLE "events" DROP COLUMN "workspace_id"`);
    }

}
