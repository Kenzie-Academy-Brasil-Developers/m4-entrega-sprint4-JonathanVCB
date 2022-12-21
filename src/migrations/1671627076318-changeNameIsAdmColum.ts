import { MigrationInterface, QueryRunner } from "typeorm";

export class changeNameIsAdmColum1671627076318 implements MigrationInterface {
    name = 'changeNameIsAdmColum1671627076318'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "isAdmn" TO "isAdm"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "isAdm" TO "isAdmn"`);
    }

}
