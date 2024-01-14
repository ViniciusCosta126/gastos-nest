import { MigrationInterface, QueryRunner } from "typeorm";

export class CriaTabelas1705090194922 implements MigrationInterface {
    name = 'CriaTabelas1705090194922'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "despesas" DROP CONSTRAINT "FK_f8bd448cc12c6d93b17ed1677be"`);
        await queryRunner.query(`ALTER TABLE "despesas" ADD CONSTRAINT "FK_f8bd448cc12c6d93b17ed1677be" FOREIGN KEY ("usuarioId") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "despesas" DROP CONSTRAINT "FK_f8bd448cc12c6d93b17ed1677be"`);
        await queryRunner.query(`ALTER TABLE "despesas" ADD CONSTRAINT "FK_f8bd448cc12c6d93b17ed1677be" FOREIGN KEY ("usuarioId") REFERENCES "usuarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
