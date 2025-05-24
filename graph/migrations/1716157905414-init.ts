import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1716157905414 implements MigrationInterface {
    name = 'Init1716157905414'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "workspaces" ("id" character varying NOT NULL, "role" character varying(200) NOT NULL, "name" character varying(200) NOT NULL, "email" character varying(200) NOT NULL, "password" character varying(200) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_098656ae401f3e1a4586f47fd8e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_d9728e257d4a8f9c801caed99f" ON "workspaces" ("role") `);
        await queryRunner.query(`CREATE TABLE "views" ("id" character varying NOT NULL, "name" character varying(200) NOT NULL, "role" character varying(200) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "workspace_id" character varying, CONSTRAINT "PK_ae7537f375649a618fff0fb2cb6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_d1c5ae28580f2522d59ccadf5b" ON "views" ("role") `);
        await queryRunner.query(`CREATE INDEX "IDX_9f209ef9e678d27c21ad282b1a" ON "views" ("workspace_id") `);
        await queryRunner.query(`CREATE TABLE "users" ("id" character varying NOT NULL, "name" character varying(200) NOT NULL, "email" character varying(200) NOT NULL, "password" character varying(200) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "sessions" ("id" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "revoked_at" TIMESTAMP, "user_id" character varying, CONSTRAINT "PK_3238ef96f18b355b671619111bc" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_085d540d9f418cfbdc7bd55bb1" ON "sessions" ("user_id") `);
        await queryRunner.query(`CREATE TABLE "memberships" ("id" character varying NOT NULL, "role" character varying(200) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "user_id" character varying, "workspace_id" character varying, CONSTRAINT "PK_25d28bd932097a9e90495ede7b4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_07ab13447f3115c114a0c45769" ON "memberships" ("role") `);
        await queryRunner.query(`CREATE INDEX "IDX_7c1e2fdfed4f6838e0c05ae505" ON "memberships" ("user_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_9b76ecf1dda18a6adec17fe71c" ON "memberships" ("workspace_id") `);
        await queryRunner.query(`CREATE TABLE "labels" ("id" character varying NOT NULL, "value" character varying(200) NOT NULL, "color" character varying(200) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_c0c4e97f76f1f3a268c7a70b925" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "items" ("id" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "workspace_id" character varying, CONSTRAINT "PK_ba5885359424c15ca6b9e79bcf6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_07283d84b7f16143b884f4d8cb" ON "items" ("workspace_id") `);
        await queryRunner.query(`CREATE TABLE "fields" ("id" character varying NOT NULL, "type" character varying(200) NOT NULL, "name" character varying(200) NOT NULL, "value" character varying(200), "format" character varying(200), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "workspace_id" character varying, CONSTRAINT "PK_ee7a215c6cd77a59e2cb3b59d41" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_51279a10aa577cdd419ba5b914" ON "fields" ("workspace_id") `);
        await queryRunner.query(`CREATE TABLE "events" ("id" character varying NOT NULL, "type" character varying(200) NOT NULL, "data" jsonb NOT NULL DEFAULT '{}', "created_at" TIMESTAMP NOT NULL DEFAULT now(), "user_id" character varying, "item_id" character varying, CONSTRAINT "PK_40731c7151fe4be3116e45ddf73" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_5c751ba5c02239663b81996563" ON "events" ("type") `);
        await queryRunner.query(`CREATE INDEX "IDX_09f256fb7f9a05f0ed9927f406" ON "events" ("user_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_92e1d5a5d1caca084d47b1ace2" ON "events" ("item_id") `);
        await queryRunner.query(`ALTER TABLE "views" ADD CONSTRAINT "FK_9f209ef9e678d27c21ad282b1ac" FOREIGN KEY ("workspace_id") REFERENCES "workspaces"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "sessions" ADD CONSTRAINT "FK_085d540d9f418cfbdc7bd55bb19" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "memberships" ADD CONSTRAINT "FK_7c1e2fdfed4f6838e0c05ae5051" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "memberships" ADD CONSTRAINT "FK_9b76ecf1dda18a6adec17fe71c4" FOREIGN KEY ("workspace_id") REFERENCES "workspaces"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "items" ADD CONSTRAINT "FK_07283d84b7f16143b884f4d8cb6" FOREIGN KEY ("workspace_id") REFERENCES "workspaces"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "fields" ADD CONSTRAINT "FK_51279a10aa577cdd419ba5b914c" FOREIGN KEY ("workspace_id") REFERENCES "workspaces"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "events" ADD CONSTRAINT "FK_09f256fb7f9a05f0ed9927f406b" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "events" ADD CONSTRAINT "FK_92e1d5a5d1caca084d47b1ace2b" FOREIGN KEY ("item_id") REFERENCES "items"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "events" DROP CONSTRAINT "FK_92e1d5a5d1caca084d47b1ace2b"`);
        await queryRunner.query(`ALTER TABLE "events" DROP CONSTRAINT "FK_09f256fb7f9a05f0ed9927f406b"`);
        await queryRunner.query(`ALTER TABLE "fields" DROP CONSTRAINT "FK_51279a10aa577cdd419ba5b914c"`);
        await queryRunner.query(`ALTER TABLE "items" DROP CONSTRAINT "FK_07283d84b7f16143b884f4d8cb6"`);
        await queryRunner.query(`ALTER TABLE "memberships" DROP CONSTRAINT "FK_9b76ecf1dda18a6adec17fe71c4"`);
        await queryRunner.query(`ALTER TABLE "memberships" DROP CONSTRAINT "FK_7c1e2fdfed4f6838e0c05ae5051"`);
        await queryRunner.query(`ALTER TABLE "sessions" DROP CONSTRAINT "FK_085d540d9f418cfbdc7bd55bb19"`);
        await queryRunner.query(`ALTER TABLE "views" DROP CONSTRAINT "FK_9f209ef9e678d27c21ad282b1ac"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_92e1d5a5d1caca084d47b1ace2"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_09f256fb7f9a05f0ed9927f406"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_5c751ba5c02239663b81996563"`);
        await queryRunner.query(`DROP TABLE "events"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_51279a10aa577cdd419ba5b914"`);
        await queryRunner.query(`DROP TABLE "fields"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_07283d84b7f16143b884f4d8cb"`);
        await queryRunner.query(`DROP TABLE "items"`);
        await queryRunner.query(`DROP TABLE "labels"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_9b76ecf1dda18a6adec17fe71c"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_7c1e2fdfed4f6838e0c05ae505"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_07ab13447f3115c114a0c45769"`);
        await queryRunner.query(`DROP TABLE "memberships"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_085d540d9f418cfbdc7bd55bb1"`);
        await queryRunner.query(`DROP TABLE "sessions"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_9f209ef9e678d27c21ad282b1a"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_d1c5ae28580f2522d59ccadf5b"`);
        await queryRunner.query(`DROP TABLE "views"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_d9728e257d4a8f9c801caed99f"`);
        await queryRunner.query(`DROP TABLE "workspaces"`);
    }

}
