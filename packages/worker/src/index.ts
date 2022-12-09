import { client } from "./client";

export { chrome } from "./client";

export { router } from "./router";

export const broker = async (
  url = "https://zimekk.github.io/robot/",
  ...args: string[]
) => {
  console.log(["broker"], url, ...args);

  const worker = client();
  await worker.produce({ url });
  await worker.close().then(() => console.log(["close"]));
};

export const status = async (...args: string[]) => {
  console.log(["status"], ...args);

  const queue = client().queue;

  await queue.getCompleted().then((jobs) =>
    console.log(
      ["getCompleted"],
      jobs.map(({ id, name, data, returnvalue }) => ({
        id,
        name,
        data,
        returnvalue,
      }))
    )
  );

  await queue
    .whenCurrentJobsFinished()
    .then(() => console.log(["whenCurrentJobsFinished"]));

  await queue.close().then(() => console.log(["close"]));
};

export const worker = async () => {
  console.log(["worker"]);

  client().process();
};
