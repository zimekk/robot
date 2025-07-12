import { z } from "zod";

const ItemSchema = z
  .object({
    listingUrlSlug: z.string(),
    meta: z
      .object({
        title: z.string(),
        seller: z
          .object({
            porschePartnerNumber: z.string(),
            name: z.string(),
            address: z.string(),
            formattedCity: z.string(),
            websiteUrl: z.string(),
          })
          .strict(),
        imageUrl: z.string(),
        condition: z.string(),
        priceCurrency: z.string(),
        priceValue: z.number(),
        numberOfPreviousOwners: z.number(),
        firstRegistration: z.string().optional(),
        mileage: z.string(),
        model: z.string(),
        interiorColor: z.string(),
        color: z.string(),
        transmission: z.string(),
        warranty: z.number().optional(),
        productionDate: z.string(),
        modelDate: z.string(),
      })
      .strict(),
    dataLayerListingMeta: z
      .object({
        car: z
          .object({
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
          })
          .strict(),
        partner: z.object({ companyId: z.string() }).strict(),
      })
      .strict(),
    gallery: z
      .object({
        imageIds: z.string().array(),
        imagesType: z.string(),
      })
      .strict(),
    description: z
      .object({
        price: z.string(),
        salesIncentives: z.unknown().array(),
        title: z.string(),
        subtitle: z.string(),
        seller: z.object({ name: z.string(), city: z.string() }),
        configuration: z.string().array(),
        characteristics: z
          .object({ value: z.string(), greyOut: z.boolean().optional() })
          .array(),
        consumptionEmission: z.string(),
        listingId: z.string(),
        onlineOrderableState: z.string(),
        externalReference: z
          .object({
            system: z.string(),
            id: z.string(),
          })
          .strict(),
      })
      .strict(),
  })
  .strict();

const BooleanFilterOptionSchema = z
  .object({ value: z.boolean(), label: z.string() })
  .array();

const HexCodeFilterOptionSchema = z
  .object({
    value: z.string(),
    hexCode: z.string(),
    label: z.string(),
  })
  .array();

const NumberFilterOptionSchema = z
  .object({ value: z.number(), label: z.string() })
  .array();

const StringFilterOptionSchema = z
  .object({ value: z.string(), label: z.string() })
  .array();

const JsonSchema = z.object({
  props: z.object({
    pageProps: z.object({
      baseUrl: z.string(),
      globalBanner: z.null(),
      marketplaceId: z.string(),
      languageTag: z.string(),
      alternatePaths: z
        .object({ marketplaceId: z.string(), languageTag: z.string() })
        .array(),
      currency: z.object({ code: z.string() }),
      distanceUnit: z.string(),
      powerUnits: z.string().array(),
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
          results: ItemSchema.array(),
          filterOptions: z.object({
            modelSeries: StringFilterOptionSchema,
            condition: StringFilterOptionSchema,
            modelCategories: StringFilterOptionSchema,
            modelGenerations: StringFilterOptionSchema,
            minimumPrice: NumberFilterOptionSchema,
            maximumPrice: NumberFilterOptionSchema,
            bodyType: StringFilterOptionSchema,
            minimumModelYear: NumberFilterOptionSchema,
            maximumModelYear: NumberFilterOptionSchema,
            sellers: StringFilterOptionSchema,
            minimumMileage: NumberFilterOptionSchema,
            maximumMileage: NumberFilterOptionSchema,
            minimumFirstRegistrationDate: NumberFilterOptionSchema,
            maximumFirstRegistrationDate: NumberFilterOptionSchema,
            locationRadius: NumberFilterOptionSchema,
            exteriorColorGroups: HexCodeFilterOptionSchema,
            transmission: StringFilterOptionSchema,
            performanceEquipment: StringFilterOptionSchema,
            ePerformanceEquipment: StringFilterOptionSchema,
            exteriorEquipment: StringFilterOptionSchema,
            wheelSizeEquipment: StringFilterOptionSchema,
            audioCommunicationEquipment: StringFilterOptionSchema,
            interiorEquipment: StringFilterOptionSchema,
            optionPackages: StringFilterOptionSchema,
            interiorMaterial: StringFilterOptionSchema,
            comfortAssistanceEquipment: StringFilterOptionSchema,
            interiorColorGroups: HexCodeFilterOptionSchema,
            drivetrain: StringFilterOptionSchema,
            rooftopColorGroups: HexCodeFilterOptionSchema,
            sales: StringFilterOptionSchema,
            salesIncentive: z.unknown().array(),
            driveSide: StringFilterOptionSchema,
            financingProductType: z.unknown().array(),
            minimumRate: z.unknown().array(),
            maximumRate: z.unknown().array(),
            engineType: StringFilterOptionSchema,
            minimumPowerHP: NumberFilterOptionSchema,
            maximumPowerHP: NumberFilterOptionSchema,
            minimumPowerKW: NumberFilterOptionSchema,
            maximumPowerKW: NumberFilterOptionSchema,
            numberOfPreviousOwners: NumberFilterOptionSchema,
            vatDeductible: BooleanFilterOptionSchema,
            accidentFree: BooleanFilterOptionSchema,
            video: BooleanFilterOptionSchema,
            image360: BooleanFilterOptionSchema,
          }),
          sortOptions: StringFilterOptionSchema,
          usedFilters: z.object({
            modelSeries: z.string(),
            condition: z.null(),
            modelCategories: z.null(),
            modelGenerations: z.string().array(),
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
      messages: z.record(z.string(), z.string()),
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
  query: z.record(z.string(), z.string()),
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
    }) => fallback,
  ),
});
