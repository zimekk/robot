import { z } from "zod";

export const Equipment = z.object({
  aggregatedStandardOption: z.boolean(),
  categorizedOptionGroups: z
    .object({
      default_PL: z
        .object({
          optionGroups: z.string().array(),
          category: z.string(),
        })
        .array()
        .optional(),
    })
    .passthrough()
    .optional(),
  definedByVg: z.boolean().optional(),
  displayType: z.string().optional(),
  equipmentFlag: z.string().optional(),
  images: z.object({ default: z.string() }),
  marketingText: z.object({}),
  name: z.object({
    default_PL: z.string(),
    pl_PL: z.string().optional(),
    en_PL: z.string().optional(),
  }),
  nonDerivedDisplayType: z.string().optional(),
  optionFlag: z.string(),
  packageFlag: z.string(),
  standard: z.boolean(),
  translatedOptionGroups: z
    .object({
      default_PL: z.array(z.string()).optional(),
    })
    .passthrough()
    .optional(),
  translatedSalesGroups: z
    .object({
      default_PL: z.array(z.string().nullable()),
      pl_PL: z.array(z.string().nullable()),
      en_PL: z.array(z.string()),
    })
    .optional(),
  type: z.string(),
  ucpType: z.string().optional(),
  usageType: z.string().optional(),
});

