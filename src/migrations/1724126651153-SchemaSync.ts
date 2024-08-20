import { MigrationInterface, QueryRunner } from 'typeorm';

export class SchemaSync1724126651153 implements MigrationInterface {
  name = 'SchemaSync1724126651153';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "coffee" ADD "description" character varying`,
      undefined,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "coffee" DROP COLUMN "description"`,
      undefined,
    );
  }
}
