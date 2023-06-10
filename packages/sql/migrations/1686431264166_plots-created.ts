/* eslint-disable @typescript-eslint/naming-convention */
import type { MigrationBuilder, ColumnDefinitions } from "node-pg-migrate";

export const shorthands: ColumnDefinitions | undefined = undefined;

export async function up(pgm: MigrationBuilder): Promise<void> {
  pgm.addColumns("plots", {
    item: {
      type: "varchar(128)",
      // notNull: true,
    },
    created: {
      type: "timestamp",
      // notNull: true,
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
  pgm.sql("update plots set item=id");
  pgm.sql(
    "update plots set created=TO_TIMESTAMP(json#>>'{createdTime}', 'YYYY-MM-DDTHH:MI:SS')"
  );
  pgm.alterColumn("plots", "item", { notNull: true });
  pgm.alterColumn("plots", "created", { notNull: true });
  pgm.dropColumns("plots", ["id"]);
  pgm.addColumns("plots", {
    id: "id",
  });
  pgm.renameColumn("plots", "json", "data");
}

export async function down(pgm: MigrationBuilder): Promise<void> {
  pgm.dropColumns("plots", [
    "item",
    "created",
    "checked",
    "updated",
    "removed",
  ]);
}
