import { z } from "zod";

export const ItemSchema = z
  .object({
    id: z.number(),
    vin17: z.string(),
    type: z.string(),
    isNew: z.boolean(),
    modelCode: z.string(),
    title: z.string(),
    brand: z.object({ id: z.number(), label: z.string() }),
    series: z.object({ id: z.number(), label: z.string() }),
    bodyType: z.object({ id: z.number(), label: z.string() }),
    seriesCode: z.string(),
    productionYear: z.number(),
    mileage: z.number().optional(),
    fuel: z.object({ id: z.number(), label: z.string() }),
    consumptionFuel: z.number().optional(),
    emission: z.number().optional(),
    emissionStandard: z.object({ id: z.number(), label: z.string() }),
    powerKW: z.number(),
    powerHP: z.number(),
    capacity: z.number().optional(),
    transmission: z.object({ id: z.number(), label: z.string() }),
    color: z
      .object({
        labelEN: z.string(),
        code: z.string(),
        id: z.number(),
        label: z.string(),
      })
      .strict(),
    images: z.number(),
    imagesLastChanged: z.string().optional(),
    panoramas: z.number(),
    panoramasLastChanged: z.string().optional(),
    exterior360: z.boolean(),
    interior360: z.boolean(),
    warranty: z.number(),
    usedBrand: z.boolean(),
    reservable: z.boolean(),
    reservationStatus: z.string().optional(),
    vatReclaimable: z.boolean(),
    leasable: z.boolean(),
    leaseProduct: z
      .object({
        type: z.string(),
        label: z.string(),
        downPaymentLimits: z.object({
          min: z.number(),
          max: z.number(),
          step: z.number(),
          default: z.number(),
        }),
        termLimits: z.object({
          min: z.number(),
          max: z.number(),
          step: z.number(),
          default: z.number(),
        }),
        totalAgeLimit: z.number(),
        residualValueFactorLimits: z.array(
          z.object({ term: z.number(), min: z.number(), max: z.number() })
        ),
        residualValueStep: z.number(),
        residualValueDefault: z.string(),
        interestRates: z.array(
          z.object({ term: z.number(), value: z.number() })
        ),
      })
      .optional(),
    comfortLeaseProduct: z
      .object({
        type: z.string(),
        label: z.string(),
        calculationMode: z.string(),
        downPaymentLimits: z
          .object({
            min: z.number(),
            max: z.number(),
            step: z.number(),
            default: z.number(),
          })
          .strict(),
        termLimits: z
          .object({
            min: z.number(),
            max: z.number(),
            step: z.number(),
            default: z.number(),
          })
          .strict(),
        totalAgeLimit: z.number(),
        annualMileageLimits: z
          .object({
            min: z.number(),
            max: z.number(),
            step: z.number(),
            default: z.number(),
          })
          .strict(),
        interestRates: z.array(
          z.object({ term: z.number(), value: z.number() })
        ),
        tarRvMod: z
          .object({
            id: z.number(),
            tmdate: z.string(),
            accessoryLimit: z.number(),
            rvValue: z.number(),
            brvValue: z.number(),
            rvValueUsed: z.number(),
            brvValueUsed: z.number(),
            carSegmentId: z.string(),
          })
          .strict(),
        tarRvDev: z
          .object({
            term: z.number(),
            totalMileage: z.number(),
            rvDev: z.number(),
            rvDevUsed: z.number(),
          })
          .strict(),
      })
      .strict()
      .optional(),
    newPrice: z.number(),
    optionsPrice: z.number(),
    accessoriesPrice: z.number(),
    transactionalPrice: z.number(),
    dealer: z
      .object({
        id: z.number(),
        bunoBMW: z.string(),
        bunoMINI: z.string().optional(),
        bunoMOTORCYCLE: z.string().optional(),
        owner: z.string(),
        ownerName: z.string(),
        name: z.string(),
        legalName: z.string(),
        street: z.string(),
        zip: z.string(),
        city: z.string(),
        lat: z.number(),
        lng: z.number(),
      })
      .strict(),
    created: z.string(),
    age: z.number(),
    isYUC: z.boolean(),
    reserved: z.boolean(),
    extended: z.object({ brand: z.string(), buno: z.string() }),
  })
  .extend({
    consumptionElectric: z.number().optional(),
    emissionMeasurementStandard: z.string().optional(),
    electricRange: z.number().optional(),
  })
  .extend({
    reservationFee: z.number().optional(),
    transactionalPriceUpdated: z.string().optional(),
  })
  .extend({
    video: z.string().optional(),
  })
  .strict();

export const Schema = z.object({
  $list: ItemSchema.array(),
  $count: z.object({
    $total: z.number(),
    genericEquipment: z.record(z.number()),
  }),
});
