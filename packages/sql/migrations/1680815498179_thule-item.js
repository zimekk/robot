exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.addColumns("thule", {
    item: { type: "varchar(128)" },
  });
  pgm.sql("update thule set item=id");
  pgm.alterColumn("thule", "item", { notNull: true });
  pgm.dropColumns("thule", ["id"]);
  pgm.addColumns("thule", {
    id: "id",
  });
};

exports.down = (pgm) => {};
