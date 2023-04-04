exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.dropTable("rossm");
  pgm.createTable("rossm", {
    id: "id",
    item: { type: "varchar(128)", notNull: true },
    data: { type: "jsonb", notNull: true },
    created: {
      type: "timestamp",
      notNull: true,
      default: pgm.func("current_timestamp"),
    },
  });
};

exports.down = (pgm) => {};
