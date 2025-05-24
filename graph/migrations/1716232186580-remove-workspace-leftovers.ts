import { MigrationInterface, QueryRunner } from "typeorm";

export class RemoveWorkspaceLeftovers1716232186580 implements MigrationInterface {
    name = 'RemoveWorkspaceLeftovers1716232186580'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "workspaces" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "workspaces" DROP COLUMN "password"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "workspaces" ADD "password" character varying(200) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "workspaces" ADD "email" character varying(200) NOT NULL`);
    }

}
