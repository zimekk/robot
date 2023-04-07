import { z } from "zod";

const AssetSchema = z.object({
  AssetPushLocation: z.string(),
  FileName: z.string(),
  Name: z.string(),
  MimeType: z.null(),
  Format: z.null(),
  AssetId: z.string(),
  ProductId: z.string(),
  PixelHeight: z.null(),
  PixelWidth: z.null(),
  AssetURL: z.string(),
  AssetDescription: z.string(),
  DisplayPriority: z.string().nullable(),
  DeviceType: z.null(),
  IsYoutube: z.boolean(),
  ThumbnailUrl: z.string(),
  Caption: z.null(),
  IconCssClass: z.null(),
  FileEnding: z.null(),
  FootType: z.string().nullable(),
  Generation: z.string().nullable(),
  IsDefaultImageWhenNoCarSelected: z.boolean(),
});

const ProductSchema = z
  .object({
    ShowIsNewFlag: z.boolean(),
    ShowComingSoonFlag: z.boolean(),
    IsPreview: z.boolean(),
    Awards: z.array(z.unknown()),
    Usps: z.array(z.object({ UspDescription: z.string() })),
    ReadMoreButton: z.any().nullable(),
    AnalyticsProductListName: z.null(),
    ProductListPosition: z.number(),
    CssColumnClasses: z.null(),
    ProductIdToPresentOnWebsite: z.null(),
    FilterClassNames: z.string().nullable(),
    Siblings: z.object({}).array().nullable(),
    ColorId: z.string(),
    ParentProductName: z.null(),
    ProductReviewsData: z.null(),
    ProductType: z.string(),
    ExtranetTranslations: z.null(),
    HasCarSelector: z.boolean(),
    ColorText: z.string().optional(),
    ColorsText: z.string().optional(),
    ConfirmedFit: z.string().optional(),
    UnconfirmedFit: z.string().optional(),
    NoFit: z.string().optional(),
    Images: AssetSchema.array().optional(),
    ProductName: z.string(),
    Url: z.string(),
    Swatches: AssetSchema.extend({
      IsActive: z.boolean(),
      ProductUrl: z.string(),
    }).array(),
    MainMedia: AssetSchema,
    CurrencyCode: z.string(),
    ProductId: z.string(),
    SkuNumber: z.string(),
    AddToCartButton: z.null(),
    DummyBundleItems: z.null(),
    PriceContainer: z.object({
      ProductId: z.string(),
      Price: z.number(),
      PriceFormatted: z.string(),
      DiscountPrice: z.number(),
      DiscountPriceFormatted: z.string(),
      MinimumRRP: z.number(),
      DiscountMinimumRRP: z.number(),
      CurrencyCode: z.string(),
    }),
    WebTitle1: z.string(),
    WebTitle2: z.string(),
    LaunchDate: z.string(),
    StatusErp: z.string(),
    ErpOutdoor: z.string(),
    SubCategoryName: z.null(),
    RRPLabel: z.string(),
    ModelLabel: z.string(),
    DeliveryLabel: z.string(),
    AdapterInfo: z.any().nullable(),
  })
  .strict();

export interface Item {
  id: number;
  item: string;
  data: z.infer<typeof ProductSchema>;
  created: string;
  checked: string | null;
  updated: string | null;
  removed: string | null;
}

export const Schema = z.object({
  json: z
    .object({
      _CarSelector: z.object({
        Products: ProductSchema.array(),
      }),
    })
    .transform(({ _CarSelector: { Products } }) => Products),
});
