import * as Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable("tracks_categories", (table) => {
    table.integer("track_id").notNullable();
    table.integer("category_id").notNullable();

    table.foreign("track_id").references("id").inTable("tracks");
    table.foreign("category_id").references("id").inTable("categories");
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable("tracks_categories");
}
