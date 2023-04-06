exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable("vehicles", {
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
