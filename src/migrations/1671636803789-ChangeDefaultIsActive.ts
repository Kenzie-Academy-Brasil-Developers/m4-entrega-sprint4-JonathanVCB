import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeDefaultIsActive1671636803789 implements MigrationInterface {
    name = 'ChangeDefaultIsActive1671636803789'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "isActive" SET DEFAULT true`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "isActive" SET DEFAULT false`);
    }

}
