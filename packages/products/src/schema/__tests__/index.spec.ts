import { Schema } from "..";

describe("products", () => {
  it("Schema", () =>
    [
      {
        app: {
          globalStyleTheme: {
            mode: "light",
            shop: "xkom",
            font: "instrument",
          },
          globalParameters: {
            shop_name: "x-kom",
            host_name: "http://www.x-kom.pl",
            contact_phone_number_hard_code: "34 377 00 00",
            service_phone_number_hard_code: "+ 48 34 377 00 30",
            email_address: "x-kom@x-kom.pl",
            service_email_address: "serwis@x-kom.pl",
            open_hours_working_day: "8:00 - 21:00",
            service_open_hours_working_day: "8 - 20",
            open_hours_weekend: "8:00 - 19:00",
            service_open_hours_saturday: "8 - 16",
            service_open_hours_sunday: "nieczynne",
            hide_mobile_app_alert: true,
          },
          previousLocations: {
            entries: [],
            currentIndex: -1,
            previousIndex: -1,
          },
          userAuth: {
            isLogoutProcessing: false,
          },
          apiErrorsHandler: {},
          marketingSolutions: {
            productRecommender: {
              config: {
                enabled: true,
                trackingId: null,
              },
              campaigns: {
                isFetching: false,
                data: {
                  homepage_chosen_for_you: null,
                },
              },
            },
          },
          virtualAdvisor: {
            session: {
              id: "",
              categoryId: "",
              expirationDate: "",
              shouldRestoreSession: true,
            },
            questions: {
              currentQuestionNumber: 0,
              questionsList: {},
            },
            products: {
              recommendedProducts: [],
              recommendedProductsDetails: {
                isFetching: false,
                products: [],
              },
              shouldShowMoreProducts: false,
            },
            isLoading: false,
            error: {
              hasBaseError: false,
              hasStartSessionError: false,
              isErrorLayoutEnabled: false,
              hasSessionExpiredError: false,
            },
            layout: "Category",
          },
          categories: {},
          dynamicGroup: [],
          homePage: {
            homeBanners: {
              banners: [
                {
                  id: "15617",
                  title: "",
                  subtitle: "",
                  description: "Apple iPhone 16 Pro  już wkrótce TOP",
                  photo: {
                    url: null,
                    thumbnailUrl: null,
                    urlTemplate: null,
                  },
                  url: null,
                  htmlCode: null,
                  bannerType: "home_slider_html_web",
                  layoutName: "responsive_banner_html",
                  variables: [
                    {
                      name: "ctaButtonColor",
                      type: "enum",
                      value: "light",
                      photo: null,
                    },
                    {
                      name: "firstHeading",
                      type: "text",
                      value: "Na wskroś genialny.",
                      photo: null,
                    },
                    {
                      name: "secondHeading",
                      type: "text",
                      value: "Już wkrótce",
                      photo: null,
                    },
                    {
                      name: "boldedHeading",
                      type: "enum",
                      value: "2",
                      photo: null,
                    },
                    {
                      name: "ctaButtonLabel",
                      type: "text",
                      value: "Sprawdź",
                      photo: null,
                    },
                    {
                      name: "tabName",
                      type: "text",
                      value: "iPhone 16 Pro",
                      photo: null,
                    },
                    {
                      name: "url",
                      type: "text",
                      value: "https://lp.x-kom.pl/a/nowy-iphone-16",
                      photo: null,
                    },
                    {
                      name: "desktopImage",
                      type: "image",
                      value: "1d40be50a9964a529a942989555fe1ea.jpg",
                      photo: {
                        url: "https://cdn.x-kom.pl/i/img/banners/normal,,1d40be50a9964a529a942989555fe1ea.jpg?filters=trim",
                        thumbnailUrl:
                          "https://cdn.x-kom.pl/i/img/banners/medium,,1d40be50a9964a529a942989555fe1ea.jpg?filters=trim",
                        urlTemplate:
                          "https://cdn.x-kom.pl/i/img/banners/{SIZE},,1d40be50a9964a529a942989555fe1ea.jpg?filters=trim",
                      },
                    },
                    {
                      name: "mobileImage",
                      type: "image",
                      value: "9a8bdbb9f02f47d1b574c30982be576e.jpg",
                      photo: {
                        url: "https://cdn.x-kom.pl/i/img/banners/normal,,9a8bdbb9f02f47d1b574c30982be576e.jpg?filters=trim",
                        thumbnailUrl:
                          "https://cdn.x-kom.pl/i/img/banners/medium,,9a8bdbb9f02f47d1b574c30982be576e.jpg?filters=trim",
                        urlTemplate:
                          "https://cdn.x-kom.pl/i/img/banners/{SIZE},,9a8bdbb9f02f47d1b574c30982be576e.jpg?filters=trim",
                      },
                    },
                  ],
                  conditions: "",
                },
                {
                  id: "15646",
                  title: "",
                  subtitle: "",
                  description: "RTV 11-17.09.2024",
                  photo: {
                    url: null,
                    thumbnailUrl: null,
                    urlTemplate: null,
                  },
                  url: null,
                  htmlCode: null,
                  bannerType: "home_slider_html_web",
                  layoutName: "responsive_banner_html",
                  variables: [
                    {
                      name: "ctaButtonColor",
                      type: "enum",
                      value: "light",
                      photo: null,
                    },
                    {
                      name: "firstHeading",
                      type: "text",
                      value: "Oferta, która wbija w fotel",
                      photo: null,
                    },
                    {
                      name: "secondHeading",
                      type: "text",
                      value: "Telewizory taniej do 600 zł",
                      photo: null,
                    },
                    {
                      name: "boldedHeading",
                      type: "enum",
                      value: "2",
                      photo: null,
                    },
                    {
                      name: "ctaButtonLabel",
                      type: "text",
                      value: "Sprawdź",
                      photo: null,
                    },
                    {
                      name: "tabName",
                      type: "text",
                      value: "Telewizory taniej do 600 zł",
                      photo: null,
                    },
                    {
                      name: "url",
                      type: "text",
                      value: "https://promocje.x-kom.pl/ogladaj-tv",
                      photo: null,
                    },
                    {
                      name: "desktopImage",
                      type: "image",
                      value: "31ad7786f6ce4bcca0535ae1734ccc91.jpg",
                      photo: {
                        url: "https://cdn.x-kom.pl/i/img/banners/normal,,31ad7786f6ce4bcca0535ae1734ccc91.jpg?filters=trim",
                        thumbnailUrl:
                          "https://cdn.x-kom.pl/i/img/banners/medium,,31ad7786f6ce4bcca0535ae1734ccc91.jpg?filters=trim",
                        urlTemplate:
                          "https://cdn.x-kom.pl/i/img/banners/{SIZE},,31ad7786f6ce4bcca0535ae1734ccc91.jpg?filters=trim",
                      },
                    },
                    {
                      name: "mobileImage",
                      type: "image",
                      value: "74a5efd8331d48b29b823f4f55e01cc6.jpg",
                      photo: {
                        url: "https://cdn.x-kom.pl/i/img/banners/normal,,74a5efd8331d48b29b823f4f55e01cc6.jpg?filters=trim",
                        thumbnailUrl:
                          "https://cdn.x-kom.pl/i/img/banners/medium,,74a5efd8331d48b29b823f4f55e01cc6.jpg?filters=trim",
                        urlTemplate:
                          "https://cdn.x-kom.pl/i/img/banners/{SIZE},,74a5efd8331d48b29b823f4f55e01cc6.jpg?filters=trim",
                      },
                    },
                  ],
                  conditions: "",
                },
                {
                  id: "15580",
                  title: "",
                  subtitle: "",
                  description: "BTS Akcesoria 9.09",
                  photo: {
                    url: null,
                    thumbnailUrl: null,
                    urlTemplate: null,
                  },
                  url: null,
                  htmlCode: null,
                  bannerType: "home_slider_html_web",
                  layoutName: "responsive_banner_html",
                  variables: [
                    {
                      name: "ctaButtonColor",
                      type: "enum",
                      value: "dark",
                      photo: null,
                    },
                    {
                      name: "firstHeading",
                      type: "text",
                      value: "My polecamy – Ty oszczędzasz",
                      photo: null,
                    },
                    {
                      name: "secondHeading",
                      type: "text",
                      value: "Akcesoria taniej do 61%",
                      photo: null,
                    },
                    {
                      name: "boldedHeading",
                      type: "enum",
                      value: "2",
                      photo: null,
                    },
                    {
                      name: "ctaButtonLabel",
                      type: "text",
                      value: "Sprawdź",
                      photo: null,
                    },
                    {
                      name: "tabName",
                      type: "text",
                      value: "Akcesoria taniej do 61%",
                      photo: null,
                    },
                    {
                      name: "url",
                      type: "text",
                      value: "https://promocje.x-kom.pl/bts-akcesoria",
                      photo: null,
                    },
                    {
                      name: "vendorImage",
                      type: "image",
                      value: "f869a086074d475983eba0ee571d8212.png",
                      photo: {
                        url: "https://cdn.x-kom.pl/i/img/banners/normal,,f869a086074d475983eba0ee571d8212.png?filters=trim",
                        thumbnailUrl:
                          "https://cdn.x-kom.pl/i/img/banners/medium,,f869a086074d475983eba0ee571d8212.png?filters=trim",
                        urlTemplate:
                          "https://cdn.x-kom.pl/i/img/banners/{SIZE},,f869a086074d475983eba0ee571d8212.png?filters=trim",
                      },
                    },
                    {
                      name: "desktopImage",
                      type: "image",
                      value: "6ee35de9fc99440595d7f96f8d9c53a7.jpg",
                      photo: {
                        url: "https://cdn.x-kom.pl/i/img/banners/normal,,6ee35de9fc99440595d7f96f8d9c53a7.jpg?filters=trim",
                        thumbnailUrl:
                          "https://cdn.x-kom.pl/i/img/banners/medium,,6ee35de9fc99440595d7f96f8d9c53a7.jpg?filters=trim",
                        urlTemplate:
                          "https://cdn.x-kom.pl/i/img/banners/{SIZE},,6ee35de9fc99440595d7f96f8d9c53a7.jpg?filters=trim",
                      },
                    },
                    {
                      name: "mobileImage",
                      type: "image",
                      value: "27b8b7bd7d464d76b27fa1b7f5465a57.jpg",
                      photo: {
                        url: "https://cdn.x-kom.pl/i/img/banners/normal,,27b8b7bd7d464d76b27fa1b7f5465a57.jpg?filters=trim",
                        thumbnailUrl:
                          "https://cdn.x-kom.pl/i/img/banners/medium,,27b8b7bd7d464d76b27fa1b7f5465a57.jpg?filters=trim",
                        urlTemplate:
                          "https://cdn.x-kom.pl/i/img/banners/{SIZE},,27b8b7bd7d464d76b27fa1b7f5465a57.jpg?filters=trim",
                      },
                    },
                  ],
                  conditions: "",
                },
                {
                  id: "15618",
                  title: "",
                  subtitle: "",
                  description: "Apple Watch - przedsprzedaż TOP",
                  photo: {
                    url: null,
                    thumbnailUrl: null,
                    urlTemplate: null,
                  },
                  url: null,
                  htmlCode: null,
                  bannerType: "home_slider_html_web",
                  layoutName: "responsive_banner_html",
                  variables: [
                    {
                      name: "ctaButtonColor",
                      type: "enum",
                      value: "dark",
                      photo: null,
                    },
                    {
                      name: "firstHeading",
                      type: "text",
                      value: "Smukłość i wielkość.",
                      photo: null,
                    },
                    {
                      name: "secondHeading",
                      type: "text",
                      value: "Przedsprzedaż",
                      photo: null,
                    },
                    {
                      name: "boldedHeading",
                      type: "enum",
                      value: "2",
                      photo: null,
                    },
                    {
                      name: "ctaButtonLabel",
                      type: "text",
                      value: "Zamów",
                      photo: null,
                    },
                    {
                      name: "tabName",
                      type: "text",
                      value: "Apple Watch series 10",
                      photo: null,
                    },
                    {
                      name: "url",
                      type: "text",
                      value: "https://lp.x-kom.pl/a/nowy-apple-watch-10/",
                      photo: null,
                    },
                    {
                      name: "desktopImage",
                      type: "image",
                      value: "d7490dd57bf84fc980304813b1ff5241.jpg",
                      photo: {
                        url: "https://cdn.x-kom.pl/i/img/banners/normal,,d7490dd57bf84fc980304813b1ff5241.jpg?filters=trim",
                        thumbnailUrl:
                          "https://cdn.x-kom.pl/i/img/banners/medium,,d7490dd57bf84fc980304813b1ff5241.jpg?filters=trim",
                        urlTemplate:
                          "https://cdn.x-kom.pl/i/img/banners/{SIZE},,d7490dd57bf84fc980304813b1ff5241.jpg?filters=trim",
                      },
                    },
                    {
                      name: "mobileImage",
                      type: "image",
                      value: "a7d4a5aab13740a8a05b372d85271633.jpg",
                      photo: {
                        url: "https://cdn.x-kom.pl/i/img/banners/normal,,a7d4a5aab13740a8a05b372d85271633.jpg?filters=trim",
                        thumbnailUrl:
                          "https://cdn.x-kom.pl/i/img/banners/medium,,a7d4a5aab13740a8a05b372d85271633.jpg?filters=trim",
                        urlTemplate:
                          "https://cdn.x-kom.pl/i/img/banners/{SIZE},,a7d4a5aab13740a8a05b372d85271633.jpg?filters=trim",
                      },
                    },
                  ],
                  conditions: "",
                },
                {
                  id: "15644",
                  title: "",
                  subtitle: "",
                  description: "Wirtualny asystent",
                  photo: {
                    url: null,
                    thumbnailUrl: null,
                    urlTemplate: null,
                  },
                  url: null,
                  htmlCode: null,
                  bannerType: "home_slider_html_web",
                  layoutName: "responsive_banner_html",
                  variables: [
                    {
                      name: "ctaButtonColor",
                      type: "enum",
                      value: "dark",
                      photo: null,
                    },
                    {
                      name: "firstHeading",
                      type: "text",
                      value: "Wiedza doradców x-komu i możliwości AI",
                      photo: null,
                    },
                    {
                      name: "secondHeading",
                      type: "text",
                      value:
                        "Poznaj Wirtualnego Asystenta, który pomoże Ci wybrać sprzęt",
                      photo: null,
                    },
                    {
                      name: "boldedHeading",
                      type: "enum",
                      value: "1",
                      photo: null,
                    },
                    {
                      name: "ctaButtonLabel",
                      type: "text",
                      value: "Sprawdź",
                      photo: null,
                    },
                    {
                      name: "tabName",
                      type: "text",
                      value: "Poznaj Wirtualnego Asystenta",
                      photo: null,
                    },
                    {
                      name: "url",
                      type: "text",
                      value: "https://lp.x-kom.pl/a/wirtualny-asystent/",
                      photo: null,
                    },
                    {
                      name: "desktopImage",
                      type: "image",
                      value: "36f79b2c556d427d854f4f86369a8163.jpg",
                      photo: {
                        url: "https://cdn.x-kom.pl/i/img/banners/normal,,36f79b2c556d427d854f4f86369a8163.jpg?filters=trim",
                        thumbnailUrl:
                          "https://cdn.x-kom.pl/i/img/banners/medium,,36f79b2c556d427d854f4f86369a8163.jpg?filters=trim",
                        urlTemplate:
                          "https://cdn.x-kom.pl/i/img/banners/{SIZE},,36f79b2c556d427d854f4f86369a8163.jpg?filters=trim",
                      },
                    },
                    {
                      name: "mobileImage",
                      type: "image",
                      value: "877dc3c1f8604021a77f641524a92f54.jpg",
                      photo: {
                        url: "https://cdn.x-kom.pl/i/img/banners/normal,,877dc3c1f8604021a77f641524a92f54.jpg?filters=trim",
                        thumbnailUrl:
                          "https://cdn.x-kom.pl/i/img/banners/medium,,877dc3c1f8604021a77f641524a92f54.jpg?filters=trim",
                        urlTemplate:
                          "https://cdn.x-kom.pl/i/img/banners/{SIZE},,877dc3c1f8604021a77f641524a92f54.jpg?filters=trim",
                      },
                    },
                  ],
                  conditions: "",
                },
                {
                  id: "15351",
                  title: "",
                  subtitle: "",
                  description: "Outlet 3 za 2 al.to - top",
                  photo: {
                    url: null,
                    thumbnailUrl: null,
                    urlTemplate: null,
                  },
                  url: null,
                  htmlCode: null,
                  bannerType: "home_slider_html_web",
                  layoutName: "responsive_banner_html",
                  variables: [
                    {
                      name: "ctaButtonColor",
                      type: "enum",
                      value: "dark",
                      photo: null,
                    },
                    {
                      name: "additionalText",
                      type: "text",
                      value: "Kup więcej, zapłać mniej",
                      photo: null,
                    },
                    {
                      name: "firstHeading",
                      type: "text",
                      value: "Wybierz 3 produkty outletowe",
                      photo: null,
                    },
                    {
                      name: "secondHeading",
                      type: "text",
                      value: "Najtańszy odbierz za złotówkę ",
                      photo: null,
                    },
                    {
                      name: "boldedHeading",
                      type: "enum",
                      value: "2",
                      photo: null,
                    },
                    {
                      name: "ctaButtonLabel",
                      type: "text",
                      value: "Sprawdź",
                      photo: null,
                    },
                    {
                      name: "tabName",
                      type: "text",
                      value: "Produkt za 1 zł ",
                      photo: null,
                    },
                    {
                      name: "url",
                      type: "text",
                      value: "https://promocje.al.to/outlet-3-za-2",
                      photo: null,
                    },
                    {
                      name: "vendorImage",
                      type: "image",
                      value: "4a4f7aafcd8f475c9960e79ce25b668f.png",
                      photo: {
                        url: "https://cdn.x-kom.pl/i/img/banners/normal,,4a4f7aafcd8f475c9960e79ce25b668f.png?filters=trim",
                        thumbnailUrl:
                          "https://cdn.x-kom.pl/i/img/banners/medium,,4a4f7aafcd8f475c9960e79ce25b668f.png?filters=trim",
                        urlTemplate:
                          "https://cdn.x-kom.pl/i/img/banners/{SIZE},,4a4f7aafcd8f475c9960e79ce25b668f.png?filters=trim",
                      },
                    },
                    {
                      name: "desktopImage",
                      type: "image",
                      value: "600524c94c184bdcb10ce76bbd872984.jpg",
                      photo: {
                        url: "https://cdn.x-kom.pl/i/img/banners/normal,,600524c94c184bdcb10ce76bbd872984.jpg?filters=trim",
                        thumbnailUrl:
                          "https://cdn.x-kom.pl/i/img/banners/medium,,600524c94c184bdcb10ce76bbd872984.jpg?filters=trim",
                        urlTemplate:
                          "https://cdn.x-kom.pl/i/img/banners/{SIZE},,600524c94c184bdcb10ce76bbd872984.jpg?filters=trim",
                      },
                    },
                    {
                      name: "mobileImage",
                      type: "image",
                      value: "bab7313a2d4d4be394901292943e10ba.jpg",
                      photo: {
                        url: "https://cdn.x-kom.pl/i/img/banners/normal,,bab7313a2d4d4be394901292943e10ba.jpg?filters=trim",
                        thumbnailUrl:
                          "https://cdn.x-kom.pl/i/img/banners/medium,,bab7313a2d4d4be394901292943e10ba.jpg?filters=trim",
                        urlTemplate:
                          "https://cdn.x-kom.pl/i/img/banners/{SIZE},,bab7313a2d4d4be394901292943e10ba.jpg?filters=trim",
                      },
                    },
                  ],
                  conditions: "",
                },
              ],
              isFetchingBanners: false,
            },
            brandZone: {
              brands: [
                {
                  name: "al.to",
                  imagePath:
                    "//cdn.x-kom.pl/img/media/Logo_strefy_marek/altoLogo.svg",
                  url: "https://www.al.to/",
                  target: "_blank",
                },
                {
                  name: "G4M3R",
                  imagePath:
                    "//cdn.x-kom.pl/img/media/Logo_strefy_marek/G4M3R_Logos_RGB-02-_Violet_.svg",
                  url: "https://lp.x-kom.pl/a/g43/",
                  target: "_blank",
                },
                {
                  name: "Silver Monkey",
                  imagePath: "//cdn.x-kom.pl/img/media/Strefa_Marki/SM_SMX.svg",
                  url: "https://lp.x-kom.pl/a/strefa-silver-monkey/",
                  target: "_blank",
                },
                {
                  name: "Apple",
                  imagePath:
                    "//cdn.x-kom.pl/img/media/Logo_strefy_marek/apple.svg",
                  url: "https://lp.x-kom.pl/a/strefa-marki-apple/",
                  target: "_self",
                },
                {
                  name: "Samsung",
                  imagePath:
                    "//cdn.x-kom.pl/img/media/strefa_marki/xkom/samsung_l9.svg",
                  url: "https://lp.x-kom.pl/a/strefa-marki-samsung/",
                  target: "_blank",
                },
                {
                  name: "Chromebook",
                  imagePath:
                    "//cdn.x-kom.pl/img/media/strefa_marki/xkom/Chromebook-logo.svg",
                  url: "https://lp.x-kom.pl/a/chromebook/",
                  target: "_self",
                },
                {
                  name: "Sony",
                  imagePath: "//cdn.x-kom.pl/img/media/Sony_logo.svg",
                  url: "https://lp.x-kom.pl/a/strefa-sony/",
                  target: "_blank",
                },
                {
                  name: "GeForce RTX™",
                  imagePath:
                    "//cdn.x-kom.pl/img/media/strefa_marki/xkom/geforce_rtx.svg",
                  url: "https://lp.x-kom.pl/a/strefa-nvidii/",
                  target: "_self",
                },
                {
                  name: "Xiaomi",
                  imagePath: "//cdn.x-kom.pl/img/media/logo_xiaomi1.svg",
                  url: "https://lp.x-kom.pl/a/strefa-marki-xiaomi/",
                  target: "_blank",
                },
                {
                  name: "Microsoft",
                  imagePath:
                    "//cdn.x-kom.pl/img/media/Logo_strefy_marek/microsoft-surface.svg",
                  url: "https://www.x-kom.pl/l/microsoft-surface/",
                  target: "_blank",
                },
                {
                  name: "DJI",
                  imagePath:
                    "//cdn.x-kom.pl/img/media/Logo_strefy_marek/DJI.svg",
                  url: "https://lp.x-kom.pl/a/strefa-dji/",
                  target: "_self",
                },
                {
                  name: "LEGO",
                  imagePath:
                    "//cdn.x-kom.pl/img/media/Logo_strefy_marek/lego2.svg",
                  url: "https://www.x-kom.pl/g-7/c/2073-klocki-lego.html",
                  target: "_blank",
                },
              ],
              isFetching: false,
            },
            homeMovies: {
              movies: [
                {
                  id: 1776,
                  movieIdentifier: "60P7x-at9G4",
                  title:
                    "PC - czy warto go złożyć w 2024? @MichaPisarskiTech @bIackwhiteTV",
                  description:
                    "Kiedy @MichaPisarskiTech przyszedł do nas i powiedział, że chce komputer do gier i montażu, w którym będzie mógł wykorzystać funkcje AI, to wiedzieliśmy, że najlepiej zwrócić się o pomoc do @bIackwhiteTV.",
                  url: "https://youtu.be/60P7x-at9G4",
                  photo: {
                    url: "https://i3.ytimg.com/vi/60P7x-at9G4/sddefault.jpg",
                    thumbnailUrl:
                      "https://i3.ytimg.com/vi/60P7x-at9G4/default.jpg",
                    urlTemplate: null,
                  },
                  duration: 1968,
                  providerType: "Youtube",
                  views: 12635,
                  publishDate: "2024-09-07T08:06:00Z",
                },
                {
                  id: 1775,
                  movieIdentifier: "1M9QVlWWuIM",
                  title:
                    "Terenowy test hulajnóg — która wypadnie najlepiej? @WegorzGRY @radekhaberko",
                  description:
                    "Hulajnogi z testu: https://xkom.me/Hulajnogi-YT\nBezpieczeństwo zapewniały nam: https://xkom.me/Kaski-YT\nNagrania POV pomagały nam kamery DJI: https://xkom.me/DJIOsmoAction4",
                  url: "https://youtu.be/1M9QVlWWuIM",
                  photo: {
                    url: "https://i3.ytimg.com/vi/1M9QVlWWuIM/sddefault.jpg",
                    thumbnailUrl:
                      "https://i3.ytimg.com/vi/1M9QVlWWuIM/default.jpg",
                    urlTemplate: null,
                  },
                  duration: 1591,
                  providerType: "Youtube",
                  views: 8105,
                  publishDate: "2024-08-31T08:54:00Z",
                },
                {
                  id: 1774,
                  movieIdentifier: "WviW2eo0tls",
                  title:
                    "Czy MAŁE SMARTFONY mają sens? 🤔 Motorola Edge 50 Neo @MobzillaTV",
                  description:
                    "Motorola przekonuje, że tak, małe smartfony ciągle mają sens i ciągle jest spora grupa użytkowników, którzy chętnie po nie sięgają. O ich względy ma powalczyć nowa Edge 50 Neo - czy powtórzy sukces jednego z poprzedników, świetnie sprzedającej się niedawno Edge 30 Neo?",
                  url: "https://youtu.be/WviW2eo0tls",
                  photo: {
                    url: "https://i3.ytimg.com/vi/WviW2eo0tls/sddefault.jpg",
                    thumbnailUrl:
                      "https://i3.ytimg.com/vi/WviW2eo0tls/default.jpg",
                    urlTemplate: null,
                  },
                  duration: 376,
                  providerType: "Youtube",
                  views: 26103,
                  publishDate: "2024-08-30T08:35:00Z",
                },
                {
                  id: 1773,
                  movieIdentifier: "i-crBVARqz8",
                  title: "5 DARMOWYCH APLIKACJI DLA UCZNIA! 🦉 @GrzegorzRycko",
                  description:
                    "Jeżeli zastanawialiście się kiedyś jakie aplikacje powinny znaleźć się na laptopie każdego ucznia i studenta, to dzisiaj podpowiadamy. @GrzegorzRycko sprawdził jakie aplikacje można skonfigurować na praktycznie każdym urządzeniu, bo skupił się głównie na Chromebooku.",
                  url: "https://youtu.be/i-crBVARqz8",
                  photo: {
                    url: "https://i3.ytimg.com/vi/i-crBVARqz8/sddefault.jpg",
                    thumbnailUrl:
                      "https://i3.ytimg.com/vi/i-crBVARqz8/default.jpg",
                    urlTemplate: null,
                  },
                  duration: 461,
                  providerType: "Youtube",
                  views: 2781,
                  publishDate: "2024-08-29T13:05:01Z",
                },
                {
                  id: 1772,
                  movieIdentifier: "tY87oGjdFuw",
                  title:
                    "Mi Band 9 vs Mi Band 8 | Jak NIEWIELE znaczy WIELE ! ft.  @MajsterPirzu",
                  description:
                    "Siemanko, z tej strony Pirzu ! 🫡\nNie będę rozwodzić się na temat MiBanda 9 bo to nie ma sensu, piłka jest prosta - 8ka była sztosem wprowadzając dwugenwracyjny przeskok, podkręć śrubę w paru parametrach i... voila! Niewiele, ale jednak wiele zmian ! :)",
                  url: "https://youtu.be/tY87oGjdFuw",
                  photo: {
                    url: "https://i3.ytimg.com/vi/tY87oGjdFuw/sddefault.jpg",
                    thumbnailUrl:
                      "https://i3.ytimg.com/vi/tY87oGjdFuw/default.jpg",
                    urlTemplate: null,
                  },
                  duration: 349,
                  providerType: "Youtube",
                  views: 12304,
                  publishDate: "2024-08-28T13:05:01Z",
                },
                {
                  id: 1771,
                  movieIdentifier: "oJ_I-XJAX4w",
                  title: "CZY INTEGRA PRZEŚCIGNIE GTX 1650? @TechLipton",
                  description:
                    "Zacznijmy od tego, że Radeon 890M to nowy układ graficzny będący częścią składową mobilnych procesorów AMD Ryzen AI 300 z rodziny APU Strix Point. Obok rdzeni Zen 5, Zen 5c i chipu NPU XDNA2 to jedna z nowości rynkowych.",
                  url: "https://youtu.be/oJ_I-XJAX4w",
                  photo: {
                    url: "https://i3.ytimg.com/vi/oJ_I-XJAX4w/sddefault.jpg",
                    thumbnailUrl:
                      "https://i3.ytimg.com/vi/oJ_I-XJAX4w/default.jpg",
                    urlTemplate: null,
                  },
                  duration: 610,
                  providerType: "Youtube",
                  views: 27830,
                  publishDate: "2024-08-27T13:05:00Z",
                },
                {
                  id: 1770,
                  movieIdentifier: "L7Fm0ycHC8o",
                  title:
                    "Sonos Ace 🎧 nadgryzły jabłko AirPodsom Max? 🍏 @malz",
                  description:
                    "Marka Sonos, znana do tej pory z dobrej jakości głośników i soundbarów, poszerzyła swoją ofertę o model Ace - bezprzewodowe słuchawki nauszne.  Czy jakość dźwięku modelu Ace trzyma równie wysoki poziom oraz - co ważniejsze - czy pojawił nam się odpowiednik Apple AirPods Max na Androidy?",
                  url: "https://youtu.be/L7Fm0ycHC8o",
                  photo: {
                    url: "https://i3.ytimg.com/vi/L7Fm0ycHC8o/sddefault.jpg",
                    thumbnailUrl:
                      "https://i3.ytimg.com/vi/L7Fm0ycHC8o/default.jpg",
                    urlTemplate: null,
                  },
                  duration: 577,
                  providerType: "Youtube",
                  views: 10504,
                  publishDate: "2024-08-14T13:38:00Z",
                },
                {
                  id: 1769,
                  movieIdentifier: "XxC43Y5TPPc",
                  title: "Dobry zasilacz 850W? Test SMX Okame @PCbyTQ",
                  description:
                    "Na rynku zasilaczy komputerowych pojawił się nowy gracz – marka SMX. Okame M2 850W na papierze wygląda na bestseller, a jak wypadnie w testach?",
                  url: "https://youtu.be/XxC43Y5TPPc",
                  photo: {
                    url: "https://i3.ytimg.com/vi/XxC43Y5TPPc/sddefault.jpg",
                    thumbnailUrl:
                      "https://i3.ytimg.com/vi/XxC43Y5TPPc/default.jpg",
                    urlTemplate: null,
                  },
                  duration: 777,
                  providerType: "Youtube",
                  views: 9010,
                  publishDate: "2024-08-11T08:15:01Z",
                },
                {
                  id: 1768,
                  movieIdentifier: "xYupnk01B1c",
                  title: "Stary flagowiec, czy nowy budżetowy?",
                  description:
                    "Paweł sprawdza, czy powszechna opinia, że starszy, przeceniony flagowiec to najlepszy zakupowy wybór jest zawsze słuszna.",
                  url: "https://youtu.be/xYupnk01B1c",
                  photo: {
                    url: "https://i3.ytimg.com/vi/xYupnk01B1c/sddefault.jpg",
                    thumbnailUrl:
                      "https://i3.ytimg.com/vi/xYupnk01B1c/default.jpg",
                    urlTemplate: null,
                  },
                  duration: 704,
                  providerType: "Youtube",
                  views: 21055,
                  publishDate: "2024-08-13T13:13:00Z",
                },
                {
                  id: 1767,
                  movieIdentifier: "mMfr0iatR6Y",
                  title: "CZY KARTA Z JEDNYM WENTYLATOREM MA SENS W 2024?",
                  description:
                    "Czy absolutnie budżetowy model karty, jakim jest Gainward Pegasus będzie z powodzeniem służył mojej platformie testowej? W końcu mówimy o karcie z jednym, niewielkim wentylatorem i poborem energii w wysokości 160W.",
                  url: "https://youtu.be/mMfr0iatR6Y",
                  photo: {
                    url: "https://i3.ytimg.com/vi/mMfr0iatR6Y/sddefault.jpg",
                    thumbnailUrl:
                      "https://i3.ytimg.com/vi/mMfr0iatR6Y/default.jpg",
                    urlTemplate: null,
                  },
                  duration: 363,
                  providerType: "Youtube",
                  views: 18181,
                  publishDate: "2024-08-06T13:10:00Z",
                },
              ],
              isFetching: false,
            },
            homePagePromotionBlocks: {
              promotionBlocks: [
                {
                  name: "AirPods 4",
                  text: "zamów w przedsprzedaży",
                  buttons: [
                    {
                      title: "Sprawdź",
                      type: "Url",
                      searchParams: null,
                      urlParams: {
                        linkUrl:
                          "https://www.x-kom.pl/szukaj?sort_by=price_asc&producent=357-apple&f%5BproductMarks%5D%5BPresale%5D=1&q=apple%20airpods",
                      },
                      resourceIdentifierParams: null,
                    },
                  ],
                  links: [],
                  photo: {
                    url: "https://cdn.x-kom.pl/i/img/promotions-list/large,,66df7ae0c5818-onsite-promocje-800x670.jpg",
                    thumbnailUrl:
                      "https://cdn.x-kom.pl/i/img/promotions-list/small,,66df7ae0c5818-onsite-promocje-800x670.jpg",
                    urlTemplate:
                      "https://cdn.x-kom.pl/i/img/promotions-list/{SIZE},,66df7ae0c5818-onsite-promocje-800x670.jpg",
                  },
                  id: 5422,
                  category: "PreSales",
                },
                {
                  name: "Kup wybrany  Samsung Galaxy",
                  text: "i otrzymaj nawet 400 zł zwrotu na konto",
                  buttons: [
                    {
                      title: "Sprawdź",
                      type: "Url",
                      searchParams: null,
                      urlParams: {
                        linkUrl:
                          "https://www.x-kom.pl/lp/samsung-zwrot-na-konto",
                      },
                      resourceIdentifierParams: null,
                    },
                  ],
                  links: [],
                  photo: {
                    url: "https://cdn.x-kom.pl/i/img/promotions-list/large,,66debe6e3c369-onsite-promocje-800x670.jpg",
                    thumbnailUrl:
                      "https://cdn.x-kom.pl/i/img/promotions-list/small,,66debe6e3c369-onsite-promocje-800x670.jpg",
                    urlTemplate:
                      "https://cdn.x-kom.pl/i/img/promotions-list/{SIZE},,66debe6e3c369-onsite-promocje-800x670.jpg",
                  },
                  id: 5413,
                  category: "Promotions",
                },
                {
                  name: "iPhone 16",
                  text: "już wkrótce",
                  buttons: [
                    {
                      title: "Sprawdź",
                      type: "Url",
                      searchParams: null,
                      urlParams: {
                        linkUrl:
                          "https://www.x-kom.pl/g-4/c/1590-smartfony-i-telefony.html?f7273-seria=318869-iphone-16&f7273-seria=318870-iphone-16-plus",
                      },
                      resourceIdentifierParams: null,
                    },
                  ],
                  links: [],
                  photo: {
                    url: "https://cdn.x-kom.pl/i/img/promotions-list/large,,66df69388fcee-onsite-promocje-800x670.jpg",
                    thumbnailUrl:
                      "https://cdn.x-kom.pl/i/img/promotions-list/small,,66df69388fcee-onsite-promocje-800x670.jpg",
                    urlTemplate:
                      "https://cdn.x-kom.pl/i/img/promotions-list/{SIZE},,66df69388fcee-onsite-promocje-800x670.jpg",
                  },
                  id: 5420,
                  category: "PreSales",
                },
                {
                  name: "Apple Watch series 10",
                  text: "zamów w przedsprzedaży",
                  buttons: [
                    {
                      title: "Sprawdź",
                      type: "Url",
                      searchParams: null,
                      urlParams: {
                        linkUrl:
                          "https://www.x-kom.pl/g-4/c/2435-smartwatche.html?producent=357-apple&f13496-seria=318874-apple-watch-series-10",
                      },
                      resourceIdentifierParams: null,
                    },
                  ],
                  links: [],
                  photo: {
                    url: "https://cdn.x-kom.pl/i/img/promotions-list/large,,66df7a410ee28-onsite-promocje-800x670.jpg",
                    thumbnailUrl:
                      "https://cdn.x-kom.pl/i/img/promotions-list/small,,66df7a410ee28-onsite-promocje-800x670.jpg",
                    urlTemplate:
                      "https://cdn.x-kom.pl/i/img/promotions-list/{SIZE},,66df7a410ee28-onsite-promocje-800x670.jpg",
                  },
                  id: 5421,
                  category: "PreSales",
                },
                {
                  name: "Tak się składa, że masz rabat",
                  text: "Zamów zestawy od SteelSeries i oszczędź do 27%",
                  buttons: [
                    {
                      title: "Sprawdź",
                      type: "Url",
                      searchParams: null,
                      urlParams: {
                        linkUrl:
                          "https://promocje.x-kom.pl/zestawy-steelseries",
                      },
                      resourceIdentifierParams: null,
                    },
                  ],
                  links: [],
                  photo: {
                    url: "https://cdn.x-kom.pl/i/img/promotions-list/large,,66dfe3a21f549-onsite-promocje-800x670.jpg",
                    thumbnailUrl:
                      "https://cdn.x-kom.pl/i/img/promotions-list/small,,66dfe3a21f549-onsite-promocje-800x670.jpg",
                    urlTemplate:
                      "https://cdn.x-kom.pl/i/img/promotions-list/{SIZE},,66dfe3a21f549-onsite-promocje-800x670.jpg",
                  },
                  id: 5423,
                  category: "Promotions",
                },
                {
                  name: "iPhone 16 Pro",
                  text: "już wkrótce",
                  buttons: [
                    {
                      title: "Sprawdź",
                      type: "Url",
                      searchParams: null,
                      urlParams: {
                        linkUrl:
                          "https://www.x-kom.pl/g-4/c/1590-smartfony-i-telefony.html?f7273-seria=318868-apple-iphone-16",
                      },
                      resourceIdentifierParams: null,
                    },
                  ],
                  links: [],
                  photo: {
                    url: "https://cdn.x-kom.pl/i/img/promotions-list/large,,66df5d347905f-onsite-promocje-800x670.jpg",
                    thumbnailUrl:
                      "https://cdn.x-kom.pl/i/img/promotions-list/small,,66df5d347905f-onsite-promocje-800x670.jpg",
                    urlTemplate:
                      "https://cdn.x-kom.pl/i/img/promotions-list/{SIZE},,66df5d347905f-onsite-promocje-800x670.jpg",
                  },
                  id: 5419,
                  category: "PreSales",
                },
                {
                  name: "Telewizory Hisense w supercenach",
                  text: "Tylko przez tydzień",
                  buttons: [
                    {
                      title: "Sprawdź",
                      type: "Url",
                      searchParams: null,
                      urlParams: {
                        linkUrl: "https://promocje.x-kom.pl/hisense-week",
                      },
                      resourceIdentifierParams: null,
                    },
                  ],
                  links: [],
                  photo: {
                    url: "https://cdn.x-kom.pl/i/img/promotions-list/large,,66e14e0c09dc8-onsite-promocje-800x670.jpg",
                    thumbnailUrl:
                      "https://cdn.x-kom.pl/i/img/promotions-list/small,,66e14e0c09dc8-onsite-promocje-800x670.jpg",
                    urlTemplate:
                      "https://cdn.x-kom.pl/i/img/promotions-list/{SIZE},,66e14e0c09dc8-onsite-promocje-800x670.jpg",
                  },
                  id: 5427,
                  category: "Promotions",
                },
                {
                  name: "Przygotuj się na powrót do szkoły",
                  text: "Telewizor KIVI KidsTV w niższej cenie",
                  buttons: [
                    {
                      title: "Sprawdź",
                      type: "Url",
                      searchParams: null,
                      urlParams: {
                        linkUrl:
                          "https://www.x-kom.pl/p/1222005-telewizor-32-i-mniejszy-kivi-kids-tv-32-led-android-tv.html",
                      },
                      resourceIdentifierParams: null,
                    },
                  ],
                  links: [],
                  photo: {
                    url: "https://cdn.x-kom.pl/i/img/promotions-list/large,,66e03ebfda73c-onsite-promocje-800x670.jpg",
                    thumbnailUrl:
                      "https://cdn.x-kom.pl/i/img/promotions-list/small,,66e03ebfda73c-onsite-promocje-800x670.jpg",
                    urlTemplate:
                      "https://cdn.x-kom.pl/i/img/promotions-list/{SIZE},,66e03ebfda73c-onsite-promocje-800x670.jpg",
                  },
                  id: 5425,
                  category: "Promotions",
                },
                {
                  name: "Codziennie inny tablet Lenovo w niższej cenie",
                  text: "Tylko przez 48 godzin",
                  buttons: [
                    {
                      title: "Sprawdź",
                      type: "Url",
                      searchParams: null,
                      urlParams: {
                        linkUrl:
                          "https://www.x-kom.pl/szukaj?q=1132749%2B1241520%2B1228100%2B1132747%2B1210642",
                      },
                      resourceIdentifierParams: null,
                    },
                  ],
                  links: [],
                  photo: {
                    url: "https://cdn.x-kom.pl/i/img/promotions-list/large,,66decf5a90ffc-onsite-promocje-800x670.jpg",
                    thumbnailUrl:
                      "https://cdn.x-kom.pl/i/img/promotions-list/small,,66decf5a90ffc-onsite-promocje-800x670.jpg",
                    urlTemplate:
                      "https://cdn.x-kom.pl/i/img/promotions-list/{SIZE},,66decf5a90ffc-onsite-promocje-800x670.jpg",
                  },
                  id: 5415,
                  category: "Promotions",
                },
                {
                  name: "Kup Nothing Phone (2a) Plus",
                  text: "a słuchawki otrzymasz w prezencie",
                  buttons: [
                    {
                      title: "Sprawdź",
                      type: "Url",
                      searchParams: null,
                      urlParams: {
                        linkUrl:
                          "https://www.x-kom.pl/p/1275521-smartfon-telefon-nothing-phone-2a-plus-5g-12-256gb-grey-120hz.html",
                      },
                      resourceIdentifierParams: null,
                    },
                  ],
                  links: [],
                  photo: {
                    url: "https://cdn.x-kom.pl/i/img/promotions-list/large,,66dec625b34f3-onsite-promocje-800x670.jpg",
                    thumbnailUrl:
                      "https://cdn.x-kom.pl/i/img/promotions-list/small,,66dec625b34f3-onsite-promocje-800x670.jpg",
                    urlTemplate:
                      "https://cdn.x-kom.pl/i/img/promotions-list/{SIZE},,66dec625b34f3-onsite-promocje-800x670.jpg",
                  },
                  id: 5414,
                  category: "Promotions",
                },
                {
                  name: "TURBODOPALANIE na studia.",
                  text: "Macbook Air M2 już od 137,87 zł miesięcznie",
                  buttons: [
                    {
                      title: "Sprawdź",
                      type: "Url",
                      searchParams: null,
                      urlParams: {
                        linkUrl:
                          "https://www.x-kom.pl/szukaj?sort_by=price_asc&producent=357-apple&q=macbook",
                      },
                      resourceIdentifierParams: null,
                    },
                  ],
                  links: [],
                  photo: {
                    url: "https://cdn.x-kom.pl/i/img/promotions-list/large,,66a24c95bcb21-onsite-promocje-800x670.jpg",
                    thumbnailUrl:
                      "https://cdn.x-kom.pl/i/img/promotions-list/small,,66a24c95bcb21-onsite-promocje-800x670.jpg",
                    urlTemplate:
                      "https://cdn.x-kom.pl/i/img/promotions-list/{SIZE},,66a24c95bcb21-onsite-promocje-800x670.jpg",
                  },
                  id: 5260,
                  category: "Promotions",
                },
                {
                  name: "Kup Samsung Galaxy S23",
                  text: "i otrzymaj 1000 zł zwrotu na konto",
                  buttons: [
                    {
                      title: "Sprawdź",
                      type: "Url",
                      searchParams: null,
                      urlParams: {
                        linkUrl:
                          "https://www.x-kom.pl/g-4/c/1590-smartfony-i-telefony.html?producent=29-samsung&f7273-seria=273261-galaxy-s23",
                      },
                      resourceIdentifierParams: null,
                    },
                  ],
                  links: [],
                  photo: {
                    url: "https://cdn.x-kom.pl/i/img/promotions-list/large,,66d58242ba3cb-onsite-promocje-800x670.jpg",
                    thumbnailUrl:
                      "https://cdn.x-kom.pl/i/img/promotions-list/small,,66d58242ba3cb-onsite-promocje-800x670.jpg",
                    urlTemplate:
                      "https://cdn.x-kom.pl/i/img/promotions-list/{SIZE},,66d58242ba3cb-onsite-promocje-800x670.jpg",
                  },
                  id: 5387,
                  category: "Promotions",
                },
                {
                  name: "Słuchaj nie tylko nauczyciela",
                  text: "Odkryj słuchawki Jabra Elite",
                  buttons: [
                    {
                      title: "Sprawdź",
                      type: "Url",
                      searchParams: null,
                      urlParams: {
                        linkUrl: "https://promocje.x-kom.pl/jabra-elite",
                      },
                      resourceIdentifierParams: null,
                    },
                  ],
                  links: [],
                  photo: {
                    url: "https://cdn.x-kom.pl/i/img/promotions-list/large,,66dee7d3dd93a-onsite-promocje-800x670.jpg",
                    thumbnailUrl:
                      "https://cdn.x-kom.pl/i/img/promotions-list/small,,66dee7d3dd93a-onsite-promocje-800x670.jpg",
                    urlTemplate:
                      "https://cdn.x-kom.pl/i/img/promotions-list/{SIZE},,66dee7d3dd93a-onsite-promocje-800x670.jpg",
                  },
                  id: 5416,
                  category: "Promotions",
                },
                {
                  name: "EA SPORTS FC25",
                  text: "dostępne już w przedsprzedaży",
                  buttons: [
                    {
                      title: "Sprawdź",
                      type: "Url",
                      searchParams: null,
                      urlParams: {
                        linkUrl:
                          "https://www.x-kom.pl/szukaj?q=1269372%2B1269373%2B1269374%2B1269376%2B1269377%2B1269378%2B1269379%2B1269380",
                      },
                      resourceIdentifierParams: null,
                    },
                  ],
                  links: [],
                  photo: {
                    url: "https://cdn.x-kom.pl/i/img/promotions-list/large,,6698d01aea628-onsite-promocje-800x670.jpg",
                    thumbnailUrl:
                      "https://cdn.x-kom.pl/i/img/promotions-list/small,,6698d01aea628-onsite-promocje-800x670.jpg",
                    urlTemplate:
                      "https://cdn.x-kom.pl/i/img/promotions-list/{SIZE},,6698d01aea628-onsite-promocje-800x670.jpg",
                  },
                  id: 5241,
                  category: "PreSales",
                },
                {
                  name: "Dźwięk z efektem WOW",
                  text: "Kup wybrany soundbar Samsung teraz w niższej cenie",
                  buttons: [
                    {
                      title: "Sprawdź",
                      type: "Url",
                      searchParams: null,
                      urlParams: {
                        linkUrl:
                          "https://www.x-kom.pl/szukaj?q=1270260%2B1270278%2B1270283%2B1270285",
                      },
                      resourceIdentifierParams: null,
                    },
                  ],
                  links: [],
                  photo: {
                    url: "https://cdn.x-kom.pl/i/img/promotions-list/large,,66deb90bcfb73-onsite-promocje-800x670.jpg",
                    thumbnailUrl:
                      "https://cdn.x-kom.pl/i/img/promotions-list/small,,66deb90bcfb73-onsite-promocje-800x670.jpg",
                    urlTemplate:
                      "https://cdn.x-kom.pl/i/img/promotions-list/{SIZE},,66deb90bcfb73-onsite-promocje-800x670.jpg",
                  },
                  id: 5412,
                  category: "Promotions",
                },
                {
                  name: "Złap bon na kolejne zakupy w x-kom o wartości nawet 450 zł",
                  text: "kup wybrany laptop Gigabyte, zostaw opinię i otrzymaj bon",
                  buttons: [
                    {
                      title: "Sprawdź",
                      type: "Url",
                      searchParams: null,
                      urlParams: {
                        linkUrl: "https://lp.x-kom.pl/a/bony-gigabyte",
                      },
                      resourceIdentifierParams: null,
                    },
                  ],
                  links: [],
                  photo: {
                    url: "https://cdn.x-kom.pl/i/img/promotions-list/large,,66db12cb5e91a-onsite-promocje-800x670.jpg",
                    thumbnailUrl:
                      "https://cdn.x-kom.pl/i/img/promotions-list/small,,66db12cb5e91a-onsite-promocje-800x670.jpg",
                    urlTemplate:
                      "https://cdn.x-kom.pl/i/img/promotions-list/{SIZE},,66db12cb5e91a-onsite-promocje-800x670.jpg",
                  },
                  id: 5409,
                  category: "Promotions",
                },
                {
                  name: "OPPO  Reno12 FS 5G | Reno12 FS",
                  text: "Pamięć 8 + 512 GB już od 1089 zł",
                  buttons: [
                    {
                      title: "Sprawdź",
                      type: "Url",
                      searchParams: null,
                      urlParams: {
                        linkUrl:
                          "https://www.x-kom.pl/g-4/c/1590-smartfony-i-telefony.html?producent=1791-oppo&f7273-seria=311633-reno12",
                      },
                      resourceIdentifierParams: null,
                    },
                  ],
                  links: [],
                  photo: {
                    url: "https://cdn.x-kom.pl/i/img/promotions-list/large,,66dad9cc79f91-onsite-promocje-800x670.jpg",
                    thumbnailUrl:
                      "https://cdn.x-kom.pl/i/img/promotions-list/small,,66dad9cc79f91-onsite-promocje-800x670.jpg",
                    urlTemplate:
                      "https://cdn.x-kom.pl/i/img/promotions-list/{SIZE},,66dad9cc79f91-onsite-promocje-800x670.jpg",
                  },
                  id: 5408,
                  category: "Promotions",
                },
                {
                  name: "Przedsprzedaż - poznaj laptopy Intel AI",
                  text: "z najnowszymi procesorami Intel Core Ultra",
                  buttons: [
                    {
                      title: "Sprawdź",
                      type: "Url",
                      searchParams: null,
                      urlParams: {
                        linkUrl:
                          "https://www.x-kom.pl/g-2/c/159-laptopy-notebooki-ultrabooki.html?f22-procesor=318699-intel-core-ultra-5-226v-8-rdzeni.-8-watkow.-2.10-4.50-ghz.-8mb-cache&f22-procesor=318705-intel-core-ultra-7-258v-8-rdzeni.-8-watkow.-2.20-4.80-ghz.-12mb-cache",
                      },
                      resourceIdentifierParams: null,
                    },
                  ],
                  links: [],
                  photo: {
                    url: "https://cdn.x-kom.pl/i/img/promotions-list/large,,66daa19694b6f-onsite-promocje-800x670.jpg",
                    thumbnailUrl:
                      "https://cdn.x-kom.pl/i/img/promotions-list/small,,66daa19694b6f-onsite-promocje-800x670.jpg",
                    urlTemplate:
                      "https://cdn.x-kom.pl/i/img/promotions-list/{SIZE},,66daa19694b6f-onsite-promocje-800x670.jpg",
                  },
                  id: 5404,
                  category: "Promotions",
                },
                {
                  name: "Kup nowy edge 50 neo",
                  text: "i zyskaj dodatkowe 200 zł trade- in i słuchawki",
                  buttons: [
                    {
                      title: "Sprawdź",
                      type: "Url",
                      searchParams: null,
                      urlParams: {
                        linkUrl:
                          "https://www.x-kom.pl/szukaj?q=1275926%2B1276119%2B1276120",
                      },
                      resourceIdentifierParams: null,
                    },
                  ],
                  links: [],
                  photo: {
                    url: "https://cdn.x-kom.pl/i/img/promotions-list/large,,66cf31465566a-onsite-promocje-800x670.jpg",
                    thumbnailUrl:
                      "https://cdn.x-kom.pl/i/img/promotions-list/small,,66cf31465566a-onsite-promocje-800x670.jpg",
                    urlTemplate:
                      "https://cdn.x-kom.pl/i/img/promotions-list/{SIZE},,66cf31465566a-onsite-promocje-800x670.jpg",
                  },
                  id: 5378,
                  category: "Promotions",
                },
                {
                  name: "Napędzają e-sport",
                  text: "Słuchawki Acezone A-Spire teraz w atrakcyjnej cenie",
                  buttons: [
                    {
                      title: "Sprawdź",
                      type: "Url",
                      searchParams: null,
                      urlParams: {
                        linkUrl:
                          "https://www.x-kom.pl/szukaj?q=1199925%2B1262294",
                      },
                      resourceIdentifierParams: null,
                    },
                  ],
                  links: [],
                  photo: {
                    url: "https://cdn.x-kom.pl/i/img/promotions-list/large,,66dad7abdfc44-onsite-promocje-800x670.jpg",
                    thumbnailUrl:
                      "https://cdn.x-kom.pl/i/img/promotions-list/small,,66dad7abdfc44-onsite-promocje-800x670.jpg",
                    urlTemplate:
                      "https://cdn.x-kom.pl/i/img/promotions-list/{SIZE},,66dad7abdfc44-onsite-promocje-800x670.jpg",
                  },
                  id: 5407,
                  category: "Promotions",
                },
              ],
              isFetching: false,
            },
            photoMarkerSection: {
              items: [
                {
                  availabilityStatus: "Available",
                  freeShipment: true,
                  marks: [],
                  id: "1162803",
                  name: "Biurko elektryczne ED-120 black",
                  priceInfo: {
                    price: 799,
                    oldPrice: null,
                    isPriceVisible: true,
                    minPrice: null,
                  },
                  producer: {
                    id: "1546",
                    name: "Silver Monkey",
                  },
                  mainPhoto: {
                    urlTemplate:
                      "https://cdn.x-kom.pl/i/setup/images/prod/big/{SIZE},,2023/10/pr_2023_10_31_9_3_20_12_00.jpg",
                  },
                  webUrl:
                    "https://www.x-kom.pl/p/1162803-biurko-gamingowe-silver-monkey-biurko-elektryczne-ed-120-black.html",
                  isEsd: false,
                  group: {
                    id: 7,
                    name: "Gaming i streaming",
                    category: {
                      id: 3466,
                      nameSingular: "Mebel gamingowy",
                      namePlural: "Meble gamingowe",
                      subcategory: {
                        id: 2706,
                        nameSingular: "Biurko gamingowe",
                        namePlural: "Biurka gamingowe",
                      },
                    },
                  },
                  commentsRating: 5.85,
                  commentsRatingFivePoints: 4.85,
                  commentsCount: 303,
                  promotionInfo: null,
                },
                {
                  availabilityStatus: "Available",
                  freeShipment: false,
                  marks: [],
                  id: "1162807",
                  name: "Tsukkomi",
                  priceInfo: {
                    price: 99.99,
                    oldPrice: null,
                    isPriceVisible: true,
                    minPrice: null,
                  },
                  producer: {
                    id: "2580",
                    name: "Silver Monkey X",
                  },
                  mainPhoto: {
                    urlTemplate:
                      "https://cdn.x-kom.pl/i/setup/images/prod/big/{SIZE},,2023/10/pr_2023_10_6_9_47_3_167_00.jpg",
                  },
                  webUrl:
                    "https://www.x-kom.pl/p/1162807-pad-silver-monkey-x-tsukkomi.html",
                  isEsd: false,
                  group: {
                    id: 7,
                    name: "Gaming i streaming",
                    category: {
                      id: 392,
                      nameSingular: "Kontroler do gier",
                      namePlural: "Kontrolery do gier",
                      subcategory: {
                        id: 170,
                        nameSingular: "Pad",
                        namePlural: "Pady",
                      },
                    },
                  },
                  commentsRating: 5.26,
                  commentsRatingFivePoints: 4.36,
                  commentsCount: 88,
                  promotionInfo: null,
                },
                {
                  availabilityStatus: "Available",
                  freeShipment: true,
                  marks: [],
                  id: "1051871",
                  name: "Mandrill",
                  priceInfo: {
                    price: 99.99,
                    oldPrice: null,
                    isPriceVisible: true,
                    minPrice: null,
                  },
                  producer: {
                    id: "2580",
                    name: "Silver Monkey X",
                  },
                  mainPhoto: {
                    urlTemplate:
                      "https://cdn.x-kom.pl/i/setup/images/prod/big/{SIZE},,2023/2/pr_2023_2_24_10_37_13_94_02.jpg",
                  },
                  webUrl:
                    "https://www.x-kom.pl/p/1051871-klawiatura-przewodowa-silver-monkey-x-mandrill.html",
                  isEsd: false,
                  group: {
                    id: 6,
                    name: "Urządzenia peryferyjne",
                    category: {
                      id: 32,
                      nameSingular: "Klawiatura",
                      namePlural: "Klawiatury",
                      subcategory: {
                        id: 442,
                        nameSingular: "Klawiatura  przewodowa",
                        namePlural: "Klawiatury  przewodowe",
                      },
                    },
                  },
                  commentsRating: 5.34,
                  commentsRatingFivePoints: 4.42,
                  commentsCount: 378,
                  promotionInfo: null,
                },
                {
                  availabilityStatus: "Available",
                  freeShipment: true,
                  marks: [
                    {
                      mark: "CrossedPrice",
                      startDate: null,
                      endDate: null,
                    },
                  ],
                  id: "1123913",
                  name: "G27CQ4 E2",
                  priceInfo: {
                    price: 799,
                    oldPrice: null,
                    isPriceVisible: true,
                    minPrice: null,
                  },
                  producer: {
                    id: "7",
                    name: "MSI",
                  },
                  mainPhoto: {
                    urlTemplate:
                      "https://cdn.x-kom.pl/i/setup/images/prod/big/{SIZE},,2023/3/pr_2023_3_8_14_11_50_629_00.jpg",
                  },
                  webUrl:
                    "https://www.x-kom.pl/p/1123913-monitor-led-27-26-5--28-4-msi-g27cq4-e2.html",
                  isEsd: false,
                  group: {
                    id: 6,
                    name: "Urządzenia peryferyjne",
                    category: {
                      id: 15,
                      nameSingular: "Monitor",
                      namePlural: "Monitory",
                      subcategory: {
                        id: 1291,
                        nameSingular: 'Monitor LED 27" (26,5"-28,4")',
                        namePlural: 'Monitory LED 27" (26,5"-28,4")',
                      },
                    },
                  },
                  commentsRating: 5.83,
                  commentsRatingFivePoints: 4.83,
                  commentsCount: 78,
                  promotionInfo: null,
                },
                {
                  availabilityStatus: "Available",
                  freeShipment: false,
                  marks: [],
                  id: "1110541",
                  name: "Vervet",
                  priceInfo: {
                    price: 199,
                    oldPrice: null,
                    isPriceVisible: true,
                    minPrice: null,
                  },
                  producer: {
                    id: "2580",
                    name: "Silver Monkey X",
                  },
                  mainPhoto: {
                    urlTemplate:
                      "https://cdn.x-kom.pl/i/setup/images/prod/big/{SIZE},,2023/10/pr_2023_10_3_11_20_58_786_01.jpg",
                  },
                  webUrl:
                    "https://www.x-kom.pl/p/1110541-myszka-bezprzewodowa-silver-monkey-x-vervet.html",
                  isEsd: false,
                  group: {
                    id: 6,
                    name: "Urządzenia peryferyjne",
                    category: {
                      id: 31,
                      nameSingular: "Myszka",
                      namePlural: "Myszki",
                      subcategory: {
                        id: 385,
                        nameSingular: "Myszka bezprzewodowa",
                        namePlural: "Myszki bezprzewodowe",
                      },
                    },
                  },
                  commentsRating: 5.26,
                  commentsRatingFivePoints: 4.34,
                  commentsCount: 85,
                  promotionInfo: null,
                },
                {
                  availabilityStatus: "Available",
                  freeShipment: true,
                  marks: [
                    {
                      mark: "RecommendedProduct",
                      startDate: null,
                      endDate: null,
                    },
                  ],
                  id: "1154668",
                  name: "SNOWY ARGB 360 3x120 mm",
                  priceInfo: {
                    price: 369,
                    oldPrice: null,
                    isPriceVisible: true,
                    minPrice: null,
                  },
                  producer: {
                    id: "2580",
                    name: "Silver Monkey X",
                  },
                  mainPhoto: {
                    urlTemplate:
                      "https://cdn.x-kom.pl/i/setup/images/prod/big/{SIZE},,2023/7/pr_2023_7_5_7_7_26_825_00.jpg",
                  },
                  webUrl:
                    "https://www.x-kom.pl/p/1154668-chlodzenie-wodne-silver-monkey-x-snowy-argb-360-3x120-mm.html",
                  isEsd: false,
                  group: {
                    id: 5,
                    name: "Podzespoły komputerowe",
                    category: {
                      id: 2599,
                      nameSingular: "Chłodzenie komputerowe",
                      namePlural: "Chłodzenia komputerowe",
                      subcategory: {
                        id: 2650,
                        nameSingular: "Chłodzenie wodne",
                        namePlural: "Chłodzenia wodne",
                      },
                    },
                  },
                  commentsRating: 5.64,
                  commentsRatingFivePoints: 4.67,
                  commentsCount: 1121,
                  promotionInfo: null,
                },
                {
                  availabilityStatus: "Available",
                  freeShipment: false,
                  marks: [],
                  id: "1210045",
                  name: "GeForce RTX 4070 SUPER EAGLE OC 12GB GDDR6X",
                  priceInfo: {
                    price: 2999,
                    oldPrice: null,
                    isPriceVisible: true,
                    minPrice: null,
                  },
                  producer: {
                    id: "57",
                    name: "Gigabyte",
                  },
                  mainPhoto: {
                    urlTemplate:
                      "https://cdn.x-kom.pl/i/setup/images/prod/big/{SIZE},,2024/1/pr_2024_1_8_9_19_40_904_00.jpg",
                  },
                  webUrl:
                    "https://www.x-kom.pl/p/1210045-karta-graficzna-nvidia-gigabyte-geforce-rtx-4070-super-eagle-oc-12gb-gddr6x.html",
                  isEsd: false,
                  group: {
                    id: 5,
                    name: "Podzespoły komputerowe",
                    category: {
                      id: 345,
                      nameSingular: "Karta graficzna",
                      namePlural: "Karty graficzne",
                      subcategory: {
                        id: 346,
                        nameSingular: "Karta graficzna NVIDIA",
                        namePlural: "Karty graficzne NVIDIA",
                      },
                    },
                  },
                  commentsRating: 5.87,
                  commentsRatingFivePoints: 4.87,
                  commentsCount: 23,
                  promotionInfo: null,
                },
                {
                  availabilityStatus: "Available",
                  freeShipment: true,
                  marks: [
                    {
                      mark: "New",
                      startDate: null,
                      endDate: null,
                    },
                  ],
                  id: "1204902",
                  name: "Pyxis",
                  priceInfo: {
                    price: 499,
                    oldPrice: null,
                    isPriceVisible: true,
                    minPrice: null,
                  },
                  producer: {
                    id: "2580",
                    name: "Silver Monkey X",
                  },
                  mainPhoto: {
                    urlTemplate:
                      "https://cdn.x-kom.pl/i/setup/images/prod/big/{SIZE},,2024/6/pr_2024_6_13_9_52_36_511_04.jpg",
                  },
                  webUrl:
                    "https://www.x-kom.pl/p/1204902-obudowa-do-komputera-silver-monkey-x-pyxis.html",
                  isEsd: false,
                  group: {
                    id: 5,
                    name: "Podzespoły komputerowe",
                    category: {
                      id: 388,
                      nameSingular: "Obudowa komputerowa",
                      namePlural: "Obudowy komputerowe",
                      subcategory: {
                        id: 389,
                        nameSingular: "Obudowa do komputera",
                        namePlural: "Obudowy do komputera",
                      },
                    },
                  },
                  commentsRating: 5.93,
                  commentsRatingFivePoints: 4.93,
                  commentsCount: 15,
                  promotionInfo: null,
                },
              ],
            },
          },
          productsLists: {
            recommendedProducts: [
              {
                id: "1278719",
                type: "Base",
              },
              {
                id: "1278133",
                type: "Base",
              },
              {
                id: "1180067",
                type: "Base",
              },
              {
                id: "1047372",
                type: "Base",
              },
              {
                id: "1276743",
                type: "Base",
              },
              {
                id: "1051252",
                type: "Base",
              },
              {
                id: "1274401",
                type: "Base",
              },
              {
                id: "1269161",
                type: "Base",
              },
              {
                id: "1230135",
                type: "Base",
              },
              {
                id: "1275521",
                type: "Base",
              },
              {
                id: "1199409",
                type: "Base",
              },
              {
                id: "1243659",
                type: "Base",
              },
              {
                id: "1276740",
                type: "Base",
              },
              {
                id: "1222052",
                type: "Base",
              },
              {
                id: "1162620",
                type: "Base",
              },
              {
                id: "1068860",
                type: "Base",
              },
              {
                id: "1262782",
                type: "Base",
              },
              {
                id: "1173351",
                type: "Base",
              },
              {
                id: "1262092",
                type: "Base",
              },
              {
                id: "1259591",
                type: "Base",
              },
              {
                id: "1221769",
                type: "Base",
              },
              {
                id: "1209732",
                type: "Base",
              },
              {
                id: "1120540",
                type: "Base",
              },
              {
                id: "1276554",
                type: "Base",
              },
            ],
            hotShot: [
              {
                type: "HotShot",
                extend: {
                  id: "39775",
                  price: 849,
                  oldPrice: 999,
                  minPriceInfo: {
                    minPrice: 999,
                    dateMinPrice: "2024-09-04T13:37:37Z",
                  },
                  promotionGainText: "Oszczędź 150 zł",
                  promotionGainTextLines: ["Oszczędź", "150 zł"],
                  promotionGainValue: 150,
                  promotionTotalCount: 150,
                  saleCount: 10,
                  maxBuyCount: 1,
                  promotionName: "Xiaomi Redmi Note 12 Pro 4G 8/256 Sky Blue",
                  promotionEnd: "2024-09-12T08:00:00Z",
                  promotionStart: "2024-09-11T20:00:00Z",
                  htmlContent: null,
                  promotionPhoto: {
                    url: "https://cdn.x-kom.pl/i/img/promotions/hot-shot-large,,hs_2024_9_11_14_33_2.PNG",
                    thumbnailUrl:
                      "https://cdn.x-kom.pl/i/img/promotions/hot-shot-large,,hs_2024_9_11_14_33_2.PNG",
                    urlTemplate: null,
                  },
                  isActive: true,
                  isSuspended: false,
                  minimumInstallmentValue: 27.88,
                  freeInstallment: false,
                },
                id: "1277191",
              },
            ],
          },
          products: {
            "1047372": {
              price: 4199,
              priceInfo: {
                price: 4199,
                oldPrice: null,
                isPriceVisible: true,
                minPrice: null,
              },
              productLink: "USE_SELECTOR_PLZ",
              isEsd: false,
              id: "1047372",
              name: "MacBook Air M2/8GB/256/Mac OS Midnight",
              rating: 0,
              ratingFivePoints: 0,
              ratingCount: 0,
              producer: {
                id: "357",
                name: "Apple",
              },
              category: {
                id: "1329",
                singularName: "Laptop/Notebook/Ultrabook",
                name: "Laptopy/Notebooki/Ultrabooki",
                parentGroupId: "2",
                parentCategoryId: "159",
                parentCategoryName: "Laptopy/Notebooki/Ultrabooki",
                parentGroupName: "Laptopy i komputery",
              },
              availabilityStatus: "Available",
              photo: {
                urlTemplate:
                  "https://cdn.x-kom.pl/i/setup/images/prod/big/{SIZE},,2022/6/pr_2022_6_6_22_35_37_634_06.jpg",
              },
              isFetching: false,
            },
            "1051252": {
              price: 419,
              priceInfo: {
                price: 419,
                oldPrice: null,
                isPriceVisible: true,
                minPrice: null,
              },
              productLink: "USE_SELECTOR_PLZ",
              isEsd: false,
              id: "1051252",
              name: "Pop Air RGB Green Core TG Clear Tint",
              rating: 0,
              ratingFivePoints: 0,
              ratingCount: 0,
              producer: {
                id: "501",
                name: "Fractal Design",
              },
              category: {
                id: "389",
                singularName: "Obudowa komputerowa",
                name: "Obudowy komputerowe",
                parentGroupId: "5",
                parentCategoryId: "388",
                parentCategoryName: "Obudowy komputerowe",
                parentGroupName: "Podzespoły komputerowe",
              },
              availabilityStatus: "Available",
              photo: {
                urlTemplate:
                  "https://cdn.x-kom.pl/i/setup/images/prod/big/{SIZE},,2022/7/pr_2022_7_1_12_16_23_866_00.jpg",
              },
              isFetching: false,
            },
            "1068860": {
              price: 1059,
              priceInfo: {
                price: 1059,
                oldPrice: null,
                isPriceVisible: true,
                minPrice: null,
              },
              productLink: "USE_SELECTOR_PLZ",
              isEsd: false,
              id: "1068860",
              name: "MOMENTUM 4 Wireless Black",
              rating: 0,
              ratingFivePoints: 0,
              ratingCount: 0,
              producer: {
                id: "495",
                name: "Sennheiser",
              },
              category: {
                id: "2495",
                singularName: "Słuchawki",
                name: "Słuchawki",
                parentGroupId: "6",
                parentCategoryId: "1215",
                parentCategoryName: "Słuchawki",
                parentGroupName: "Urządzenia peryferyjne",
              },
              availabilityStatus: "Available",
              photo: {
                urlTemplate:
                  "https://cdn.x-kom.pl/i/setup/images/prod/big/{SIZE},,2022/8/pr_2022_8_31_14_42_59_249_06.jpg",
              },
              isFetching: false,
            },
            "1120540": {
              price: 4999,
              priceInfo: {
                price: 4999,
                oldPrice: null,
                isPriceVisible: true,
                minPrice: null,
              },
              productLink: "USE_SELECTOR_PLZ",
              isEsd: false,
              id: "1120540",
              name: 'QE55S90C 55" OLED 4K 144Hz Tizen TV Dolby Atmos HDMI 2.1',
              rating: 0,
              ratingFivePoints: 0,
              ratingCount: 0,
              producer: {
                id: "29",
                name: "Samsung",
              },
              category: {
                id: "1645",
                singularName: "Telewizor",
                name: "Telewizory",
                parentGroupId: "8",
                parentCategoryId: "1117",
                parentCategoryName: "Telewizory",
                parentGroupName: "TV i audio",
              },
              availabilityStatus: "Available",
              photo: {
                urlTemplate:
                  "https://cdn.x-kom.pl/i/setup/images/prod/big/{SIZE},,2023/3/pr_2023_3_6_7_49_3_696_00.jpg",
              },
              isFetching: false,
            },
            "1162620": {
              price: 4199,
              priceInfo: {
                price: 4199,
                oldPrice: null,
                isPriceVisible: true,
                minPrice: null,
              },
              productLink: "USE_SELECTOR_PLZ",
              isEsd: false,
              id: "1162620",
              name: '55PML9008 55" MINILED 4K 120Hz Ambilight 3 Dolby Atmos',
              rating: 0,
              ratingFivePoints: 0,
              ratingCount: 0,
              producer: {
                id: "68",
                name: "Philips",
              },
              category: {
                id: "1645",
                singularName: "Telewizor",
                name: "Telewizory",
                parentGroupId: "8",
                parentCategoryId: "1117",
                parentCategoryName: "Telewizory",
                parentGroupName: "TV i audio",
              },
              availabilityStatus: "Available",
              photo: {
                urlTemplate:
                  "https://cdn.x-kom.pl/i/setup/images/prod/big/{SIZE},,2023/9/pr_2023_9_27_11_57_25_663_00.jpg",
              },
              isFetching: false,
            },
            "1173351": {
              price: 1299,
              priceInfo: {
                price: 1299,
                oldPrice: null,
                isPriceVisible: true,
                minPrice: null,
              },
              productLink: "USE_SELECTOR_PLZ",
              isEsd: false,
              id: "1173351",
              name: "edge 40 neo 5G 12/256GB Black Beauty 144Hz",
              rating: 0,
              ratingFivePoints: 0,
              ratingCount: 0,
              producer: {
                id: "338",
                name: "Motorola",
              },
              category: {
                id: "1590",
                singularName: "Smartfon / Telefon",
                name: "Smartfony i telefony",
                parentGroupId: "4",
                parentCategoryId: "",
                parentCategoryName: "Smartfony i telefony",
                parentGroupName: "Smartfony i smartwatche",
              },
              availabilityStatus: "Available",
              mark: "Promotion",
              photo: {
                urlTemplate:
                  "https://cdn.x-kom.pl/i/setup/images/prod/big/{SIZE},,2023/9/pr_2023_9_12_9_32_4_32_00.jpg",
              },
              isFetching: false,
            },
            "1180067": {
              price: 4499,
              priceInfo: {
                price: 4499,
                oldPrice: null,
                isPriceVisible: true,
                minPrice: null,
              },
              productLink: "USE_SELECTOR_PLZ",
              isEsd: false,
              id: "1180067",
              name: "iPhone 15 Pro 128GB Blue Titanium",
              rating: 0,
              ratingFivePoints: 0,
              ratingCount: 0,
              producer: {
                id: "357",
                name: "Apple",
              },
              category: {
                id: "1590",
                singularName: "Smartfon / Telefon",
                name: "Smartfony i telefony",
                parentGroupId: "4",
                parentCategoryId: "",
                parentCategoryName: "Smartfony i telefony",
                parentGroupName: "Smartfony i smartwatche",
              },
              availabilityStatus: "Available",
              photo: {
                urlTemplate:
                  "https://cdn.x-kom.pl/i/setup/images/prod/big/{SIZE},,2023/9/pr_2023_9_12_22_34_51_758_00.jpg",
              },
              isFetching: false,
            },
            "1199409": {
              price: 2699,
              oldPrice: 2999,
              priceInfo: {
                price: 2699,
                oldPrice: 2999,
                isPriceVisible: true,
                minPrice: 2829,
              },
              productLink: "USE_SELECTOR_PLZ",
              isEsd: false,
              id: "1199409",
              name: "Victus 15 Ryzen 5-5600H/16GB/512/Win11 RX6500M 144Hz",
              rating: 0,
              ratingFivePoints: 0,
              ratingCount: 0,
              producer: {
                id: "4",
                name: "HP",
              },
              category: {
                id: "1522",
                singularName: "Laptop/Notebook/Ultrabook",
                name: "Laptopy/Notebooki/Ultrabooki",
                parentGroupId: "2",
                parentCategoryId: "159",
                parentCategoryName: "Laptopy/Notebooki/Ultrabooki",
                parentGroupName: "Laptopy i komputery",
              },
              availabilityStatus: "Available",
              mark: "Promotion",
              photo: {
                urlTemplate:
                  "https://cdn.x-kom.pl/i/setup/images/prod/big/{SIZE},,2023/11/pr_2023_11_30_11_46_4_940_00.jpg",
              },
              isFetching: false,
            },
            "1209732": {
              price: 4899,
              priceInfo: {
                price: 4899,
                oldPrice: null,
                isPriceVisible: true,
                minPrice: null,
              },
              productLink: "USE_SELECTOR_PLZ",
              isEsd: false,
              id: "1209732",
              name: "GeForce RTX 4080 SUPER GAMING X SLIM 16GB GDDR6X",
              rating: 0,
              ratingFivePoints: 0,
              ratingCount: 0,
              producer: {
                id: "7",
                name: "MSI",
              },
              category: {
                id: "346",
                singularName: "Karta graficzna",
                name: "Karty graficzne",
                parentGroupId: "5",
                parentCategoryId: "345",
                parentCategoryName: "Karty graficzne",
                parentGroupName: "Podzespoły komputerowe",
              },
              availabilityStatus: "Available",
              photo: {
                urlTemplate:
                  "https://cdn.x-kom.pl/i/setup/images/prod/big/{SIZE},,2024/1/pr_2024_1_8_14_2_0_248_00.jpg",
              },
              isFetching: false,
            },
            "1221769": {
              price: 6200,
              priceInfo: {
                price: 6200,
                oldPrice: null,
                isPriceVisible: true,
                minPrice: null,
              },
              productLink: "USE_SELECTOR_PLZ",
              isEsd: false,
              id: "1221769",
              name: "HERO i5-14400F/32GB/1TB/RTX4060/W11x",
              rating: 0,
              ratingFivePoints: 0,
              ratingCount: 0,
              producer: {
                id: "2579",
                name: "G4M3R",
              },
              category: {
                id: "1708",
                singularName: "Komputer stacjonarny",
                name: "Komputery stacjonarne",
                parentGroupId: "2",
                parentCategoryId: "175",
                parentCategoryName: "Komputery stacjonarne",
                parentGroupName: "Laptopy i komputery",
              },
              availabilityStatus: "Available",
              mark: "RecommendedProduct",
              photo: {
                urlTemplate:
                  "https://cdn.x-kom.pl/i/setup/images/prod/big/{SIZE},,2023/10/pr_2023_10_20_14_6_57_620_00.jpg",
              },
              isFetching: false,
            },
            "1222052": {
              price: 319,
              priceInfo: {
                price: 319,
                oldPrice: null,
                isPriceVisible: true,
                minPrice: null,
              },
              productLink: "USE_SELECTOR_PLZ",
              isEsd: false,
              id: "1222052",
              name: "32GB (2x16GB) 3600MHz CL18 Ares Gaming RGB",
              rating: 0,
              ratingFivePoints: 0,
              ratingCount: 0,
              producer: {
                id: "409",
                name: "Lexar",
              },
              category: {
                id: "2250",
                singularName: "Pamięć RAM",
                name: "Pamięci RAM",
                parentGroupId: "5",
                parentCategoryId: "28",
                parentCategoryName: "Pamięci RAM",
                parentGroupName: "Podzespoły komputerowe",
              },
              availabilityStatus: "Available",
              photo: {
                urlTemplate:
                  "https://cdn.x-kom.pl/i/setup/images/prod/big/{SIZE},,2024/2/pr_2024_2_14_12_44_21_956_00.jpg",
              },
              isFetching: false,
            },
            "1230135": {
              price: 89,
              priceInfo: {
                price: 89,
                oldPrice: null,
                isPriceVisible: true,
                minPrice: null,
              },
              productLink: "USE_SELECTOR_PLZ",
              isEsd: false,
              id: "1230135",
              name: "Ergonomic Wireless Comfort Mouse Silent",
              rating: 0,
              ratingFivePoints: 0,
              ratingCount: 0,
              producer: {
                id: "1546",
                name: "Silver Monkey",
              },
              category: {
                id: "385",
                singularName: "Myszka",
                name: "Myszki",
                parentGroupId: "6",
                parentCategoryId: "31",
                parentCategoryName: "Myszki",
                parentGroupName: "Urządzenia peryferyjne",
              },
              availabilityStatus: "Available",
              mark: "New",
              photo: {
                urlTemplate:
                  "https://cdn.x-kom.pl/i/setup/images/prod/big/{SIZE},,2024/8/pr_2024_8_20_8_32_16_647_00.jpg",
              },
              isFetching: false,
            },
            "1243659": {
              price: 789,
              priceInfo: {
                price: 789,
                oldPrice: null,
                isPriceVisible: true,
                minPrice: null,
              },
              productLink: "USE_SELECTOR_PLZ",
              isEsd: false,
              id: "1243659",
              name: "TUF GAMING B650M-E WIFI",
              rating: 0,
              ratingFivePoints: 0,
              ratingCount: 0,
              producer: {
                id: "27",
                name: "ASUS",
              },
              category: {
                id: "3618",
                singularName: "Płyta główna",
                name: "Płyty główne",
                parentGroupId: "5",
                parentCategoryId: "14",
                parentCategoryName: "Płyty główne",
                parentGroupName: "Podzespoły komputerowe",
              },
              availabilityStatus: "Available",
              photo: {
                urlTemplate:
                  "https://cdn.x-kom.pl/i/setup/images/prod/big/{SIZE},,2024/4/pr_2024_4_30_9_17_23_74_05.jpg",
              },
              isFetching: false,
            },
            "1259591": {
              price: 309,
              priceInfo: {
                price: 309,
                oldPrice: null,
                isPriceVisible: true,
                minPrice: null,
              },
              productLink: "USE_SELECTOR_PLZ",
              isEsd: false,
              id: "1259591",
              name: "ASTRO BOT",
              rating: 0,
              ratingFivePoints: 0,
              ratingCount: 0,
              producer: {
                id: "2027",
                name: "PlayStation",
              },
              category: {
                id: "3106",
                singularName: "Gra",
                name: "Gry",
                parentGroupId: "7",
                parentCategoryId: "1163",
                parentCategoryName: "Gry",
                parentGroupName: "Gaming i streaming",
              },
              availabilityStatus: "Available",
              mark: "New",
              photo: {
                urlTemplate:
                  "https://cdn.x-kom.pl/i/setup/images/prod/big/{SIZE},,2024/6/pr_2024_6_6_10_43_41_215_00.jpg",
              },
              isFetching: false,
            },
            "1262092": {
              price: 999,
              priceInfo: {
                price: 999,
                oldPrice: null,
                isPriceVisible: true,
                minPrice: null,
              },
              productLink: "USE_SELECTOR_PLZ",
              isEsd: false,
              id: "1262092",
              name: "Galaxy M35 5G 6/128GB Szary OIS 120Hz 6000mAh 25W",
              rating: 0,
              ratingFivePoints: 0,
              ratingCount: 0,
              producer: {
                id: "29",
                name: "Samsung",
              },
              category: {
                id: "1590",
                singularName: "Smartfon / Telefon",
                name: "Smartfony i telefony",
                parentGroupId: "4",
                parentCategoryId: "",
                parentCategoryName: "Smartfony i telefony",
                parentGroupName: "Smartfony i smartwatche",
              },
              availabilityStatus: "Available",
              photo: {
                urlTemplate:
                  "https://cdn.x-kom.pl/i/setup/images/prod/big/{SIZE},,2024/6/pr_2024_6_21_13_26_4_631_00.jpg",
              },
              isFetching: false,
            },
            "1262782": {
              price: 179,
              priceInfo: {
                price: 179,
                oldPrice: null,
                isPriceVisible: true,
                minPrice: null,
              },
              productLink: "USE_SELECTOR_PLZ",
              isEsd: false,
              id: "1262782",
              name: "Quantum 100 M2 Turkusowe",
              rating: 0,
              ratingFivePoints: 0,
              ratingCount: 0,
              producer: {
                id: "374",
                name: "JBL",
              },
              category: {
                id: "112",
                singularName: "Słuchawki",
                name: "Słuchawki",
                parentGroupId: "6",
                parentCategoryId: "1215",
                parentCategoryName: "Słuchawki",
                parentGroupName: "Urządzenia peryferyjne",
              },
              availabilityStatus: "Available",
              mark: "New",
              photo: {
                urlTemplate:
                  "https://cdn.x-kom.pl/i/setup/images/prod/big/{SIZE},,2024/8/pr_2024_8_13_9_45_48_2_00.jpg",
              },
              isFetching: false,
            },
            "1269161": {
              price: 4999,
              priceInfo: {
                price: 4999,
                oldPrice: null,
                isPriceVisible: true,
                minPrice: null,
              },
              productLink: "USE_SELECTOR_PLZ",
              isEsd: false,
              id: "1269161",
              name: "65E7NQ PRO QLED 4K 144Hz VIDAA Full Array Dolby Vision Atmos",
              rating: 0,
              ratingFivePoints: 0,
              ratingCount: 0,
              producer: {
                id: "3163",
                name: "Hisense",
              },
              category: {
                id: "3033",
                singularName: "Telewizor",
                name: "Telewizory",
                parentGroupId: "8",
                parentCategoryId: "1117",
                parentCategoryName: "Telewizory",
                parentGroupName: "TV i audio",
              },
              availabilityStatus: "Available",
              photo: {
                urlTemplate:
                  "https://cdn.x-kom.pl/i/setup/images/prod/big/{SIZE},,2024/7/pr_2024_7_19_11_4_52_359_00.jpg",
              },
              isFetching: false,
            },
            "1274401": {
              price: 919,
              priceInfo: {
                price: 919,
                oldPrice: null,
                isPriceVisible: true,
                minPrice: null,
              },
              productLink: "USE_SELECTOR_PLZ",
              isEsd: false,
              id: "1274401",
              name: "NEO",
              rating: 0,
              ratingFivePoints: 0,
              ratingCount: 0,
              producer: {
                id: "1009",
                name: "DJI",
              },
              category: {
                id: "2294",
                singularName: "Dron / akcesorium",
                name: "Drony i akcesoria",
                parentGroupId: "64",
                parentCategoryId: "3027",
                parentCategoryName: "Drony i akcesoria",
                parentGroupName: "Smarthome i lifestyle",
              },
              availabilityStatus: "Available",
              mark: "New",
              photo: {
                urlTemplate:
                  "https://cdn.x-kom.pl/i/setup/images/prod/big/{SIZE},,2024/8/pr_2024_8_29_8_52_11_866_03.jpg",
              },
              isFetching: false,
            },
            "1275521": {
              price: 1999,
              priceInfo: {
                price: 1999,
                oldPrice: null,
                isPriceVisible: true,
                minPrice: null,
              },
              productLink: "USE_SELECTOR_PLZ",
              isEsd: false,
              id: "1275521",
              name: "Phone (2a) Plus 5G 12/256GB Grey 120Hz",
              rating: 0,
              ratingFivePoints: 0,
              ratingCount: 0,
              producer: {
                id: "2495",
                name: "Nothing",
              },
              category: {
                id: "1590",
                singularName: "Smartfon / Telefon",
                name: "Smartfony i telefony",
                parentGroupId: "4",
                parentCategoryId: "",
                parentCategoryName: "Smartfony i telefony",
                parentGroupName: "Smartfony i smartwatche",
              },
              availabilityStatus: "Available",
              mark: "PlusGratis",
              photo: {
                urlTemplate:
                  "https://cdn.x-kom.pl/i/setup/images/prod/big/{SIZE},,2024/8/pr_2024_8_20_6_42_35_486_00.jpg",
              },
              isFetching: false,
            },
            "1276554": {
              price: 269,
              priceInfo: {
                price: 269,
                oldPrice: null,
                isPriceVisible: true,
                minPrice: null,
              },
              productLink: "USE_SELECTOR_PLZ",
              isEsd: false,
              id: "1276554",
              name: "WF-C510 Czarne",
              rating: 0,
              ratingFivePoints: 0,
              ratingCount: 0,
              producer: {
                id: "16",
                name: "Sony",
              },
              category: {
                id: "2495",
                singularName: "Słuchawki",
                name: "Słuchawki",
                parentGroupId: "6",
                parentCategoryId: "1215",
                parentCategoryName: "Słuchawki",
                parentGroupName: "Urządzenia peryferyjne",
              },
              availabilityStatus: "Available",
              mark: "New",
              photo: {
                urlTemplate:
                  "https://cdn.x-kom.pl/i/setup/images/prod/big/{SIZE},,2024/8/pr_2024_8_26_14_12_4_29_00.jpg",
              },
              isFetching: false,
            },
            "1276740": {
              price: 2999,
              priceInfo: {
                price: 2999,
                oldPrice: null,
                isPriceVisible: true,
                minPrice: null,
              },
              productLink: "USE_SELECTOR_PLZ",
              isEsd: false,
              id: "1276740",
              name: "HERO13 Black Creator Edition",
              rating: 0,
              ratingFivePoints: 0,
              ratingCount: 0,
              producer: {
                id: "516",
                name: "GoPro",
              },
              category: {
                id: "2333",
                singularName: "Kamera sportowa / akcesorium",
                name: "Kamery sportowe i akcesoria",
                parentGroupId: "64",
                parentCategoryId: "3026",
                parentCategoryName: "Kamery sportowe i akcesoria",
                parentGroupName: "Smarthome i lifestyle",
              },
              availabilityStatus: "Available",
              mark: "New",
              photo: {
                urlTemplate:
                  "https://cdn.x-kom.pl/i/setup/images/prod/big/{SIZE},,2024/9/pr_2024_9_2_14_29_50_674_04.jpg",
              },
              isFetching: false,
            },
            "1276743": {
              price: 1999,
              priceInfo: {
                price: 1999,
                oldPrice: null,
                isPriceVisible: true,
                minPrice: null,
              },
              productLink: "USE_SELECTOR_PLZ",
              isEsd: false,
              id: "1276743",
              name: "HERO13 Black",
              rating: 0,
              ratingFivePoints: 0,
              ratingCount: 0,
              producer: {
                id: "516",
                name: "GoPro",
              },
              category: {
                id: "2333",
                singularName: "Kamera sportowa / akcesorium",
                name: "Kamery sportowe i akcesoria",
                parentGroupId: "64",
                parentCategoryId: "3026",
                parentCategoryName: "Kamery sportowe i akcesoria",
                parentGroupName: "Smarthome i lifestyle",
              },
              availabilityStatus: "Available",
              mark: "New",
              photo: {
                urlTemplate:
                  "https://cdn.x-kom.pl/i/setup/images/prod/big/{SIZE},,2024/9/pr_2024_9_2_13_58_24_625_03.jpg",
              },
              isFetching: false,
            },
            "1277191": {
              photos: [
                {
                  url: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-large,,2023/3/pr_2023_3_21_12_15_52_84_00.jpg",
                  thumbnailUrl:
                    "https://cdn.x-kom.pl/i/setup/images/prod/big/product-small,,2023/3/pr_2023_3_21_12_15_52_84_00.jpg",
                  urlTemplate:
                    "https://cdn.x-kom.pl/i/setup/images/prod/big/{SIZE},,2023/3/pr_2023_3_21_12_15_52_84_00.jpg",
                },
                {
                  url: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-large,,2023/3/pr_2023_3_21_12_15_58_889_04.jpg",
                  thumbnailUrl:
                    "https://cdn.x-kom.pl/i/setup/images/prod/big/product-small,,2023/3/pr_2023_3_21_12_15_58_889_04.jpg",
                  urlTemplate:
                    "https://cdn.x-kom.pl/i/setup/images/prod/big/{SIZE},,2023/3/pr_2023_3_21_12_15_58_889_04.jpg",
                },
                {
                  url: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-large,,2023/3/pr_2023_3_21_12_16_2_230_06.jpg",
                  thumbnailUrl:
                    "https://cdn.x-kom.pl/i/setup/images/prod/big/product-small,,2023/3/pr_2023_3_21_12_16_2_230_06.jpg",
                  urlTemplate:
                    "https://cdn.x-kom.pl/i/setup/images/prod/big/{SIZE},,2023/3/pr_2023_3_21_12_16_2_230_06.jpg",
                },
                {
                  url: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-large,,2023/3/pr_2023_3_21_12_16_0_579_05.jpg",
                  thumbnailUrl:
                    "https://cdn.x-kom.pl/i/setup/images/prod/big/product-small,,2023/3/pr_2023_3_21_12_16_0_579_05.jpg",
                  urlTemplate:
                    "https://cdn.x-kom.pl/i/setup/images/prod/big/{SIZE},,2023/3/pr_2023_3_21_12_16_0_579_05.jpg",
                },
                {
                  url: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-large,,2023/3/pr_2023_3_21_12_16_5_543_08.jpg",
                  thumbnailUrl:
                    "https://cdn.x-kom.pl/i/setup/images/prod/big/product-small,,2023/3/pr_2023_3_21_12_16_5_543_08.jpg",
                  urlTemplate:
                    "https://cdn.x-kom.pl/i/setup/images/prod/big/{SIZE},,2023/3/pr_2023_3_21_12_16_5_543_08.jpg",
                },
                {
                  url: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-large,,2023/3/pr_2023_3_21_12_16_8_676_10.jpg",
                  thumbnailUrl:
                    "https://cdn.x-kom.pl/i/setup/images/prod/big/product-small,,2023/3/pr_2023_3_21_12_16_8_676_10.jpg",
                  urlTemplate:
                    "https://cdn.x-kom.pl/i/setup/images/prod/big/{SIZE},,2023/3/pr_2023_3_21_12_16_8_676_10.jpg",
                },
                {
                  url: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-large,,2023/3/pr_2023_3_21_12_16_7_86_09.jpg",
                  thumbnailUrl:
                    "https://cdn.x-kom.pl/i/setup/images/prod/big/product-small,,2023/3/pr_2023_3_21_12_16_7_86_09.jpg",
                  urlTemplate:
                    "https://cdn.x-kom.pl/i/setup/images/prod/big/{SIZE},,2023/3/pr_2023_3_21_12_16_7_86_09.jpg",
                },
                {
                  url: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-large,,2023/3/pr_2023_3_21_12_15_57_409_03.jpg",
                  thumbnailUrl:
                    "https://cdn.x-kom.pl/i/setup/images/prod/big/product-small,,2023/3/pr_2023_3_21_12_15_57_409_03.jpg",
                  urlTemplate:
                    "https://cdn.x-kom.pl/i/setup/images/prod/big/{SIZE},,2023/3/pr_2023_3_21_12_15_57_409_03.jpg",
                },
                {
                  url: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-large,,2023/3/pr_2023_3_21_12_15_55_920_02.jpg",
                  thumbnailUrl:
                    "https://cdn.x-kom.pl/i/setup/images/prod/big/product-small,,2023/3/pr_2023_3_21_12_15_55_920_02.jpg",
                  urlTemplate:
                    "https://cdn.x-kom.pl/i/setup/images/prod/big/{SIZE},,2023/3/pr_2023_3_21_12_15_55_920_02.jpg",
                },
                {
                  url: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-large,,2023/3/pr_2023_3_21_12_15_54_293_01.jpg",
                  thumbnailUrl:
                    "https://cdn.x-kom.pl/i/setup/images/prod/big/product-small,,2023/3/pr_2023_3_21_12_15_54_293_01.jpg",
                  urlTemplate:
                    "https://cdn.x-kom.pl/i/setup/images/prod/big/{SIZE},,2023/3/pr_2023_3_21_12_15_54_293_01.jpg",
                },
                {
                  url: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-large,,2023/3/pr_2023_3_21_12_16_3_994_07.jpg",
                  thumbnailUrl:
                    "https://cdn.x-kom.pl/i/setup/images/prod/big/product-small,,2023/3/pr_2023_3_21_12_16_3_994_07.jpg",
                  urlTemplate:
                    "https://cdn.x-kom.pl/i/setup/images/prod/big/{SIZE},,2023/3/pr_2023_3_21_12_16_3_994_07.jpg",
                },
              ],
              comments: [],
              departmentsAvailability: [
                {
                  departmentHeader: {
                    id: "16",
                    name: "Biała Podlaska",
                  },
                  availableCount: 1,
                  availabilityText: "Ostatnia sztuka - Nie zwlekaj !",
                  deliveryText:
                    "Kup teraz - odbierz zamówienie jeszcze dzisiaj",
                  deliveryDate: "2024-09-11T22:00:00Z",
                  availabilityTooltipHtml: null,
                  expiredAfterMinutes: 574,
                  availabilityCode: "available",
                  expirationTime: "2024-09-12T14:59:43Z",
                },
                {
                  departmentHeader: {
                    id: "13",
                    name: "Białystok",
                  },
                  availableCount: 1,
                  availabilityText: "Ostatnia sztuka - Nie zwlekaj !",
                  deliveryText:
                    "Kup teraz - odbierz zamówienie jeszcze dzisiaj",
                  deliveryDate: "2024-09-11T22:00:00Z",
                  availabilityTooltipHtml: null,
                  expiredAfterMinutes: 754,
                  availabilityCode: "available",
                  expirationTime: "2024-09-12T17:59:43Z",
                },
                {
                  departmentHeader: {
                    id: "37",
                    name: "Bielsko-Biała",
                  },
                  availableCount: 1,
                  availabilityText: "Ostatnia sztuka - Nie zwlekaj !",
                  deliveryText:
                    "Kup teraz - odbierz zamówienie jeszcze dzisiaj",
                  deliveryDate: "2024-09-11T22:00:00Z",
                  availabilityTooltipHtml: null,
                  expiredAfterMinutes: 754,
                  availabilityCode: "available",
                  expirationTime: "2024-09-12T17:59:43Z",
                },
                {
                  departmentHeader: {
                    id: "14",
                    name: "Bydgoszcz",
                  },
                  availableCount: 0,
                  availabilityText: "",
                  deliveryText: "Kup teraz - zamówienie otrzymasz już jutro",
                  deliveryDate: "2024-09-12T22:00:00Z",
                  availabilityTooltipHtml: null,
                  expiredAfterMinutes: 873,
                  availabilityCode: "available",
                  expirationTime: "2024-09-12T19:58:43Z",
                },
                {
                  departmentHeader: {
                    id: "30",
                    name: "Częstochowa Jurajska",
                  },
                  availableCount: 1,
                  availabilityText: "Ostatnia sztuka - Nie zwlekaj !",
                  deliveryText:
                    "Kup teraz - odbierz zamówienie jeszcze dzisiaj",
                  deliveryDate: "2024-09-11T22:00:00Z",
                  availabilityTooltipHtml: null,
                  expiredAfterMinutes: 814,
                  availabilityCode: "available",
                  expirationTime: "2024-09-12T18:59:43Z",
                },
                {
                  departmentHeader: {
                    id: "8",
                    name: "Gdańsk",
                  },
                  availableCount: 1,
                  availabilityText: "Ostatnia sztuka - Nie zwlekaj !",
                  deliveryText:
                    "Kup teraz - odbierz zamówienie jeszcze dzisiaj",
                  deliveryDate: "2024-09-11T22:00:00Z",
                  availabilityTooltipHtml: null,
                  expiredAfterMinutes: 754,
                  availabilityCode: "available",
                  expirationTime: "2024-09-12T17:59:43Z",
                },
                {
                  departmentHeader: {
                    id: "45",
                    name: "Gdynia",
                  },
                  availableCount: 1,
                  availabilityText: "Ostatnia sztuka - Nie zwlekaj !",
                  deliveryText:
                    "Kup teraz - odbierz zamówienie jeszcze dzisiaj",
                  deliveryDate: "2024-09-11T22:00:00Z",
                  availabilityTooltipHtml: null,
                  expiredAfterMinutes: 754,
                  availabilityCode: "available",
                  expirationTime: "2024-09-12T17:59:43Z",
                },
                {
                  departmentHeader: {
                    id: "24",
                    name: "Gliwice",
                  },
                  availableCount: 1,
                  availabilityText: "Ostatnia sztuka - Nie zwlekaj !",
                  deliveryText:
                    "Kup teraz - odbierz zamówienie jeszcze dzisiaj",
                  deliveryDate: "2024-09-11T22:00:00Z",
                  availabilityTooltipHtml: null,
                  expiredAfterMinutes: 634,
                  availabilityCode: "available",
                  expirationTime: "2024-09-12T15:59:43Z",
                },
                {
                  departmentHeader: {
                    id: "12",
                    name: "Katowice",
                  },
                  availableCount: 1,
                  availabilityText: "Ostatnia sztuka - Nie zwlekaj !",
                  deliveryText:
                    "Kup teraz - odbierz zamówienie jeszcze dzisiaj",
                  deliveryDate: "2024-09-11T22:00:00Z",
                  availabilityTooltipHtml: null,
                  expiredAfterMinutes: 754,
                  availabilityCode: "available",
                  expirationTime: "2024-09-12T17:59:43Z",
                },
                {
                  departmentHeader: {
                    id: "20",
                    name: "Kielce",
                  },
                  availableCount: 1,
                  availabilityText: "Ostatnia sztuka - Nie zwlekaj !",
                  deliveryText:
                    "Kup teraz - odbierz zamówienie jeszcze dzisiaj",
                  deliveryDate: "2024-09-11T22:00:00Z",
                  availabilityTooltipHtml: null,
                  expiredAfterMinutes: 754,
                  availabilityCode: "available",
                  expirationTime: "2024-09-12T17:59:43Z",
                },
                {
                  departmentHeader: {
                    id: "22",
                    name: "Kraków Bonarka",
                  },
                  availableCount: 1,
                  availabilityText: "Ostatnia sztuka - Nie zwlekaj !",
                  deliveryText:
                    "Kup teraz - odbierz zamówienie jeszcze dzisiaj",
                  deliveryDate: "2024-09-11T22:00:00Z",
                  availabilityTooltipHtml: null,
                  expiredAfterMinutes: 754,
                  availabilityCode: "available",
                  expirationTime: "2024-09-12T17:59:43Z",
                },
                {
                  departmentHeader: {
                    id: "43",
                    name: "Kraków Bronowice",
                  },
                  availableCount: 1,
                  availabilityText: "Ostatnia sztuka - Nie zwlekaj !",
                  deliveryText:
                    "Kup teraz - odbierz zamówienie jeszcze dzisiaj",
                  deliveryDate: "2024-09-11T22:00:00Z",
                  availabilityTooltipHtml: null,
                  expiredAfterMinutes: 754,
                  availabilityCode: "available",
                  expirationTime: "2024-09-12T17:59:43Z",
                },
                {
                  departmentHeader: {
                    id: "11",
                    name: "Lublin",
                  },
                  availableCount: 0,
                  availabilityText: "",
                  deliveryText: "Kup teraz - zamówienie otrzymasz już jutro",
                  deliveryDate: "2024-09-12T22:00:00Z",
                  availabilityTooltipHtml: null,
                  expiredAfterMinutes: 873,
                  availabilityCode: "available",
                  expirationTime: "2024-09-12T19:58:43Z",
                },
                {
                  departmentHeader: {
                    id: "7",
                    name: "Łódź",
                  },
                  availableCount: 1,
                  availabilityText: "Ostatnia sztuka - Nie zwlekaj !",
                  deliveryText:
                    "Kup teraz - odbierz zamówienie jeszcze dzisiaj",
                  deliveryDate: "2024-09-11T22:00:00Z",
                  availabilityTooltipHtml: null,
                  expiredAfterMinutes: 754,
                  availabilityCode: "available",
                  expirationTime: "2024-09-12T17:59:43Z",
                },
                {
                  departmentHeader: {
                    id: "36",
                    name: "Olsztyn",
                  },
                  availableCount: 1,
                  availabilityText: "Ostatnia sztuka - Nie zwlekaj !",
                  deliveryText:
                    "Kup teraz - odbierz zamówienie jeszcze dzisiaj",
                  deliveryDate: "2024-09-11T22:00:00Z",
                  availabilityTooltipHtml: null,
                  expiredAfterMinutes: 754,
                  availabilityCode: "available",
                  expirationTime: "2024-09-12T17:59:43Z",
                },
                {
                  departmentHeader: {
                    id: "19",
                    name: "Opole",
                  },
                  availableCount: 1,
                  availabilityText: "Ostatnia sztuka - Nie zwlekaj !",
                  deliveryText:
                    "Kup teraz - odbierz zamówienie jeszcze dzisiaj",
                  deliveryDate: "2024-09-11T22:00:00Z",
                  availabilityTooltipHtml: null,
                  expiredAfterMinutes: 754,
                  availabilityCode: "available",
                  expirationTime: "2024-09-12T17:59:43Z",
                },
                {
                  departmentHeader: {
                    id: "9",
                    name: "Poznań",
                  },
                  availableCount: 1,
                  availabilityText: "Ostatnia sztuka - Nie zwlekaj !",
                  deliveryText:
                    "Kup teraz - odbierz zamówienie jeszcze dzisiaj",
                  deliveryDate: "2024-09-11T22:00:00Z",
                  availabilityTooltipHtml: null,
                  expiredAfterMinutes: 754,
                  availabilityCode: "available",
                  expirationTime: "2024-09-12T17:59:43Z",
                },
                {
                  departmentHeader: {
                    id: "10",
                    name: "Rzeszów",
                  },
                  availableCount: 1,
                  availabilityText: "Ostatnia sztuka - Nie zwlekaj !",
                  deliveryText:
                    "Kup teraz - odbierz zamówienie jeszcze dzisiaj",
                  deliveryDate: "2024-09-11T22:00:00Z",
                  availabilityTooltipHtml: null,
                  expiredAfterMinutes: 754,
                  availabilityCode: "available",
                  expirationTime: "2024-09-12T17:59:43Z",
                },
                {
                  departmentHeader: {
                    id: "21",
                    name: "Szczecin",
                  },
                  availableCount: 1,
                  availabilityText: "Ostatnia sztuka - Nie zwlekaj !",
                  deliveryText:
                    "Kup teraz - odbierz zamówienie jeszcze dzisiaj",
                  deliveryDate: "2024-09-11T22:00:00Z",
                  availabilityTooltipHtml: null,
                  expiredAfterMinutes: 754,
                  availabilityCode: "available",
                  expirationTime: "2024-09-12T17:59:43Z",
                },
                {
                  departmentHeader: {
                    id: "2",
                    name: "Tarnowskie Góry",
                  },
                  availableCount: 1,
                  availabilityText: "Ostatnia sztuka - Nie zwlekaj !",
                  deliveryText:
                    "Kup teraz - odbierz zamówienie jeszcze dzisiaj",
                  deliveryDate: "2024-09-11T22:00:00Z",
                  availabilityTooltipHtml: null,
                  expiredAfterMinutes: 634,
                  availabilityCode: "available",
                  expirationTime: "2024-09-12T15:59:43Z",
                },
                {
                  departmentHeader: {
                    id: "46",
                    name: "Toruń",
                  },
                  availableCount: 1,
                  availabilityText: "Ostatnia sztuka - Nie zwlekaj !",
                  deliveryText:
                    "Kup teraz - odbierz zamówienie jeszcze dzisiaj",
                  deliveryDate: "2024-09-11T22:00:00Z",
                  availabilityTooltipHtml: null,
                  expiredAfterMinutes: 754,
                  availabilityCode: "available",
                  expirationTime: "2024-09-12T17:59:43Z",
                },
                {
                  departmentHeader: {
                    id: "44",
                    name: "Warszawa Północna",
                  },
                  availableCount: 0,
                  availabilityText: "",
                  deliveryText: "Kup teraz - zamówienie otrzymasz już jutro",
                  deliveryDate: "2024-09-12T22:00:00Z",
                  availabilityTooltipHtml: null,
                  expiredAfterMinutes: 873,
                  availabilityCode: "available",
                  expirationTime: "2024-09-12T19:58:43Z",
                },
                {
                  departmentHeader: {
                    id: "23",
                    name: "Warszawa Promenada",
                  },
                  availableCount: 1,
                  availabilityText: "Ostatnia sztuka - Nie zwlekaj !",
                  deliveryText:
                    "Kup teraz - odbierz zamówienie jeszcze dzisiaj",
                  deliveryDate: "2024-09-11T22:00:00Z",
                  availabilityTooltipHtml: null,
                  expiredAfterMinutes: 754,
                  availabilityCode: "available",
                  expirationTime: "2024-09-12T17:59:43Z",
                },
                {
                  departmentHeader: {
                    id: "5",
                    name: "Warszawa Reduta",
                  },
                  availableCount: 0,
                  availabilityText: "",
                  deliveryText: "Kup teraz - zamówienie otrzymasz już jutro",
                  deliveryDate: "2024-09-12T22:00:00Z",
                  availabilityTooltipHtml: null,
                  expiredAfterMinutes: 873,
                  availabilityCode: "available",
                  expirationTime: "2024-09-12T19:58:43Z",
                },
                {
                  departmentHeader: {
                    id: "31",
                    name: "Wrocław Bielany",
                  },
                  availableCount: 1,
                  availabilityText: "Ostatnia sztuka - Nie zwlekaj !",
                  deliveryText:
                    "Kup teraz - odbierz zamówienie jeszcze dzisiaj",
                  deliveryDate: "2024-09-11T22:00:00Z",
                  availabilityTooltipHtml: null,
                  expiredAfterMinutes: 754,
                  availabilityCode: "available",
                  expirationTime: "2024-09-12T17:59:43Z",
                },
                {
                  departmentHeader: {
                    id: "4",
                    name: "Wrocław Pasaż",
                  },
                  availableCount: 1,
                  availabilityText: "Ostatnia sztuka - Nie zwlekaj !",
                  deliveryText:
                    "Kup teraz - odbierz zamówienie jeszcze dzisiaj",
                  deliveryDate: "2024-09-11T22:00:00Z",
                  availabilityTooltipHtml: null,
                  expiredAfterMinutes: 754,
                  availabilityCode: "available",
                  expirationTime: "2024-09-12T17:59:43Z",
                },
              ],
              shipmentCosts: [
                {
                  title: "Salon x-kom - BLIK",
                  shipmentName: "Salon x-kom",
                  paymentName: "BLIK",
                  shipmentMethod: "Department",
                  paymentMethod: "DotPayBlik",
                  value: 0,
                  html: null,
                  target: "All",
                },
                {
                  title: "Salon x-kom - Przy odbiorze",
                  shipmentName: "Salon x-kom",
                  paymentName: "Przy odbiorze",
                  shipmentMethod: "Department",
                  paymentMethod: "Cash",
                  value: 0,
                  html: null,
                  target: "All",
                },
                {
                  title: "Salon x-kom - Przelew tradycyjny",
                  shipmentName: "Salon x-kom",
                  paymentName: "Przelew tradycyjny",
                  shipmentMethod: "Department",
                  paymentMethod: "Prepayment",
                  value: 0,
                  html: null,
                  target: "All",
                },
                {
                  title: "Salon x-kom - Płatność online",
                  shipmentName: "Salon x-kom",
                  paymentName: "Płatność online",
                  shipmentMethod: "Department",
                  paymentMethod: "DotPay",
                  value: 0,
                  html: null,
                  target: "All",
                },
                {
                  title: "Salon x-kom - Karta płatnicza online",
                  shipmentName: "Salon x-kom",
                  paymentName: "Karta płatnicza online",
                  shipmentMethod: "Department",
                  paymentMethod: "DotPayCard",
                  value: 0,
                  html: null,
                  target: "All",
                },
                {
                  title: "Salon x-kom - Alior szybkie raty",
                  shipmentName: "Salon x-kom",
                  paymentName: "Alior szybkie raty",
                  shipmentMethod: "Department",
                  paymentMethod: "InstallmentAlior",
                  value: 0,
                  html: null,
                  target: "All",
                },
                {
                  title: "Salon x-kom - Santander raty taniejące",
                  shipmentName: "Salon x-kom",
                  paymentName: "Santander raty taniejące",
                  shipmentMethod: "Department",
                  paymentMethod: "InstallmentSantander",
                  value: 0,
                  html: null,
                  target: "All",
                },
                {
                  title: "Salon x-kom - Karta podarunkowa",
                  shipmentName: "Salon x-kom",
                  paymentName: "Karta podarunkowa",
                  shipmentMethod: "Department",
                  paymentMethod: "GiftCard",
                  value: 0,
                  html: null,
                  target: "All",
                },
                {
                  title: "InPost Paczkomat® 24/7 - Przelew tradycyjny",
                  shipmentName: "InPost Paczkomat® 24/7",
                  paymentName: "Przelew tradycyjny",
                  shipmentMethod: "InPost",
                  paymentMethod: "Prepayment",
                  value: 10.99,
                  html: null,
                  target: "All",
                },
                {
                  title: "InPost Paczkomat® 24/7 - Płatność online",
                  shipmentName: "InPost Paczkomat® 24/7",
                  paymentName: "Płatność online",
                  shipmentMethod: "InPost",
                  paymentMethod: "DotPay",
                  value: 10.99,
                  html: null,
                  target: "All",
                },
                {
                  title: "InPost Paczkomat® 24/7 - Karta płatnicza online",
                  shipmentName: "InPost Paczkomat® 24/7",
                  paymentName: "Karta płatnicza online",
                  shipmentMethod: "InPost",
                  paymentMethod: "DotPayCard",
                  value: 10.99,
                  html: null,
                  target: "All",
                },
                {
                  title: "InPost Paczkomat® 24/7 - Alior szybkie raty",
                  shipmentName: "InPost Paczkomat® 24/7",
                  paymentName: "Alior szybkie raty",
                  shipmentMethod: "InPost",
                  paymentMethod: "InstallmentAlior",
                  value: 10.99,
                  html: null,
                  target: "All",
                },
                {
                  title: "InPost Paczkomat® 24/7 - Santander raty taniejące",
                  shipmentName: "InPost Paczkomat® 24/7",
                  paymentName: "Santander raty taniejące",
                  shipmentMethod: "InPost",
                  paymentMethod: "InstallmentSantander",
                  value: 10.99,
                  html: null,
                  target: "All",
                },
                {
                  title: "InPost Paczkomat® 24/7 - Karta podarunkowa",
                  shipmentName: "InPost Paczkomat® 24/7",
                  paymentName: "Karta podarunkowa",
                  shipmentMethod: "InPost",
                  paymentMethod: "GiftCard",
                  value: 10.99,
                  html: null,
                  target: "All",
                },
                {
                  title: "Kurier - Przelew tradycyjny",
                  shipmentName: "Kurier",
                  paymentName: "Przelew tradycyjny",
                  shipmentMethod: "Courier",
                  paymentMethod: "Prepayment",
                  value: 17.99,
                  html: null,
                  target: "All",
                },
                {
                  title: "Kurier - Płatność online",
                  shipmentName: "Kurier",
                  paymentName: "Płatność online",
                  shipmentMethod: "Courier",
                  paymentMethod: "DotPay",
                  value: 17.99,
                  html: null,
                  target: "All",
                },
                {
                  title: "Kurier - Karta płatnicza online",
                  shipmentName: "Kurier",
                  paymentName: "Karta płatnicza online",
                  shipmentMethod: "Courier",
                  paymentMethod: "DotPayCard",
                  value: 17.99,
                  html: null,
                  target: "All",
                },
                {
                  title: "Kurier - Alior szybkie raty",
                  shipmentName: "Kurier",
                  paymentName: "Alior szybkie raty",
                  shipmentMethod: "Courier",
                  paymentMethod: "InstallmentAlior",
                  value: 17.99,
                  html: null,
                  target: "All",
                },
                {
                  title: "Kurier - Santander raty taniejące",
                  shipmentName: "Kurier",
                  paymentName: "Santander raty taniejące",
                  shipmentMethod: "Courier",
                  paymentMethod: "InstallmentSantander",
                  value: 17.99,
                  html: null,
                  target: "All",
                },
                {
                  title: "Kurier - Karta podarunkowa",
                  shipmentName: "Kurier",
                  paymentName: "Karta podarunkowa",
                  shipmentMethod: "Courier",
                  paymentMethod: "GiftCard",
                  value: 17.99,
                  html: null,
                  target: "All",
                },
                {
                  title: "Kurier - Przy odbiorze",
                  shipmentName: "Kurier",
                  paymentName: "Przy odbiorze",
                  shipmentMethod: "Courier",
                  paymentMethod: "CashOnDelivery",
                  value: 22.99,
                  html: null,
                  target: "All",
                },
                {
                  title: "Kurier - dostawa na dzisiaj - Płatność online",
                  shipmentName: "Kurier - dostawa na dzisiaj",
                  paymentName: "Płatność online",
                  shipmentMethod: "CourierSameDay",
                  paymentMethod: "DotPay",
                  value: 28.99,
                  html: null,
                  target: "All",
                },
                {
                  title: "Kurier - dostawa na dzisiaj - Karta płatnicza online",
                  shipmentName: "Kurier - dostawa na dzisiaj",
                  paymentName: "Karta płatnicza online",
                  shipmentMethod: "CourierSameDay",
                  paymentMethod: "DotPayCard",
                  value: 28.99,
                  html: null,
                  target: "All",
                },
                {
                  title: "Kurier - dostawa na dzisiaj - Karta podarunkowa",
                  shipmentName: "Kurier - dostawa na dzisiaj",
                  paymentName: "Karta podarunkowa",
                  shipmentMethod: "CourierSameDay",
                  paymentMethod: "GiftCard",
                  value: 28.99,
                  html: null,
                  target: "All",
                },
              ],
              productDescription:
                '<div class="content"><link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..700;1,400..700&amp;display=swap" rel="stylesheet" />\r\n<link href="https://ftp.stati.pl/KP/styles_1.css?v=1.3" rel="stylesheet" />\r\n<div id="new_content_desc" style="margin-bottom: 30px;">\r\n\t<!-- HEADER_INTRO -->\r\n\t<div class="desc_section head_desc">\r\n\t\t<h2>\r\n\t\t\tXiaomi Redmi Note 12 Pro 4G</h2>\r\n\t\t<p>\r\n\t\t\tXiaomi Redmi Note 12 Pro to urządzenie, kt&oacute;re łączy w sobie zaawansowaną technologię i niezawodność. Jego kluczowe cechy, takie jak innowacyjne zabezpieczenia danych i nieprzemijająca wydajność, sprawiają, że staje się on Twoim niezastąpionym towarzyszem w codziennym życiu. Redmi Note 12 Pro to więcej niż smartfon &ndash; to Tw&oacute;j osobisty asystent w świecie cyfrowym. Z jego pomocą zyskujesz dostęp do szerokiej gamy możliwości, począwszy od bezpiecznego przechowywania danych, a skończywszy na urzekających wizualnie wrażeniach.</p>\r\n\t</div>\r\n\t<!-- HEADER_INTRO_END --><!-- HEADER_IMAGE -->\r\n\t<div class="desc_section img_head">\r\n\t\t<img alt="Xiaomi Redmi Note 12 Pro 4G wygląd" class="header_desktop lazyloaded" src="https://allegro.stati.pl/AllegroIMG/PRODUCENCI/XIAOMI/Redmi-Note-12-Pro-%204G/Xiaomi-Redmi-Note-12-Pro--4G-wyglad1.jpg" /> <img alt="Xiaomi Redmi Note 12 Pro 4G wygląd" class="header_mobile lazyloaded" src="https://allegro.stati.pl/AllegroIMG/PRODUCENCI/XIAOMI/Redmi-Note-12-Pro-%204G/Xiaomi-Redmi-Note-12-Pro--4G-wyglad.jpg" /></div>\r\n\t<!-- HEADER_IMAGE_END --><!-- DESCCRIPTION -->\r\n\t<div class="desc_section full_desc">\r\n\t\t<h2>\r\n\t\t\tTechnologia w zasięgu ręki</h2>\r\n\t\t<div class="full_row">\r\n\t\t\t<div class="full_text">\r\n\t\t\t\t<h3>\r\n\t\t\t\t\tTwoje bezpieczeństwo</h3>\r\n\t\t\t\t<p>\r\n\t\t\t\t\tTw&oacute;j Xiaomi Redmi Note 12 Pro stanowi prawdziwą fortecę ochrony danych. Wyposażony w czytnik linii papilarnych i funkcję rozpoznawania twarzy opartą na sztucznej inteligencji, gwarantuje, że Twoje informacje są zawsze bezpieczne.</p>\r\n\t\t\t\t<p>\r\n\t\t\t\t\tDodatkowo norma IP53, kt&oacute;ra chroni telefon przed zachlapaniem, daje Ci pewność, że urządzenie jest bezpieczne nie tylko w świecie cyfrowym, ale r&oacute;wnież w rzeczywistości. Dzięki temu, możesz cieszyć się życiem bez obaw o Twoje urządzenie.</p>\r\n\t\t\t</div>\r\n\t\t\t<div class="full_image">\r\n\t\t\t\t<img alt="Xiaomi Redmi Note 12 Pro 4G obudowa" class="header_desktop lazyloaded" src="https://allegro.stati.pl/AllegroIMG/PRODUCENCI/XIAOMI/Redmi-Note-12-Pro-%204G/Xiaomi-Redmi-Note-12-Pro--4G-obudowa.jpg" /></div>\r\n\t\t</div>\r\n\t\t<div class="full_row">\r\n\t\t\t<div class="full_text">\r\n\t\t\t\t<h3>\r\n\t\t\t\t\tWydajność, kt&oacute;ra robi wrażenie</h3>\r\n\t\t\t\t<p>\r\n\t\t\t\t\tTo, co kryje się pod powierzchnią Xiaomi Redmi Note 12 Pro, robi r&oacute;wnie wielkie wrażenie, jak jego wygląd. Aparat gł&oacute;wny o rozdzielczości 108 Mpix pozwoli Ci uwieczniać najważniejsze chwile z niezwykłą dokładnością. Procesor Qualcomm Snapdragon 732G, wspierany przez baterię o pojemności 5000 mAh, zapewnia płynne działanie i długotrwałą pracę urządzenia. Z tym smartfonem możesz być pewien, że każde Twoje działanie będzie szybkie i efektywne, a Tw&oacute;j świat cyfrowy zawsze pod ręką.</p>\r\n\t\t\t</div>\r\n\t\t\t<div class="full_image">\r\n\t\t\t\t<img alt="Xiaomi Redmi Note 12 Pro 4G tył" class="header_desktop lazyloaded" src="https://allegro.stati.pl/AllegroIMG/PRODUCENCI/XIAOMI/Redmi-Note-12-Pro-%204G/Xiaomi-Redmi-Note-12-Pro--4G-tyl.jpg" /></div>\r\n\t\t</div>\r\n\t\t<div class="full_row">\r\n\t\t\t<div class="full_text">\r\n\t\t\t\t<h3>\r\n\t\t\t\t\tDoświadczenie multimedialne w zasięgu ręki</h3>\r\n\t\t\t\t<p>\r\n\t\t\t\t\tRedmi Note 12 Pro przenosi Cię w świat zaawansowanych doświadczeń wizualnych i dźwiękowych. Jego ekran Full HD+ AMOLED o przekątnej 6,67 cala zapewnia niezapomniane wrażenia, a system dźwięku stereo Dolby Atmos wypełnia przestrzeń wyrafinowanym brzmieniem. Co więcej, wyświetlacz chroniony jest przez szkło Corning Gorilla Glass 5, kt&oacute;re skutecznie opiera się drobnym uszkodzeniom. To urządzenie to Twoje mobilne centrum rozrywki, kt&oacute;re zawsze masz przy sobie.</p>\r\n\t\t\t</div>\r\n\t\t\t<div class="full_image">\r\n\t\t\t\t<img alt="Xiaomi Redmi Note 12 Pro 4G kolory" class="header_desktop lazyloaded" src="https://allegro.stati.pl/AllegroIMG/PRODUCENCI/XIAOMI/Redmi-Note-12-Pro-%204G/Xiaomi-Redmi-Note-12-Pro--4G-kolory.jpg" /></div>\r\n\t\t</div>\r\n\t</div>\r\n\t<!-- DESCCRIPTION_END --></div>\r\n<script type="text/javascript">\r\nfunction keyToggle(selector) {\r\n\tvar selectedElements = selector.children;\r\n\tif(selectedElements[0].innerText === "+") {\r\n\t\tselectedElements[0].innerText = " − ";\r\n\t} else {\r\n\t\tselectedElements[0].innerText = " + ";\r\n\t}\r\n\tselectedElements[1].classList.toggle("visible");\r\n\tselectedElements[2].classList.toggle("visible");\r\n}\r\nfunction activeVideo(id) {\r\n\tdocument.querySelector(".collapse_miniature.active").classList.remove("active");\r\n\tdocument.getElementById(id).classList.add("active");\r\n\tlet newString = id.replace("video_menu_", "video_review_");\r\n\tvar activeText = document.querySelector(".video-container.active");\r\n\tactiveText.classList.remove("active");\r\n\tvar newActiveText = document.getElementById(newString);\r\n\tnewActiveText.classList.add("active");\r\n}\r\nfunction show360(overlay) {\r\n\toverlay.style.display = "none";\r\n}\r\n</script></div>',
              banners: [
                {
                  id: "9869",
                  title: "Zarób na starym sprzęcie",
                  subtitle: "i odbierz zniżkę na nowy",
                  description: "Odkup sprzętu x-kom GSM+tab+lap kp",
                  photo: {
                    url: null,
                    thumbnailUrl: null,
                    urlTemplate: null,
                  },
                  url: null,
                  htmlCode:
                    '<style>\r\n   .app-banner-template {\r\n      padding: 20px 8px;\r\n   }\r\n\r\n   .app-banner-template h3 {\r\n      font-size: 13px;\r\n      font-weight: 400;\r\n      color: #1a1a1a;\r\n      line-height: 16px;\r\n      padding: 0;\r\n      margin: 0 0 4px;\r\n   }\r\n\r\n   .app-banner-template h2 {\r\n      font-size: 18px;\r\n      font-weight: 500;\r\n      color: #1a1a1a;\r\n      line-height: 22px;\r\n      padding: 0;\r\n      margin: 0 0 24px;\r\n   }\r\n\r\n   .app-banner-content {\r\n      margin-bottom: 16px;\r\n   }\r\n\r\n   .app-banner-image {\r\n      text-align: center;\r\n      margin-bottom: 10px;\r\n   }\r\n\r\n   .app-banner-image img {\r\n      display: inline-block;\r\n      vertical-align: middle;\r\n      max-width: 100%;\r\n      max-height: 174px;\r\n   }\r\n\r\n   .app-banner-step {\r\n      position: relative;\r\n      display: flex;\r\n      align-items: center;\r\n      min-height: 64px;\r\n      padding-left: 72px;\r\n   }\r\n\r\n   .app-banner-step + .app-banner-step {\r\n      margin-top: 12px;\r\n   }\r\n\r\n   .app-banner-step-image {\r\n      position: absolute;\r\n      top: 0;\r\n      left: 0;\r\n      width: 64px;\r\n      height: 64px;\r\n   }\r\n\r\n   .app-banner-step-image svg {\r\n      width: 100%;\r\n      height: 100%;\r\n   }\r\n\r\n   .app-banner-step-content p {\r\n      font-size: 14px;\r\n      color: #1a1a1a;\r\n      line-height: 20px;\r\n      padding: 0;\r\n      margin: 0;\r\n   }\r\n\r\n   .app-banner-promo-code {\r\n      display: inline-block;\r\n      vertical-align: middle;\r\n      position: relative;\r\n      padding: 6px 52px 6px 20px;\r\n      font-size: 14px;\r\n      color: #4d4d4d;\r\n      letter-spacing: 0.13em;\r\n      line-height: 20px;\r\n      border: 1px dashed #0082fa;\r\n      border-radius: 4px;\r\n      margin-top: 8px;\r\n      word-break: break-all;\r\n   }\r\n\r\n   .app-banner-copy-button {\r\n      display: inline-block;\r\n      vertical-align: middle;\r\n      position: absolute;\r\n      top: -1px;\r\n      right: -1px;\r\n      bottom: -1px;\r\n      width: 32px;\r\n      background: #0082fa;\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n      border: 0;\r\n      border-radius: 4px;\r\n      outline: none;\r\n      cursor: pointer;\r\n      padding: 0;\r\n   }\r\n\r\n   .app-banner-copy-button svg {\r\n      display: block;\r\n      width: 20px;\r\n      height: 20px;\r\n   }\r\n\r\n   .app-banner-copy-button svg * {\r\n      fill: #fff;\r\n   }\r\n\r\n   .app-banner-promo-code.is-copied {\r\n      border-color: #13ac00;\r\n   }\r\n\r\n   .app-banner-promo-code.is-copied .app-banner-copy-button {\r\n      pointer-events: none;\r\n      background: #13ac00;\r\n   }\r\n\r\n   .app-banner-promo-code-message {\r\n      font-size: 13px;\r\n      line-height: 16px;\r\n      color: #13ac00;\r\n      margin: 4px 0 0;\r\n      min-height: 16px;\r\n   }\r\n\r\n   .app-banner-description,\r\n   .app-banner-description a,\r\n   .app-banner-regulations,\r\n   .app-banner-regulations a {\r\n      font-size: 12px;\r\n      color: #4d4d4d;\r\n      line-height: 16px;\r\n   }\r\n\r\n   .app-banner-description{\r\n      margin-bottom: 8px;\r\n   }\r\n\r\n   .app-banner-regulations,\r\n   .app-banner-regulations a {\r\n      font-size: 13px;\r\n   }\r\n\r\n   .app-banner-description a,\r\n   .app-banner-regulations a {\r\n      text-decoration: underline;\r\n   }\r\n\r\n   @media (min-width: 768px) {\r\n      .app-banner-content {\r\n         display: flex;\r\n         align-items: flex-start;\r\n         flex-direction: row-reverse;\r\n         justify-content: space-between;\r\n      }\r\n\r\n      .app-banner-image {\r\n         width: 240px;\r\n      }\r\n\r\n      .app-banner-image img {\r\n         width: 240px;\r\n         max-height: 100%;\r\n      }\r\n\r\n      .app-banner-steps {\r\n         max-width: calc(100% - 260px);\r\n      }\r\n   }\r\n</style>\r\n\r\n<div class="app-banner-template">\r\n   <h3>Zarób na starym sprzęcie</h3>\r\n   <h2>i odbierz zniżkę na nowy</h2>\r\n   <div class="app-banner-content">\r\n      <div class="app-banner-image">\r\n         <img src="https://cdn.x-kom.pl/i/img/banners/normal,,3f75c6fc28584642866e91837848c755.png?filters=trim" alt="Zarób na starym sprzęcie" />\r\n      </div>\r\n      <div class="app-banner-steps">\r\n         <div class="app-banner-step">\r\n            <div class="app-banner-step-image">\r\n               <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">\r\n                  <g fill="none" fill-rule="evenodd">\r\n                  <path fill="#969696" fill-rule="nonzero" d="M39.1288439,13.5069478 C47.7688749,17.0999881 52.6781142,26.2858116 50.864408,35.4657105 C49.0507018,44.6456094 41.0169434,51.2742376 31.6596636,51.3114833 C29.3582506,51.3253167 27.0750554,50.9263117 24.9166465,50.1334571 C24.3982311,49.9430261 23.8235976,50.20891 23.6331666,50.7273253 C23.4427356,51.2457407 23.7086195,51.8203742 24.2270348,52.0108052 C26.6101015,52.8861839 29.1309429,53.3267193 31.6696555,53.3118407 C41.9770211,53.2704319 50.8282261,45.9673312 52.8264795,35.8533642 C54.8247329,25.7393972 49.4159714,15.6189027 39.8968046,11.6602653 C39.3868573,11.4481988 38.8015495,11.6896789 38.589483,12.1996262 C38.3774165,12.7095735 38.6188966,13.2948813 39.1288439,13.5069478 Z"/>\r\n                  <path fill="#B4B4B4" fill-rule="nonzero" d="M14.429438,22.2062704 C15.8132965,19.7173348 17.7135875,17.5532386 20.0027509,15.8592505 C23.3783253,13.3597731 27.4654689,12.0073419 31.6653924,12.0000009 C34.2244094,12.0034227 36.7625672,12.4932426 39.141958,13.4434404 C39.6548573,13.6482642 40.2366868,13.3985196 40.4415106,12.8856203 C40.6463343,12.372721 40.3965898,11.7908916 39.8836905,11.5860678 C37.2691934,10.5419815 34.4802416,10.0037627 31.6649802,10.0000009 C27.0346236,10.0080922 22.5316072,11.4981352 18.8128244,14.2517447 C16.2945872,16.1152481 14.2039393,18.4961271 12.6814564,21.2343854 C12.4130778,21.7170772 12.5868129,22.32594 13.0695047,22.5943187 C13.5521965,22.8626973 14.1610594,22.6889621 14.429438,22.2062704 Z"/>\r\n                  <path fill="#CCC" fill-rule="nonzero" d="M14.432469,41.1795494 C11.189177,35.2591956 11.189177,28.0935913 14.432469,22.1732375 C14.6978145,21.6888718 14.5202636,21.0811107 14.0358978,20.8157651 C13.5515321,20.5504196 12.943771,20.7279705 12.6784254,21.2123363 C9.10719152,27.7313201 9.10719152,35.6214668 12.6784254,42.1404506 C12.943771,42.6248164 13.5515321,42.8023673 14.0358978,42.5370218 C14.5202636,42.2716762 14.6978145,41.6639151 14.432469,41.1795494 Z"/>\r\n                  <path fill="#4D4D4D" fill-rule="nonzero" d="M24.9167362 50.1334901C20.4618564 48.496583 16.7409848 45.3175633 14.4287443 41.172812 14.1596779 40.6905033 13.5505679 40.5176364 13.0682592 40.7867029 12.5859506 41.0557693 12.4130836 41.6648793 12.6821501 42.147188 15.2273791 46.7095774 19.3231776 50.2089252 24.2269451 52.0107722 24.7453423 52.2012528 25.3200012 51.9354238 25.5104817 51.4170267 25.7009623 50.8986295 25.4351334 50.3239706 24.9167362 50.1334901zM36.224 37.482C36.4880013 37.482 36.6933326 37.5479993 36.84 37.68 36.9866674 37.8120007 37.06 37.9953322 37.06 38.23 37.06 38.4793346 36.990334 38.6699993 36.851 38.802 36.711666 38.9340007 36.5026681 39 36.224 39L28.942 39C28.6633319 39 28.454334 38.9340007 28.315 38.802 28.175666 38.6699993 28.106 38.4793346 28.106 38.23 28.106 37.9953322 28.1793326 37.8120007 28.326 37.68 28.4726674 37.5479993 28.6779987 37.482 28.942 37.482L31.67 37.482 31.67 25.69 29.272 27.252C29.1546661 27.3253337 29.0373339 27.362 28.92 27.362 28.7146656 27.362 28.5350008 27.2666676 28.381 27.076 28.2269992 26.8853324 28.15 26.6800011 28.15 26.46 28.15 26.1519985 28.2673322 25.9320007 28.502 25.8L31.846 23.622C32.0953346 23.4606659 32.3519987 23.38 32.616 23.38 32.8653346 23.38 33.0706659 23.4606659 33.232 23.622 33.3933341 23.7833341 33.474 24.0106652 33.474 24.304L33.474 37.482 36.224 37.482z"/>\r\n                  </g>\r\n               </svg>\r\n            </div>\r\n            <div class="app-banner-step-content" data-banner-step-index="1">\r\n               <p>Skorzystaj z wyceny online lub w salonie</p>\r\n            </div>\r\n         </div>\r\n         <div class="app-banner-step">\r\n            <div class="app-banner-step-image">\r\n               <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">\r\n                  <g fill="none" fill-rule="evenodd">\r\n                  <path fill="#969696" fill-rule="nonzero" d="M39.1288439,13.5069478 C47.7688749,17.0999881 52.6781142,26.2858116 50.864408,35.4657105 C49.0507018,44.6456094 41.0169434,51.2742376 31.6596636,51.3114833 C29.3582506,51.3253167 27.0750554,50.9263117 24.9166465,50.1334571 C24.3982311,49.9430261 23.8235976,50.20891 23.6331666,50.7273253 C23.4427356,51.2457407 23.7086195,51.8203742 24.2270348,52.0108052 C26.6101015,52.8861839 29.1309429,53.3267193 31.6696555,53.3118407 C41.9770211,53.2704319 50.8282261,45.9673312 52.8264795,35.8533642 C54.8247329,25.7393972 49.4159714,15.6189027 39.8968046,11.6602653 C39.3868573,11.4481988 38.8015495,11.6896789 38.589483,12.1996262 C38.3774165,12.7095735 38.6188966,13.2948813 39.1288439,13.5069478 Z"/>\r\n                  <path fill="#B4B4B4" fill-rule="nonzero" d="M14.429438,22.2062704 C15.8132965,19.7173348 17.7135875,17.5532386 20.0027509,15.8592505 C23.3783253,13.3597731 27.4654689,12.0073419 31.6653924,12.0000009 C34.2244094,12.0034227 36.7625672,12.4932426 39.141958,13.4434404 C39.6548573,13.6482642 40.2366868,13.3985196 40.4415106,12.8856203 C40.6463343,12.372721 40.3965898,11.7908916 39.8836905,11.5860678 C37.2691934,10.5419815 34.4802416,10.0037627 31.6649802,10.0000009 C27.0346236,10.0080922 22.5316072,11.4981352 18.8128244,14.2517447 C16.2945872,16.1152481 14.2039393,18.4961271 12.6814564,21.2343854 C12.4130778,21.7170772 12.5868129,22.32594 13.0695047,22.5943187 C13.5521965,22.8626973 14.1610594,22.6889621 14.429438,22.2062704 Z"/>\r\n                  <path fill="#CCC" fill-rule="nonzero" d="M14.432469,41.1795494 C11.189177,35.2591956 11.189177,28.0935913 14.432469,22.1732375 C14.6978145,21.6888718 14.5202636,21.0811107 14.0358978,20.8157651 C13.5515321,20.5504196 12.943771,20.7279705 12.6784254,21.2123363 C9.10719152,27.7313201 9.10719152,35.6214668 12.6784254,42.1404506 C12.943771,42.6248164 13.5515321,42.8023673 14.0358978,42.5370218 C14.5202636,42.2716762 14.6978145,41.6639151 14.432469,41.1795494 Z"/>\r\n                  <path fill="#4D4D4D" fill-rule="nonzero" d="M24.9167362 50.1334901C20.4618564 48.496583 16.7409848 45.3175633 14.4287443 41.172812 14.1596779 40.6905033 13.5505679 40.5176364 13.0682592 40.7867029 12.5859506 41.0557693 12.4130836 41.6648793 12.6821501 42.147188 15.2273791 46.7095774 19.3231776 50.2089252 24.2269451 52.0107722 24.7453423 52.2012528 25.3200012 51.9354238 25.5104817 51.4170267 25.7009623 50.8986295 25.4351334 50.3239706 24.9167362 50.1334901zM36.576 37.482C36.8400013 37.482 37.0453326 37.5479993 37.192 37.68 37.3386674 37.8120007 37.412 37.9953322 37.412 38.23 37.412 38.7433359 37.1333361 39 36.576 39L27.952 39C27.7026654 39 27.4973341 38.9230008 27.336 38.769 27.1746659 38.6149992 27.094 38.4280011 27.094 38.208 27.094 37.9293319 27.1966656 37.6873344 27.402 37.482L32.704 31.652C33.437337 30.8306626 33.9689983 30.0936699 34.299 29.441 34.6290016 28.7883301 34.794 28.1320033 34.794 27.472 34.794 26.6213291 34.5483358 25.9686689 34.057 25.514 33.5656642 25.0593311 32.8726711 24.832 31.978 24.832 31.2739965 24.832 30.5993366 24.960332 29.954 25.217 29.3086634 25.4736679 28.6633366 25.8659974 28.018 26.394 27.7979989 26.5700009 27.5926676 26.658 27.402 26.658 27.2406659 26.658 27.1013339 26.5810008 26.984 26.427 26.8666661 26.2729992 26.808 26.0860011 26.808 25.866 26.808 25.5579985 26.9253322 25.3086676 27.16 25.118 27.7613363 24.5606639 28.4946623 24.1206683 29.36 23.798 30.2253377 23.4753317 31.1126621 23.314 32.022 23.314 33.4153403 23.314 34.5263292 23.680663 35.355 24.414 36.1836708 25.147337 36.598 26.1373271 36.598 27.384 36.598 28.2786711 36.3963354 29.1366626 35.993 29.958 35.5896647 30.7793374 34.9260046 31.6959949 34.002 32.708L29.602 37.482 36.576 37.482z"/>\r\n                  </g>\r\n               </svg>\r\n            </div>\r\n            <div class="app-banner-step-content" data-banner-step-index="2">\r\n               <p>wypełnij formularz i sprawdź, ile zyskasz</p>\r\n            </div>\r\n         </div>\r\n         <div class="app-banner-step">\r\n            <div class="app-banner-step-image">\r\n               <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">\r\n                  <g fill="none" fill-rule="evenodd">\r\n                  <path fill="#969696" fill-rule="nonzero" d="M39.1288439,13.5069478 C47.7688749,17.0999881 52.6781142,26.2858116 50.864408,35.4657105 C49.0507018,44.6456094 41.0169434,51.2742376 31.6596636,51.3114833 C29.3582506,51.3253167 27.0750554,50.9263117 24.9166465,50.1334571 C24.3982311,49.9430261 23.8235976,50.20891 23.6331666,50.7273253 C23.4427356,51.2457407 23.7086195,51.8203742 24.2270348,52.0108052 C26.6101015,52.8861839 29.1309429,53.3267193 31.6696555,53.3118407 C41.9770211,53.2704319 50.8282261,45.9673312 52.8264795,35.8533642 C54.8247329,25.7393972 49.4159714,15.6189027 39.8968046,11.6602653 C39.3868573,11.4481988 38.8015495,11.6896789 38.589483,12.1996262 C38.3774165,12.7095735 38.6188966,13.2948813 39.1288439,13.5069478 Z"/>\r\n                  <path fill="#B4B4B4" fill-rule="nonzero" d="M14.429438,22.2062704 C15.8132965,19.7173348 17.7135875,17.5532386 20.0027509,15.8592505 C23.3783253,13.3597731 27.4654689,12.0073419 31.6653924,12.0000009 C34.2244094,12.0034227 36.7625672,12.4932426 39.141958,13.4434404 C39.6548573,13.6482642 40.2366868,13.3985196 40.4415106,12.8856203 C40.6463343,12.372721 40.3965898,11.7908916 39.8836905,11.5860678 C37.2691934,10.5419815 34.4802416,10.0037627 31.6649802,10.0000009 C27.0346236,10.0080922 22.5316072,11.4981352 18.8128244,14.2517447 C16.2945872,16.1152481 14.2039393,18.4961271 12.6814564,21.2343854 C12.4130778,21.7170772 12.5868129,22.32594 13.0695047,22.5943187 C13.5521965,22.8626973 14.1610594,22.6889621 14.429438,22.2062704 Z"/>\r\n                  <path fill="#CCC" fill-rule="nonzero" d="M14.432469,41.1795494 C11.189177,35.2591956 11.189177,28.0935913 14.432469,22.1732375 C14.6978145,21.6888718 14.5202636,21.0811107 14.0358978,20.8157651 C13.5515321,20.5504196 12.943771,20.7279705 12.6784254,21.2123363 C9.10719152,27.7313201 9.10719152,35.6214668 12.6784254,42.1404506 C12.943771,42.6248164 13.5515321,42.8023673 14.0358978,42.5370218 C14.5202636,42.2716762 14.6978145,41.6639151 14.432469,41.1795494 Z"/>\r\n                  <path fill="#4D4D4D" fill-rule="nonzero" d="M24.9167362 50.1334901C20.4618564 48.496583 16.7409848 45.3175633 14.4287443 41.172812 14.1596779 40.6905033 13.5505679 40.5176364 13.0682592 40.7867029 12.5859506 41.0557693 12.4130836 41.6648793 12.6821501 42.147188 15.2273791 46.7095774 19.3231776 50.2089252 24.2269451 52.0107722 24.7453423 52.2012528 25.3200012 51.9354238 25.5104817 51.4170267 25.7009623 50.8986295 25.4351334 50.3239706 24.9167362 50.1334901zM34.068 31.036C35.0066714 31.3000013 35.7216642 31.7546634 36.213 32.4 36.7043358 33.0453366 36.95 33.8446619 36.95 34.798 36.95 36.1473401 36.4953379 37.2106628 35.586 37.988 34.6766621 38.7653372 33.4373412 39.154 31.868 39.154 30.9146619 39.154 30.001671 38.9926683 29.129 38.67 28.256329 38.3473317 27.5193363 37.9073361 26.918 37.35 26.6833322 37.1299989 26.566 36.8806681 26.566 36.602 26.566 36.3819989 26.6246661 36.1986674 26.742 36.052 26.8593339 35.9053326 26.9986659 35.832 27.16 35.832 27.3653344 35.832 27.5706656 35.9126659 27.776 36.074 28.45067 36.6166694 29.1106634 37.0126654 29.756 37.262 30.4013366 37.5113346 31.0979963 37.636 31.846 37.636 32.9313388 37.636 33.7563305 37.3866692 34.321 36.888 34.8856695 36.3893308 35.168 35.6706714 35.168 34.732 35.168 32.8399905 33.9800119 31.894 31.604 31.894L30.438 31.894C30.2033322 31.894 30.016334 31.8170008 29.877 31.663 29.737666 31.5089992 29.668 31.3293344 29.668 31.124 29.668 30.9186656 29.737666 30.7426674 29.877 30.596 30.016334 30.4493326 30.2033322 30.376 30.438 30.376L31.252 30.376C32.3960057 30.376 33.2759969 30.1230025 33.892 29.617 34.5080031 29.1109975 34.816 28.3813381 34.816 27.428 34.816 26.5919958 34.5666692 25.9503356 34.068 25.503 33.5693308 25.0556644 32.8653379 24.832 31.956 24.832 31.2666632 24.832 30.5993366 24.960332 29.954 25.217 29.3086634 25.4736679 28.6633366 25.8659974 28.018 26.394 27.8126656 26.5553341 27.6073344 26.636 27.402 26.636 27.2406659 26.636 27.1013339 26.5626674 26.984 26.416 26.8666661 26.2693326 26.808 26.0860011 26.808 25.866 26.808 25.5873319 26.9253322 25.3380011 27.16 25.118 27.7613363 24.5606639 28.4909957 24.1206683 29.349 23.798 30.2070043 23.4753317 31.0906621 23.314 32 23.314 33.408007 23.314 34.5263292 23.6696631 35.355 24.381 36.1836708 25.0923369 36.598 26.0493273 36.598 27.252 36.598 28.1466711 36.3743356 28.9276633 35.927 29.595 35.4796644 30.2623367 34.860004 30.7426652 34.068 31.036z"/>\r\n                  </g>\r\n               </svg>\r\n            </div>\r\n            <div class="app-banner-step-content" data-banner-step-index="3">\r\n               <p>podpisz umowę i odbierz zniżkę na kolejne zakupy</p>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </div>\r\n   <div class="app-banner-description">W ramach promocji możesz uzyskać zniżkę na zakup nowego produktu w x-komie. Obecnie skupujemy smartfony o wartości powyżej 100 zł, oraz laptopy, tablety i smartwatche, o wartości większej niż 100 zł marek tj. Apple, Samsung oraz Huawei . Ostateczna wycena Twojego produktu zależy od jego stanu. \r\n\r\n</div>\r\n   <div class="app-banner-regulations">Szczegóły znajdziesz na  <a href="https://lp.x-kom.pl/a/odkup/"><b>stronie usługi</b></a> oraz w salonach x-kom.</div>\r\n</div>\r\n\r\n<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.4/clipboard.min.js"></script>\r\n<script type="text/javascript">\r\n   var getPreviousSibling = function (elem, selector) {\r\n      var sibling = elem.previousElementSibling;\r\n\r\n      if (!selector) {\r\n         return sibling;\r\n      }\r\n\r\n      while (sibling) {\r\n         if (sibling.matches(selector)) return sibling;\r\n         sibling = sibling.previousElementSibling;\r\n      }\r\n   };\r\n\r\n   var BannerTemplate = function(code, codePosition) {\r\n      this.options = {\r\n         stepElementSelector: \'.app-banner-step-content\',\r\n         messageClassName: \'app-banner-promo-code-message\',\r\n         messageCopy: \'Skopiowano kod\',\r\n         promoCodeClassName: \'app-banner-promo-code\',\r\n         copyButtonClassName: \'app-banner-copy-button\',\r\n         copiedClassName: \'is-copied\',\r\n         copiedStateTimeout: 3000,\r\n      };\r\n      this.wrapper = getPreviousSibling(document.currentScript, \'.app-banner-template\');\r\n      this.iconSvgTemplates = {\r\n         copy: \'<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\' +\r\n               \'<g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\' +\r\n                  \'<g id="icons/copy/copy_24" fill="#505050">\' +\r\n                     \'<path d="M10,4 L9,4 L9,1.5 C9,1.22385763 9.22385763,1 9.5,1 L17.5,1 C17.6326082,1 17.7597852,1.05267842 17.8535534,1.14644661 L22.8535534,6.14644661 C22.9473216,6.2402148 23,6.36739176 23,6.5 L23,18.5 C23,18.7761424 22.7761424,19 22.5,19 L16,19 L16,18 L22,18 L22,6.70710678 L17.2928932,2 L10,2 L10,4 Z" id="Combined-Shape"></path>\' +\r\n                     \'<path d="M18,6 L21.2928932,6 L18,2.70710678 L18,6 Z M17.8535534,1.14644661 L22.8535534,6.14644661 C23.1685358,6.46142904 22.9454524,7 22.5,7 L17.5,7 C17.2238576,7 17,6.77614237 17,6.5 L17,1.5 C17,1.05454757 17.538571,0.831464179 17.8535534,1.14644661 Z" id="Rectangle-42" fill-rule="nonzero"></path>\' +\r\n                     \'<path d="M2,6 L2,22 L14,22 L14,10.7071068 L9.29289322,6 L2,6 Z M9.85355339,5.14644661 L14.8535534,10.1464466 C14.9473216,10.2402148 15,10.3673918 15,10.5 L15,22.5 C15,22.7761424 14.7761424,23 14.5,23 L1.5,23 C1.22385763,23 1,22.7761424 1,22.5 L1,5.5 C1,5.22385763 1.22385763,5 1.5,5 L9.5,5 C9.63260824,5 9.7597852,5.05267842 9.85355339,5.14644661 Z" id="Combined-Shape" fill-rule="nonzero"></path>\' +\r\n                     \'<path d="M10,10 L13.2928932,10 L10,6.70710678 L10,10 Z M9.85355339,5.14644661 L14.8535534,10.1464466 C15.1685358,10.461429 14.9454524,11 14.5,11 L9.5,11 C9.22385763,11 9,10.7761424 9,10.5 L9,5.5 C9,5.05454757 9.53857096,4.83146418 9.85355339,5.14644661 Z" id="Rectangle-42" fill-rule="nonzero"></path>\' +\r\n                  \'</g>\' +\r\n               \'</g>\' +\r\n            \'</svg>\',\r\n         copied: \'<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\' +\r\n            \'<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\' +\r\n               \'<g id="bannerKP_full_hover_copied_1156" transform="translate(-345.000000, -1075.000000)" fill="#FFFFFF" fill-rule="nonzero">\' +\r\n                  \'<g id="Group-9" transform="translate(161.000000, 1027.000000)">\' +\r\n                        \'<g id="Group-7" transform="translate(80.000000, 40.000000)">\' +\r\n                           \'<g id="Group-5" transform="translate(96.000000, 0.000000)">\' +\r\n                              \'<g id="Icon/24/office/copy_24" transform="translate(8.000000, 8.000000)">\' +\r\n                                    \'<path d="M16.8568803,6.11412818 C17.0699914,5.75894298 17.5306866,5.64376919 17.8858718,5.85688031 C18.241057,6.06999143 18.3562308,6.53068662 18.1431197,6.88587182 L12.1431197,16.8858718 C11.887518,17.3118747 11.295855,17.3761481 10.9547401,17.0149676 L6.70474014,12.5149676 C6.42033136,12.2138289 6.43389364,11.7391489 6.73503235,11.4547401 C7.03617106,11.1703314 7.51085108,11.1838936 7.79525986,11.4850324 L11.365919,15.2657303 L16.8568803,6.11412818 Z" id="Checkbox"></path>\' +\r\n                              \'</g>\' +\r\n                           \'</g>\' +\r\n                        \'</g>\' +\r\n                  \'</g>\' +\r\n               \'</g>\' +\r\n            \'</g>\' +\r\n         \'</svg>\',\r\n      };\r\n      this.codePosition = codePosition;\r\n      this.code = code;\r\n      this.createMessage();\r\n      this.createPromoBox();\r\n      this.appendPromoBoxToStep();\r\n   };\r\n\r\n   BannerTemplate.prototype.createMessage = function() {\r\n      this.message = document.createElement(\'div\');\r\n      this.message.className = this.options.messageClassName;\r\n   }\r\n\r\n   BannerTemplate.prototype.createPromoBox = function() {\r\n      this.promoBox = document.createElement(\'div\');\r\n      this.promoBox.className = this.options.promoCodeClassName;\r\n      this.promoBox.innerHTML = this.code;\r\n\r\n      this.copyButton = document.createElement(\'button\');\r\n      this.copyButton.type = \'button\';\r\n      this.copyButton.className = this.options.copyButtonClassName;\r\n      this.copyButton.innerHTML = this.iconSvgTemplates.copy;\r\n      this.copyButton.setAttribute(\'data-clipboard-text\', this.code);\r\n\r\n      this.promoBox.appendChild(this.copyButton);\r\n   }\r\n\r\n   BannerTemplate.prototype.appendPromoBoxToStep = function() {\r\n      this.stepElement = this.wrapper.querySelector(this.options.stepElementSelector + \'[data-banner-step-index="\' + this.codePosition + \'"]\');\r\n\r\n      if (this.stepElement) {\r\n         this.stepElement.appendChild(this.promoBox);\r\n         this.stepElement.appendChild(this.message);\r\n\r\n         this.clipboard = new ClipboardJS(this.copyButton);\r\n         this.clipboard.on(\'success\', this.onClipboardSuccess.bind(this));\r\n      }\r\n   }\r\n\r\n   BannerTemplate.prototype.onClipboardSuccess = function() {\r\n      this.promoBox.className = this.options.promoCodeClassName + \' \' + this.options.copiedClassName;\r\n      this.copyButton.innerHTML = this.iconSvgTemplates.copied;\r\n      this.message.innerText = this.options.messageCopy;\r\n\r\n      setTimeout(this.resetPromoBoxState.bind(this), this.options.copiedStateTimeout);\r\n   }\r\n\r\n   BannerTemplate.prototype.resetPromoBoxState = function() {\r\n      this.promoBox.className = this.options.promoCodeClassName;\r\n      this.copyButton.innerHTML = this.iconSvgTemplates.copy;\r\n      this.message.innerText = \'\';\r\n   }\r\n\r\n   new BannerTemplate(\'.\', 0);\r\n</script>',
                  bannerType: "product_only_one_web",
                  layoutName: "ProductPage_PromotionBanner_Default",
                  variables: [
                    {
                      name: "title",
                      type: "text",
                      value: "Zarób na starym sprzęcie",
                      photo: null,
                    },
                    {
                      name: "subtitle",
                      type: "text",
                      value: "i odbierz zniżkę na nowy",
                      photo: null,
                    },
                    {
                      name: "photo",
                      type: "image",
                      value: "3f75c6fc28584642866e91837848c755.png",
                      photo: {
                        url: "https://cdn.x-kom.pl/i/img/banners/normal,,3f75c6fc28584642866e91837848c755.png?filters=trim",
                        thumbnailUrl:
                          "https://cdn.x-kom.pl/i/img/banners/medium,,3f75c6fc28584642866e91837848c755.png?filters=trim",
                        urlTemplate:
                          "https://cdn.x-kom.pl/i/img/banners/{SIZE},,3f75c6fc28584642866e91837848c755.png?filters=trim",
                      },
                    },
                    {
                      name: "firstStep",
                      type: "text",
                      value: "Skorzystaj z wyceny online lub w salonie",
                      photo: null,
                    },
                    {
                      name: "secondStep",
                      type: "text",
                      value: "wypełnij formularz i sprawdź, ile zyskasz",
                      photo: null,
                    },
                    {
                      name: "thirdStep",
                      type: "text",
                      value: "podpisz umowę i odbierz zniżkę na kolejne zakupy",
                      photo: null,
                    },
                    {
                      name: "code",
                      type: "text",
                      value: ".",
                      photo: null,
                    },
                    {
                      name: "description",
                      type: "long-text",
                      value:
                        "W ramach promocji możesz uzyskać zniżkę na zakup nowego produktu w x-komie. Obecnie skupujemy smartfony o wartości powyżej 100 zł, oraz laptopy, tablety i smartwatche, o wartości większej niż 100 zł marek tj. Apple, Samsung oraz Huawei . Ostateczna wycena Twojego produktu zależy od jego stanu. \r\n\r\n",
                      photo: null,
                    },
                    {
                      name: "regulations",
                      type: "text",
                      value:
                        'Szczegóły znajdziesz na  <a href="https://lp.x-kom.pl/a/odkup/"><b>stronie usługi</b></a> oraz w salonach x-kom.',
                      photo: null,
                    },
                    {
                      name: "codePosition",
                      type: "enum",
                      value: "0",
                      photo: null,
                    },
                    {
                      name: "tabTitle",
                      type: "text",
                      value: "Odbierz rabat w programie odkup",
                      photo: null,
                    },
                  ],
                  conditions: "category[1590+159+1663+1924]-producent[357+230]",
                },
                {
                  id: "2453",
                  title: "",
                  subtitle: "",
                  description: "eXtra ochrona SMARTFON",
                  photo: {
                    url: "https://cdn.x-kom.pl/i/img/banners/normal,,14e568c5e6604f21af9550847a7d0a4b.jpg?filters=trim",
                    thumbnailUrl:
                      "https://cdn.x-kom.pl/i/img/banners/medium,,14e568c5e6604f21af9550847a7d0a4b.jpg?filters=trim",
                    urlTemplate:
                      "https://cdn.x-kom.pl/i/img/banners/{SIZE},,14e568c5e6604f21af9550847a7d0a4b.jpg?filters=trim",
                  },
                  url: null,
                  htmlCode:
                    '<div class="content">\r\n<div class="row text-left fresh-content">\r\n\t<div class="col-md-2 text-center">\r\n\t\t<img class="ico" src="https://cdn.x-kom.pl/i/img/banners/normal,,1efcbb1e74a749cfa323ddfc6705c611.png?filters=trim"></div>\r\n\t<div class="col-md-10">\r\n\t\t<h2 class="text-left">Zadbaj o eXtra ochronę swojego urządzenia</h2>\r\n\t\t<p>Zbity ekran w smartfonie? Zalany telefon? Tego nikt nie planuje, ale każdemu może się zdarzyć. Jednak z eXtra ochroną unikniesz stresu i dodatkowych kosztów. Ubezpieczyciel naprawi Twój sprzęt za darmo i w krótkim czasie. Natomiast w przypadku kradzieży z rabunkiem lub włamania, dostaniesz voucher na zakup nowego urządzenia. Możesz też wykupić ochronę na wypadek awarii po gwarancji producenta. Poznaj więcej szczegółów na temat <a href="https://www.x-kom.pl/ubezpieczenia" target="_blank">eXtra ochrony</a>.</p>\r\n\t\t<a href="https://cdn.x-kom.pl/i/img/banners/normal,,14e568c5e6604f21af9550847a7d0a4b.jpg?filters=trim"><img src="https://cdn.x-kom.pl/i/img/banners/normal,,14e568c5e6604f21af9550847a7d0a4b.jpg?filters=trim"></a>\r\n\t</div>\r\n</div>\r\n</div>',
                  bannerType: "product_description_after_web",
                  layoutName: "ProductPage_Description_Image_Url",
                  variables: [
                    {
                      name: "header",
                      type: "text",
                      value: "Zadbaj o eXtra ochronę swojego urządzenia",
                      photo: null,
                    },
                    {
                      name: "icon",
                      type: "image",
                      value: "1efcbb1e74a749cfa323ddfc6705c611.png",
                      photo: {
                        url: "https://cdn.x-kom.pl/i/img/banners/normal,,1efcbb1e74a749cfa323ddfc6705c611.png?filters=trim",
                        thumbnailUrl:
                          "https://cdn.x-kom.pl/i/img/banners/medium,,1efcbb1e74a749cfa323ddfc6705c611.png?filters=trim",
                        urlTemplate:
                          "https://cdn.x-kom.pl/i/img/banners/{SIZE},,1efcbb1e74a749cfa323ddfc6705c611.png?filters=trim",
                      },
                    },
                    {
                      name: "image",
                      type: "image",
                      value: "14e568c5e6604f21af9550847a7d0a4b.jpg",
                      photo: {
                        url: "https://cdn.x-kom.pl/i/img/banners/normal,,14e568c5e6604f21af9550847a7d0a4b.jpg?filters=trim",
                        thumbnailUrl:
                          "https://cdn.x-kom.pl/i/img/banners/medium,,14e568c5e6604f21af9550847a7d0a4b.jpg?filters=trim",
                        urlTemplate:
                          "https://cdn.x-kom.pl/i/img/banners/{SIZE},,14e568c5e6604f21af9550847a7d0a4b.jpg?filters=trim",
                      },
                    },
                    {
                      name: "url",
                      type: "text",
                      value: "https://www.x-kom.pl/ubezpieczenia",
                      photo: null,
                    },
                    {
                      name: "content",
                      type: "html",
                      value:
                        'Zbity ekran w smartfonie? Zalany telefon? Tego nikt nie planuje, ale każdemu może się zdarzyć. Jednak z eXtra ochroną unikniesz stresu i dodatkowych kosztów. Ubezpieczyciel naprawi Twój sprzęt za darmo i w krótkim czasie. Natomiast w przypadku kradzieży z rabunkiem lub włamania, dostaniesz voucher na zakup nowego urządzenia. Możesz też wykupić ochronę na wypadek awarii po gwarancji producenta. Poznaj więcej szczegółów na temat <a href="https://www.x-kom.pl/ubezpieczenia" target="_blank">eXtra ochrony</a>.',
                      photo: null,
                    },
                  ],
                  conditions: "category[1590]-producent[629+731+809+174+357]",
                },
              ],
              isExtendedConfiguration: false,
              isAvailableInDepartments: true,
              leasingInfo: [
                {
                  name: "PKO",
                  leasingCategoryId: 2000,
                },
              ],
              productMarksExtended: [
                {
                  mark: "CrossedPrice",
                  startDate: null,
                  endDate: null,
                },
              ],
              movies: [],
              galleryItemsCount: 11,
              hasPromotionPrices: false,
              minPriceInfo: {
                minPrice: 999,
                dateMinPrice: "2024-09-04T13:37:37Z",
              },
              featureSummary: [
                'Ekran: 6,67"',
                "Procesor: Qualcomm Snapdragon 732G",
                "Pamięć RAM: 8 GB",
                "Pamięć wbudowana: 256 GB",
                "Bateria: 5000 mAh",
              ],
              featureSummaryStructured: [
                {
                  shortName: "Ekran",
                  description: null,
                  valueSeparator: ", ",
                  valueGroups: [
                    {
                      shortName: '6,67"',
                      description: null,
                    },
                  ],
                },
                {
                  shortName: "Procesor",
                  description:
                    "Procesor to kluczowy element każdego smartfona. Wszystkie zadania i procesy obsługiwane są przez tę właśnie jednostkę. Od jego mocy obliczeniowej zależy płynność działania urządzenia oraz prędkość realizacji powierzonych mu zadań. Procesor z dużą liczbą rdzeni oraz jego wysokie taktowanie umożliwia bardziej profesjonalne zastosowanie smartfona i sprawną obsługę wymagających aplikacji.",
                  valueSeparator: ", ",
                  valueGroups: [
                    {
                      shortName: "Qualcomm Snapdragon 732G",
                      description: null,
                    },
                  ],
                },
                {
                  shortName: "Pamięć RAM",
                  description:
                    "To inaczej pamięć operacyjna systemu. Wszystkie procesy przechowują swoje dane w pamięci RAM, dlatego od jej wielkości zależą możliwości oraz płynność działania smartfona. Im jej więcej, tym bardziej skomplikowane programy będziemy mogli obsłużyć oraz uruchomić kilka aplikacji jednocześnie. Przy małej pojemności pamięci RAM podczas pracy możemy napotkać spadki wydajności.",
                  valueSeparator: ", ",
                  valueGroups: [
                    {
                      shortName: "8 GB",
                      description: null,
                    },
                  ],
                },
                {
                  shortName: "Pamięć wbudowana",
                  description:
                    "To pamięć masowa służąca do przechowywania wszystkich Twoich zdjęć, filmów, aplikacji i dokumentów. Im wyższa wartość, tym więcej plików możesz posiadać w pamięci urządzenia.",
                  valueSeparator: ", ",
                  valueGroups: [
                    {
                      shortName: "256 GB",
                      description: null,
                    },
                  ],
                },
                {
                  shortName: "Bateria",
                  description:
                    "Określa jaki zapas energii może przechowywać bateria. Wyższe wartości oznaczają z reguły, że smartfon na jednym ładowaniu będzie mógł działać dłużej niż modele ze znacznie mniejszą pojemnością. Należy jednak pamiętać, że żywotność baterii jest uzależniona głównie od podzespołów, używanych aplikacji i inteligentnego zarządzania energią przez system operacyjny.",
                  valueSeparator: ", ",
                  valueGroups: [
                    {
                      shortName: "5000 mAh",
                      description: null,
                    },
                  ],
                },
              ],
              availabilityStatus: "Available",
              producerCode: "",
              installmentMinimum: 32.8,
              freeInstallment: false,
              oldPrice: 1099,
              priceInfo: {
                price: 999,
                oldPrice: 1099,
                isPriceVisible: true,
                minPrice: null,
              },
              producer: {
                id: "1023",
                name: "Xiaomi",
              },
              secondaryCategory: [],
              isEsd: false,
              esdType: "NotDefined",
              isGiftCard: false,
              productLink: "USE_SELECTOR_PLZ",
              photo: {
                url: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-large,,2023/3/pr_2023_3_21_12_15_52_84_00.jpg",
                thumbnailUrl:
                  "https://cdn.x-kom.pl/i/setup/images/prod/big/product-small,,2023/3/pr_2023_3_21_12_15_52_84_00.jpg",
                urlTemplate:
                  "https://cdn.x-kom.pl/i/setup/images/prod/big/{SIZE},,2023/3/pr_2023_3_21_12_15_52_84_00.jpg",
              },
              rating: 0,
              ratingFivePoints: 0,
              ratingCount: 0,
              commentsCount: 0,
              commentStatistics: {
                ratings: [],
                ratingsFivePoints: null,
                totalConfirmedPurchase: 0,
                totalForThisVariant: 0,
                averageRating: 0,
                averageRatingFivePoints: 0,
              },
              freeShipping: false,
              features: [
                {
                  key: "Procesor",
                  id: "001900000000",
                  description:
                    "Procesor to kluczowy element każdego smartfona. Wszystkie zadania i procesy obsługiwane są przez tę właśnie jednostkę. Od jego mocy obliczeniowej zależy płynność działania urządzenia oraz prędkość realizacji powierzonych mu zadań. Procesor z dużą liczbą rdzeni oraz jego wysokie taktowanie umożliwia bardziej profesjonalne zastosowanie smartfona i sprawną obsługę wymagających aplikacji.",
                  values: [
                    {
                      name: "Qualcomm Snapdragon 732G (2x 2.3 GHz, Kryo + 6x 1.8 GHz, Kryo)",
                      description: null,
                    },
                  ],
                },
                {
                  key: "Układ graficzny",
                  id: "001910000000",
                  description:
                    "Jednostka odpowiadająca za obraz wyświetlany na ekranie Twojego smartfona. Jego wydajność decyduje o prędkości przetwarzania bardziej skomplikowanych grafik. Odgrywa kluczową rolę podczas obsługi zaawansowanych gier mobilnych.",
                  values: [
                    {
                      name: "Adreno 618",
                      description: null,
                    },
                  ],
                },
                {
                  key: "Pamięć RAM",
                  id: "001920000000",
                  description:
                    "To inaczej pamięć operacyjna systemu. Wszystkie procesy przechowują swoje dane w pamięci RAM, dlatego od jej wielkości zależą możliwości oraz płynność działania smartfona. Im jej więcej, tym bardziej skomplikowane programy będziemy mogli obsłużyć oraz uruchomić kilka aplikacji jednocześnie. Przy małej pojemności pamięci RAM podczas pracy możemy napotkać spadki wydajności.",
                  values: [
                    {
                      name: "8 GB",
                      description: null,
                    },
                  ],
                },
                {
                  key: "Pamięć wbudowana",
                  id: "001930000000",
                  description:
                    "To pamięć masowa służąca do przechowywania wszystkich Twoich zdjęć, filmów, aplikacji i dokumentów. Im wyższa wartość, tym więcej plików możesz posiadać w pamięci urządzenia.",
                  values: [
                    {
                      name: "256 GB",
                      description: null,
                    },
                  ],
                },
                {
                  key: "Typ ekranu",
                  id: "001940000000",
                  description:
                    "Typ matrycy ma kluczowe znaczenie dla jakości wyświetlanych treści na ekranie Twojego smartfona. W zależności od zastosowanej technologii zużycie energii może być mniejsze, a obraz wyróżniać się lepszym nasyceniem barw i szerszymi kątami widzenia, co pozytywnie wpłynie na Twoje wrażenia podczas oglądania zdjęć lub filmów.",
                  values: [
                    {
                      name: "Dotykowy, AMOLED",
                      description: null,
                    },
                  ],
                },
                {
                  key: "Częstotliwość odświeżania ekranu",
                  id: "074070000000",
                  description:
                    "Im wyższa wartość, tym większa płynność wyświetlanego obrazu. Ekran nie będzie smużyć, a zwiększona częstotliwość odświeżania pozytywnie wpłynie na całkowite wrażenia korzystania ze smartfona.",
                  values: [
                    {
                      name: "120 Hz",
                      description: null,
                    },
                  ],
                },
                {
                  key: "Przekątna ekranu",
                  id: "001950000000",
                  description: null,
                  values: [
                    {
                      name: '6,67"',
                      description: null,
                    },
                  ],
                },
                {
                  key: "Rozdzielczość ekranu",
                  id: "001960000000",
                  description: null,
                  values: [
                    {
                      name: "2400 x 1080",
                      description: null,
                    },
                  ],
                },
                {
                  key: "Rozdzielczość aparatu - tył",
                  id: "072780000000",
                  description: null,
                  values: [
                    {
                      name: "108.0 Mpix",
                      description: null,
                    },
                    {
                      name: "8.0 Mpix - ultraszerokokątny",
                      description: null,
                    },
                    {
                      name: "2.0 Mpix - czujnik głębi",
                      description: null,
                    },
                  ],
                },
                {
                  key: "Rozdzielczość aparatu - przód",
                  id: "072790000000",
                  description: null,
                  values: [
                    {
                      name: "16.0 Mpix",
                      description: null,
                    },
                  ],
                },
                {
                  key: "Dodatkowe cechy aparatu",
                  id: "072810000000",
                  description: null,
                  values: [
                    {
                      name: "Wbudowana lampa błyskowa",
                      description: null,
                    },
                  ],
                },
                {
                  key: "Rozdzielczość nagrywania wideo",
                  id: "002040000000",
                  description: null,
                  values: [
                    {
                      name: "UHD 4K",
                      description: null,
                    },
                  ],
                },
                {
                  key: "Łączność",
                  id: "001970000000",
                  description: null,
                  values: [
                    {
                      name: "4G (LTE)",
                      description: null,
                    },
                    {
                      name: "Wi-Fi",
                      description: null,
                    },
                    {
                      name: "NFC",
                      description: null,
                    },
                    {
                      name: "Bluetooth 5.1",
                      description: null,
                    },
                  ],
                },
                {
                  key: "System nawigacji satelitarnej",
                  id: "001980000000",
                  description: null,
                  values: [
                    {
                      name: "GPS",
                      description: null,
                    },
                    {
                      name: "A-GPS",
                      description: null,
                    },
                    {
                      name: "Beidou",
                      description: null,
                    },
                    {
                      name: "GLONASS",
                      description: null,
                    },
                  ],
                },
                {
                  key: "Złącza",
                  id: "001990000000",
                  description: null,
                  values: [
                    {
                      name: "USB Typu-C - 1 szt.",
                      description: null,
                    },
                    {
                      name: "Gniazdo kart nanoSIM - 2 szt. (drugi slot wspólny z czytnikiem kart pamięci)",
                      description: null,
                    },
                    {
                      name: "Wyjście słuchawkowe/głośnikowe - 1 szt.",
                      description: null,
                    },
                  ],
                },
                {
                  key: "Czytnik linii papilarnych",
                  id: "072850000000",
                  description: null,
                  values: [
                    {
                      name: "W ramce",
                      description: null,
                    },
                  ],
                },
                {
                  key: "Czujniki",
                  id: "072830000000",
                  description: null,
                  values: [
                    {
                      name: "Akcelerometr",
                      description: null,
                    },
                    {
                      name: "Żyroskop",
                      description: null,
                    },
                    {
                      name: "Zbliżenia",
                      description: null,
                    },
                    {
                      name: "Światła",
                      description: null,
                    },
                    {
                      name: "Magnetometr",
                      description: null,
                    },
                  ],
                },
                {
                  key: "Szybkie ładowanie",
                  id: "084940000000",
                  description: null,
                  values: [
                    {
                      name: "Moc ładowania - 67 W",
                      description: null,
                    },
                  ],
                },
                {
                  key: "Odporności",
                  id: "084950000000",
                  description:
                    "Klasa IP określa poziom odporności urządzenia na zachlapania, wodę oraz pył zgodnie z normą IEC 60529. Odporność może się obniżyć w efekcie normalnego zużycia. Gwarancja zwykle nie obejmuje uszkodzeń spowodowanych przez ciecze. Dokładne warunki użytkowania urządzenia znajdziesz w instrukcji obsługi lub na stronie producenta.",
                  values: [
                    {
                      name: "Pyłoszczelność i wodoszczelność (IP53)",
                      description: null,
                    },
                  ],
                },
                {
                  key: "Dual SIM",
                  id: "054750000000",
                  description: null,
                  values: [
                    {
                      name: "Dual SIM - Obsługa dwóch kart SIM",
                      description: null,
                    },
                  ],
                },
                {
                  key: "System operacyjny",
                  id: "002010000000",
                  description: null,
                  values: [
                    {
                      name: "Android 12",
                      description: null,
                    },
                  ],
                },
                {
                  key: "Dodatkowe informacje",
                  id: "002110000000",
                  description: null,
                  values: [
                    {
                      name: "Skaner twarzy",
                      description: null,
                    },
                  ],
                },
                {
                  key: "Typ baterii",
                  id: "072760000000",
                  description:
                    "Ta cecha informuje, w jakiej technologii wykonano baterię. Najbardziej popularne są ogniwa litowo-jonowe, stanowiące idealny kompromis pomiędzy ceną a jakością. W produktach z wysokim zapotrzebowaniem na energię oraz w smartfonach klasy premium znajdziemy baterie litowo-polimerowe, które wyróżniają się dużą pojemnością, prędkością ładowania i żywotnością.\r\n\r\nObecnie stosowane baterie w smartfonach nie powinny być formatowane, co było konieczne w starszych typach akumulatorów.",
                  values: [
                    {
                      name: "Litowo-polimerowa",
                      description: null,
                    },
                  ],
                },
                {
                  key: "Pojemność baterii",
                  id: "002000000000",
                  description:
                    "Określa jaki zapas energii może przechowywać bateria. Wyższe wartości oznaczają z reguły, że smartfon na jednym ładowaniu będzie mógł działać dłużej niż modele ze znacznie mniejszą pojemnością. Należy jednak pamiętać, że żywotność baterii jest uzależniona głównie od podzespołów, używanych aplikacji i inteligentnego zarządzania energią przez system operacyjny.",
                  values: [
                    {
                      name: "5000 mAh",
                      description: null,
                    },
                  ],
                },
                {
                  key: "Dołączone akcesoria",
                  id: "016680000000",
                  description: null,
                  values: [
                    {
                      name: "Ładowarka",
                      description: null,
                    },
                    {
                      name: "Kabel USB",
                      description: null,
                    },
                  ],
                },
                {
                  key: "Kolor",
                  id: "045880000000",
                  description: null,
                  values: [
                    {
                      name: "Niebieski",
                      description: null,
                    },
                  ],
                },
                {
                  key: "Rodzaj gwarancji",
                  id: "068380000000",
                  description: null,
                  values: [
                    {
                      name: "Standardowa",
                      description: null,
                    },
                  ],
                },
                {
                  key: "Gwarancja",
                  id: "040440000000",
                  description: null,
                  values: [
                    {
                      name: "24 miesiące (gwarancja producenta)",
                      description: null,
                    },
                  ],
                },
              ],
              id: "1277191",
              name: "Redmi Note 12 Pro 4G 8/256 Sky Blue",
              price: 999,
              category: {
                id: "1590",
                parentGroupId: "4",
                parentGroupName: "Smartfony i smartwatche",
              },
              complementaryProducts: [
                {
                  product: {
                    featureSummary: [
                      "Pojemność: 20 000 mAh",
                      "Napięcie nominalne: 5 V, 9 V, 12 V",
                      "Prąd wyjściowy: 1,5 A, 2 A, 3 A, 1,67 A, 2,23 A",
                      "Złącza: USB Typu-A, USB Typu-C, USB Typu-C",
                      "Rodzaj ogniwa: Litowo-polimerowy",
                      "Dodatkowe informacje: Quick Charge, Ultra Charge, Technologia Power Delivery, Wskaźnik LED, Zabezpieczenie termiczne, Zabezpieczenie przed nadmiernym rozładowaniem, Zabezpieczenie przed przeładowaniem",
                    ],
                    featureSummaryStructured: [
                      {
                        shortName: "Pojemność",
                        description: null,
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "20 000 mAh",
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "Napięcie nominalne",
                        description: null,
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "5 V",
                            description: null,
                          },
                          {
                            shortName: "9 V",
                            description: null,
                          },
                          {
                            shortName: "12 V",
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "Prąd wyjściowy",
                        description: null,
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "1,5 A",
                            description: null,
                          },
                          {
                            shortName: "2 A",
                            description: null,
                          },
                          {
                            shortName: "3 A",
                            description: null,
                          },
                          {
                            shortName: "1,67 A",
                            description: null,
                          },
                          {
                            shortName: "2,23 A",
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "Złącza",
                        description: null,
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "USB Typu-A",
                            description: null,
                          },
                          {
                            shortName: "USB Typu-C",
                            description: null,
                          },
                          {
                            shortName: "USB Typu-C",
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "Rodzaj ogniwa",
                        description: null,
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "Litowo-polimerowy",
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "Dodatkowe informacje",
                        description: null,
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "Quick Charge",
                            description: null,
                          },
                          {
                            shortName: "Ultra Charge",
                            description: null,
                          },
                          {
                            shortName: "Technologia Power Delivery",
                            description: null,
                          },
                          {
                            shortName: "Wskaźnik LED",
                            description: null,
                          },
                          {
                            shortName: "Zabezpieczenie termiczne",
                            description: null,
                          },
                          {
                            shortName:
                              "Zabezpieczenie przed nadmiernym rozładowaniem",
                            description: null,
                          },
                          {
                            shortName: "Zabezpieczenie przed przeładowaniem",
                            description: null,
                          },
                        ],
                      },
                    ],
                    availabilityStatus: "Available",
                    producerCode: "PBGC03S",
                    installmentMinimum: null,
                    freeInstallment: false,
                    alternativeGroupId: null,
                    alternativeProducts: null,
                    oldPrice: null,
                    priceInfo: {
                      price: 119,
                      oldPrice: null,
                      isPriceVisible: true,
                      minPrice: null,
                    },
                    producer: {
                      id: "1839",
                      name: "Green Cell",
                    },
                    secondaryCategory: null,
                    isEsd: false,
                    esdType: "NotDefined",
                    isGiftCard: false,
                    promotionGainValue: null,
                    productLink: "USE_SELECTOR_PLZ",
                    photo: {
                      url: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-large,,2024/3/pr_2024_3_26_13_50_29_342_00.jpg",
                      thumbnailUrl:
                        "https://cdn.x-kom.pl/i/setup/images/prod/big/product-small,,2024/3/pr_2024_3_26_13_50_29_342_00.jpg",
                      urlTemplate:
                        "https://cdn.x-kom.pl/i/setup/images/prod/big/{SIZE},,2024/3/pr_2024_3_26_13_50_29_342_00.jpg",
                    },
                    rating: 5.85,
                    ratingFivePoints: 4.87,
                    ratingCount: 82,
                    commentsCount: 82,
                    freeShipping: true,
                    id: "1232069",
                    name: "PowerPlay 20S Czarny (22.5W, 3x USB-C)",
                    price: 119,
                    promotionInfo: null,
                    category: {
                      id: "2301",
                      parentGroupId: "4",
                      parentGroupName: "Smartfony i smartwatche",
                    },
                    mark: null,
                  },
                  type: "Base",
                },
                {
                  product: {
                    featureSummary: [
                      "Głośniki: 2.0",
                      "Moc głośników: 20 W",
                      "Łączność: Bluetooth",
                    ],
                    featureSummaryStructured: [
                      {
                        shortName: "Głośniki",
                        description: null,
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "2.0",
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "Moc głośników",
                        description: null,
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "20 W",
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "Łączność",
                        description: null,
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "Bluetooth",
                            description: null,
                          },
                        ],
                      },
                    ],
                    availabilityStatus: "Available",
                    producerCode: "A3133011",
                    installmentMinimum: null,
                    freeInstallment: false,
                    alternativeGroupId: null,
                    alternativeProducts: null,
                    oldPrice: null,
                    priceInfo: {
                      price: 219,
                      oldPrice: null,
                      isPriceVisible: true,
                      minPrice: null,
                    },
                    producer: {
                      id: "1827",
                      name: "soundcore",
                    },
                    secondaryCategory: null,
                    isEsd: false,
                    esdType: "NotDefined",
                    isGiftCard: false,
                    promotionGainValue: null,
                    productLink: "USE_SELECTOR_PLZ",
                    photo: {
                      url: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-large,,2024/2/pr_2024_2_7_14_39_40_696_00.jpg",
                      thumbnailUrl:
                        "https://cdn.x-kom.pl/i/setup/images/prod/big/product-small,,2024/2/pr_2024_2_7_14_39_40_696_00.jpg",
                      urlTemplate:
                        "https://cdn.x-kom.pl/i/setup/images/prod/big/{SIZE},,2024/2/pr_2024_2_7_14_39_40_696_00.jpg",
                    },
                    rating: 5.8,
                    ratingFivePoints: 4.8,
                    ratingCount: 10,
                    commentsCount: 10,
                    freeShipping: true,
                    id: "1220164",
                    name: "Motion 100 czarny",
                    price: 219,
                    promotionInfo: null,
                    category: {
                      id: "2506",
                      parentGroupId: "6",
                      parentGroupName: "Urządzenia peryferyjne",
                    },
                    mark: null,
                  },
                  type: "Base",
                },
                {
                  product: {
                    featureSummary: [
                      "Kompatybilność: Uniwersalny",
                      "Sposób montażu: Zaciski",
                      'Maksymalna wielkość urządzenia: 12,9"',
                    ],
                    featureSummaryStructured: [
                      {
                        shortName: "Kompatybilność",
                        description: null,
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "Uniwersalny",
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "Sposób montażu",
                        description: null,
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "Zaciski",
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "Maksymalna wielkość urządzenia",
                        description: null,
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: '12,9"',
                            description: null,
                          },
                        ],
                      },
                    ],
                    availabilityStatus: "Available",
                    producerCode: "6957303853946",
                    installmentMinimum: null,
                    freeInstallment: false,
                    alternativeGroupId: null,
                    alternativeProducts: null,
                    oldPrice: null,
                    priceInfo: {
                      price: 54,
                      oldPrice: null,
                      isPriceVisible: true,
                      minPrice: null,
                    },
                    producer: {
                      id: "3123",
                      name: "UGREEN",
                    },
                    secondaryCategory: null,
                    isEsd: false,
                    esdType: "NotDefined",
                    isGiftCard: false,
                    promotionGainValue: null,
                    productLink: "USE_SELECTOR_PLZ",
                    photo: {
                      url: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-large,,2023/11/pr_2023_11_24_12_11_19_773_00.jpg",
                      thumbnailUrl:
                        "https://cdn.x-kom.pl/i/setup/images/prod/big/product-small,,2023/11/pr_2023_11_24_12_11_19_773_00.jpg",
                      urlTemplate:
                        "https://cdn.x-kom.pl/i/setup/images/prod/big/{SIZE},,2023/11/pr_2023_11_24_12_11_19_773_00.jpg",
                    },
                    rating: 5.68,
                    ratingFivePoints: 4.74,
                    ratingCount: 19,
                    commentsCount: 19,
                    freeShipping: false,
                    id: "1198684",
                    name: "Uchwyt / statyw do biurka do smartfona / tabletu",
                    price: 54,
                    promotionInfo: null,
                    category: {
                      id: "2171",
                      parentGroupId: "4",
                      parentGroupName: "Smartfony i smartwatche",
                    },
                    mark: null,
                  },
                  type: "Base",
                },
                {
                  product: {
                    featureSummary: [
                      "Łączność: True Wireless",
                      "Budowa słuchawek: Dokanałowe",
                      "Mikrofon: Posiada, przy słuchawce",
                      "Redukcja hałasu: Aktywna - ENC",
                      "Złącze: USB typu-C  - 1 szt.",
                      "Średnica membrany: 6 mm",
                    ],
                    featureSummaryStructured: [
                      {
                        shortName: "Łączność",
                        description:
                          "Słuchawki przewodowe łączą się z drugim urządzeniem za pomocą kabla, natomiast bezprzewodowe używają do tego różnych standardów komunikacji bezprzewodowej, np. Bluetooth. Część słuchawek oferuje oba rodzaje łączności, łącząc ich zalety w postaci mobilności lub lepszej jakości dźwięku i mniejszych opóźnień. True Wireless jest zarezerwowane dla słuchawek dousznych i dokanałowych, które łączą się bezprzewodowo między sobą oraz ze źródłem dźwięku.",
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "True Wireless",
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "Budowa słuchawek",
                        description:
                          "Słuchawki douszne i dokanałowe wkłada się do ucha. Pierwsze z nich opierają się na małżowinie usznej i są wygodne dla większości osób. Te dokanałowe wymagają lepszego dopasowania, ponieważ umieszcza się je trochę głębiej – w kanale słuchowym, zapewniając dobrą izolację i pewniejszy uchwyt.\r\n<br><br>Konstrukcja słuchawek nausznych opiera się na całej głowie. Podział na słuchawki nauszne otwarte, półotwarte i zamknięte dotyczy wielkości i kształtu muszli. Te otwarte nie tłumią hałasów z zewnątrz, ale zapewniają lepszą wentylację, więc są dobrym wyborem do długotrwałego użytkowania lub joggingu po mieście. Słuchawki zamknięte szczelnie przylegają do ucha i odcinają od otoczenia, zapewniając lepsze odwzorowanie wysokich i niskich tonów. Słuchawki półotwarte łączą natomiast zalety obu konstrukcji.",
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "Dokanałowe",
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "Mikrofon",
                        description: null,
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "Posiada, przy słuchawce",
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "Redukcja hałasu",
                        description:
                          "Redukcja hałasu w słuchawkach przydaje się w zatłoczonych miejscach i może się odbywać pasywnie lub aktywnie (ANC). Redukcja pasywna polega na fizycznej blokadzie hałasów z zewnątrz, np. poprzez szczelne dopasowanie słuchawki dokanałowej do ucha, by niepożądane szumy nie przedostawały się przez tę barierę. Słuchawki wyposażone w ANC natomiast kontrolują poziom hałasu otoczenia za pomocą wbudowanych mikrofonów i generują dźwięk o częstotliwości, która niweluje niepożądane odgłosy.",
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "Aktywna - ENC",
                            description:
                              "Redukcja szumów ENC (Environmental Noise Cancellation) to technologia stosowana w słuchawkach, która wykorzystuje mikrofony do wykrywania dźwięków otoczenia i generowania fal maskujących odgłosy z zewnątrz. Skutkuje to redukcją hałasów. ENC działa zarówno podczas rozmów, jak i odtwarzania dźwięku, poprawiając jakość audio oraz skupiając na odbiorze dźwięku.",
                          },
                        ],
                      },
                      {
                        shortName: "Złącze",
                        description: null,
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "USB typu-C  - 1 szt.",
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "Średnica membrany",
                        description:
                          "Membrana wpływa na jakość wytwarzanego dźwięku. Średnica wyrażana w milimetrach określa jej wielkość. Większa membrana to mniejsze zniekształcenia i lepsza jakość dźwięku.",
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "6 mm",
                            description: null,
                          },
                        ],
                      },
                    ],
                    availabilityStatus: "Available",
                    producerCode: "T27 black",
                    installmentMinimum: null,
                    freeInstallment: false,
                    alternativeGroupId: null,
                    alternativeProducts: null,
                    oldPrice: null,
                    priceInfo: {
                      price: 79,
                      oldPrice: null,
                      isPriceVisible: true,
                      minPrice: null,
                    },
                    producer: {
                      id: "2024",
                      name: "QCY",
                    },
                    secondaryCategory: null,
                    isEsd: false,
                    esdType: "NotDefined",
                    isGiftCard: false,
                    promotionGainValue: null,
                    productLink: "USE_SELECTOR_PLZ",
                    photo: {
                      url: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-large,,2023/11/pr_2023_11_7_13_15_33_826_00.jpg",
                      thumbnailUrl:
                        "https://cdn.x-kom.pl/i/setup/images/prod/big/product-small,,2023/11/pr_2023_11_7_13_15_33_826_00.jpg",
                      urlTemplate:
                        "https://cdn.x-kom.pl/i/setup/images/prod/big/{SIZE},,2023/11/pr_2023_11_7_13_15_33_826_00.jpg",
                    },
                    rating: 5.51,
                    ratingFivePoints: 4.55,
                    ratingCount: 187,
                    commentsCount: 187,
                    freeShipping: false,
                    id: "1193646",
                    name: "ArcBuds Lite T27 czarne",
                    price: 79,
                    promotionInfo: null,
                    category: {
                      id: "2495",
                      parentGroupId: "6",
                      parentGroupName: "Urządzenia peryferyjne",
                    },
                    mark: null,
                  },
                  type: "Base",
                },
                {
                  product: {
                    featureSummary: [
                      "Czujniki: Barometr, Kompas, Pulsoksymetr, Pulsometr, Termometr",
                      "Nawigacja: Tak",
                      "Obwód nadgarstka: 140 - 210 mm",
                      "Odporności: Wodoszczelność 5 ATM, Pyłoszczelność i wodoodporność",
                      "Czas pracy: do 14 dni normalnego użytkowania",
                      'Wyświetlacz: 1,43"',
                      "Rozdzielczość: 466 x 466 px",
                    ],
                    featureSummaryStructured: [
                      {
                        shortName: "Czujniki",
                        description: null,
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "Barometr",
                            description: null,
                          },
                          {
                            shortName: "Kompas",
                            description: null,
                          },
                          {
                            shortName: "Pulsoksymetr",
                            description: null,
                          },
                          {
                            shortName: "Pulsometr",
                            description: null,
                          },
                          {
                            shortName: "Termometr",
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "Nawigacja",
                        description:
                          "Wbudowany moduł GPS daje Ci dostęp do nawigacji satelitarnej i map oraz rejestrowania przebytych tras z poziomu zegarka, bez konieczności noszenia przy sobie smartfona. Jeśli zegarek korzysta z GPS w telefonie, musisz mieć przy sobie oba urządzenia.",
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "Tak",
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "Obwód nadgarstka",
                        description: null,
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "140 - 210 mm",
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "Odporności",
                        description:
                          "Jeśli szukasz inteligentnego zegarka, w którym będziesz mógł pływać, jeździć na rowerze w deszczu czy uprawiać biegi przełajowe, wybierz ten, który ma klasę wodoszczelności 5 ATM oraz normę IP68. Zegarki, które spełniają standard militarny MIL-STD-810G, są natomiast bardziej odporne na upadki, zmiany temperatury i ciśnienia, a także dużą wilgoć.",
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "Wodoszczelność 5 ATM",
                            description: null,
                          },
                          {
                            shortName: "Pyłoszczelność i wodoodporność",
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "Czas pracy",
                        description: null,
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "do 14 dni normalnego użytkowania",
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "Wyświetlacz",
                        description:
                          "Inteligentne zegarki, których przekątna wyświetlacza wynosi poniżej 1″ mają kształt smartbanda, czyli opaski sportowej z prostokątnym wyświetlaczem. Powyżej tej przekątnej są smartwatche z kwadratową lub okrągłą tarczą. Wyglądem przypominają one klasyczne zegarki i mają więcej przestrzeni roboczej, dzięki czemu można na nich wyświetlać bardziej złożone treści niż w przypadku smartbanda.",
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: '1,43"',
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "Rozdzielczość",
                        description: null,
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "466 x 466 px",
                            description: null,
                          },
                        ],
                      },
                    ],
                    availabilityStatus: "Available",
                    producerCode: "Phoinix-B19F",
                    installmentMinimum: null,
                    freeInstallment: false,
                    alternativeGroupId: null,
                    alternativeProducts: null,
                    oldPrice: null,
                    priceInfo: {
                      price: 999,
                      oldPrice: null,
                      isPriceVisible: true,
                      minPrice: null,
                    },
                    producer: {
                      id: "475",
                      name: "Huawei",
                    },
                    secondaryCategory: null,
                    isEsd: false,
                    esdType: "NotDefined",
                    isGiftCard: false,
                    promotionGainValue: null,
                    productLink: "USE_SELECTOR_PLZ",
                    photo: {
                      url: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-large,,2023/9/pr_2023_9_1_12_25_32_931_00.jpg",
                      thumbnailUrl:
                        "https://cdn.x-kom.pl/i/setup/images/prod/big/product-small,,2023/9/pr_2023_9_1_12_25_32_931_00.jpg",
                      urlTemplate:
                        "https://cdn.x-kom.pl/i/setup/images/prod/big/{SIZE},,2023/9/pr_2023_9_1_12_25_32_931_00.jpg",
                    },
                    rating: 5.82,
                    ratingFivePoints: 4.83,
                    ratingCount: 78,
                    commentsCount: 78,
                    freeShipping: true,
                    id: "1173688",
                    name: "Watch GT 4 Active 46mm",
                    price: 999,
                    promotionInfo: null,
                    category: {
                      id: "2435",
                      parentGroupId: "4",
                      parentGroupName: "Smartfony i smartwatche",
                    },
                    mark: null,
                  },
                  type: "Base",
                },
                {
                  product: {
                    featureSummary: [
                      "Czujniki: Akcelerometr, Pulsoksymetr, Pulsometr, Żyroskop, Czujnik ruchu",
                      "Odporności: Wodoszczelność 5 ATM",
                      "Czas pracy: do 16 dni normalnego użytkowania",
                      'Wyświetlacz: 1,62"',
                      "Rozdzielczość: 490 x 192 px",
                    ],
                    featureSummaryStructured: [
                      {
                        shortName: "Czujniki",
                        description: null,
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "Akcelerometr",
                            description: null,
                          },
                          {
                            shortName: "Pulsoksymetr",
                            description: null,
                          },
                          {
                            shortName: "Pulsometr",
                            description: null,
                          },
                          {
                            shortName: "Żyroskop",
                            description: null,
                          },
                          {
                            shortName: "Czujnik ruchu",
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "Odporności",
                        description:
                          "Jeśli szukasz inteligentnego zegarka, w którym będziesz mógł pływać, jeździć na rowerze w deszczu czy uprawiać biegi przełajowe, wybierz ten, który ma klasę wodoszczelności 5 ATM oraz normę IP68. Zegarki, które spełniają standard militarny MIL-STD-810G, są natomiast bardziej odporne na upadki, zmiany temperatury i ciśnienia, a także dużą wilgoć.",
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "Wodoszczelność 5 ATM",
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "Czas pracy",
                        description: null,
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "do 16 dni normalnego użytkowania",
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "Wyświetlacz",
                        description:
                          "Inteligentne zegarki, których przekątna wyświetlacza wynosi poniżej 1″ mają kształt smartbanda, czyli opaski sportowej z prostokątnym wyświetlaczem. Powyżej tej przekątnej są smartwatche z kwadratową lub okrągłą tarczą. Wyglądem przypominają one klasyczne zegarki i mają więcej przestrzeni roboczej, dzięki czemu można na nich wyświetlać bardziej złożone treści niż w przypadku smartbanda.",
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: '1,62"',
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "Rozdzielczość",
                        description: null,
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "490 x 192 px",
                            description: null,
                          },
                        ],
                      },
                    ],
                    availabilityStatus: "Available",
                    producerCode: "",
                    installmentMinimum: null,
                    freeInstallment: false,
                    alternativeGroupId: null,
                    alternativeProducts: null,
                    oldPrice: 149,
                    priceInfo: {
                      price: 144,
                      oldPrice: 149,
                      isPriceVisible: true,
                      minPrice: 149,
                    },
                    producer: {
                      id: "1023",
                      name: "Xiaomi",
                    },
                    secondaryCategory: null,
                    isEsd: false,
                    esdType: "NotDefined",
                    isGiftCard: false,
                    promotionGainValue: 5,
                    productLink: "USE_SELECTOR_PLZ",
                    photo: {
                      url: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-large,,2023/9/pr_2023_9_23_9_29_20_626_00.jpg",
                      thumbnailUrl:
                        "https://cdn.x-kom.pl/i/setup/images/prod/big/product-small,,2023/9/pr_2023_9_23_9_29_20_626_00.jpg",
                      urlTemplate:
                        "https://cdn.x-kom.pl/i/setup/images/prod/big/{SIZE},,2023/9/pr_2023_9_23_9_29_20_626_00.jpg",
                    },
                    rating: 5.8,
                    ratingFivePoints: 4.82,
                    ratingCount: 526,
                    commentsCount: 526,
                    freeShipping: false,
                    id: "1156561",
                    name: "Mi Band 8 Czarny",
                    price: 144,
                    promotionInfo: null,
                    category: {
                      id: "2521",
                      parentGroupId: "4",
                      parentGroupName: "Smartfony i smartwatche",
                    },
                  },
                  type: "Base",
                },
                {
                  product: {
                    featureSummary: [
                      "Typ: Sieciowa",
                      "Złącza: USB-C - 1 szt.",
                      "Moc: 20 W",
                      "Napięcie wyjściowe: 5 V - 12 V",
                      "Prąd wyjściowy: 1,67 A",
                    ],
                    featureSummaryStructured: [
                      {
                        shortName: "Typ",
                        description: null,
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "Sieciowa",
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "Złącza",
                        description: null,
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "USB-C - 1 szt.",
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "Moc",
                        description:
                          "Każda ładowarka obsługuje nieco inne natężenie prądu i napięcie, których iloraz daje moc ładowania, co w efekcie skutkuje dłuższym lub krótszym czasem zasilania urządzeń. To jednak zależy też od możliwości ładowanego urządzenia. Bardzo ważny jest standard ładowania.",
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "20 W",
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "Napięcie wyjściowe",
                        description:
                          "W woltach (V) wyrażane jest napięcie elektryczne. Metaforycznie można je opisać jako ciśnienie przepychające prąd elektryczny w stronę podłączonych do gniazdka urządzeń. Ładowarki są przystosowane do tego, by przyjęty z gniazdka sieciowego prąd przekazać do urządzeń mobilnych w bezpieczny i dostosowany do ich możliwości sposób.",
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "5 V - 12 V",
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "Prąd wyjściowy",
                        description:
                          "Liczba amperów (A) wyraża natężenie prądu. Jest to ładunek przepływający przez daną powierzchnię w określonym czasie. W specyfikacji ładowarek znajdziesz informację o maksymalnym natężeniu prądu przekazywanego przez akcesorium do urządzeń mobilnych.",
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "1,67 A",
                            description: null,
                          },
                        ],
                      },
                    ],
                    availabilityStatus: "Available",
                    producerCode: "SMA175",
                    installmentMinimum: null,
                    freeInstallment: false,
                    alternativeGroupId: null,
                    alternativeProducts: null,
                    oldPrice: null,
                    priceInfo: {
                      price: 39,
                      oldPrice: null,
                      isPriceVisible: true,
                      minPrice: null,
                    },
                    producer: {
                      id: "1546",
                      name: "Silver Monkey",
                    },
                    secondaryCategory: null,
                    isEsd: false,
                    esdType: "NotDefined",
                    isGiftCard: false,
                    promotionGainValue: null,
                    productLink: "USE_SELECTOR_PLZ",
                    photo: {
                      url: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-large,,2023/7/pr_2023_7_17_12_11_59_938_00.jpg",
                      thumbnailUrl:
                        "https://cdn.x-kom.pl/i/setup/images/prod/big/product-small,,2023/7/pr_2023_7_17_12_11_59_938_00.jpg",
                      urlTemplate:
                        "https://cdn.x-kom.pl/i/setup/images/prod/big/{SIZE},,2023/7/pr_2023_7_17_12_11_59_938_00.jpg",
                    },
                    rating: 5.92,
                    ratingFivePoints: 4.93,
                    ratingCount: 194,
                    commentsCount: 194,
                    freeShipping: false,
                    id: "1131249",
                    name: "Mini Ładowarka sieciowa PD 20W (USB-C) Biała",
                    price: 39,
                    promotionInfo: null,
                    category: {
                      id: "1837",
                      parentGroupId: "4",
                      parentGroupName: "Smartfony i smartwatche",
                    },
                    mark: null,
                  },
                  type: "Base",
                },
                {
                  product: {
                    featureSummary: [
                      "Kompatybilność: Uniwersalny do 6,8''",
                      "Typ: Opaska sportowa na ramię",
                      "Kolor: Czarny",
                    ],
                    featureSummaryStructured: [
                      {
                        shortName: "Kompatybilność",
                        description: null,
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "Uniwersalny do 6,8''",
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "Typ",
                        description: null,
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "Opaska sportowa na ramię",
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "Kolor",
                        description: null,
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "Czarny",
                            description: null,
                          },
                        ],
                      },
                    ],
                    availabilityStatus: "Available",
                    producerCode: "9589046924736",
                    installmentMinimum: null,
                    freeInstallment: false,
                    alternativeGroupId: null,
                    alternativeProducts: null,
                    oldPrice: null,
                    priceInfo: {
                      price: 39.99,
                      oldPrice: null,
                      isPriceVisible: true,
                      minPrice: null,
                    },
                    producer: {
                      id: "2284",
                      name: "Tech-Protect",
                    },
                    secondaryCategory: null,
                    isEsd: false,
                    esdType: "NotDefined",
                    isGiftCard: false,
                    promotionGainValue: null,
                    productLink: "USE_SELECTOR_PLZ",
                    photo: {
                      url: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-large,,2023/3/pr_2023_3_28_12_6_13_226_00.jpg",
                      thumbnailUrl:
                        "https://cdn.x-kom.pl/i/setup/images/prod/big/product-small,,2023/3/pr_2023_3_28_12_6_13_226_00.jpg",
                      urlTemplate:
                        "https://cdn.x-kom.pl/i/setup/images/prod/big/{SIZE},,2023/3/pr_2023_3_28_12_6_13_226_00.jpg",
                    },
                    rating: 4.5,
                    ratingFivePoints: 4,
                    ratingCount: 2,
                    commentsCount: 2,
                    freeShipping: false,
                    id: "1129723",
                    name: 'Uniwersalna Opaska Sportowa na Ramię M1 (do 6.8") czarna',
                    price: 39.99,
                    promotionInfo: null,
                    category: {
                      id: "2322",
                      parentGroupId: "4",
                      parentGroupName: "Smartfony i smartwatche",
                    },
                    mark: null,
                  },
                  type: "Base",
                },
                {
                  product: {
                    featureSummary: [
                      "Typ: Sieciowa",
                      "Złącza: USB-C - 2 szt., USB-A - 1 szt.",
                      "Moc: 65 W",
                      "Napięcie wyjściowe: 3,3 V - 20 V",
                      "Prąd wyjściowy: 1,5 A - 5 A",
                    ],
                    featureSummaryStructured: [
                      {
                        shortName: "Typ",
                        description: null,
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "Sieciowa",
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "Złącza",
                        description: null,
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "USB-C - 2 szt.",
                            description: null,
                          },
                          {
                            shortName: "USB-A - 1 szt.",
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "Moc",
                        description:
                          "Każda ładowarka obsługuje nieco inne natężenie prądu i napięcie, których iloraz daje moc ładowania, co w efekcie skutkuje dłuższym lub krótszym czasem zasilania urządzeń. To jednak zależy też od możliwości ładowanego urządzenia. Bardzo ważny jest standard ładowania.",
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "65 W",
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "Napięcie wyjściowe",
                        description:
                          "W woltach (V) wyrażane jest napięcie elektryczne. Metaforycznie można je opisać jako ciśnienie przepychające prąd elektryczny w stronę podłączonych do gniazdka urządzeń. Ładowarki są przystosowane do tego, by przyjęty z gniazdka sieciowego prąd przekazać do urządzeń mobilnych w bezpieczny i dostosowany do ich możliwości sposób.",
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "3,3 V - 20 V",
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "Prąd wyjściowy",
                        description:
                          "Liczba amperów (A) wyraża natężenie prądu. Jest to ładunek przepływający przez daną powierzchnię w określonym czasie. W specyfikacji ładowarek znajdziesz informację o maksymalnym natężeniu prądu przekazywanego przez akcesorium do urządzeń mobilnych.",
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "1,5 A - 5 A",
                            description: null,
                          },
                        ],
                      },
                    ],
                    availabilityStatus: "Available",
                    producerCode: "SMA149",
                    installmentMinimum: null,
                    freeInstallment: false,
                    alternativeGroupId: null,
                    alternativeProducts: null,
                    oldPrice: null,
                    priceInfo: {
                      price: 119,
                      oldPrice: null,
                      isPriceVisible: true,
                      minPrice: null,
                    },
                    producer: {
                      id: "1546",
                      name: "Silver Monkey",
                    },
                    secondaryCategory: null,
                    isEsd: false,
                    esdType: "NotDefined",
                    isGiftCard: false,
                    promotionGainValue: null,
                    productLink: "USE_SELECTOR_PLZ",
                    photo: {
                      url: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-large,,2023/9/pr_2023_9_15_13_37_38_896_00.jpg",
                      thumbnailUrl:
                        "https://cdn.x-kom.pl/i/setup/images/prod/big/product-small,,2023/9/pr_2023_9_15_13_37_38_896_00.jpg",
                      urlTemplate:
                        "https://cdn.x-kom.pl/i/setup/images/prod/big/{SIZE},,2023/9/pr_2023_9_15_13_37_38_896_00.jpg",
                    },
                    rating: 5.77,
                    ratingFivePoints: 4.79,
                    ratingCount: 1366,
                    commentsCount: 1366,
                    freeShipping: false,
                    id: "1097680",
                    name: "Ładowarka sieciowa GaN 65W USB-C PD USB 3.0 QC B",
                    price: 119,
                    promotionInfo: null,
                    category: {
                      id: "1837",
                      parentGroupId: "4",
                      parentGroupName: "Smartfony i smartwatche",
                    },
                    mark: null,
                  },
                  type: "Base",
                },
                {
                  product: {
                    featureSummary: [
                      "Typ uchwytu: Podstawka",
                      "Kompatybilność: Uniwersalny",
                      'Maksymalna wielkość urządzenia: 10"',
                    ],
                    featureSummaryStructured: [
                      {
                        shortName: "Typ uchwytu",
                        description: null,
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "Podstawka",
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "Kompatybilność",
                        description: null,
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "Uniwersalny",
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "Maksymalna wielkość urządzenia",
                        description: null,
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: '10"',
                            description: null,
                          },
                        ],
                      },
                    ],
                    availabilityStatus: "Available",
                    producerCode: "SMA146",
                    installmentMinimum: null,
                    freeInstallment: false,
                    alternativeGroupId: null,
                    alternativeProducts: null,
                    oldPrice: null,
                    priceInfo: {
                      price: 49,
                      oldPrice: null,
                      isPriceVisible: true,
                      minPrice: null,
                    },
                    producer: {
                      id: "1546",
                      name: "Silver Monkey",
                    },
                    secondaryCategory: null,
                    isEsd: false,
                    esdType: "NotDefined",
                    isGiftCard: false,
                    promotionGainValue: null,
                    productLink: "USE_SELECTOR_PLZ",
                    photo: {
                      url: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-large,,2023/4/pr_2023_4_27_10_22_6_925_00.jpg",
                      thumbnailUrl:
                        "https://cdn.x-kom.pl/i/setup/images/prod/big/product-small,,2023/4/pr_2023_4_27_10_22_6_925_00.jpg",
                      urlTemplate:
                        "https://cdn.x-kom.pl/i/setup/images/prod/big/{SIZE},,2023/4/pr_2023_4_27_10_22_6_925_00.jpg",
                    },
                    rating: 5.59,
                    ratingFivePoints: 4.66,
                    ratingCount: 110,
                    commentsCount: 110,
                    freeShipping: false,
                    id: "1094294",
                    name: "Phone Holder US-200",
                    price: 49,
                    promotionInfo: null,
                    category: {
                      id: "2171",
                      parentGroupId: "4",
                      parentGroupName: "Smartfony i smartwatche",
                    },
                    mark: null,
                  },
                  type: "Base",
                },
                {
                  product: {
                    featureSummary: [
                      "Typ: USB Typu-C - Minijack 3.5 mm",
                      "Zastosowanie: Audio",
                      "Długość: 6 cm",
                    ],
                    featureSummaryStructured: [
                      {
                        shortName: "Typ",
                        description: null,
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "USB Typu-C - Minijack 3.5 mm",
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "Zastosowanie",
                        description:
                          "Istnieje wiele typów kabli, takich jak audio, wideo, sieciowe, zasilające i ładowania. Kabel audio przesyła sygnały dźwiękowe. Kable video takie jak HDMI, DisplayPort, VGA i DVI przesyłają obraz. Kable sieciowe pozwalają łączyć infrastrukturę sieciową i przesyłać dane. Kable zasilające dostarczają energię do urządzeń elektrycznych, a ładujące zoptymalizowano pod kątem najwydajniejszego ładowania urządzeń przenośnych. Wybór kabla zależy od Twoich potrzeb i rodzaju urządzeń.",
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "Audio",
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "Długość",
                        description: null,
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "6 cm",
                            description: null,
                          },
                        ],
                      },
                    ],
                    availabilityStatus: "Available",
                    producerCode: "SMA137",
                    installmentMinimum: null,
                    freeInstallment: false,
                    alternativeGroupId: null,
                    alternativeProducts: null,
                    oldPrice: null,
                    priceInfo: {
                      price: 24.9,
                      oldPrice: null,
                      isPriceVisible: true,
                      minPrice: null,
                    },
                    producer: {
                      id: "1546",
                      name: "Silver Monkey",
                    },
                    secondaryCategory: null,
                    isEsd: false,
                    esdType: "NotDefined",
                    isGiftCard: false,
                    promotionGainValue: null,
                    productLink: "USE_SELECTOR_PLZ",
                    photo: {
                      url: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-large,,2023/7/pr_2023_7_17_11_43_55_253_00.jpg",
                      thumbnailUrl:
                        "https://cdn.x-kom.pl/i/setup/images/prod/big/product-small,,2023/7/pr_2023_7_17_11_43_55_253_00.jpg",
                      urlTemplate:
                        "https://cdn.x-kom.pl/i/setup/images/prod/big/{SIZE},,2023/7/pr_2023_7_17_11_43_55_253_00.jpg",
                    },
                    rating: 5.44,
                    ratingFivePoints: 4.54,
                    ratingCount: 180,
                    commentsCount: 180,
                    freeShipping: false,
                    id: "1093336",
                    name: "Adapter USB-C - minijack 3.5",
                    price: 24.9,
                    promotionInfo: null,
                    category: {
                      id: "271",
                      parentGroupId: "12",
                      parentGroupName: "Akcesoria",
                    },
                    mark: null,
                  },
                  type: "Base",
                },
                {
                  product: {
                    featureSummary: [
                      "Typ: USB - USB Typu-C",
                      "Zastosowanie: Transmisja danych, Ładowanie",
                      "Standard: USB 3.2 Gen. 1",
                      "Przepustowość: do 5 Gbit/s",
                      "Długość: 2 m",
                    ],
                    featureSummaryStructured: [
                      {
                        shortName: "Typ",
                        description: null,
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "USB - USB Typu-C",
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "Zastosowanie",
                        description:
                          "Istnieje wiele typów kabli, takich jak audio, wideo, sieciowe, zasilające i ładowania. Kabel audio przesyła sygnały dźwiękowe. Kable video takie jak HDMI, DisplayPort, VGA i DVI przesyłają obraz. Kable sieciowe pozwalają łączyć infrastrukturę sieciową i przesyłać dane. Kable zasilające dostarczają energię do urządzeń elektrycznych, a ładujące zoptymalizowano pod kątem najwydajniejszego ładowania urządzeń przenośnych. Wybór kabla zależy od Twoich potrzeb i rodzaju urządzeń.",
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "Transmisja danych",
                            description: null,
                          },
                          {
                            shortName: "Ładowanie",
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "Standard",
                        description: null,
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "USB 3.2 Gen. 1",
                            description:
                              "Wcześniej określany był jako 3.0 lub USB 3.1 Gen 1.",
                          },
                        ],
                      },
                      {
                        shortName: "Przepustowość",
                        description:
                          "Przepustowość kabla odnosi się do ilości danych, które można przesłać przez dany kabel w jednostce czasu. Większa przepustowość oznacza możliwość przesyłania większej ilości danych w krótszym czasie. Korzyści płynące z większej przepustowości to szybsze transferowanie plików, płynne strumieniowanie multimediów, skrócenie czasu oczekiwania na przesyłanie danych oraz lepszą wydajność w przypadku wymagających zastosowań, takich jak gry wideo czy przetwarzanie strumieniowe.",
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "do 5 Gbit/s",
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "Długość",
                        description: null,
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "2 m",
                            description: null,
                          },
                        ],
                      },
                    ],
                    availabilityStatus: "Available",
                    producerCode: "SMA038",
                    installmentMinimum: null,
                    freeInstallment: false,
                    alternativeGroupId: null,
                    alternativeProducts: null,
                    oldPrice: null,
                    priceInfo: {
                      price: 34.99,
                      oldPrice: null,
                      isPriceVisible: true,
                      minPrice: null,
                    },
                    producer: {
                      id: "1546",
                      name: "Silver Monkey",
                    },
                    secondaryCategory: null,
                    isEsd: false,
                    esdType: "NotDefined",
                    isGiftCard: false,
                    promotionGainValue: null,
                    productLink: "USE_SELECTOR_PLZ",
                    photo: {
                      url: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-large,,2022/8/pr_2022_8_23_7_51_38_800_00.jpg",
                      thumbnailUrl:
                        "https://cdn.x-kom.pl/i/setup/images/prod/big/product-small,,2022/8/pr_2022_8_23_7_51_38_800_00.jpg",
                      urlTemplate:
                        "https://cdn.x-kom.pl/i/setup/images/prod/big/{SIZE},,2022/8/pr_2022_8_23_7_51_38_800_00.jpg",
                    },
                    rating: 5.64,
                    ratingFivePoints: 4.69,
                    ratingCount: 919,
                    commentsCount: 919,
                    freeShipping: false,
                    id: "732284",
                    name: "Kabel USB-A na USB-C 2 m 45W",
                    price: 34.99,
                    promotionInfo: null,
                    category: {
                      id: "266",
                      parentGroupId: "12",
                      parentGroupName: "Akcesoria",
                    },
                    mark: null,
                  },
                  type: "Base",
                },
                {
                  product: {
                    featureSummary: [
                      "Typ: Samochodowa",
                      "Złącza: USB-C - 1 szt., USB-A - 1 szt.",
                      "Moc: 30 W",
                      "Napięcie wyjściowe: 4,5 V - 20 V",
                      "Prąd wyjściowy: 5 A",
                    ],
                    featureSummaryStructured: [
                      {
                        shortName: "Typ",
                        description: null,
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "Samochodowa",
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "Złącza",
                        description: null,
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "USB-C - 1 szt.",
                            description: null,
                          },
                          {
                            shortName: "USB-A - 1 szt.",
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "Moc",
                        description:
                          "Każda ładowarka obsługuje nieco inne natężenie prądu i napięcie, których iloraz daje moc ładowania, co w efekcie skutkuje dłuższym lub krótszym czasem zasilania urządzeń. To jednak zależy też od możliwości ładowanego urządzenia. Bardzo ważny jest standard ładowania.",
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "30 W",
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "Napięcie wyjściowe",
                        description:
                          "W woltach (V) wyrażane jest napięcie elektryczne. Metaforycznie można je opisać jako ciśnienie przepychające prąd elektryczny w stronę podłączonych do gniazdka urządzeń. Ładowarki są przystosowane do tego, by przyjęty z gniazdka sieciowego prąd przekazać do urządzeń mobilnych w bezpieczny i dostosowany do ich możliwości sposób.",
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "4,5 V - 20 V",
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "Prąd wyjściowy",
                        description:
                          "Liczba amperów (A) wyraża natężenie prądu. Jest to ładunek przepływający przez daną powierzchnię w określonym czasie. W specyfikacji ładowarek znajdziesz informację o maksymalnym natężeniu prądu przekazywanego przez akcesorium do urządzeń mobilnych.",
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "5 A",
                            description: null,
                          },
                        ],
                      },
                    ],
                    availabilityStatus: "Available",
                    producerCode: "PDQC-CPCT30-SM",
                    installmentMinimum: null,
                    freeInstallment: false,
                    alternativeGroupId: null,
                    alternativeProducts: null,
                    oldPrice: null,
                    priceInfo: {
                      price: 49.99,
                      oldPrice: null,
                      isPriceVisible: true,
                      minPrice: null,
                    },
                    producer: {
                      id: "1546",
                      name: "Silver Monkey",
                    },
                    secondaryCategory: null,
                    isEsd: false,
                    esdType: "NotDefined",
                    isGiftCard: false,
                    promotionGainValue: null,
                    productLink: "USE_SELECTOR_PLZ",
                    photo: {
                      url: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-large,,2022/5/pr_2022_5_10_11_51_0_683_04.jpg",
                      thumbnailUrl:
                        "https://cdn.x-kom.pl/i/setup/images/prod/big/product-small,,2022/5/pr_2022_5_10_11_51_0_683_04.jpg",
                      urlTemplate:
                        "https://cdn.x-kom.pl/i/setup/images/prod/big/{SIZE},,2022/5/pr_2022_5_10_11_51_0_683_04.jpg",
                    },
                    rating: 5.84,
                    ratingFivePoints: 4.86,
                    ratingCount: 269,
                    commentsCount: 269,
                    freeShipping: false,
                    id: "701760",
                    name: "Ładowarka samochodowa USB-C PD, USB-A QC, 30W",
                    price: 49.99,
                    promotionInfo: null,
                    category: {
                      id: "1837",
                      parentGroupId: "4",
                      parentGroupName: "Smartfony i smartwatche",
                    },
                    mark: null,
                  },
                  type: "Base",
                },
                {
                  product: {
                    featureSummary: [
                      "Pojemność: 10 000 mAh",
                      "Złącza: USB Typu-A, USB Typu-C",
                      "Rodzaj ogniwa: Litowo-polimerowy",
                      "Dodatkowe informacje: Ultra Charge, Wskaźnik LED, Możliwość ładowania trzech urządzeń jednocześnie, Zabezpieczenie termiczne, Zabezpieczenie przeciwzwarciowe, Zabezpieczenie przed nadmiernym rozładowaniem, Zabezpieczenie przed przeładowaniem",
                    ],
                    featureSummaryStructured: [
                      {
                        shortName: "Pojemność",
                        description: null,
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "10 000 mAh",
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "Złącza",
                        description: null,
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "USB Typu-A",
                            description: null,
                          },
                          {
                            shortName: "USB Typu-C",
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "Rodzaj ogniwa",
                        description: null,
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "Litowo-polimerowy",
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "Dodatkowe informacje",
                        description: null,
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "Ultra Charge",
                            description: null,
                          },
                          {
                            shortName: "Wskaźnik LED",
                            description: null,
                          },
                          {
                            shortName:
                              "Możliwość ładowania trzech urządzeń jednocześnie",
                            description: null,
                          },
                          {
                            shortName: "Zabezpieczenie termiczne",
                            description: null,
                          },
                          {
                            shortName: "Zabezpieczenie przeciwzwarciowe",
                            description: null,
                          },
                          {
                            shortName:
                              "Zabezpieczenie przed nadmiernym rozładowaniem",
                            description: null,
                          },
                          {
                            shortName: "Zabezpieczenie przed przeładowaniem",
                            description: null,
                          },
                        ],
                      },
                    ],
                    availabilityStatus: "Available",
                    producerCode: "PBGC02S",
                    installmentMinimum: null,
                    freeInstallment: false,
                    alternativeGroupId: null,
                    alternativeProducts: null,
                    oldPrice: null,
                    priceInfo: {
                      price: 79.9,
                      oldPrice: null,
                      isPriceVisible: true,
                      minPrice: null,
                    },
                    producer: {
                      id: "1839",
                      name: "Green Cell",
                    },
                    secondaryCategory: null,
                    isEsd: false,
                    esdType: "NotDefined",
                    isGiftCard: false,
                    promotionGainValue: null,
                    productLink: "USE_SELECTOR_PLZ",
                    photo: {
                      url: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-large,,2021/6/pr_2021_6_11_10_26_9_731_00.jpg",
                      thumbnailUrl:
                        "https://cdn.x-kom.pl/i/setup/images/prod/big/product-small,,2021/6/pr_2021_6_11_10_26_9_731_00.jpg",
                      urlTemplate:
                        "https://cdn.x-kom.pl/i/setup/images/prod/big/{SIZE},,2021/6/pr_2021_6_11_10_26_9_731_00.jpg",
                    },
                    rating: 5.75,
                    ratingFivePoints: 4.77,
                    ratingCount: 817,
                    commentsCount: 817,
                    freeShipping: true,
                    id: "660053",
                    name: "PowerPlay10S 10000mAh (2x USB-A 2x USB-C PD 18W)",
                    price: 79.9,
                    promotionInfo: null,
                    category: {
                      id: "2301",
                      parentGroupId: "4",
                      parentGroupName: "Smartfony i smartwatche",
                    },
                    mark: null,
                  },
                  type: "Base",
                },
                {
                  product: {
                    featureSummary: [
                      "Cena jednostkowa: 1,10 zł / szt.",
                      "Rodzaj: Wilgotne chusteczki czyszczące, IPA",
                      "Zastosowanie: Sprzęt komputerowy i biurowy",
                      "Liczba elementów w zestawie: 50",
                      "Wymiary złożonej chusteczki: 4x5cm, Wymiary rozłożonej chusteczki: 18x10cm",
                    ],
                    featureSummaryStructured: [
                      {
                        shortName: "Cena jednostkowa",
                        description: null,
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "1,10 zł / szt.",
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "Rodzaj",
                        description: null,
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "Wilgotne chusteczki czyszczące",
                            description: null,
                          },
                          {
                            shortName: "IPA",
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "Zastosowanie",
                        description: null,
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "Sprzęt komputerowy i biurowy",
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "Liczba elementów w zestawie",
                        description: null,
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "50",
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "",
                        description: null,
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "Wymiary złożonej chusteczki: 4x5cm",
                            description: null,
                          },
                          {
                            shortName: "Wymiary rozłożonej chusteczki: 18x10cm",
                            description: null,
                          },
                        ],
                      },
                    ],
                    availabilityStatus: "Available",
                    producerCode: "SM-IPA50",
                    installmentMinimum: null,
                    freeInstallment: false,
                    alternativeGroupId: null,
                    alternativeProducts: null,
                    oldPrice: null,
                    priceInfo: {
                      price: 54.99,
                      oldPrice: null,
                      isPriceVisible: true,
                      minPrice: null,
                    },
                    producer: {
                      id: "1546",
                      name: "Silver Monkey",
                    },
                    secondaryCategory: null,
                    isEsd: false,
                    esdType: "NotDefined",
                    isGiftCard: false,
                    promotionGainValue: null,
                    productLink: "USE_SELECTOR_PLZ",
                    photo: {
                      url: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-large,,2022/3/pr_2022_3_31_14_51_38_387_01.jpg",
                      thumbnailUrl:
                        "https://cdn.x-kom.pl/i/setup/images/prod/big/product-small,,2022/3/pr_2022_3_31_14_51_38_387_01.jpg",
                      urlTemplate:
                        "https://cdn.x-kom.pl/i/setup/images/prod/big/{SIZE},,2022/3/pr_2022_3_31_14_51_38_387_01.jpg",
                    },
                    rating: 5.66,
                    ratingFivePoints: 4.7,
                    ratingCount: 183,
                    commentsCount: 183,
                    freeShipping: false,
                    id: "650579",
                    name: "Chusteczki nawilżane IPA 50szt.",
                    price: 54.99,
                    promotionInfo: null,
                    category: {
                      id: "378",
                      parentGroupId: "12",
                      parentGroupName: "Akcesoria",
                    },
                    mark: null,
                  },
                  type: "Base",
                },
                {
                  product: {
                    featureSummary: [
                      "Typ uchwytu: Samochodowy",
                      "Kompatybilność: Uniwersalny",
                      "Sposób montażu: Przyssawka",
                      'Maksymalna wielkość urządzenia: 6,9"',
                    ],
                    featureSummaryStructured: [
                      {
                        shortName: "Typ uchwytu",
                        description: null,
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "Samochodowy",
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "Kompatybilność",
                        description: null,
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "Uniwersalny",
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "Sposób montażu",
                        description: null,
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "Przyssawka",
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "Maksymalna wielkość urządzenia",
                        description: null,
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: '6,9"',
                            description: null,
                          },
                        ],
                      },
                    ],
                    availabilityStatus: "Available",
                    producerCode: "CM-PRM-SM",
                    installmentMinimum: null,
                    freeInstallment: false,
                    alternativeGroupId: null,
                    alternativeProducts: null,
                    oldPrice: null,
                    priceInfo: {
                      price: 129.99,
                      oldPrice: null,
                      isPriceVisible: true,
                      minPrice: null,
                    },
                    producer: {
                      id: "1546",
                      name: "Silver Monkey",
                    },
                    secondaryCategory: null,
                    isEsd: false,
                    esdType: "NotDefined",
                    isGiftCard: false,
                    promotionGainValue: null,
                    productLink: "USE_SELECTOR_PLZ",
                    photo: {
                      url: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-large,,2021/7/pr_2021_7_14_9_55_25_11_04.jpg",
                      thumbnailUrl:
                        "https://cdn.x-kom.pl/i/setup/images/prod/big/product-small,,2021/7/pr_2021_7_14_9_55_25_11_04.jpg",
                      urlTemplate:
                        "https://cdn.x-kom.pl/i/setup/images/prod/big/{SIZE},,2021/7/pr_2021_7_14_9_55_25_11_04.jpg",
                    },
                    rating: 5.8,
                    ratingFivePoints: 4.82,
                    ratingCount: 1006,
                    commentsCount: 1006,
                    freeShipping: false,
                    id: "634657",
                    name: "Uniwersalny Uchwyt Premium do Szyby i Kokpitu",
                    price: 129.99,
                    promotionInfo: null,
                    category: {
                      id: "2171",
                      parentGroupId: "4",
                      parentGroupName: "Smartfony i smartwatche",
                    },
                    mark: null,
                  },
                  type: "Base",
                },
                {
                  product: {
                    featureSummary: [
                      "Cena jednostkowa: 24,99 zł / 100 ml",
                      "Rodzaj: Zestaw do czyszczenia",
                      "Zastosowanie: Do ekranów monitorów, Do plastików, Tablety i smartfony, Sprzęt komputerowy i biurowy",
                      "Zawartość: Ściereczka z mikrofibry, Płyn czyszczący",
                      "Pojemność: 100 ml",
                      "Liczba elementów w zestawie: 2",
                      "Nie pozostawia smug",
                    ],
                    featureSummaryStructured: [
                      {
                        shortName: "Cena jednostkowa",
                        description: null,
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "24,99 zł / 100 ml",
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "Rodzaj",
                        description: null,
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "Zestaw do czyszczenia",
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "Zastosowanie",
                        description: null,
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "Do ekranów monitorów",
                            description: null,
                          },
                          {
                            shortName: "Do plastików",
                            description: null,
                          },
                          {
                            shortName: "Tablety i smartfony",
                            description: null,
                          },
                          {
                            shortName: "Sprzęt komputerowy i biurowy",
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "Zawartość",
                        description: null,
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "Ściereczka z mikrofibry",
                            description: null,
                          },
                          {
                            shortName: "Płyn czyszczący",
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "Pojemność",
                        description: null,
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "100 ml",
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "Liczba elementów w zestawie",
                        description: null,
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "2",
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "",
                        description: null,
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "Nie pozostawia smug",
                            description: null,
                          },
                        ],
                      },
                    ],
                    availabilityStatus: "Available",
                    producerCode: "SM-UCS100",
                    installmentMinimum: null,
                    freeInstallment: false,
                    alternativeGroupId: null,
                    alternativeProducts: null,
                    oldPrice: null,
                    priceInfo: {
                      price: 24.99,
                      oldPrice: null,
                      isPriceVisible: true,
                      minPrice: null,
                    },
                    producer: {
                      id: "1546",
                      name: "Silver Monkey",
                    },
                    secondaryCategory: null,
                    isEsd: false,
                    esdType: "NotDefined",
                    isGiftCard: false,
                    promotionGainValue: null,
                    productLink: "USE_SELECTOR_PLZ",
                    photo: {
                      url: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-large,,2022/5/pr_2022_5_31_9_1_19_964_00.jpg",
                      thumbnailUrl:
                        "https://cdn.x-kom.pl/i/setup/images/prod/big/product-small,,2022/5/pr_2022_5_31_9_1_19_964_00.jpg",
                      urlTemplate:
                        "https://cdn.x-kom.pl/i/setup/images/prod/big/{SIZE},,2022/5/pr_2022_5_31_9_1_19_964_00.jpg",
                    },
                    rating: 5.85,
                    ratingFivePoints: 4.86,
                    ratingCount: 1343,
                    commentsCount: 1343,
                    freeShipping: false,
                    id: "614050",
                    name: "LCD Ultra Clean Set 100ml - zestaw czyszczący",
                    price: 24.99,
                    promotionInfo: null,
                    category: {
                      id: "378",
                      parentGroupId: "12",
                      parentGroupName: "Akcesoria",
                    },
                    mark: null,
                  },
                  type: "Base",
                },
                {
                  product: {
                    featureSummary: [
                      "Typ uchwytu: Samochodowy",
                      "Kompatybilność: Uniwersalny",
                      "Sposób montażu: Przyssawka",
                      'Maksymalna wielkość urządzenia: 8"',
                    ],
                    featureSummaryStructured: [
                      {
                        shortName: "Typ uchwytu",
                        description: null,
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "Samochodowy",
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "Kompatybilność",
                        description: null,
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "Uniwersalny",
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "Sposób montażu",
                        description: null,
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "Przyssawka",
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "Maksymalna wielkość urządzenia",
                        description: null,
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: '8"',
                            description: null,
                          },
                        ],
                      },
                    ],
                    availabilityStatus: "Available",
                    producerCode: "HLCRIO171AM",
                    installmentMinimum: null,
                    freeInstallment: false,
                    alternativeGroupId: null,
                    alternativeProducts: null,
                    oldPrice: null,
                    priceInfo: {
                      price: 109,
                      oldPrice: null,
                      isPriceVisible: true,
                      minPrice: null,
                    },
                    producer: {
                      id: "981",
                      name: "iOttie",
                    },
                    secondaryCategory: null,
                    isEsd: false,
                    esdType: "NotDefined",
                    isGiftCard: false,
                    promotionGainValue: null,
                    productLink: "USE_SELECTOR_PLZ",
                    photo: {
                      url: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-large,,2020/10/pr_2020_10_16_14_58_35_663_02.jpg",
                      thumbnailUrl:
                        "https://cdn.x-kom.pl/i/setup/images/prod/big/product-small,,2020/10/pr_2020_10_16_14_58_35_663_02.jpg",
                      urlTemplate:
                        "https://cdn.x-kom.pl/i/setup/images/prod/big/{SIZE},,2020/10/pr_2020_10_16_14_58_35_663_02.jpg",
                    },
                    rating: 5.79,
                    ratingFivePoints: 4.82,
                    ratingCount: 185,
                    commentsCount: 185,
                    freeShipping: false,
                    id: "599385",
                    name: "Easy One Touch 5 do Szyby i Kokpitu",
                    price: 109,
                    promotionInfo: null,
                    category: {
                      id: "2171",
                      parentGroupId: "4",
                      parentGroupName: "Smartfony i smartwatche",
                    },
                    mark: null,
                  },
                  type: "Base",
                },
                {
                  product: {
                    featureSummary: [
                      "Typ: micro USB - USB Typu-C",
                      "Zastosowanie: Transmisja danych, Audio, Wideo",
                      "Standard: USB 2.0",
                    ],
                    featureSummaryStructured: [
                      {
                        shortName: "Typ",
                        description: null,
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "micro USB - USB Typu-C",
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "Zastosowanie",
                        description:
                          "Istnieje wiele typów kabli, takich jak audio, wideo, sieciowe, zasilające i ładowania. Kabel audio przesyła sygnały dźwiękowe. Kable video takie jak HDMI, DisplayPort, VGA i DVI przesyłają obraz. Kable sieciowe pozwalają łączyć infrastrukturę sieciową i przesyłać dane. Kable zasilające dostarczają energię do urządzeń elektrycznych, a ładujące zoptymalizowano pod kątem najwydajniejszego ładowania urządzeń przenośnych. Wybór kabla zależy od Twoich potrzeb i rodzaju urządzeń.",
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "Transmisja danych",
                            description: null,
                          },
                          {
                            shortName: "Audio",
                            description: null,
                          },
                          {
                            shortName: "Wideo",
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "Standard",
                        description: null,
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "USB 2.0",
                            description: null,
                          },
                        ],
                      },
                    ],
                    availabilityStatus: "Available",
                    producerCode: "CM-AD001SM",
                    installmentMinimum: null,
                    freeInstallment: false,
                    alternativeGroupId: null,
                    alternativeProducts: null,
                    oldPrice: null,
                    priceInfo: {
                      price: 14.99,
                      oldPrice: null,
                      isPriceVisible: true,
                      minPrice: null,
                    },
                    producer: {
                      id: "1546",
                      name: "Silver Monkey",
                    },
                    secondaryCategory: null,
                    isEsd: false,
                    esdType: "NotDefined",
                    isGiftCard: false,
                    promotionGainValue: null,
                    productLink: "USE_SELECTOR_PLZ",
                    photo: {
                      url: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-large,,2020/12/pr_2020_12_2_8_16_24_631_03.jpg",
                      thumbnailUrl:
                        "https://cdn.x-kom.pl/i/setup/images/prod/big/product-small,,2020/12/pr_2020_12_2_8_16_24_631_03.jpg",
                      urlTemplate:
                        "https://cdn.x-kom.pl/i/setup/images/prod/big/{SIZE},,2020/12/pr_2020_12_2_8_16_24_631_03.jpg",
                    },
                    rating: 5.86,
                    ratingFivePoints: 4.87,
                    ratingCount: 126,
                    commentsCount: 126,
                    freeShipping: false,
                    id: "567534",
                    name: "Adapter micro USB - USB C",
                    price: 14.99,
                    promotionInfo: null,
                    category: {
                      id: "271",
                      parentGroupId: "12",
                      parentGroupName: "Akcesoria",
                    },
                    mark: null,
                  },
                  type: "Base",
                },
                {
                  product: {
                    featureSummary: [
                      "Typ: Sieciowa",
                      "Złącza: USB-A - 5 szt.",
                      "Kabel w zestawie: Kabel zasilający",
                      "Moc: 52 W",
                      "Napięcie wyjściowe: 5 V - 12 V",
                      "Prąd wyjściowy: 1,5 A, 2,4 A",
                    ],
                    featureSummaryStructured: [
                      {
                        shortName: "Typ",
                        description: null,
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "Sieciowa",
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "Złącza",
                        description: null,
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "USB-A - 5 szt.",
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "Kabel w zestawie",
                        description: null,
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "Kabel zasilający",
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "Moc",
                        description:
                          "Każda ładowarka obsługuje nieco inne natężenie prądu i napięcie, których iloraz daje moc ładowania, co w efekcie skutkuje dłuższym lub krótszym czasem zasilania urządzeń. To jednak zależy też od możliwości ładowanego urządzenia. Bardzo ważny jest standard ładowania.",
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "52 W",
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "Napięcie wyjściowe",
                        description:
                          "W woltach (V) wyrażane jest napięcie elektryczne. Metaforycznie można je opisać jako ciśnienie przepychające prąd elektryczny w stronę podłączonych do gniazdka urządzeń. Ładowarki są przystosowane do tego, by przyjęty z gniazdka sieciowego prąd przekazać do urządzeń mobilnych w bezpieczny i dostosowany do ich możliwości sposób.",
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "5 V - 12 V",
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "Prąd wyjściowy",
                        description:
                          "Liczba amperów (A) wyraża natężenie prądu. Jest to ładunek przepływający przez daną powierzchnię w określonym czasie. W specyfikacji ładowarek znajdziesz informację o maksymalnym natężeniu prądu przekazywanego przez akcesorium do urządzeń mobilnych.",
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "1,5 A",
                            description: null,
                          },
                          {
                            shortName: "2,4 A",
                            description: null,
                          },
                        ],
                      },
                    ],
                    availabilityStatus: "Available",
                    producerCode: "CHARGC05",
                    installmentMinimum: null,
                    freeInstallment: false,
                    alternativeGroupId: null,
                    alternativeProducts: null,
                    oldPrice: null,
                    priceInfo: {
                      price: 79,
                      oldPrice: null,
                      isPriceVisible: true,
                      minPrice: null,
                    },
                    producer: {
                      id: "1839",
                      name: "Green Cell",
                    },
                    secondaryCategory: null,
                    isEsd: false,
                    esdType: "NotDefined",
                    isGiftCard: false,
                    promotionGainValue: null,
                    productLink: "USE_SELECTOR_PLZ",
                    photo: {
                      url: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-large,,2020/3/pr_2020_3_5_13_9_20_985_00.jpg",
                      thumbnailUrl:
                        "https://cdn.x-kom.pl/i/setup/images/prod/big/product-small,,2020/3/pr_2020_3_5_13_9_20_985_00.jpg",
                      urlTemplate:
                        "https://cdn.x-kom.pl/i/setup/images/prod/big/{SIZE},,2020/3/pr_2020_3_5_13_9_20_985_00.jpg",
                    },
                    rating: 5.76,
                    ratingFivePoints: 4.79,
                    ratingCount: 173,
                    commentsCount: 173,
                    freeShipping: false,
                    id: "548697",
                    name: "Ładowarka sieciowa ChargeSource5 (5x USB, 52W)",
                    price: 79,
                    promotionInfo: null,
                    category: {
                      id: "1837",
                      parentGroupId: "4",
                      parentGroupName: "Smartfony i smartwatche",
                    },
                    mark: null,
                  },
                  type: "Base",
                },
                {
                  product: {
                    featureSummary: [
                      "Typ: microSDXC",
                      "Pojemność: 128 GB",
                      "Klasa prędkości: U1, V10, A1",
                      "Prędkość odczytu (maks.): 100 MB/s",
                      "Prędkość zapisu (min.): 10 MB/s",
                      "Adapter z microSD do SD",
                    ],
                    featureSummaryStructured: [
                      {
                        shortName: "Typ",
                        description: null,
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "microSDXC",
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "Pojemność",
                        description:
                          "Pojemność pamięci flash jest kluczowym parametrem. Od niej przecież zależy, ile zmieścisz na urządzeniu dokumentów, zdjęć lub wielu filmów w jakości Full HD. Niekiedy różnice pomiędzy ceną większej a mniejszej pamięci są niewielkie. Lepiej wówczas wybrać większą pojemność nośnika danych – nigdy nie wiesz, czy nie będziesz potrzebować kilku dodatkowych gigabajtów.",
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "128 GB",
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "Klasa prędkości",
                        description:
                          "Klasa szybkości to jeden z kluczowych parametrów karty pamięci. To ona definiuje z jaką szybkością można transferować pliki, zapisywać zdjęcia i rejestrować filmy. Najprościej rzecz ujmując – im wyższa klasa szybkości, tym lepsze osiągi ma karta pamięci.",
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "U1",
                            description: null,
                          },
                          {
                            shortName: "V10",
                            description: null,
                          },
                          {
                            shortName: "A1",
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "Prędkość odczytu (maks.)",
                        description: null,
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "100 MB/s",
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "Prędkość zapisu (min.)",
                        description: null,
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "10 MB/s",
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "",
                        description: null,
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "Adapter z microSD do SD",
                            description: null,
                          },
                        ],
                      },
                    ],
                    availabilityStatus: "Available",
                    producerCode: "SDCS2/128GB",
                    installmentMinimum: null,
                    freeInstallment: false,
                    alternativeGroupId: null,
                    alternativeProducts: null,
                    oldPrice: null,
                    priceInfo: {
                      price: 49,
                      oldPrice: null,
                      isPriceVisible: true,
                      minPrice: null,
                    },
                    producer: {
                      id: "59",
                      name: "Kingston",
                    },
                    secondaryCategory: null,
                    isEsd: false,
                    esdType: "NotDefined",
                    isGiftCard: false,
                    promotionGainValue: null,
                    productLink: "USE_SELECTOR_PLZ",
                    photo: {
                      url: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-large,,2019/10/pr_2019_10_21_8_29_17_437_01.jpg",
                      thumbnailUrl:
                        "https://cdn.x-kom.pl/i/setup/images/prod/big/product-small,,2019/10/pr_2019_10_21_8_29_17_437_01.jpg",
                      urlTemplate:
                        "https://cdn.x-kom.pl/i/setup/images/prod/big/{SIZE},,2019/10/pr_2019_10_21_8_29_17_437_01.jpg",
                    },
                    rating: 5.83,
                    ratingFivePoints: 4.85,
                    ratingCount: 703,
                    commentsCount: 703,
                    freeShipping: false,
                    id: "522795",
                    name: "128GB microSDXC Canvas Select Plus 100MB/s",
                    price: 49,
                    promotionInfo: null,
                    category: {
                      id: "979",
                      parentGroupId: "4",
                      parentGroupName: "Smartfony i smartwatche",
                    },
                    mark: null,
                  },
                  type: "Base",
                },
                {
                  product: {
                    featureSummary: [
                      "Typ: microSDXC",
                      "Pojemność: 64 GB",
                      "Klasa prędkości: U1, V10, A1",
                      "Prędkość odczytu (maks.): 100 MB/s",
                      "Prędkość zapisu (min.): 10 MB/s",
                      "Adapter z microSD do SD",
                    ],
                    featureSummaryStructured: [
                      {
                        shortName: "Typ",
                        description: null,
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "microSDXC",
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "Pojemność",
                        description:
                          "Pojemność pamięci flash jest kluczowym parametrem. Od niej przecież zależy, ile zmieścisz na urządzeniu dokumentów, zdjęć lub wielu filmów w jakości Full HD. Niekiedy różnice pomiędzy ceną większej a mniejszej pamięci są niewielkie. Lepiej wówczas wybrać większą pojemność nośnika danych – nigdy nie wiesz, czy nie będziesz potrzebować kilku dodatkowych gigabajtów.",
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "64 GB",
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "Klasa prędkości",
                        description:
                          "Klasa szybkości to jeden z kluczowych parametrów karty pamięci. To ona definiuje z jaką szybkością można transferować pliki, zapisywać zdjęcia i rejestrować filmy. Najprościej rzecz ujmując – im wyższa klasa szybkości, tym lepsze osiągi ma karta pamięci.",
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "U1",
                            description: null,
                          },
                          {
                            shortName: "V10",
                            description: null,
                          },
                          {
                            shortName: "A1",
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "Prędkość odczytu (maks.)",
                        description: null,
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "100 MB/s",
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "Prędkość zapisu (min.)",
                        description: null,
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "10 MB/s",
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "",
                        description: null,
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "Adapter z microSD do SD",
                            description: null,
                          },
                        ],
                      },
                    ],
                    availabilityStatus: "Available",
                    producerCode: "SDCS2/64GB",
                    installmentMinimum: null,
                    freeInstallment: false,
                    alternativeGroupId: null,
                    alternativeProducts: null,
                    oldPrice: null,
                    priceInfo: {
                      price: 35,
                      oldPrice: null,
                      isPriceVisible: true,
                      minPrice: null,
                    },
                    producer: {
                      id: "59",
                      name: "Kingston",
                    },
                    secondaryCategory: null,
                    isEsd: false,
                    esdType: "NotDefined",
                    isGiftCard: false,
                    promotionGainValue: null,
                    productLink: "USE_SELECTOR_PLZ",
                    photo: {
                      url: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-large,,2019/10/pr_2019_10_21_8_27_10_608_01.jpg",
                      thumbnailUrl:
                        "https://cdn.x-kom.pl/i/setup/images/prod/big/product-small,,2019/10/pr_2019_10_21_8_27_10_608_01.jpg",
                      urlTemplate:
                        "https://cdn.x-kom.pl/i/setup/images/prod/big/{SIZE},,2019/10/pr_2019_10_21_8_27_10_608_01.jpg",
                    },
                    rating: 5.83,
                    ratingFivePoints: 4.85,
                    ratingCount: 703,
                    commentsCount: 703,
                    freeShipping: false,
                    id: "522794",
                    name: "64GB microSDXC Canvas Select Plus 100MB/s",
                    price: 35,
                    promotionInfo: null,
                    category: {
                      id: "979",
                      parentGroupId: "4",
                      parentGroupName: "Smartfony i smartwatche",
                    },
                    mark: null,
                  },
                  type: "Base",
                },
                {
                  product: {
                    featureSummary: [
                      "Typ uchwytu: Samochodowy",
                      "Kompatybilność: Uniwersalny",
                      "Sposób montażu: Zaciski",
                    ],
                    featureSummaryStructured: [
                      {
                        shortName: "Typ uchwytu",
                        description: null,
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "Samochodowy",
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "Kompatybilność",
                        description: null,
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "Uniwersalny",
                            description: null,
                          },
                        ],
                      },
                      {
                        shortName: "Sposób montażu",
                        description: null,
                        valueSeparator: ", ",
                        valueGroups: [
                          {
                            shortName: "Zaciski",
                            description: null,
                          },
                        ],
                      },
                    ],
                    availabilityStatus: "Available",
                    producerCode: "000CG20879",
                    installmentMinimum: null,
                    freeInstallment: false,
                    alternativeGroupId: null,
                    alternativeProducts: null,
                    oldPrice: null,
                    priceInfo: {
                      price: 69,
                      oldPrice: null,
                      isPriceVisible: true,
                      minPrice: null,
                    },
                    producer: {
                      id: "876",
                      name: "Spigen",
                    },
                    secondaryCategory: null,
                    isEsd: false,
                    esdType: "NotDefined",
                    isGiftCard: false,
                    promotionGainValue: null,
                    productLink: "USE_SELECTOR_PLZ",
                    photo: {
                      url: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-large,,2018/3/pr_2018_3_6_15_22_55_141_00.jpg",
                      thumbnailUrl:
                        "https://cdn.x-kom.pl/i/setup/images/prod/big/product-small,,2018/3/pr_2018_3_6_15_22_55_141_00.jpg",
                      urlTemplate:
                        "https://cdn.x-kom.pl/i/setup/images/prod/big/{SIZE},,2018/3/pr_2018_3_6_15_22_55_141_00.jpg",
                    },
                    rating: 5.88,
                    ratingFivePoints: 4.88,
                    ratingCount: 80,
                    commentsCount: 80,
                    freeShipping: false,
                    id: "412391",
                    name: "QS11 Magnetyczny do Kratki Wentylacyjnej",
                    price: 69,
                    promotionInfo: null,
                    category: {
                      id: "2171",
                      parentGroupId: "4",
                      parentGroupName: "Smartfony i smartwatche",
                    },
                    mark: null,
                  },
                  type: "Base",
                },
              ],
              orderIn: "2024-09-12T22:00:00.000Z",
              timeToBuy: "2024-09-12T13:59:43Z",
              onlineAvailability: {
                lastItemsLeft: {
                  showLabel: false,
                },
                availabilityText: " ",
                deliveryText: "Kup teraz - zamówienie otrzymasz już jutro",
                deliveryDate: "2024-09-12T22:00:00Z",
                availabilityTooltipHtml:
                  '<div class="AvailabilityTooltipHtml">Termin realizacji może ulec zmianie, jeśli:\n\t\t\t\t\t\t\t <ul>\n\t\t\t\t\t\t\t    <li>skorzystasz z usługi montażu;</li>\n\t\t\t\t\t\t\t    <li>zamówienie obejmuje produkty z dłuższym czasem realizacji zamówienia - wysyłka następuje po skompletowaniu całego zamówienia;</li>\n\t\t\t\t\t\t\t    <li>jako formę płatności wybierzesz przelew lub raty - wysyłka następuje po otrzymaniu przez nas płatności na konto lub informacji o przyznaniu kredytu ratalnego;</li>\n\t\t\t\t\t\t\t    <li>dodasz uwagi do zamówienia</li>\n\t\t\t\t\t\t\t </ul></div>',
                expiredAfterMinutes: 514,
                availabilityCode: "available",
                expirationTime: "2024-09-12T13:59:43Z",
              },
              promotionGainValue: null,
              alternativeProducts: [],
              isFetching: false,
            },
            "1278133": {
              price: 2199,
              priceInfo: {
                price: 2199,
                oldPrice: null,
                isPriceVisible: true,
                minPrice: null,
              },
              productLink: "USE_SELECTOR_PLZ",
              isEsd: false,
              id: "1278133",
              name: "Watch 10 46/Onyks Aluminum/Czarny Pasek Sportowy M/L GPS",
              rating: 0,
              ratingFivePoints: 0,
              ratingCount: 0,
              producer: {
                id: "357",
                name: "Apple",
              },
              category: {
                id: "2435",
                singularName: "Inteligentne zegarki",
                name: "Inteligentne zegarki",
                parentGroupId: "4",
                parentCategoryId: "1924",
                parentCategoryName: "Inteligentne zegarki",
                parentGroupName: "Smartfony i smartwatche",
              },
              availabilityStatus: "Available",
              mark: "Presale",
              photo: {
                urlTemplate:
                  "https://cdn.x-kom.pl/i/setup/images/prod/big/{SIZE},,2024/9/pr_2024_9_10_0_36_9_820_00.jpg",
              },
              isFetching: false,
            },
            "1278719": {
              price: 649,
              priceInfo: {
                price: 649,
                oldPrice: null,
                isPriceVisible: true,
                minPrice: null,
              },
              productLink: "USE_SELECTOR_PLZ",
              isEsd: false,
              id: "1278719",
              name: "AirPods 4. generacji",
              rating: 0,
              ratingFivePoints: 0,
              ratingCount: 0,
              producer: {
                id: "357",
                name: "Apple",
              },
              category: {
                id: "2748",
                singularName: "Słuchawki",
                name: "Słuchawki",
                parentGroupId: "4",
                parentCategoryId: "1215",
                parentCategoryName: "Słuchawki",
                parentGroupName: "Smartfony i smartwatche",
              },
              availabilityStatus: "Available",
              mark: "Presale",
              photo: {
                urlTemplate:
                  "https://cdn.x-kom.pl/i/setup/images/prod/big/{SIZE},,2024/9/pr_2024_9_9_23_13_52_839_00.jpg",
              },
              isFetching: false,
            },
          },
          baskets: {},
          promotions: {},
          news: {
            newsList: {
              "4412": {
                id: "4412",
                title: "Jaki aparat kupić? Fotografia dla początkujących",
                sections: null,
                mainPhoto: {
                  url: "https://cdn.x-kom.pl/i/setup/images/news/news-small,,4412-news-small-4767-mini--1-aparaty-foto.png",
                  thumbnailUrl:
                    "https://cdn.x-kom.pl/i/setup/images/news/news-small,,4412-news-small-4767-mini--1-aparaty-foto.png",
                  urlTemplate:
                    "https://cdn.x-kom.pl/i/setup/images/news/news-{SIZE},,4412-news-small-4767-mini--1-aparaty-foto.png",
                },
                header:
                  "Życie początkującego fotografa&nbsp;ma kilka etap&oacute;w. Na początku robisz zdjęcia za pomocą tego, co masz pod ręką. Potem zauważasz, że Twoim kadrom brakuje głębi, kolor&oacute;w... Por&oacute;wnujesz je z cudzymi pracami i widzisz, że aparat w telefonie już nie wystarcza. Czas zainwestować w lepszy sprzęt. W artykule doradzimy Ci, jaki wybrać.",
                publicationTime: "2024-03-11T07:50:00Z",
                commentsCount: 40,
                webUrl:
                  "https://www.x-kom.pl/poradniki/4412-jaki-aparat-kupic-fotografia-dla-poczatkujacych.html",
                category: "Poradniki",
                isFetching: false,
              },
              "4567": {
                id: "4567",
                title:
                  "Jaki serwer NAS wybrać? Tworzymy domowe centrum multimedialne",
                sections: null,
                mainPhoto: {
                  url: "https://cdn.x-kom.pl/i/setup/images/news/news-small,,4567-news-small-4567-260x225-dyski-nas-centrum-multimedialne.png",
                  thumbnailUrl:
                    "https://cdn.x-kom.pl/i/setup/images/news/news-small,,4567-news-small-4567-260x225-dyski-nas-centrum-multimedialne.png",
                  urlTemplate:
                    "https://cdn.x-kom.pl/i/setup/images/news/news-{SIZE},,4567-news-small-4567-260x225-dyski-nas-centrum-multimedialne.png",
                },
                header:
                  "Jeśli NAS kojarzy Ci się jedynie z amerykańską NASA, koniecznie przeczytaj nasz artykuł i dowiedz się, czym naprawdę&nbsp;jest dysk sieciowy. Poznaj też pełne spectrum jego zalet. Podpowiemy Ci r&oacute;wnież, jak w prosty spos&oacute;b stworzyć swoje domowe centrum multimedialne.",
                publicationTime: "2023-12-19T10:20:00Z",
                commentsCount: 30,
                webUrl:
                  "https://www.x-kom.pl/poradniki/4567-jaki-serwer-nas-wybrac-tworzymy-domowe-centrum-multimedialne.html",
                category: "Poradniki",
                isFetching: false,
              },
              "4780": {
                id: "4780",
                title:
                  "Wideorejestrator samochodowy. Jak wybrać? Dlaczego warto go mieć?",
                sections: null,
                mainPhoto: {
                  url: "https://cdn.x-kom.pl/i/setup/images/news/news-small,,4780-news-small-4857-mini-widerorejestratory.png",
                  thumbnailUrl:
                    "https://cdn.x-kom.pl/i/setup/images/news/news-small,,4780-news-small-4857-mini-widerorejestratory.png",
                  urlTemplate:
                    "https://cdn.x-kom.pl/i/setup/images/news/news-{SIZE},,4780-news-small-4857-mini-widerorejestratory.png",
                },
                header:
                  "Wideorejestrator, kamera samochodowa, rejestrator jazdy. Istnieją trzy sposoby nazwania tego samego urządzenia, kt&oacute;re nagrywa to, co dzieje się przed maską samochodu podczas jazdy, a czasem nawet na parkingu. Podpowiadamy dlaczego warto go mieć, w jakich sytuacjach jest pomocny i jak wybrać optymalny model.",
                publicationTime: "2024-06-06T10:00:00Z",
                commentsCount: 20,
                webUrl:
                  "https://www.x-kom.pl/poradniki/4780-wideorejestrator-samochodowy-jak-wybrac-dlaczego-warto-go-miec.html",
                category: "Poradniki",
                isFetching: false,
              },
              "4820": {
                id: "4820",
                title: "SalesMasters: sposób na zarabianie w Internecie",
                sections: null,
                mainPhoto: {
                  url: "https://cdn.x-kom.pl/i/setup/images/news/news-small,,7258ddb376224d30b92ba23c346563c9.jpg",
                  thumbnailUrl:
                    "https://cdn.x-kom.pl/i/setup/images/news/news-small,,7258ddb376224d30b92ba23c346563c9.jpg",
                  urlTemplate:
                    "https://cdn.x-kom.pl/i/setup/images/news/news-{SIZE},,7258ddb376224d30b92ba23c346563c9.jpg",
                },
                header:
                  "Polecasz produkty znajomym lub obserwatorom w Twoich socialach?&nbsp;Chcesz zarabiać na tym prowizję dla siebie?&nbsp;Jeśli tak, to mamy dla Ciebie dobrą wiadomość. SalesMasters pozwoli Ci zmonetyzować swoją wiedzę i pasję.&nbsp;",
                publicationTime: "2024-06-01T06:00:00Z",
                commentsCount: 32,
                webUrl:
                  "https://www.x-kom.pl/poradniki/4820-salesmasters-sposob-na-zarabianie-w-internecie.html",
                category: "Poradniki",
                isFetching: false,
              },
              "4886": {
                id: "4886",
                title: "Jaki powerbank wybrać do smartfona i tabletu?",
                sections: null,
                mainPhoto: {
                  url: "https://cdn.x-kom.pl/i/setup/images/news/news-small,,4886-mini-poradnik-xkom-powerbank.jpg",
                  thumbnailUrl:
                    "https://cdn.x-kom.pl/i/setup/images/news/news-small,,4886-mini-poradnik-xkom-powerbank.jpg",
                  urlTemplate:
                    "https://cdn.x-kom.pl/i/setup/images/news/news-{SIZE},,4886-mini-poradnik-xkom-powerbank.jpg",
                },
                header:
                  "Dzięki powerbankowi&nbsp;uchronisz swojego&nbsp;smartfona, czy tableta&nbsp;przed rozładowaniem. Przenośny akumulator&nbsp;doskonale sprawdzi się także&nbsp;w sytuacji, gdy nie masz dostępu do gniazdka i tradycyjnego zasilania. W niniejszym poradniku poznasz rodzaje i zalety, jakie mają powerbanki. Dowiesz się także, jaki&nbsp;model wybrać i na co skierować&nbsp;uwagę przy jego zakupie. Miłej lektury.",
                publicationTime: "2024-08-27T06:00:00Z",
                commentsCount: 30,
                webUrl:
                  "https://www.x-kom.pl/poradniki/4886-jaki-powerbank-wybrac-do-smartfona-i-tabletu.html",
                category: "Poradniki",
                isFetching: false,
              },
              "5046": {
                id: "5046",
                title:
                  "Jaki komputer i akcesoria dla ucznia? Wybieramy technologiczne pomoce naukowe",
                sections: null,
                mainPhoto: {
                  url: "https://cdn.x-kom.pl/i/setup/images/news/news-small,,3e16c708562a4e3183b8d2a7aaa91730.jpg",
                  thumbnailUrl:
                    "https://cdn.x-kom.pl/i/setup/images/news/news-small,,3e16c708562a4e3183b8d2a7aaa91730.jpg",
                  urlTemplate:
                    "https://cdn.x-kom.pl/i/setup/images/news/news-{SIZE},,3e16c708562a4e3183b8d2a7aaa91730.jpg",
                },
                header:
                  "Rok szkolny nabiera rozpędu. Przed uczniami testy, sprawdziany, referaty i wypracowania. Jak skutecznie się do nich przygotować? Oczywiście za pomocą technologii! Wtedy na pewno nie zabraknie czasu na naukę, a p&oacute;źniej nawet rozrywkę. Poznaj urządzenia, kt&oacute;re zapewnią uczniowi komfortowe rozwijanie wiedzy, a po godzinach dostarczą zasłużonego relaksu.",
                publicationTime: "2024-08-22T13:05:00Z",
                commentsCount: 2,
                webUrl:
                  "https://www.x-kom.pl/poradniki/5046-jaki-komputer-i-akcesoria-dla-ucznia-wybieramy-technologiczne-pomoce-naukowe.html",
                category: "Poradniki",
                isFetching: false,
              },
              "5261": {
                id: "5261",
                title:
                  "Tych noworocznych postanowień dotrzymasz. Radzimy, jak to zrobić",
                sections: null,
                mainPhoto: {
                  url: "https://cdn.x-kom.pl/i/setup/images/news/news-small,,5261-news-small-5261-mini-postanowienia-noworoczne.png",
                  thumbnailUrl:
                    "https://cdn.x-kom.pl/i/setup/images/news/news-small,,5261-news-small-5261-mini-postanowienia-noworoczne.png",
                  urlTemplate:
                    "https://cdn.x-kom.pl/i/setup/images/news/news-{SIZE},,5261-news-small-5261-mini-postanowienia-noworoczne.png",
                },
                header:
                  "Co roku to samo: w pierwszych tygodniach stycznia siłownie są pełne, karnety i sprzęt sportowy sprzedają się jak świeże bułeczki, a firmy zajmujące się cateringiem dietetycznym mają ręce pełne roboty. Już pod koniec stycznia (lub nieco p&oacute;źniej) wszystko wraca do normy. U Ciebie też? Mamy na to spos&oacute;b.",
                publicationTime: "2023-12-18T07:10:00Z",
                commentsCount: 3,
                webUrl:
                  "https://www.x-kom.pl/poradniki/5261-tych-noworocznych-postanowien-dotrzymasz-radzimy-jak-to-zrobic.html",
                category: "Poradniki",
                isFetching: false,
              },
              "5504": {
                id: "5504",
                title:
                  "Jaki prezent na Dzień Dziecka? Odkryj technologiczne inspiracje",
                sections: null,
                mainPhoto: {
                  url: "https://cdn.x-kom.pl/i/setup/images/news/news-small,,5504-mini-poradnik-xkom-prezent-dzien-dziecka.jpg",
                  thumbnailUrl:
                    "https://cdn.x-kom.pl/i/setup/images/news/news-small,,5504-mini-poradnik-xkom-prezent-dzien-dziecka.jpg",
                  urlTemplate:
                    "https://cdn.x-kom.pl/i/setup/images/news/news-{SIZE},,5504-mini-poradnik-xkom-prezent-dzien-dziecka.jpg",
                },
                header:
                  "Wymarzony prezent na Dzień Dziecka? Niezapomniana przygoda. Szybowanie w przestworzach, znalezienie niezwykłego miejsca, g&oacute;rska wyprawa. Odkryj przed swoją pociechą piękno świata, podaruj jej nowe pasje i mn&oacute;stwo radości. Z poradnika dowiesz się, w jaki spos&oacute;b pomoże Ci w tym technologia.",
                publicationTime: "2024-05-22T08:00:00Z",
                commentsCount: 4,
                webUrl:
                  "https://www.x-kom.pl/poradniki/5504-jaki-prezent-na-dzien-dziecka-odkryj-technologiczne-inspiracje.html",
                category: "Poradniki",
                isFetching: false,
              },
              "5570": {
                id: "5570",
                title:
                  "Smartwatch, smartband, zegarek sportowy czy monitor aktywności? Który wybrać? Poradnik",
                sections: null,
                mainPhoto: {
                  url: "https://cdn.x-kom.pl/i/setup/images/news/news-small,,5570-mini-poradnik-xkom-smartwatch.jpg",
                  thumbnailUrl:
                    "https://cdn.x-kom.pl/i/setup/images/news/news-small,,5570-mini-poradnik-xkom-smartwatch.jpg",
                  urlTemplate:
                    "https://cdn.x-kom.pl/i/setup/images/news/news-{SIZE},,5570-mini-poradnik-xkom-smartwatch.jpg",
                },
                header:
                  "Kiedyś zapewnianie sobie codziennej dawki ruchu wymagało większej samodyscypliny&hellip; i dobrej pamięci lub notesu. Dzisiaj masz do dyspozycji akcesoria, takie jak smartwatche i smartbandy, kt&oacute;re same zapisują Twoją aktywność, a nawet wyznaczają Ci codzienne cele. Dzięki nim nie stracisz motywacji do dbania o zdrowie. Dowiedz się więcej na ten temat.",
                publicationTime: "2024-08-26T11:25:00Z",
                commentsCount: 10,
                webUrl:
                  "https://www.x-kom.pl/poradniki/5570-smartwatch-smartband-zegarek-sportowy-czy-monitor-aktywnosci-ktory-wybrac-poradnik.html",
                category: "Poradniki",
                isFetching: false,
              },
              "5631": {
                id: "5631",
                title: "Jak korzystać z list zakupów x-kom?",
                sections: null,
                mainPhoto: {
                  url: "https://cdn.x-kom.pl/i/setup/images/news/news-small,,5631-mini.png",
                  thumbnailUrl:
                    "https://cdn.x-kom.pl/i/setup/images/news/news-small,,5631-mini.png",
                  urlTemplate:
                    "https://cdn.x-kom.pl/i/setup/images/news/news-{SIZE},,5631-mini.png",
                },
                header:
                  "Listy zakup&oacute;w to funkcjonalność, dzięki kt&oacute;rej wygodnie i szybko podzielisz się polecanymi produktami. Zamiast przesyłać kilka czy kilkanaście link&oacute;w do produkt&oacute;w wystarczy jeden, zawierający je wszystkie. Dowiedz się, jak stworzyć, zarządzać i korzystać z list zakup&oacute;w.",
                publicationTime: "2024-03-18T06:30:00Z",
                commentsCount: 28,
                webUrl:
                  "https://www.x-kom.pl/poradniki/5631-jak-korzystac-z-list-zakupow-x-kom.html",
                category: "Poradniki",
                isFetching: false,
              },
              "5965": {
                id: "5965",
                title:
                  "Akcesoria dla sportowców, czyli co przyda się podczas treningu?",
                sections: null,
                mainPhoto: {
                  url: "https://cdn.x-kom.pl/i/setup/images/news/news-small,,5965-mini-outline.png",
                  thumbnailUrl:
                    "https://cdn.x-kom.pl/i/setup/images/news/news-small,,5965-mini-outline.png",
                  urlTemplate:
                    "https://cdn.x-kom.pl/i/setup/images/news/news-{SIZE},,5965-mini-outline.png",
                },
                header:
                  "Nie ma nic przyjemniejszego, niż czerpanie satysfakcji z pokonywania własnych słabości. Pom&oacute;c może w tym np. solidny trening. Jak&nbsp; jednak się do niego dobrze przygotować?&nbsp;Na początek zadbaj, aby był on odpowiednio ułożony. P&oacute;źniej upewnij się, czy masz gadżety, kt&oacute;re pomogą zweryfikować postępy i osiągać kolejne cele. Sprawdź, co warto mieć przy sobie w drodze po sukces. Przeczytaj poradnik i odkryj produkty, kt&oacute;re sprawdzą się podczas treningu i każdej innej aktywności.&nbsp;",
                publicationTime: "2024-06-05T07:05:00Z",
                commentsCount: 6,
                webUrl:
                  "https://www.x-kom.pl/poradniki/5965-akcesoria-dla-sportowcow-czyli-co-przyda-sie-podczas-treningu.html",
                category: "Poradniki",
                isFetching: false,
              },
              "6151": {
                id: "6151",
                title:
                  "Technologiczny prezent na komunię 2024. Co na komunię dla dziewczynki, a co dla chłopca?",
                sections: null,
                mainPhoto: {
                  url: "https://cdn.x-kom.pl/i/setup/images/news/news-small,,6151-mini-poradnik-xkom-prezent-komunia.jpg",
                  thumbnailUrl:
                    "https://cdn.x-kom.pl/i/setup/images/news/news-small,,6151-mini-poradnik-xkom-prezent-komunia.jpg",
                  urlTemplate:
                    "https://cdn.x-kom.pl/i/setup/images/news/news-{SIZE},,6151-mini-poradnik-xkom-prezent-komunia.jpg",
                },
                header:
                  "Sprzęty elektroniczne to dzisiaj jedne z najpopularniejszych prezent&oacute;w na komunię. Zar&oacute;wno chłopcy jaki i dziewczynki lubią technologiczne gadżety. Jednak te urządzenia to nie tylko zabawki. Dzieciaki wykorzystują przecież komputery czy tablety do nauki i odrabiania lekcji. Dzięki czytnikowi e-book&oacute;w albo smartfonowi z dobrym aparatem przystępujący do komunii&nbsp; młody człowiek może rozwijać swoje pasje i zainteresowania. Co zatem kupić, by prezent dał dziecku radość, a jednocześnie stanowił praktyczny podarunek? Znajdźmy najlepszy prezent na komunię dla dziewczynki i chłopca.",
                publicationTime: "2024-04-12T08:20:00Z",
                commentsCount: 3,
                webUrl:
                  "https://www.x-kom.pl/poradniki/6151-technologiczny-prezent-na-komunie-2024-co-na-komunie-dla-dziewczynki-a-co-dla-chlopca.html",
                category: "Poradniki",
                isFetching: false,
              },
              "6321": {
                id: "6321",
                title:
                  "Jak technologia może pomóc dziecku w nauce? Wybieramy gadżety na nowy rok szkolny",
                sections: null,
                mainPhoto: {
                  url: "https://cdn.x-kom.pl/i/setup/images/news/news-small,,6321-mini-article.jpg",
                  thumbnailUrl:
                    "https://cdn.x-kom.pl/i/setup/images/news/news-small,,6321-mini-article.jpg",
                  urlTemplate:
                    "https://cdn.x-kom.pl/i/setup/images/news/news-{SIZE},,6321-mini-article.jpg",
                },
                header:
                  "Przyznajmy,&nbsp;dzieci dosłownie chłoną nowe technologie, często zawstydzając przy tym starsze pokolenia. Ze zdumiewającą łatwością przyswajają sobie wszystkie nowinki, wykorzystując ich potencjał w praktyce. Warto mieć to na uwadze&nbsp;w perspektywie nadchodzącego roku szkolnego. Poniższy poradnik opowie zatem o gadżetach, kt&oacute;re pomogą zachęcić najmłodszych do nauki. &nbsp;",
                publicationTime: "2024-08-22T10:03:00Z",
                commentsCount: 0,
                webUrl:
                  "https://www.x-kom.pl/poradniki/6321-jak-technologia-moze-pomoc-dziecku-w-nauce-wybieramy-gadzety-na-nowy-rok-szkolny.html",
                category: "Poradniki",
                isFetching: false,
              },
              "7485": {
                id: "7485",
                title: "Pokój gracza. Jak urządzić pokój gamingowy?",
                sections: null,
                mainPhoto: {
                  url: "https://cdn.x-kom.pl/i/setup/images/news/news-small,,7485-pokoj-gracza-mini.jpg",
                  thumbnailUrl:
                    "https://cdn.x-kom.pl/i/setup/images/news/news-small,,7485-pokoj-gracza-mini.jpg",
                  urlTemplate:
                    "https://cdn.x-kom.pl/i/setup/images/news/news-{SIZE},,7485-pokoj-gracza-mini.jpg",
                },
                header:
                  "Każdy gracz zasługuje na własny gaming room, w kt&oacute;rym będzie czuł się jak Wiedźmin Geralt w Kaer Morhen czy V w Afterlife. Nie tylko jakość samej gry, ale r&oacute;wnież miejsce rozgrywki może wpływać na to, jaką przyjemność czerpie się z ogrywania danego tytułu, dlatego warto stworzyć sw&oacute;j pok&oacute;j gracza i zadbać o każdy jego szczeg&oacute;ł. Co powinno się w nim znaleźć?",
                publicationTime: "2024-09-05T09:45:00Z",
                commentsCount: 23,
                webUrl:
                  "https://www.x-kom.pl/poradniki/7485-pokoj-gracza-jak-urzadzic-pokoj-gamingowy.html",
                category: "Poradniki",
                isFetching: false,
              },
              "9388": {
                id: "9388",
                title: "Śpiesz się – wystartowała wyprzedaż outletów",
                sections: null,
                mainPhoto: {
                  url: "https://cdn.x-kom.pl/i/setup/images/news/news-small,,976c81b9279c4fb9bdda0f05504f6881.jpg",
                  thumbnailUrl:
                    "https://cdn.x-kom.pl/i/setup/images/news/news-small,,976c81b9279c4fb9bdda0f05504f6881.jpg",
                  urlTemplate:
                    "https://cdn.x-kom.pl/i/setup/images/news/news-{SIZE},,976c81b9279c4fb9bdda0f05504f6881.jpg",
                },
                header:
                  "Outlety w x-komowym stylu znowu w wyprzedaży. Produkty sprawdzone i z gwarancją w jeszcze niższych cenach.&nbsp;W tej edycji do sprzedaży zn&oacute;w trafiły podzespoły komputerowe. Ale pamiętaj, liczba produkt&oacute;w jest ograniczona.",
                publicationTime: "2024-08-29T07:00:00Z",
                commentsCount: 8,
                webUrl:
                  "https://www.x-kom.pl/aktualnosci/9388-spiesz-sie-wystartowala-wyprzedaz-outletow.html",
                category: "Aktualnosci",
                isFetching: false,
              },
              "9391": {
                id: "9391",
                title:
                  "Stadionowa atmosfera w domu. Telewizory Ambilight do oglądania piłki nożnej",
                sections: null,
                mainPhoto: {
                  url: "https://cdn.x-kom.pl/i/setup/images/news/news-small,,86d5ea657d724cb09f94f7331af49ea6.jpg",
                  thumbnailUrl:
                    "https://cdn.x-kom.pl/i/setup/images/news/news-small,,86d5ea657d724cb09f94f7331af49ea6.jpg",
                  urlTemplate:
                    "https://cdn.x-kom.pl/i/setup/images/news/news-{SIZE},,86d5ea657d724cb09f94f7331af49ea6.jpg",
                },
                header:
                  "Telewizor z klimatycznym podświetleniem to coś, co każdy chce mieć w domu. Mowa tu o technologii Ambilight, kt&oacute;ra oferuje zupełnie nowe doznania wizualne. System przydaje się nie tylko podczas oglądania film&oacute;w i seriali, ale także może zwiększyć emocje podczas oglądania mecz&oacute;w piłkarskich oraz innych wydarzeń sportowych. Ten poradnik podpowie Ci, jak wykorzystać Ambilight, by&nbsp;stworzyć stadionową atmosferę w Twoim domu.",
                publicationTime: "2024-06-19T07:00:00Z",
                commentsCount: 1,
                webUrl:
                  "https://www.x-kom.pl/poradniki/9391-stadionowa-atmosfera-w-domu-telewizory-ambilight-do-ogladania-pilki-noznej.html",
                category: "Poradniki",
                isFetching: false,
              },
              "9392": {
                id: "9392",
                title: "AceZone A-Spire Wireless – gamingowy headset premium",
                sections: null,
                mainPhoto: {
                  url: "https://cdn.x-kom.pl/i/setup/images/news/news-small,,5569b13aec284c8c91f46d3c58b937cb.jpg",
                  thumbnailUrl:
                    "https://cdn.x-kom.pl/i/setup/images/news/news-small,,5569b13aec284c8c91f46d3c58b937cb.jpg",
                  urlTemplate:
                    "https://cdn.x-kom.pl/i/setup/images/news/news-{SIZE},,5569b13aec284c8c91f46d3c58b937cb.jpg",
                },
                header:
                  "Chcesz być o krok przed innymi w każdej rozgrywce? Wybierz najlepszy headset i usłysz to, czego nie usłyszy przeciwnik. AceZone A-Spire Wireless to słuchawki gamingowe, kt&oacute;re umożliwiają precyzyjne wykrywanie dźwięk&oacute;w w grze. Wyposażone są w redukcję szum&oacute;w zaprojektowaną z myślą o grach multiplayer. Ciesz się się doskonałym dźwiękiem i lepszą wydajność podczas rozgrywek.",
                publicationTime: "2024-09-06T10:41:00Z",
                commentsCount: 0,
                webUrl:
                  "https://www.x-kom.pl/aktualnosci/9392-acezone-a-spire-wireless-gamingowy-headset-premium.html",
                category: "Aktualnosci",
                isFetching: false,
              },
              "9402": {
                id: "9402",
                title:
                  "Poznaj nowe obudowy SMX. Konstrukcje niemal na każdą kieszeń",
                sections: null,
                mainPhoto: {
                  url: "https://cdn.x-kom.pl/i/setup/images/news/news-small,,f4a0634a86814075abfe8bb47014d794.jpg",
                  thumbnailUrl:
                    "https://cdn.x-kom.pl/i/setup/images/news/news-small,,f4a0634a86814075abfe8bb47014d794.jpg",
                  urlTemplate:
                    "https://cdn.x-kom.pl/i/setup/images/news/news-{SIZE},,f4a0634a86814075abfe8bb47014d794.jpg",
                },
                header:
                  "Oferta na obudowy marki SMX rozszerza się o kolejne modele, kt&oacute;re sprawdzą się zar&oacute;wno w biurowych, jak i gamingowych komputerach. Dużo&nbsp;przestrzeni na komponenty i spore możliwości montażowe, odpowiednia cyrkulacja powietrza, bogaty zestaw wentylator&oacute;w i wyr&oacute;żniający się design &ndash; sprawdź, co producent przyszykował nowego w obudowach od SMX.",
                publicationTime: "2024-08-19T06:25:00Z",
                commentsCount: 0,
                webUrl:
                  "https://www.x-kom.pl/aktualnosci/9402-poznaj-nowe-obudowy-smx-konstrukcje-niemal-na-kazda-kieszen.html",
                category: "Aktualnosci",
                isFetching: false,
              },
              "9429": {
                id: "9429",
                title:
                  "Powrót do szkoły z x-komem. Akcja Back To School – co tydzień nowe promocje",
                sections: null,
                mainPhoto: {
                  url: "https://cdn.x-kom.pl/i/setup/images/news/news-small,,40211804a1344fafb6d62932fda3d73f.jpg",
                  thumbnailUrl:
                    "https://cdn.x-kom.pl/i/setup/images/news/news-small,,40211804a1344fafb6d62932fda3d73f.jpg",
                  urlTemplate:
                    "https://cdn.x-kom.pl/i/setup/images/news/news-{SIZE},,40211804a1344fafb6d62932fda3d73f.jpg",
                },
                header:
                  "Uczniu, studencie, przygotuj się na pierwszy dzwonek z x-komem. Skorzystaj z promocji na nowy rok szkolny i skompletuj swoją technologiczna wyprawkę. W naszym sklepie co tydzień &ndash; przez cztery tygodnie &ndash; czekają na Ciebie rabaty na wybrane kategorie sprzętowe. Nie przegap okazji.",
                publicationTime: "2024-09-09T07:00:00Z",
                commentsCount: 0,
                webUrl:
                  "https://www.x-kom.pl/aktualnosci/9429-powrot-do-szkoly-z-x-komem-akcja-back-to-school-co-tydzien-nowe-promocje.html",
                category: "Aktualnosci",
                isFetching: false,
              },
              "9440": {
                id: "9440",
                title:
                  "Skorzystaj z rat 0% na fotele oraz biurka Silver Monkey i SMX",
                sections: null,
                mainPhoto: {
                  url: "https://cdn.x-kom.pl/i/setup/images/news/news-small,,fc8642503f5141fbb7e8339000549944.jpg",
                  thumbnailUrl:
                    "https://cdn.x-kom.pl/i/setup/images/news/news-small,,fc8642503f5141fbb7e8339000549944.jpg",
                  urlTemplate:
                    "https://cdn.x-kom.pl/i/setup/images/news/news-{SIZE},,fc8642503f5141fbb7e8339000549944.jpg",
                },
                header:
                  "Początek roku szkolnego nie musi być ciężki, a zwłaszcza z nowym biurkiem lub krzesłem. A teraz w sklepie x-kom trafia się idealna okazja, aby dobrać potrzebne produkty w korzystnych ratach 0%. Co trzeba zrobić, aby z niej skorzystać?",
                publicationTime: "2024-08-19T06:52:00Z",
                commentsCount: 0,
                webUrl:
                  "https://www.x-kom.pl/aktualnosci/9440-skorzystaj-z-rat-0-na-fotele-oraz-biurka-silver-monkey-i-smx.html",
                category: "Aktualnosci",
                isFetching: false,
              },
              "9441": {
                id: "9441",
                title:
                  "Skorzystaj z super zniżek na akcesoria gamingowe SteelSeries",
                sections: null,
                mainPhoto: {
                  url: "https://cdn.x-kom.pl/i/setup/images/news/news-small,,e5056cfeacc044dc8f65085d794cdc09.jpg",
                  thumbnailUrl:
                    "https://cdn.x-kom.pl/i/setup/images/news/news-small,,e5056cfeacc044dc8f65085d794cdc09.jpg",
                  urlTemplate:
                    "https://cdn.x-kom.pl/i/setup/images/news/news-{SIZE},,e5056cfeacc044dc8f65085d794cdc09.jpg",
                },
                header:
                  "Najlepsze akcesoria dla graczy. Potrzebujesz nowej myszki, klawiatury, słuchawek czy mikrofonu? Skorzystaj z promocji na akcesoria SteelSeries w x-komie. Zgarnij super rabaty i zbuduj wymarzone stanowisko gamingowe.",
                publicationTime: "2024-08-22T08:10:00Z",
                commentsCount: 1,
                webUrl:
                  "https://www.x-kom.pl/aktualnosci/9441-skorzystaj-z-super-znizek-na-akcesoria-gamingowe-steelseries.html",
                category: "Aktualnosci",
                isFetching: false,
              },
              "9442": {
                id: "9442",
                title:
                  "Apple ogłosiło datę jesiennej konferencji – zapisz się do newslettera i bądź na bieżąco z premierami",
                sections: null,
                mainPhoto: {
                  url: "https://cdn.x-kom.pl/i/setup/images/news/news-small,,00bab6b148d549a19a71fa2142f903f0.jpg",
                  thumbnailUrl:
                    "https://cdn.x-kom.pl/i/setup/images/news/news-small,,00bab6b148d549a19a71fa2142f903f0.jpg",
                  urlTemplate:
                    "https://cdn.x-kom.pl/i/setup/images/news/news-{SIZE},,00bab6b148d549a19a71fa2142f903f0.jpg",
                },
                header:
                  "Apple ogłosiło datę jesiennej konferencji. Podczas wydarzenia gigant z Cupertino prawdopodobnie zamierza zaprezentować nowe urządzenia. Event &bdquo;It&rsquo;s Glowtime&rdquo; odbędzie się w poniedziałek&nbsp;9 września 2024 roku. Jeśli nie chcesz, aby ominęła Cię żadna premiera, zapisz się do naszego newslettera. Zrobisz to szybko i łatwo.&nbsp;&nbsp;",
                publicationTime: "2024-08-27T12:22:00Z",
                commentsCount: 0,
                webUrl:
                  "https://www.x-kom.pl/aktualnosci/9442-apple-oglosilo-date-jesiennej-konferencji-zapisz-sie-do-newslettera-i-badz-na-biezaco-z-premierami.html",
                category: "Aktualnosci",
                isFetching: false,
              },
              "9445": {
                id: "9445",
                title:
                  "Michał Sikorski radzi, jak wykorzystać Copilot. Poznaj funkcje AI w Microsoft 365 i skorzystaj z promocji",
                sections: null,
                mainPhoto: {
                  url: "https://cdn.x-kom.pl/i/setup/images/news/news-small,,e0a0d9731d424068ae41746891941308.jpg",
                  thumbnailUrl:
                    "https://cdn.x-kom.pl/i/setup/images/news/news-small,,e0a0d9731d424068ae41746891941308.jpg",
                  urlTemplate:
                    "https://cdn.x-kom.pl/i/setup/images/news/news-{SIZE},,e0a0d9731d424068ae41746891941308.jpg",
                },
                header:
                  "Pamiętasz praktykanta &ndash; kandydata na nauczyciela &ndash; granego w naszym spocie reklamowym przez Michała Sikorskiego? Poprzednio sprzedawał uczniom po kryjomu sprzęty elektroniczne. W kolejnej kampanii x-komu doradzi młodzieży, jak wyznać miłość albo nam&oacute;wić chłopaka do słuchania KPOPu. Pomoże mu w tym sztuczna inteligencja od Microsoftu. Dowiedz się, jak ułatwi Ci życie nowy Microsoft 365&nbsp;z asystentem AI Copilot.",
                publicationTime: "2024-08-30T13:23:00Z",
                commentsCount: 0,
                webUrl:
                  "https://www.x-kom.pl/aktualnosci/9445-michal-sikorski-radzi-jak-wykorzystac-copilot-poznaj-funkcje-ai-w-microsoft-365-i-skorzystaj-z-promocji.html",
                category: "Aktualnosci",
                isFetching: false,
              },
              "9447": {
                id: "9447",
                title:
                  "Podsumowanie konferencji Apple – iPhone 16 oficjalnie zaprezentowany",
                sections: null,
                mainPhoto: {
                  url: "https://cdn.x-kom.pl/i/setup/images/news/news-small,,3d2728689e8b4e45a60bd8c0c0b0ef2e.jpg",
                  thumbnailUrl:
                    "https://cdn.x-kom.pl/i/setup/images/news/news-small,,3d2728689e8b4e45a60bd8c0c0b0ef2e.jpg",
                  urlTemplate:
                    "https://cdn.x-kom.pl/i/setup/images/news/news-{SIZE},,3d2728689e8b4e45a60bd8c0c0b0ef2e.jpg",
                },
                header:
                  "Za nami długo wyczekiwana konferencja Apple. Miała na niej&nbsp;miejsce premiera iPhone&rsquo;a 16. Poza nowymi&nbsp;smartfonami&nbsp;Tim Cook i ekipa z Cupertino zaprezentowała r&oacute;wnież nowe produkty &ndash; Apple iPhone 16, Apple Watch 10 i Apple AirPods 4. Oto podsumowanie tego, co działo się na wrześniowym eventcie Apple.&nbsp;",
                publicationTime: "2024-09-09T19:40:00Z",
                commentsCount: 11,
                webUrl:
                  "https://www.x-kom.pl/aktualnosci/9447-podsumowanie-konferencji-apple-iphone-16-oficjalnie-zaprezentowany.html",
                category: "Aktualnosci",
                isFetching: false,
              },
              "9448": {
                id: "9448",
                title: "Kup sprzęt Hisense i zyskaj nawet do 5000 zł zwrotu",
                sections: null,
                mainPhoto: {
                  url: "https://cdn.x-kom.pl/i/setup/images/news/news-small,,d6360caa765045f1ac450e34d8f281c3.jpg",
                  thumbnailUrl:
                    "https://cdn.x-kom.pl/i/setup/images/news/news-small,,d6360caa765045f1ac450e34d8f281c3.jpg",
                  urlTemplate:
                    "https://cdn.x-kom.pl/i/setup/images/news/news-{SIZE},,d6360caa765045f1ac450e34d8f281c3.jpg",
                },
                header:
                  "Skorzystaj z promocji i zyskaj zwrot pieniędzy za zakup sprzętu od Hisense. Wybierając dowolny telewizor, projektor lub Laser Cinema Hisense i dzieląc się opinią o produkcie, masz szasnę zgarnąć do 4000 zł zwrotu. Z kolei, wybierając&nbsp;Hisense TV z soundbarem, otrzymasz nawet do 5000 zł zwrotu.",
                publicationTime: "2024-09-10T08:12:00Z",
                commentsCount: 0,
                webUrl:
                  "https://www.x-kom.pl/aktualnosci/9448-kup-sprzet-hisense-i-zyskaj-nawet-do-5000-zl-zwrotu.html",
                category: "Aktualnosci",
                isFetching: false,
              },
              "9449": {
                id: "9449",
                title:
                  "Nowy tytan wśród kamer sportowych. GoPro HERO13 Black już dostępne w sprzedaży",
                sections: null,
                mainPhoto: {
                  url: "https://cdn.x-kom.pl/i/setup/images/news/news-small,,30610855d245436a97cb8481f21c84cc.jpg",
                  thumbnailUrl:
                    "https://cdn.x-kom.pl/i/setup/images/news/news-small,,30610855d245436a97cb8481f21c84cc.jpg",
                  urlTemplate:
                    "https://cdn.x-kom.pl/i/setup/images/news/news-{SIZE},,30610855d245436a97cb8481f21c84cc.jpg",
                },
                header:
                  "G&oacute;rskie ścieżki, podmokłe bagna czy pustynne piaski &ndash; z GoPro HERO13 Black żadne vlogowe wyzwanie nie jest zbyt trudne. To wytrzymałe urządzenie zarejestruje twoje przygody w jakości do 5.3K. Nowy akumulator Enduro wydłuża czas nagrywania, a nowe rozwiązania zasilania takie jak magnetyczny kabel pozwala na jeszcze dłuższe sesje w por&oacute;wnaniu do poprzednich modeli. Sprawdź, co jeszcze oferuje GoPro HERO13 Black.",
                publicationTime: "2024-09-10T11:24:00Z",
                commentsCount: 0,
                webUrl:
                  "https://www.x-kom.pl/aktualnosci/9449-nowy-tytan-wsrod-kamer-sportowych-gopro-hero13-black-juz-dostepne-w-sprzedazy.html",
                category: "Aktualnosci",
                isFetching: false,
              },
              "9453": {
                id: "9453",
                title: "Jaki komputer do gier? Gotowy zestaw czy własny PC?",
                sections: null,
                mainPhoto: {
                  url: "https://cdn.x-kom.pl/i/setup/images/news/news-small,,0e4695f4124b477b829ebc2bd6472605.jpg",
                  thumbnailUrl:
                    "https://cdn.x-kom.pl/i/setup/images/news/news-small,,0e4695f4124b477b829ebc2bd6472605.jpg",
                  urlTemplate:
                    "https://cdn.x-kom.pl/i/setup/images/news/news-{SIZE},,0e4695f4124b477b829ebc2bd6472605.jpg",
                },
                header:
                  "Zastanawiasz się nad wyborem komputera do gier? Nie wiesz jednak, czy lepiej postawić na gotowy&nbsp;sprzęt, czy może na klasycznego składaka? Jaki typ komputera gamingowego&nbsp;będzie optymalny?&nbsp;Pytania mogą się mnożyć, dlatego śpieszymy z pomocą. Zapraszamy do lektury kompleksowego poradnika, kt&oacute;ry pomoże Ci wybrać komputer gamingowy.&nbsp;Dowiedz się, w jakie podzespoły najlepiej zainswestować i poznaj najlepsze gotowce&nbsp;przeznaczone dla graczy.",
                publicationTime: "2024-09-04T14:22:00Z",
                commentsCount: 0,
                webUrl:
                  "https://www.x-kom.pl/poradniki/9453-jaki-komputer-do-gier-gotowy-zestaw-czy-wlasny-pc.html",
                category: "Poradniki",
                isFetching: false,
              },
              "9455": {
                id: "9455",
                title: "Po prostu leć. Premiera drona DJI Neo",
                sections: null,
                mainPhoto: {
                  url: "https://cdn.x-kom.pl/i/setup/images/news/news-small,,5d18eaa6016d4351a3d7f5231c949939.jpg",
                  thumbnailUrl:
                    "https://cdn.x-kom.pl/i/setup/images/news/news-small,,5d18eaa6016d4351a3d7f5231c949939.jpg",
                  urlTemplate:
                    "https://cdn.x-kom.pl/i/setup/images/news/news-{SIZE},,5d18eaa6016d4351a3d7f5231c949939.jpg",
                },
                header:
                  "Najmniejszy dron w ofercie DJI jest gotowy, by podbijać przestworza. Startowanie z dłoni jeszcze nigdy nie było takie łatwe. Poznaj DJI Neo, kt&oacute;ry stworzony jest do tego, by towarzyszyć Ci w każdej akcji, kt&oacute;rą chcesz uwiecznić.&nbsp;",
                publicationTime: "2024-09-05T13:00:00Z",
                commentsCount: 0,
                webUrl:
                  "https://www.x-kom.pl/aktualnosci/9455-po-prostu-lec-premiera-drona-dji-neo.html",
                category: "Aktualnosci",
                isFetching: false,
              },
              "9456": {
                id: "9456",
                title: "Wprowadzamy karty podarunkowe",
                sections: null,
                mainPhoto: {
                  url: "https://cdn.x-kom.pl/i/setup/images/news/news-small,,ef9666f7b02542d3a835e4c76b15fb7e.jpg",
                  thumbnailUrl:
                    "https://cdn.x-kom.pl/i/setup/images/news/news-small,,ef9666f7b02542d3a835e4c76b15fb7e.jpg",
                  urlTemplate:
                    "https://cdn.x-kom.pl/i/setup/images/news/news-{SIZE},,ef9666f7b02542d3a835e4c76b15fb7e.jpg",
                },
                header:
                  "Nie musisz już zgadywać, co spodoba się Twoim bliskim. Możesz dać im naszą kartę podarunkową i mieć pewność, że prezent na pewno będzie trafiony.&nbsp;&nbsp;",
                publicationTime: "2024-09-05T09:48:00Z",
                commentsCount: 3,
                webUrl:
                  "https://www.x-kom.pl/aktualnosci/9456-wprowadzamy-karty-podarunkowe.html",
                category: "Aktualnosci",
                isFetching: false,
              },
              "9457": {
                id: "9457",
                title:
                  "Procesory Intel Core Ultra 200V już dostępne w przedsprzedaży. Przygotuj się na nowy wymiar AI w laptopach",
                sections: null,
                mainPhoto: {
                  url: "https://cdn.x-kom.pl/i/setup/images/news/news-small,,78a0480b27674d82b32341b8e74db574.jpg",
                  thumbnailUrl:
                    "https://cdn.x-kom.pl/i/setup/images/news/news-small,,78a0480b27674d82b32341b8e74db574.jpg",
                  urlTemplate:
                    "https://cdn.x-kom.pl/i/setup/images/news/news-{SIZE},,78a0480b27674d82b32341b8e74db574.jpg",
                },
                header:
                  "Nowa generacja CPU Intel Core Ultra Series 2, wraz z nowymi laptopami, trafiła do przedsprzedaży. Intel maksymalnie wykorzystuje potencjał AI, wprowadzając nowe NPU, kt&oacute;re napędzają ideę komputer&oacute;w opartych na sztucznej inteligencji. Wysoka efektywność energetyczna pozwala urządzeniom działać przez wiele godzin bez ładowania. Poznaj szczeg&oacute;ły.",
                publicationTime: "2024-09-06T10:40:00Z",
                commentsCount: 0,
                webUrl:
                  "https://www.x-kom.pl/aktualnosci/9457-procesory-intel-core-ultra-200v-juz-dostepne-w-przedsprzedazy-przygotuj-sie-na-nowy-wymiar-ai-w-laptopach.html",
                category: "Aktualnosci",
                isFetching: false,
              },
              "9458": {
                id: "9458",
                title:
                  "Przedsprzedaż Apple Watch 10 oraz Apple AirPods 4 wystartowała",
                sections: null,
                mainPhoto: {
                  url: "https://cdn.x-kom.pl/i/setup/images/news/news-small,,a11be491bc314915b02a091b315ffcd3.jpg",
                  thumbnailUrl:
                    "https://cdn.x-kom.pl/i/setup/images/news/news-small,,a11be491bc314915b02a091b315ffcd3.jpg",
                  urlTemplate:
                    "https://cdn.x-kom.pl/i/setup/images/news/news-{SIZE},,a11be491bc314915b02a091b315ffcd3.jpg",
                },
                header:
                  "Już od teraz kupisz w przedsprzedaży nowe smartwatche Apple Watch 10 oraz Apple Watch Ultra 2, a także słuchawki AirPods 4. Zobacz, czym charakteryzują się nowe urządzenia Apple, poznaj ich cenę i zam&oacute;w w przedsprzedaży.",
                publicationTime: "2024-09-09T19:00:00Z",
                commentsCount: 0,
                webUrl:
                  "https://www.x-kom.pl/aktualnosci/9458-przedsprzedaz-apple-watch-10-oraz-apple-airpods-4-wystartowala.html",
                category: "Aktualnosci",
                isFetching: false,
              },
              "9459": {
                id: "9459",
                title:
                  "​​​​​​​Nowe  ceny produktów Apple poprzedniej generacji",
                sections: null,
                mainPhoto: {
                  url: "https://cdn.x-kom.pl/i/setup/images/news/news-small,,8ee71c14e6c14edf8e13df3a0cac65c0.jpg",
                  thumbnailUrl:
                    "https://cdn.x-kom.pl/i/setup/images/news/news-small,,8ee71c14e6c14edf8e13df3a0cac65c0.jpg",
                  urlTemplate:
                    "https://cdn.x-kom.pl/i/setup/images/news/news-{SIZE},,8ee71c14e6c14edf8e13df3a0cac65c0.jpg",
                },
                header:
                  "Teraz iPhone 15, słuchawki Apple AirPods 3 czy zegarki Apple Watch 9 kupisz w nowych cenach.&nbsp;Sprawdź produkty Apple poprzedniej generacji.",
                publicationTime: "2024-09-09T22:30:00Z",
                commentsCount: 0,
                webUrl:
                  "https://www.x-kom.pl/aktualnosci/9459-nowe-ceny-produktow-apple-poprzedniej-generacji.html",
                category: "Aktualnosci",
                isFetching: false,
              },
            },
            categories: {
              news: {
                currentPageItemIds: [
                  "9449",
                  "9448",
                  "9459",
                  "9447",
                  "9458",
                  "9429",
                  "9392",
                  "9457",
                  "9455",
                  "9456",
                  "9445",
                  "9388",
                  "9442",
                  "9441",
                  "9440",
                  "9402",
                ],
                page: 1,
                totalCount: 1209,
                totalPages: 76,
                isFetching: false,
              },
              guides: {
                currentPageItemIds: [
                  "7485",
                  "9453",
                  "4886",
                  "5570",
                  "5046",
                  "6321",
                  "9391",
                  "4780",
                  "5965",
                  "4820",
                  "5504",
                  "6151",
                  "5631",
                  "4412",
                  "4567",
                  "5261",
                ],
                page: 1,
                totalCount: 142,
                totalPages: 9,
                isFetching: false,
              },
            },
            config: {
              selectedWidgetCategoryType: "news",
            },
          },
        },
      },
    ].forEach((json) => expect(Schema.parse({ json })).not.toBeFalsy()));
});
