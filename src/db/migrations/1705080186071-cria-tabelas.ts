import { MigrationInterface, QueryRunner } from "typeorm";

export class CriaTabelas1705080186071 implements MigrationInterface {
    name = 'CriaTabelas1705080186071'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuarios" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "usuarios" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "usuarios" ADD "deleted_at" TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "usuarios" DROP COLUMN "deleted_at"`);
        await queryRunner.query(`ALTER TABLE "usuarios" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "usuarios" DROP COLUMN "created_at"`);
    }

}
