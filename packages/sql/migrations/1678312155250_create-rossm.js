/* eslint-disable camelcase */

exports.shorthands = undefined;

// https://github.com/salsita/node-pg-migrate#quick-example
exports.up = (pgm) => {
  pgm.createTable("rossm", {
    id: "id",
    json: { type: "jsonb", notNull: true },
    created: {
      type: "timestamp",
      notNull: true,
      default: pgm.func("current_timestamp"),
    },
  });
};

exports.down = (pgm) => {};
