import Queue from "bull";
import { format, sub } from "date-fns";
import { headingDistanceTo } from "geolocation-utils";
import { days } from "milliseconds";
import { z } from "zod";
import { CompletedSchema, EntrySchema, Type } from "@dev/schema";

export type Data = { url: string; body?: object };

export const AutosSchema = z
  .object({
    data: z.object({
      url: z.string(),
      body: z
        .object({
          $match: z.object({}).passthrough(),
          $skip: z.number(),
          $limit: z.number(),
        })
        .transform(({ $skip, $limit, ...body }) => ({
          ...body,
          $skip: $skip + $limit,
          $limit,
        })),
    }),
    returnvalue: z.object({
      json: z.object({
        $count: z.object({
          $total: z.number(),
        }),
        $list: z
          .object({
            id: z.number(),
          })
          .array(),
      }),
    }),
  })
  .transform(
    ({
      data,
      returnvalue: {
        json: { $count, $list },
      },
    }) => ({
      next: data.body.$skip < $count.$total ? data : null,
      list: $list.map(({ id }) => ({
        url: data.url.replace(/\/search$/, `/vehicle/${id}/`),
      })),
    })
  );

export const limiter = (jobs: unknown, period: number) => {
  const Schema = CompletedSchema.transform(
    ({ timestamp, url }) =>
      `${format(timestamp - (timestamp % period), "yyyyMMdd_HHmmss")}:${url}`
  );

  const urls = Schema.array().parse(jobs);
  console.log(urls);

  return (data: unknown) => !urls.includes(Schema.parse({ data }));
};

export default async (
  {
    id,
    data,
    returnvalue,
  }: { id: Queue.JobId; data: Data; returnvalue: unknown },
  { jobs = [] }: { jobs?: Queue.Job[] } = {}
) =>
  await EntrySchema.parseAsync({ id, data, returnvalue }).then(
    async ({ data, type, returnvalue }) => {
      if (type === Type.AUTOS) {
        return AutosSchema.parseAsync({
          data,
          type,
          returnvalue,
        }).then(({ list, next }) =>
          list
            .filter(limiter(jobs, days(7)))
            .slice(0, 150)
            .concat(next ? [next] : [])
        );
      } else if (type === Type.AUTOS_ITEM) {
        return require("@dev/vehicles/api")
          .update(id, data, returnvalue)
          .then(() => []);
      } else if (type === Type.DEPOT) {
        return require("@dev/depots/api")
          .update(id, data, returnvalue)
          .then(() => []);
      } else if (type === Type.EURO) {
        return require("@dev/euro/api").update(id, data, returnvalue);
      } else if (type === Type.FLATS) {
        return require("@dev/flats/api")
          .update(id, data, returnvalue)
          .then(() => []);
      } else if (type === Type.FUNDS) {
        return require("@dev/funds/api")
          .update(id, data, returnvalue)
          .then(() => []);
      } else if (type === Type.HOTSHOT) {
        return require("@dev/shots/api")
          .update(id, data, returnvalue)
          .then(() => []);
      } else if (type === Type.OTODOM) {
        return require("@dev/props/api")
          .update(id, data, returnvalue)
          .then(() => []);
        // const { items = [] } =
        //   returnvalue.json.props?.pageProps.data?.searchAds || {};
        // return Promise.resolve(
        //   items
        //     .map(({ slug }) => ({
        //       url: `${new URL(data.url).origin}/pl/oferta/${slug}`,
        //     }))
        //     .filter(limiter(jobs, days(7)))
        //     .slice(0, 150)
        // );
      } else if (type === Type.OTOMOTO) {
        return require("@dev/moto/api")
          .update(id, data, returnvalue)
          .then(() => []);
        // const { list = [] } =
        //   returnvalue.json.props?.pageProps.urqlState || {};
        // return Promise.resolve(
        //   list
        //     .map(({ url }) => ({
        //       url,
        //     }))
        //     .filter(limiter(jobs, days(7)))
        //     .slice(0, 150)
        // );
      } else if (type === Type.PLOTS) {
        return require("@dev/plots/api").update(id, data, returnvalue);
      } else if (type === Type.PRODUCTS2) {
        return require("@dev/products/api").update(id, data, returnvalue);
      } else if (type === Type.PROMO) {
        return Promise.resolve(
          returnvalue.json.list
            .map((data) => ({ ...data, url: data.href }))
            .filter(({ url }) => url && new RegExp("//promocje.").test(url))
            .filter(limiter(jobs, days(3)))
        );
      } else if (type === Type.PROMO_ITEM) {
        return require("@dev/promo/api")
          .update(id, data, returnvalue)
          .then(() => []);
      } else if (type === Type.RATES) {
        return require("@dev/rates/api")
          .update(id, data, returnvalue)
          .then(() => returnvalue.json)
          .then(({ date }: { date: string }) =>
            format(
              sub(new Date(date), {
                days: 1,
              }),
              "yyyy-MM-dd"
            )
          )
          .then((date: string) => {
            if (
              date <
              format(
                sub(new Date(), {
                  days: 7,
                }),
                "yyyy-MM-dd"
              )
            ) {
              return [];
            }
            const url = new URL(data.url);
            url.searchParams.set("date", date);
            return [{ url: url.toString() }].filter(limiter(jobs, days(7)));
          });
      } else if (type === Type.ROSSM) {
        return require("@dev/rossm/api")
          .update(id, data, returnvalue)
          .then(() => []);
      } else if (type === Type.RYNEK) {
        return require("@dev/rynek/api")
          .update(id, data, returnvalue)
          .then(() => []);
      } else if (type === Type.SALOM) {
        return require("@dev/salom/api")
          .update(id, data, returnvalue)
          .then(() => []);
      } else if (type === Type.STATIONS) {
        const { url } = data;
        return Promise.resolve(
          returnvalue.json
            .map((data: { station_id: string }) => ({
              ...data,
              url: `${
                new URL(url).origin
              }/ac-ajax/stations-get-station?station_id=${data.station_id}`,
            }))
            .filter(
              ({ x: lat, y: lng }: { x: number; y: number }) =>
                [
                  `${52.17}:${21.06}:${10000}`,
                  `${52.46}:${21.29}:${10000}`,
                  `${53.12}:${23.09}:${10000}`,
                ]
                  .map((line) =>
                    z
                      .tuple([
                        z.string().transform(Number),
                        z.string().transform(Number),
                        z.string().transform(Number),
                      ])
                      .transform(([lat, lng, $radius]) => ({
                        $center: { lat, lng },
                        $radius,
                      }))
                      .parse(line.split(":"))
                  )
                  .findIndex(
                    ({ $center, $radius }) =>
                      headingDistanceTo($center, { lat, lng }).distance <
                      $radius
                  ) >= 0
            )
            .filter(limiter(jobs, days(1)))
        );
      } else if (type === Type.STOCK) {
        return require("@dev/stock/api").update(id, data, returnvalue);
      } else if (type === Type.THULE) {
        return require("@dev/thule/api")
          .update(id, data, returnvalue)
          .then(() => []);
      }
      return [];
    }
  );
