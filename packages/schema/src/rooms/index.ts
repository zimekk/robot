import { z } from "zod";

const DetailsSchema = z
  .object({
    locales: z.array(
      z.object({
        locale: z.string(),
        countryCode: z.string().nullable(),
        isLive: z.boolean(),
        orderIndex: z.number(),
      }),
    ),
    defaultCurrency: z.object({
      code: z.string(),
      symbol: z.string(),
      orderIndex: z.null(),
    }),
    defaultLocale: z.string(),
    logo: z
      .object({
        title: z.null(),
        description: z.null(),
        fileName: z.string(),
        orderIndex: z.null(),
      })
      .nullable(),
    photo: z
      .object({
        title: z.null(),
        description: z.null(),
        fileName: z.string(),
        orderIndex: z.null(),
      })
      .nullable(),
    config: z.record(z.string(), z.string().or(z.string().array())),
    // config: z.object({
    //   "Hotel.CheckinAfter": z.string(),
    //   "Hotel.CheckoutBefore": z.string(),
    //   "Children.FreeAge": z.string(),
    //   "Hotel.Animals": z.string(),
    //   "be.loadTrackingCodesByDefault": z.string(),
    //   "be.showClosestPossibleDate": z.string(),
    //   "Booking.MaxDaysAdvance": z.string(),
    //   "be.checkRoomsAvailabilityInOfferCalendar": z.string(),
    //   "Hotel.Parking": z.string(),
    //   "Upper.GTM": z.array(z.string()),
    //   "Upper.AdditionalOfferID": z.string(),
    //   "Upper.GoogleTrackerID": z.array(z.string()),
    //   "be.showTouristicVoucher": z.string(),
    //   "be7.colors.primary": z.string(),
    //   "be7.discountbox.mode": z.string(),
    //   "be7.discountbox.showSimulatedPrices": z.string(),
    //   "be7.discountbox.promocode": z.string(),
    //   "Upper.PreferedCityMode": z.string(),
    //   "Children.FilterFreeAge": z.string(),
    //   "be.loadCookieMonster": z.string(),
    //   "be.enableAbandonedCartPopUp": z.string(),
    //   "BookingPanel.PreselectedOccupancy": z.string(),
    //   "be.enableAbandonedCartMail": z.string(),
    //   "be.checkUnavailableDays": z.string()
    // }),
    url: z.string().nullable(),
    maxOccupancy: z.number(),
    discountBox: z.object({
      translations: z
        .array(
          z.object({
            locale: z.string(),
            messages: z.array(
              z.object({ fieldName: z.string(), value: z.string() }),
            ),
          }),
        )
        .nullable(),
      discount: z.object({ amount: z.number(), method: z.string() }).nullable(),
    }),
    guestMessageTranslations: z
      .array(
        z.object({
          locale: z.string(),
          messages: z.array(
            z.object({ fieldName: z.string(), value: z.string() }),
          ),
        }),
      )
      .nullable(),
    hasVouchers: z.boolean(),
    translations: z.array(
      z.object({
        locale: z.string(),
        messages: z.array(
          z.object({ fieldName: z.string(), value: z.string() }),
        ),
      }),
    ),
    address: z.object({
      name: z.null(),
      city: z.string(),
      street: z.string(),
      district: z.null(),
      postalCode: z.string(),
      coordinates: z.object({ latitude: z.number(), longitude: z.number() }),
      country: z.string(),
      description: z.null(),
    }),
    legalAddress: z.object({
      name: z.string(),
      city: z.string(),
      postalCode: z.string(),
      street: z.string(),
    }),
    timeZone: z.string(),
    defaultChannelId: z.number(),
    masterSiteKey: z.string().nullable(),
  })
  .strict();

export const Schema = z.object({
  json: DetailsSchema,
});
