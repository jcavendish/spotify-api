import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable("tracks", (table) => {
    table.increments();
    table.string("title").notNullable();
    table.string("artist").notNullable();
    table.string("path").notNullable();
    table.string("cover_img_path").notNullable();
    table.integer("likes").defaultTo(0);
    table.timestamp("created_at", { precision: 6 }).defaultTo(knex.fn.now(6));
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable("tracks");
}
