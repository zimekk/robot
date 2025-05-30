import type { ColumnDefinitions, MigrationBuilder } from "node-pg-migrate";

export const shorthands: ColumnDefinitions | undefined = undefined;

export async function up(pgm: MigrationBuilder): Promise<void> {
  pgm.createTable("petro", {
    id: "id",
    item: { type: "varchar(128)", notNull: true },
    data: { type: "jsonb", notNull: true },
    created: {
      type: "timestamp",
      notNull: true,
      default: pgm.func("current_timestamp"),
    },
    checked: {
      type: "timestamp",
    },
    updated: {
      type: "timestamp",
    },
    removed: {
      type: "timestamp",
    },
  });
}

export async function down(pgm: MigrationBuilder): Promise<void> {
  // pgm.dropTable("petro");
}
