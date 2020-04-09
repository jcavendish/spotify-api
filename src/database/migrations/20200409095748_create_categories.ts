import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable("categories", (table) => {
    table.increments();
    table.string("label").notNullable();
    table.string("code").notNullable();
    table.timestamp("created_at", { precision: 6 }).defaultTo(knex.fn.now(6));
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable("categories");
}
