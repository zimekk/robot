export const getTotal = (usage: string[]) =>
  Number(
    ((
      (usage
        .map((line) => line.split(/\s+/))
        .find((cols) => cols[5].match(/hostname/)) || [])[4] || ""
    ).match(/^(\d+)%/) || [])[1]
  );
