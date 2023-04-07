/* eslint-disable @typescript-eslint/naming-convention */
import { MigrationBuilder, ColumnDefinitions } from "node-pg-migrate";

export const shorthands: ColumnDefinitions | undefined = undefined;

export async function up(pgm: MigrationBuilder): Promise<void> {
  pgm.addColumns("vehicles", {
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
  pgm.dropColumns("vehicles", ["checked", "updated", "removed"]);
}
