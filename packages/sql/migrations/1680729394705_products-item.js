exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.sql("update products set item=id");
  pgm.alterColumn("products", "item", { notNull: true });
};

exports.down = (pgm) => {};