export const Vehicle = z.object({
  documentId: z.string(),
  // internal: z.object({
  //   documentId: z.string(),
  //   enrichedAt: z.string(),
  //   updatedAt: z.string(),
  //   vssConfigId: z.string(),
  //   kafkaMetadata: z.object({
  //     topic: z.string(),
  //     partition: z.number(),
  //     offset: z.number(),
  //   }),
  // }),
  // media: z.object({
  //   cosyImages: z.record(z.string()),
  //   eveCpMedia: z.object({
  //     configId: z.string(),
  //     contentBaseUrl: z.string(),
  //     expirationDate: z.string(),
  //   }),
  // }),
  // offering: z.object({
  //   salesDestinations: z
  //     .object({
  //       name: z.string(),
  //       onlineStatus: z.boolean(),
  //       marketingText: z.string(),
  //     })
  //     .array(),
  //   fodInformation: z.object({}),
  // }),
  ordering: z.unknown(),
  // ordering: z.object({
  //   distributionData: z.object({
  //     actualLocationId: z.string(),
  //     bufferedDeliveryDate: z.string(),
  //     carrierLoad: z.string(),
  //     dealerLocation: z.object({
  //       latitude: z.number(),
  //       longitude: z.number(),
  //     }),
  //     addressLocale: z.object({}),
  //     destinationLocationDomesticDealerNumber: z.string(),
  //     distributionMot: z.string(),
  //     expectedDeliveryDate: z.string(),
  //     holds: z.object({
  //       agInvoiceHold: z.boolean(),
  //       qualityHoldFlag: z.boolean(),
  //       vehDelHoldFlg: z.boolean(),
  //     }),
  //     load: z.string(),
  //     manufacturerDistributionPrio: z.string().optional(),
  //     qualityHoldFlag: z.boolean(),
  //     shippingDealerNumber: z.string(),
  //     transportFlag: z.string().optional(),
  //     locationOutletNickname: z.string().optional(),
  //   }),
  //   orderData: z.object({
  //     isOfferingTemplate: z.boolean(),
  //     ivsModUser: z.string(),
  //     ivsModSystem: z.string(),
  //     ivsProcessingType: z.string(),
  //     ivsReserved: z.boolean(),
  //     orderEntryDate: z.string(),
  //     orderType: z.string(),
  //     orderLastModifiedTimestamp: z.string(),
  //     orderStatusChangeTimestamp: z.string(),
  //     quotaLegalEntity: z.string(),
  //     requestedProductionWeek: z.string(),
  //     stockType: z.string(),
  //     wholesalerSearchCodes: z.object({}),
  //     usageState: z.string(),
  //     subProductionWeek: z.string(),
  //     isDirectSales: z.boolean(),
  //     errorFlag: z.string(),
  //     pitTransferable: z.boolean(),
  //     offeringTemplate: z.unknown().optional(),
  //     isSpotlight: z.boolean(),
  //   }),
  //   productionData: z.object({
  //     ckdFlag: z.boolean(),
  //     confirmedDeliveryDateFrom: z.string(),
  //     confirmedDeliveryDateTo: z.string(),
  //     confirmedDeliveryDateInitialFrom: z.string(),
  //     confirmedDeliveryDateInitialTo: z.string(),
  //     confirmedProductionWeek: z.string(),
  //     endOfProduction: z.string(),
  //     engineNumber: z.string(),
  //     factoryCode: z.string(),
  //     orderNumber: z.string(),
  //     orderStatus: z.number(),
  //     plannedEndOfProduction: z.string(),
  //     productionDataError: z.string(),
  //     productionDate: z.string(),
  //     productionProcess: z.string(),
  //     productionQuotaCode: z.string(),
  //     productType: z.string(),
  //     tsn: z.string(),
  //     vin7: z.string(),
  //     vin10: z.string(),
  //     vin17: z.string(),
  //   }),
  //   retailData: z.object({
  //     buNo: z.string(),
  //     dealerClass: z.string(),
  //     dealerGroupId: z.string(),
  //     distributionPartnerId: z.string(),
  //     localDealerNumber: z.string(),
  //     locationOutletAddress: z.object({
  //       state: z.string(),
  //       postalCode: z.string(),
  //     }),
  //     referenceNumber: z.string(),
  //     technicalReferenceNumber: z.string(),
  //     purchaseAgreementEventDate: z.string().optional(),
  //   }),
  //   wholesaleData: z.object({
  //     businessType: z.string(),
  //     region: z.string(),
  //     transportFlag: z.string(),
  //     wholesaler: z.string(),
  //   }),
  // }),
  // price: z.object({
  //   listPriceCurrency: z.string(),
  //   equipmentsTotalPrice: z.number(),
  //   equipmentsTotalGrossPrice: z.number(),
  //   equipmentsTotalListPriceNet: z.number(),
  //   equipmentsTotalListPriceGross: z.number(),
  //   netListPrice: z.number(),
  //   grossListPrice: z.number(),
  //   netModelPrice: z.number(),
  //   grossModelPrice: z.number(),
  //   modelSalesPriceNet: z.number(),
  //   modelSalesPriceGross: z.number(),
  //   netSalesPrice: z.number(),
  //   grossSalesPrice: z.number(),
  //   taxes: z.object({
  //     totalTaxes: z.number(),
  //     taxes: z
  //       .object({
  //         key: z.string(),
  //         category: z.string(),
  //         amount: z.number(),
  //         percentage: z.number(),
  //       })
  //       .array(),
  //   }),
  //   priceUpdatedAt: z.string(),
  // }),
  // salesProcess: z.object({ reason: z.string(), type: z.string() }),
  // vehicleLifeCycle: z.object({ isRepaired: z.boolean() }),
  vehicleSpecification: z.unknown(),
  // vehicleSpecification: z.object({
  //   modelAndOption: z.object({
  //     baseFuelType: z.string(),
  //     brand: z.string(),
  //     bodyType: z.string(),
  //     bodyTypeDescription: z.object({ pl_PL: z.string() }),
  //     color: z.object({
  //       hexColorCode: z.string(),
  //       rgbColorCode: z.object({
  //         r: z.number(),
  //         g: z.number(),
  //         b: z.number(),
  //       }),
  //       labColorCode: z.object({
  //         l: z.number(),
  //         a: z.number(),
  //         b: z.number(),
  //       }),
  //       clusterFine: z.string(),
  //       clusterRough: z.string(),
  //     }),
  //     colors: z
  //       .object({
  //         hexColorCode: z.string(),
  //         rgbColorCode: z.object({
  //           r: z.number(),
  //           g: z.number(),
  //           b: z.number(),
  //         }),
  //         labColorCode: z.object({
  //           l: z.number(),
  //           a: z.number(),
  //           b: z.number(),
  //         }),
  //         clusterFine: z.string(),
  //         clusterRough: z.string(),
  //       })
  //       .array(),
  //     driveType: z.string(),
  //     equipments: z.record(Equipment),
  //     is48Volt: z.boolean(),
  //     marketingDriveType: z.string(),
  //     model: z.object({
  //       agModelCode: z.string(),
  //       derivative: z.string(),
  //       effectDateRange: z.object({
  //         from: z.string(),
  //         to: z.string().optional(),
  //       }),
  //       modelDescription: z.object({
  //         default_PL: z.string(),
  //         pl_PL: z.string(),
  //         en_PL: z.string(),
  //       }),
  //       modelName: z.string(),
  //       steering: z.string(),
  //       vgModelCode: z.string(),
  //     }),
  //     modelRange: z.object({
  //       name: z.string(),
  //       description: z.object({
  //         default_PL: z.string(),
  //         pl_PL: z.string(),
  //       }),
  //     }),
  //     numberOfColors: z.number(),
  //     numberOfGears: z.number(),
  //     paintType: z.string(),
  //     series: z.object({ name: z.string() }),
  //     transmission: z.string(),
  //     retailSeries: z.object({ name: z.string() }),
  //     upholsteryColor: z.object({
  //       hexColorCode: z.string(),
  //       rgbColorCode: z.object({
  //         r: z.number(),
  //         g: z.number(),
  //         b: z.number(),
  //       }),
  //       labColorCode: z.object({
  //         l: z.number(),
  //         a: z.number(),
  //         b: z.number(),
  //       }),
  //       upholsteryColorCluster: z.string(),
  //     }),
  //     upholsteryType: z.string(),
  //     marketingModelRanges: z.object({}),
  //     marketingModelRange: z.string(),
  //     marketingSeries: z.array(z.string()),
  //     trim: z.object({
  //       default_PL: z.string(),
  //       pl_PL: z.string(),
  //       en_PL: z.string(),
  //     }),
  //   }),
  //   technicalAndEmission: z.object({
  //     technicalData: z.object({
  //       cylinderCapacity: z.object({
  //         "cm³": z.number(),
  //         l: z.number(),
  //       }),
  //       cylinderCount: z.number(),
  //       degreeOfElectrification: z.string(),
  //       degreeOfElectrificationBasedFuelType: z.string(),
  //       maxTotalWeight: z.object({ kg: z.number() }),
  //       power: z.object({
  //         PS: z.number(),
  //         kW: z.number(),
  //         HP: z.number(),
  //       }),
  //       powerBasedOnDegreeOfElectrification: z.object({
  //         PS: z.number(),
  //         kW: z.number(),
  //         bHP: z.number(),
  //       }),
  //       powerCommunication: z.object({
  //         PS: z.number(),
  //         kW: z.number(),
  //         bHP: z.number(),
  //       }),
  //       powerConfigurationId: z.string(),
  //       seatCount: z.number(),
  //       tankCapacity: z.object({ "cm³": z.number(), l: z.number() }),
  //       timeFrom0To100Kmh: z.object({ s: z.number() }),
  //       topSpeed: z.object({ "km/h": z.number() }),
  //       torque: z.object({ Nm: z.number() }),
  //       vehicleHeight: z.object({ mm: z.number() }),
  //       vehicleLength: z.object({ mm: z.number() }),
  //       vehicleWidth: z.object({ mm: z.number() }),
  //       wheels: z.object({
  //         frontTireSize: z.string(),
  //         rearTireSize: z.string(),
  //         frontWheelSize: z.string(),
  //         rearWheelSize: z.string(),
  //       }),
  //       curbWeightDIN: z.number(),
  //       curbWeightEU: z.number(),
  //     }),
  //     emissionData: z.object({
  //       ecTypeApprovalNumber: z.string(),
  //       emissionClassification: z.string(),
  //       emissionSource: z.string(),
  //       hasNonBindingEfficiencyClassFallback: z.boolean(),
  //       wltpCo2ChargeSustaining: z.object({
  //         "g/km": z.object({
  //           combined: z.number(),
  //           low: z.number(),
  //           medium: z.number(),
  //           high: z.number(),
  //           extraHigh: z.number(),
  //         }),
  //       }),
  //       wltpCo2: z.object({
  //         "g/km": z.object({
  //           combined: z.number(),
  //           low: z.number(),
  //           medium: z.number(),
  //           high: z.number(),
  //           extraHigh: z.number(),
  //         }),
  //       }),
  //       wltpFuelConsumptionChargeSustaining: z.object({
  //         "l/100km": z.object({
  //           combined: z.number(),
  //           low: z.number(),
  //           medium: z.number(),
  //           high: z.number(),
  //           extraHigh: z.number(),
  //         }),
  //         "mpg-UK": z.object({
  //           combined: z.number(),
  //           low: z.number(),
  //           medium: z.number(),
  //           high: z.number(),
  //           extraHigh: z.number(),
  //         }),
  //         "mpg-US": z.object({
  //           combined: z.number(),
  //           low: z.number(),
  //           medium: z.number(),
  //           high: z.number(),
  //           extraHigh: z.number(),
  //         }),
  //       }),
  //       wltpFuelConsumption: z.object({
  //         "l/100km": z.object({
  //           combined: z.number(),
  //           low: z.number(),
  //           medium: z.number(),
  //           high: z.number(),
  //           extraHigh: z.number(),
  //         }),
  //         "mpg-UK": z.object({
  //           combined: z.number(),
  //           low: z.number(),
  //           medium: z.number(),
  //           high: z.number(),
  //           extraHigh: z.number(),
  //         }),
  //         "mpg-US": z.object({
  //           combined: z.number(),
  //           low: z.number(),
  //           medium: z.number(),
  //           high: z.number(),
  //           extraHigh: z.number(),
  //         }),
  //       }),
  //       wltpValidityDate: z.string(),
  //     }),
  //   }),
  // }),
});

