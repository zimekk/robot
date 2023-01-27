import { z } from "zod";

const JsonSchema = z.object({
  props: z.object({
    pageProps: z.object({
      baseUrl: z.string(),
      globalBanner: z.null(),
      marketplaceId: z.string(),
      languageTag: z.string(),
      alternatePaths: z.array(
        z.object({ marketplaceId: z.string(), languageTag: z.string() })
      ),
      currency: z.object({ code: z.string() }),
      distanceUnit: z.string(),
      powerUnits: z.array(z.string()),
      modelYearVisible: z.boolean(),
      firstRegistrationDateVisible: z.boolean(),
      driveSideFilterVisible: z.boolean(),
      fallback: z.object({
        url: z.string(),
        data: z.object({
          pages: z.object({
            activePage: z.number(),
            totalPages: z.number(),
            totalPagesUnknown: z.boolean(),
          }),
          count: z.string(),
          results: z.array(
            z.union([
              z.object({
                listingUrlSlug: z.string(),
                meta: z.object({
                  title: z.string(),
                  seller: z.object({
                    porschePartnerNumber: z.string(),
                    name: z.string(),
                    address: z.string(),
                    formattedCity: z.string(),
                    websiteUrl: z.string(),
                  }),
                  imageUrl: z.string(),
                  condition: z.string(),
                  priceCurrency: z.string(),
                  priceValue: z.number(),
                  numberOfPreviousOwners: z.number(),
                  firstRegistration: z.string(),
                  mileage: z.string(),
                  model: z.string(),
                  interiorColor: z.string(),
                  color: z.string(),
                  transmission: z.string(),
                  warranty: z.number(),
                  productionDate: z.string(),
                  modelDate: z.string(),
                }),
                dataLayerListingMeta: z.object({
                  car: z.object({
                    listingId: z.string(),
                    type: z.string(),
                    realcarStatus: z.string(),
                    isPorscheApproved: z.boolean(),
                    modelRangeName: z.string(),
                    modelCode: z.string(),
                    modelName: z.string(),
                    modelModelYear: z.number(),
                    exteriorColorName: z.string(),
                    interiorColorName: z.string(),
                    priceTotalTotal: z.number(),
                    mileage: z.number(),
                    mileageUnit: z.string(),
                  }),
                  partner: z.object({ companyId: z.string() }),
                }),
                gallery: z.object({
                  imageIds: z.array(z.string()),
                  imagesType: z.string(),
                }),
                description: z.object({
                  price: z.string(),
                  salesIncentives: z.array(z.unknown()),
                  title: z.string(),
                  subtitle: z.string(),
                  seller: z.object({ name: z.string(), city: z.string() }),
                  configuration: z.array(z.string()),
                  characteristics: z.array(
                    z.union([
                      z.object({ value: z.string() }),
                      z.object({ value: z.string(), greyOut: z.boolean() }),
                    ])
                  ),
                  consumptionEmission: z.string(),
                  listingId: z.string(),
                  onlineOrderableState: z.string(),
                  externalReference: z.object({
                    system: z.string(),
                    id: z.string(),
                  }),
                }),
              }),
              z.object({
                listingUrlSlug: z.string(),
                meta: z.object({
                  title: z.string(),
                  seller: z.object({
                    porschePartnerNumber: z.string(),
                    name: z.string(),
                    address: z.string(),
                    formattedCity: z.string(),
                    websiteUrl: z.string(),
                  }),
                  imageUrl: z.string(),
                  condition: z.string(),
                  priceCurrency: z.string(),
                  priceValue: z.number(),
                  numberOfPreviousOwners: z.number(),
                  firstRegistration: z.string(),
                  mileage: z.string(),
                  model: z.string(),
                  interiorColor: z.string(),
                  color: z.string(),
                  transmission: z.string(),
                  productionDate: z.string(),
                  modelDate: z.string(),
                }),
                dataLayerListingMeta: z.object({
                  car: z.object({
                    listingId: z.string(),
                    type: z.string(),
                    realcarStatus: z.string(),
                    isPorscheApproved: z.boolean(),
                    modelRangeName: z.string(),
                    modelCode: z.string(),
                    modelName: z.string(),
                    modelModelYear: z.number(),
                    exteriorColorName: z.string(),
                    interiorColorName: z.string(),
                    priceTotalTotal: z.number(),
                    mileage: z.number(),
                    mileageUnit: z.string(),
                  }),
                  partner: z.object({ companyId: z.string() }),
                }),
                gallery: z.object({
                  imageIds: z.array(z.string()),
                  imagesType: z.string(),
                }),
                description: z.object({
                  price: z.string(),
                  salesIncentives: z.array(z.unknown()),
                  title: z.string(),
                  subtitle: z.string(),
                  seller: z.object({ name: z.string(), city: z.string() }),
                  configuration: z.array(z.string()),
                  characteristics: z.array(
                    z.union([
                      z.object({ value: z.string() }),
                      z.object({ value: z.string(), greyOut: z.boolean() }),
                    ])
                  ),
                  consumptionEmission: z.string(),
                  listingId: z.string(),
                  onlineOrderableState: z.string(),
                  externalReference: z.object({
                    system: z.string(),
                    id: z.string(),
                  }),
                }),
              }),
              z.object({
                listingUrlSlug: z.string(),
                meta: z.object({
                  title: z.string(),
                  seller: z.object({
                    porschePartnerNumber: z.string(),
                    name: z.string(),
                    address: z.string(),
                    formattedCity: z.string(),
                    websiteUrl: z.string(),
                  }),
                  imageUrl: z.string(),
                  condition: z.string(),
                  priceCurrency: z.string(),
                  priceValue: z.number(),
                  numberOfPreviousOwners: z.number(),
                  mileage: z.string(),
                  model: z.string(),
                  interiorColor: z.string(),
                  color: z.string(),
                  transmission: z.string(),
                  warranty: z.number(),
                  productionDate: z.string(),
                  modelDate: z.string(),
                }),
                dataLayerListingMeta: z.object({
                  car: z.object({
                    listingId: z.string(),
                    type: z.string(),
                    realcarStatus: z.string(),
                    isPorscheApproved: z.boolean(),
                    modelRangeName: z.string(),
                    modelCode: z.string(),
                    modelName: z.string(),
                    modelModelYear: z.number(),
                    exteriorColorName: z.string(),
                    interiorColorName: z.string(),
                    priceTotalTotal: z.number(),
                    mileage: z.number(),
                    mileageUnit: z.string(),
                  }),
                  partner: z.object({ companyId: z.string() }),
                }),
                gallery: z.object({
                  imageIds: z.array(z.string()),
                  imagesType: z.string(),
                }),
                description: z.object({
                  price: z.string(),
                  salesIncentives: z.array(z.unknown()),
                  title: z.string(),
                  subtitle: z.string(),
                  seller: z.object({ name: z.string(), city: z.string() }),
                  configuration: z.array(z.string()),
                  characteristics: z.array(
                    z.union([
                      z.object({ value: z.string() }),
                      z.object({ value: z.string(), greyOut: z.boolean() }),
                    ])
                  ),
                  consumptionEmission: z.string(),
                  listingId: z.string(),
                  onlineOrderableState: z.string(),
                  externalReference: z.object({
                    system: z.string(),
                    id: z.string(),
                  }),
                }),
              }),
            ])
          ),
          filterOptions: z.object({
            modelSeries: z.array(
              z.object({ value: z.string(), label: z.string() })
            ),
            condition: z.array(
              z.object({ value: z.string(), label: z.string() })
            ),
            modelCategories: z.array(
              z.object({ value: z.string(), label: z.string() })
            ),
            modelGenerations: z.array(
              z.object({ value: z.string(), label: z.string() })
            ),
            minimumPrice: z.array(
              z.object({ value: z.number(), label: z.string() })
            ),
            maximumPrice: z.array(
              z.object({ value: z.number(), label: z.string() })
            ),
            bodyType: z.array(
              z.object({ value: z.string(), label: z.string() })
            ),
            minimumModelYear: z.array(
              z.object({ value: z.number(), label: z.string() })
            ),
            maximumModelYear: z.array(
              z.object({ value: z.number(), label: z.string() })
            ),
            sellers: z.array(
              z.object({ value: z.string(), label: z.string() })
            ),
            minimumMileage: z.array(
              z.object({ value: z.number(), label: z.string() })
            ),
            maximumMileage: z.array(
              z.object({ value: z.number(), label: z.string() })
            ),
            minimumFirstRegistrationDate: z.array(
              z.object({ value: z.number(), label: z.string() })
            ),
            maximumFirstRegistrationDate: z.array(
              z.object({ value: z.number(), label: z.string() })
            ),
            locationRadius: z.array(
              z.object({ value: z.number(), label: z.string() })
            ),
            exteriorColorGroups: z.array(
              z.object({
                value: z.string(),
                hexCode: z.string(),
                label: z.string(),
              })
            ),
            transmission: z.array(
              z.object({ value: z.string(), label: z.string() })
            ),
            performanceEquipment: z.array(
              z.object({ value: z.string(), label: z.string() })
            ),
            ePerformanceEquipment: z.array(
              z.object({ value: z.string(), label: z.string() })
            ),
            exteriorEquipment: z.array(
              z.object({ value: z.string(), label: z.string() })
            ),
            wheelSizeEquipment: z.array(
              z.object({ value: z.string(), label: z.string() })
            ),
            audioCommunicationEquipment: z.array(
              z.object({ value: z.string(), label: z.string() })
            ),
            interiorEquipment: z.array(
              z.object({ value: z.string(), label: z.string() })
            ),
            optionPackages: z.array(
              z.object({ value: z.string(), label: z.string() })
            ),
            interiorMaterial: z.array(
              z.object({ value: z.string(), label: z.string() })
            ),
            comfortAssistanceEquipment: z.array(
              z.object({ value: z.string(), label: z.string() })
            ),
            interiorColorGroups: z.array(
              z.object({
                value: z.string(),
                hexCode: z.string(),
                label: z.string(),
              })
            ),
            drivetrain: z.array(
              z.object({ value: z.string(), label: z.string() })
            ),
            rooftopColorGroups: z.array(
              z.object({
                value: z.string(),
                hexCode: z.string(),
                label: z.string(),
              })
            ),
            sales: z.array(z.object({ value: z.string(), label: z.string() })),
            salesIncentive: z.array(z.unknown()),
            driveSide: z.array(
              z.object({ value: z.string(), label: z.string() })
            ),
            financingProductType: z.array(z.unknown()),
            minimumRate: z.array(z.unknown()),
            maximumRate: z.array(z.unknown()),
            engineType: z.array(
              z.object({ value: z.string(), label: z.string() })
            ),
            minimumPowerHP: z.array(
              z.object({ value: z.number(), label: z.string() })
            ),
            maximumPowerHP: z.array(
              z.object({ value: z.number(), label: z.string() })
            ),
            minimumPowerKW: z.array(
              z.object({ value: z.number(), label: z.string() })
            ),
            maximumPowerKW: z.array(
              z.object({ value: z.number(), label: z.string() })
            ),
            numberOfPreviousOwners: z.array(
              z.object({ value: z.number(), label: z.string() })
            ),
            vatDeductible: z.array(
              z.object({ value: z.boolean(), label: z.string() })
            ),
            accidentFree: z.array(
              z.object({ value: z.boolean(), label: z.string() })
            ),
            video: z.array(z.object({ value: z.boolean(), label: z.string() })),
            image360: z.array(
              z.object({ value: z.boolean(), label: z.string() })
            ),
          }),
          sortOptions: z.array(
            z.object({ value: z.string(), label: z.string() })
          ),
          usedFilters: z.object({
            modelSeries: z.string(),
            condition: z.null(),
            modelCategories: z.null(),
            modelGenerations: z.array(z.string()),
            minimumPrice: z.null(),
            maximumPrice: z.null(),
            bodyType: z.null(),
            minimumModelYear: z.null(),
            maximumModelYear: z.null(),
            sellers: z.null(),
            minimumMileage: z.null(),
            maximumMileage: z.null(),
            minimumFirstRegistrationDate: z.null(),
            maximumFirstRegistrationDate: z.null(),
            location: z.null(),
            exteriorColorGroups: z.null(),
            transmission: z.null(),
            performanceEquipment: z.null(),
            ePerformanceEquipment: z.null(),
            exteriorEquipment: z.null(),
            wheelSizeEquipment: z.null(),
            audioCommunicationEquipment: z.null(),
            interiorEquipment: z.null(),
            optionPackages: z.null(),
            interiorMaterial: z.null(),
            comfortAssistanceEquipment: z.null(),
            interiorColorGroups: z.null(),
            drivetrain: z.null(),
            rooftopColorGroups: z.null(),
            sales: z.null(),
            salesIncentive: z.null(),
            driveSide: z.null(),
            financingProductType: z.null(),
            minimumRate: z.null(),
            maximumRate: z.null(),
            engineType: z.null(),
            minimumPower: z.null(),
            maximumPower: z.null(),
            numberOfPreviousOwners: z.null(),
            vatDeductible: z.null(),
            accidentFree: z.null(),
            video: z.null(),
            image360: z.null(),
          }),
        }),
      }),
      proximitySearch: z.boolean(),
      messages: z.record(z.string()),
      footer: z.string(),
      porscheIdLoginEnabled: z.boolean(),
      legalDisclaimer: z.null(),
      searchResultsCap: z.null(),
      accidentFreeVisible: z.boolean(),
      showVatDeductibleFilter: z.boolean(),
      headerCrestLinkUrl: z.string(),
      financialFilterDisclaimerVisible: z.boolean(),
    }),
    __N_SSP: z.boolean(),
  }),
  page: z.string(),
  query: z.record(z.string()),
  buildId: z.string(),
  runtimeConfig: z.object({}),
  isFallback: z.boolean(),
  dynamicIds: z.number().array(),
  gssp: z.boolean(),
  scriptLoader: z.unknown().array(),
});

export default z.object({
  json: JsonSchema.transform(
    ({
      props: {
        pageProps: { fallback },
      },
    }) => fallback
  ),
});
