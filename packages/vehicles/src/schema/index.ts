import { z } from "zod";

export const LeaseProductSchema = z
  .object({
    type: z.string(),
    label: z.string(),
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
    // residualValueFactorLimits: z.array(
    //   z.object({ term: z.number(), min: z.number(), max: z.number() })
    // ),
    // residualValueStep: z.number(),
    // residualValueDefault: z.string(),
    interestRates: z.array(z.object({ term: z.number(), value: z.number() })),
  })
  .strict();

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
        labelEN: z.string().optional(),
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
    leaseProduct: LeaseProductSchema.extend({
      residualValueFactorLimits: z.array(
        z.object({ term: z.number(), min: z.number(), max: z.number() })
      ),
      residualValueStep: z.number(),
      residualValueDefault: z.string(),
    })
      .or(z.string())
      .optional(),
    comfortLeaseProduct: LeaseProductSchema.extend({
      // type: z.string(),
      // label: z.string(),
      calculationMode: z.string(),
      // downPaymentLimits: z
      //   .object({
      //     min: z.number(),
      //     max: z.number(),
      //     step: z.number(),
      //     default: z.number(),
      //   })
      //   .strict(),
      // termLimits: z
      //   .object({
      //     min: z.number(),
      //     max: z.number(),
      //     step: z.number(),
      //     default: z.number(),
      //   })
      //   .strict(),
      // totalAgeLimit: z.number(),
      annualMileageLimits: z
        .object({
          min: z.number(),
          max: z.number(),
          step: z.number(),
          default: z.number(),
        })
        .strict(),
      // interestRates: z.array(
      //   z.object({ term: z.number(), value: z.number() })
      // ),
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
      .or(z.string())
      .optional(),
    newPrice: z.number(),
    optionsPrice: z.number(),
    accessoriesPrice: z.number(),
    transactionalPrice: z.number(),
    dealer: z
      .object({
        id: z.number(),
        bunoBMW: z.string().optional(),
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
    reserved: z.boolean().optional(),
    extended: z
      .object({ brand: z.string(), buno: z.string().nullable() })
      .optional(),
  })
  .extend({
    modelCode: z.string().optional(),
    series: z.object({ id: z.number(), label: z.string() }).optional(),
    seriesCode: z.string().optional(),
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
    age: z.number().optional(),
    accessoriesPrice: z.number().optional(),
    isYUC: z.boolean().optional(),
    newPrice: z.number().optional(),
    optionsPrice: z.number().optional(),
    registration: z.string().optional(),
  })
  .extend({
    video: z.string().optional(),
  })
  .strict();

export const AutosItemSchema = ItemSchema.extend({
  market: z.string(),
  variant: z.object({ id: z.number(), label: z.string() }).optional(),
  drive: z.object({ id: z.number(), label: z.string() }),
  doors: z.number(),
  seats: z.number(),
  metallic: z.boolean(),
  upholstery: z.object({ id: z.number(), label: z.string() }),
  genericEquipment: z.array(
    z.object({
      equipmentGroupId: z.number(),
      id: z.number(),
      label: z.string(),
    })
  ),
  equipment: z.array(
    z.union([
      z.object({
        genericEquipmentIds: z.array(z.number()),
        label: z.string(),
        equipmentGroupId: z.number(),
      }),
      z.object({ label: z.string(), equipmentGroupId: z.number() }),
    ])
  ),
  equipmentGroup: z.array(z.object({ id: z.number(), label: z.string() })),
  equipmentText: z.string().optional(),
  dealer: ItemSchema.shape.dealer.extend({
    market: z.string(),
    email: z.string(),
    phone: z.string(),
    fax: z.string().optional(),
    urlWebsite: z.string(),
    urlImprint: z.string().optional(),
    urlTermsConditions: z.string().optional(),
    businessHours: z.string(),
  }),
  owner: z.string(),
  available: z.string(),
  // leaseProduct: z.string().optional(),
  // comfortLeaseProduct: z.string().optional(),
});

export type Vehicle = z.infer<typeof AutosItemSchema>;

export const Schema = z.object({
  json: AutosItemSchema,
});