export const ItemSchema = z.object({
  id: z.number(),
  item: z.string(),
  data: Vehicle.extend({
    documentId: z.string(),
    media: z.object({
      cosyImages: z.record(z.string()),
      eveCpMedia: z
        .object({
          configId: z.string(),
          contentBaseUrl: z.string(),
          expirationDate: z.string(),
        })
        .optional(),
    }),
    ordering: z.object({
      distributionData: z.object({
        actualLocationId: z.string().optional(),
        bufferedDeliveryDate: z.string(),
        carrierLoad: z.string().optional(),
        dealerLocation: z
          .object({
            latitude: z.number(),
            longitude: z.number(),
          })
          .optional(),
        addressLocale: z.unknown({}).optional(),
        destinationLocationDomesticDealerNumber: z.string().optional(),
        distributionMot: z.string().optional(),
        expectedDeliveryDate: z.string().optional(),
        holds: z.object({
          agInvoiceHold: z.boolean().optional(),
          qualityHoldFlag: z.boolean().optional(),
          vehDelHoldFlg: z.boolean().optional(),
        }),
        load: z.string().optional(),
        manufacturerDistributionPrio: z.string().optional(),
        qualityHoldFlag: z.boolean().optional(),
        shippingDealerNumber: z.string().optional(),
        transportFlag: z.string().optional(),
        locationOutletNickname: z.string().optional(),
      }),
      productionData: z.object({
        ckdFlag: z.boolean().optional(),
        confirmedDeliveryDateFrom: z.string().optional(),
        confirmedDeliveryDateTo: z.string().optional(),
        confirmedDeliveryDateInitialFrom: z.string().optional(),
        confirmedDeliveryDateInitialTo: z.string().optional(),
        confirmedProductionWeek: z.string().optional(),
        endOfProduction: z.string().optional(),
        engineNumber: z.string().optional(),
        factoryCode: z.string().optional(),
        orderNumber: z.string(),
        orderStatus: z.number(),
        plannedEndOfProduction: z.string().optional(),
        productionDataError: z.string().optional(),
        productionDate: z.string(),
        productionProcess: z.string().optional(),
        productionQuotaCode: z.string(),
        productType: z.string(),
        tsn: z.string().optional(),
        vin7: z.string(),
        vin10: z.string(),
        vin17: z.string(),
      }),
    }),
    price: z.object({
      listPriceCurrency: z.string(),
      equipmentsTotalPrice: z.number(),
      equipmentsTotalGrossPrice: z.number(),
      equipmentsTotalListPriceNet: z.number(),
      equipmentsTotalListPriceGross: z.number(),
      netListPrice: z.number(),
      grossListPrice: z.number(),
      netModelPrice: z.number(),
      grossModelPrice: z.number(),
      modelSalesPriceNet: z.number(),
      modelSalesPriceGross: z.number(),
      netSalesPrice: z.number(),
      grossSalesPrice: z.number(),
      taxes: z.object({
        totalTaxes: z.number(),
        taxes: z
          .object({
            key: z.string(),
            category: z.string(),
            amount: z.number(),
            percentage: z.number(),
          })
          .array(),
      }),
      priceUpdatedAt: z.string(),
    }),
    salesProcess: z.object({ reason: z.string().optional(), type: z.string() }),
    vehicleLifeCycle: z.object({ isRepaired: z.boolean().optional() }),
    vehicleSpecification: z.object({
      modelAndOption: z.object({
        baseFuelType: z.string(),
        brand: z.string(),
        bodyType: z.string(),
        bodyTypeDescription: z.object({ pl_PL: z.string() }).optional(),
        color: z.object({
          hexColorCode: z.string(),
          rgbColorCode: z.object({
            r: z.number(),
            g: z.number(),
            b: z.number(),
          }),
          labColorCode: z.object({
            l: z.number(),
            a: z.number(),
            b: z.number(),
          }),
          clusterFine: z.string(),
          clusterRough: z.string(),
        }),
        //     colors: z
        //       .object({
        //         hexColorCode: z.string(),
        //         rgbColorCode: z.object({
        //           r: z.number(),
        //           g: z.number(),
        //           b: z.number(),
        //         }),
        //         labColorCode: z.object({
        //           l: z.number(),
        //           a: z.number(),
        //           b: z.number(),
        //         }),
        //         clusterFine: z.string(),
        //         clusterRough: z.string(),
        //       })
        //       .array(),
        //     driveType: z.string(),
        equipments: z.record(Equipment),
        //     is48Volt: z.boolean(),
        //     marketingDriveType: z.string(),
        model: z.object({
          agModelCode: z.string(),
          derivative: z.string(),
          effectDateRange: z.object({
            from: z.string(),
            to: z.string().optional(),
          }),
          modelDescription: z.object({
            default_PL: z.string(),
            pl_PL: z.string(),
            en_PL: z.string().optional(),
          }),
          modelName: z.string(),
          steering: z.string(),
          vgModelCode: z.string(),
        }),
        modelRange: z.object({
          name: z.string(),
          description: z.object({
            default_PL: z.string().optional(),
            pl_PL: z.string(),
          }),
        }),
        //     numberOfColors: z.number(),
        //     numberOfGears: z.number(),
        //     paintType: z.string(),
        //     series: z.object({ name: z.string() }),
        //     transmission: z.string(),
        //     retailSeries: z.object({ name: z.string() }),
        //     upholsteryColor: z.object({
        //       hexColorCode: z.string(),
        //       rgbColorCode: z.object({
        //         r: z.number(),
        //         g: z.number(),
        //         b: z.number(),
        //       }),
        //       labColorCode: z.object({
        //         l: z.number(),
        //         a: z.number(),
        //         b: z.number(),
        //       }),
        //       upholsteryColorCluster: z.string(),
        //     }),
        //     upholsteryType: z.string(),
        //     marketingModelRanges: z.object({}),
        //     marketingModelRange: z.string(),
        //     marketingSeries: z.array(z.string()),
        //     trim: z.object({
        //       default_PL: z.string(),
        //       pl_PL: z.string(),
        //       en_PL: z.string(),
      }),
    }),
  }),
  created: z.date(),
  checked: z.date().nullable(),
  updated: z.date().nullable(),
  removed: z.date().nullable(),
});

export const JsonSchema = z.object({
  metadata: z.object({ totalCount: z.number() }),
  hits: z
    .object({
      score: z.number(),
      vehicle: Vehicle.passthrough(),
      country: z.string(),
    })
    .array()
    .optional(),
});

export const DataSchema = Vehicle;

export const DiffSchema = DataSchema.extend({
  ordering: z.object({
    distributionData: z.object({
      locationOutletNickname: z.string().optional(),
    }),
  }),
  price: z.object({
    equipmentsTotalGrossPrice: z.number(),
    grossSalesPrice: z.number(),
    // priceUpdatedAt: z.string(),
  }),
  salesProcess: z.object({
    reason: z.string(),
    type: z.enum(["AVAILABLE", "RESERVED_MANUAL", "SOLD"]),
  }),
  vehicleSpecification: z.object({
    modelAndOption: z.object({
      brand: z.string(),
      model: z.object({
        modelName: z.string(),
      }),
      modelRange: z.object({
        name: z.string(),
      }),
    }),
  }),
});

export interface Item {
  id: number;
  item: string;
  data: z.infer<typeof DataSchema>;
  created: string;
  checked: string | null;
  updated: string | null;
  removed: string | null;
}

export const Schema = z.object({
  json: JsonSchema,
});
