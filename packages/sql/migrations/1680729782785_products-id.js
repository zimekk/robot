exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.dropColumns("products", ["id"]);
  pgm.addColumns("products", {
    id: "id",
  });
};

exports.down = (pgm) => {};
