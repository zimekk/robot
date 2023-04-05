exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.renameColumn("products", "json", "data");
  pgm.addColumns("products", {
    item: { type: "varchar(128)" },
  });
};

exports.down = (pgm) => {};
