import { z } from "zod";

export const DataSchema = z
  .object({
    id: z.number(),
    link: z.string(),
    name: z.string(),
    product_id: z.number(),
    product_parent_id: z.number(),
    add_to_cart: z.boolean(),
    price_gross: z.number(),
    price_net: z.number(),
    discount: z.object({
      date_time_start: z.null(),
      date_time_end: z.null(),
      old_price: z.object({ amount: z.null(), currency: z.string() }),
      value: z.object({ amount: z.null(), currency: z.string() }),
    }),
    gallery: z.string().array(),
  })
  .passthrough();

export const DiffSchema = DataSchema.extend({});

export type Data = z.infer<typeof DataSchema>;

export interface Item {
  id: number;
  item: string;
  data: Data;
  created: string;
  checked: string | null;
  updated: string | null;
  removed: string | null;
}

const JsonSchema = z.object({
  data: z.object({
    byId: z
      .object({
        id: z.number(),
        name: z.string(),
        product_id: z.number(),
        product_parent_id: z.number(),
        add_to_cart: z.boolean(),
        price_gross: z.number(),
        price_net: z.number(),
        discount: z.object({
          date_time_start: z.null(),
          date_time_end: z.null(),
          old_price: z.object({ amount: z.null(), currency: z.string() }),
          value: z.object({ amount: z.null(), currency: z.string() }),
        }),
        // _embedded: z.object({
        //   promoPrice: z.null(),
        //   postscripts: z.object({
        //     elements: z.array(
        //       z.union([
        //         z.object({
        //           display_price_strategy: z.null(),
        //           gtm_name: z.string(),
        //           gtm_position: z.string(),
        //           id: z.number(),
        //           name: z.string(),
        //           place: z.string(),
        //           tooltip: z.string(),
        //           zone: z.string(),
        //           url: z.string()
        //         }),
        //         z.object({
        //           display_price_strategy: z.null(),
        //           gtm_name: z.null(),
        //           gtm_position: z.null(),
        //           id: z.number(),
        //           name: z.string(),
        //           place: z.string(),
        //           tooltip: z.null(),
        //           zone: z.string(),
        //           url: z.null()
        //         })
        //       ])
        //     )
        //   }),
        //   expressOrderFinalHour: z.null(),
        //   hotDeals: z.object({ elements: z.array(z.unknown()) }),
        //   bestPaymentBankOffer: z.object({
        //     installment_amount: z.object({
        //       amount: z.number(),
        //       currency: z.string()
        //     }),
        //     installments_number: z.number(),
        //     interest_on_loan: z.number(),
        //     display_strategy: z.number(),
        //     general_information: z.string(),
        //     is_installment_with_promotional_code: z.boolean(),
        //     prefix: z.string(),
        //     suffix: z.string()
        //   }),
        //   opinionsAvegares: z.object({
        //     average: z.number(),
        //     count: z.number(),
        //     product_id: z.number(),
        //     variants: z.null()
        //   })
        // }),
        promo_price_gross: z.null(),
        promo_price_net: z.null(),
        club_price: z.null(),
        link: z.string(),
        gallery: z.array(z.string()),
        availability: z.object({
          id: z.number(),
          name: z.string(),
          display_name: z.string(),
          description: z.string().nullable(),
          description_details: z.string().nullable(),
          color_hash: z.null(),
          icon: z.null(),
          weight: z.number(),
          is_default: z.boolean(),
          type: z.string(),
        }),
        type: z.string(),
        service_type: z.null(),
        internal_code: z.null(),
        stock_shop: z.number(),
        stock_shipment: z.number(),
        // system_attributes: z.array(
        //   z.union([
        //     z.object({
        //       id: z.number(),
        //       name: z.string(),
        //       slug: z.string(),
        //       original_name: z.string(),
        //       is_hint_long: z.boolean(),
        //       hint_link: z.string(),
        //       hint_icon: z.null(),
        //       values: z.array(z.string()),
        //       extended_values: z.array(
        //         z.object({
        //           id: z.string(),
        //           name: z.string(),
        //           hint: z.null(),
        //           image: z.null(),
        //           slug: z.string(),
        //           settings: z.array(z.unknown())
        //         })
        //       )
        //     }),
        //     z.object({
        //       id: z.number(),
        //       name: z.string(),
        //       slug: z.string(),
        //       original_name: z.string(),
        //       is_hint_long: z.boolean(),
        //       hint_link: z.string(),
        //       hint_icon: z.null(),
        //       values: z.array(z.string()),
        //       extended_values: z.array(
        //         z.object({
        //           id: z.string(),
        //           name: z.string(),
        //           hint: z.null(),
        //           image: z.null(),
        //           slug: z.string(),
        //           settings: z.object({ slug: z.string() })
        //         })
        //       )
        //     })
        //   ])
        // ),
        // switches: z.object({
        //   addToCart: z.boolean(),
        //   allowAdvancePayment: z.boolean(),
        //   allowOversale: z.boolean(),
        //   blockReturnGoods: z.boolean(),
        //   callSplitOrder: z.boolean(),
        //   disableCrossedPrice: z.boolean(),
        //   disallowOtherAvailabilityInCart: z.boolean(),
        //   disallowOtherWarehousesInCart: z.boolean(),
        //   excludeDeliveryCalendar: z.boolean(),
        //   firstAvailabilityGroupForSortOpinion: z.boolean(),
        //   hideAddToCartButton: z.boolean(),
        //   hideForSearchEngines: z.boolean(),
        //   hideInFilterList: z.boolean(),
        //   hideInSearchResults: z.boolean(),
        //   hideOnVariantList: z.boolean(),
        //   hidePickupInPosButton: z.boolean(),
        //   installmentInfo: z.boolean(),
        //   isDigitalDistribution: z.boolean(),
        //   moveToSeparateCart: z.boolean(),
        //   sendAvailabilityInform: z.boolean(),
        //   sendProductSetInfoToFront: z.boolean(),
        //   showAvailabilityDate: z.boolean(),
        //   showAvailabilityInformButton: z.boolean(),
        //   showAvailabilityNameInCart: z.boolean(),
        //   showCheckAvailability: z.boolean(),
        //   showInOperatorMode: z.boolean(),
        //   showInProductLists: z.boolean(),
        //   showLastItemsOnListing: z.boolean(),
        //   showLastKnownPrice: z.boolean(),
        //   showOutletProduct: z.boolean(),
        //   showProductDetails: z.boolean(),
        //   showProductPrice: z.boolean(),
        //   showRelationList: z.boolean(),
        //   showSimilarProducts: z.boolean()
        // }),
        flags: z.object({
          exclusive_product: z.boolean().optional(),
          receive_in_hour: z.boolean().optional(),
          has_leasing_link: z.boolean().optional(),
          product_promoted: z.boolean(),
          inpost_parcel_available: z.boolean().optional(),
          variant_opinions: z.boolean(),
          has_pko_leasing: z.boolean().optional(),
          apple_promotion_available: z.boolean(),
          present_packaging_small_size_for_smartphones: z.boolean(),
        }),
        should_be_disabled: z.boolean(),
        is_product_set: z.boolean(),
        inpost: z.object({ available: z.boolean() }),
        available_in_store: z.boolean(),
        is_szs_available: z.boolean(),
        other_prices: z.array(z.unknown()),
        published_date: z.null(),
        add_to_cart_link: z.null(),
        energy_class: z.array(z.unknown()),
        active_variant_count: z.number(),
      })
      .array(),
  }),
});

export const Schema = z.object({
  json: JsonSchema,
});
