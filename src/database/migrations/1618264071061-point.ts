import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class point1618264071061 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "points",
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true
                    },
                    {
                        name: 'name',
                        type: 'varchar',                      
                    },
                    {
                        name: 'city',
                        type: 'varchar',                      
                    },
                    {
                        name: 'state',
                        type: 'varchar',                      
                    },
                    {
                        name: 'reference',
                        type: 'varchar',                      
                    },
                    {
                        name: 'description',
                        type: 'varchar',                      
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("points");
    }

}
