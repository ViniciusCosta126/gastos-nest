import { MigrationInterface, QueryRunner } from "typeorm";

export class CriaTabelas1705090086381 implements MigrationInterface {
    name = 'CriaTabelas1705090086381'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "despesas" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "titulo" character varying(100) NOT NULL, "data" date NOT NULL, "tipo_despesa" character varying NOT NULL, "valor" real NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, "usuarioId" uuid, CONSTRAINT "PK_e56af303d820f51a6e6a007b380" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "despesas" ADD CONSTRAINT "FK_f8bd448cc12c6d93b17ed1677be" FOREIGN KEY ("usuarioId") REFERENCES "usuarios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "despesas" DROP CONSTRAINT "FK_f8bd448cc12c6d93b17ed1677be"`);
        await queryRunner.query(`DROP TABLE "despesas"`);
    }

}
