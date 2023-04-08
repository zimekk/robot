import { HotShotSchema } from "..";

describe("shots", () => {
  it("schema", () =>
    [
      {
        json: {
          Id: "32309",
          Product: {
            Photos: [
              {
                Url: "https://cdn.al.to/i/setup/images/prod/big/product-large,,2021/4/pr_2021_4_23_10_14_55_451_00.jpg",
                ThumbnailUrl:
                  "https://cdn.al.to/i/setup/images/prod/big/product-small,,2021/4/pr_2021_4_23_10_14_55_451_00.jpg",
                UrlTemplate:
                  "https://cdn.al.to/i/setup/images/prod/big/{SIZE},,2021/4/pr_2021_4_23_10_14_55_451_00.jpg",
              },
              {
                Url: "https://cdn.al.to/i/setup/images/prod/big/product-large,,2021/4/pr_2021_4_23_10_14_58_420_01.jpg",
                ThumbnailUrl:
                  "https://cdn.al.to/i/setup/images/prod/big/product-small,,2021/4/pr_2021_4_23_10_14_58_420_01.jpg",
                UrlTemplate:
                  "https://cdn.al.to/i/setup/images/prod/big/{SIZE},,2021/4/pr_2021_4_23_10_14_58_420_01.jpg",
              },
              {
                Url: "https://cdn.al.to/i/setup/images/prod/big/product-large,,2021/4/pr_2021_4_23_10_16_45_215_01.jpg",
                ThumbnailUrl:
                  "https://cdn.al.to/i/setup/images/prod/big/product-small,,2021/4/pr_2021_4_23_10_16_45_215_01.jpg",
                UrlTemplate:
                  "https://cdn.al.to/i/setup/images/prod/big/{SIZE},,2021/4/pr_2021_4_23_10_16_45_215_01.jpg",
              },
              {
                Url: "https://cdn.al.to/i/setup/images/prod/big/product-large,,2021/4/pr_2021_4_23_10_17_27_818_00.jpg",
                ThumbnailUrl:
                  "https://cdn.al.to/i/setup/images/prod/big/product-small,,2021/4/pr_2021_4_23_10_17_27_818_00.jpg",
                UrlTemplate:
                  "https://cdn.al.to/i/setup/images/prod/big/{SIZE},,2021/4/pr_2021_4_23_10_17_27_818_00.jpg",
              },
              {
                Url: "https://cdn.al.to/i/setup/images/prod/big/product-large,,2021/4/pr_2021_4_23_10_16_43_512_00.jpg",
                ThumbnailUrl:
                  "https://cdn.al.to/i/setup/images/prod/big/product-small,,2021/4/pr_2021_4_23_10_16_43_512_00.jpg",
                UrlTemplate:
                  "https://cdn.al.to/i/setup/images/prod/big/{SIZE},,2021/4/pr_2021_4_23_10_16_43_512_00.jpg",
              },
              {
                Url: "https://cdn.al.to/i/setup/images/prod/big/product-large,,2021/4/pr_2021_4_23_10_17_59_109_00.jpg",
                ThumbnailUrl:
                  "https://cdn.al.to/i/setup/images/prod/big/product-small,,2021/4/pr_2021_4_23_10_17_59_109_00.jpg",
                UrlTemplate:
                  "https://cdn.al.to/i/setup/images/prod/big/{SIZE},,2021/4/pr_2021_4_23_10_17_59_109_00.jpg",
              },
            ],
            Comments: [
              {
                ProductId: "1018517",
                Id: "266234",
                AuthorName: "Kamila",
                IsRegisteredAuthor: false,
                IsAdminAuthor: false,
                CreateTime: "2021-07-13T16:08:17Z",
                IsEditable: false,
                IsVoteAllowed: true,
                Body: "Robot jest kapitalny. Odpala się go i dzieje się magia! :) Sam sprząta i nie wpada na żadne meble. Można nim łatwo sterować za pomocą aplikacji i ustawiać mapę sprzątania. No czad!",
                ChildComments: null,
                Votes: {
                  VotesUp: 2,
                  VotesDown: 0,
                },
                Rating: 6,
                Photos: null,
                IsConfirmedByPurchase: false,
              },
              {
                ProductId: "1018517",
                Id: "364404",
                AuthorName: "sana",
                IsRegisteredAuthor: false,
                IsAdminAuthor: false,
                CreateTime: "2022-03-30T20:20:34Z",
                IsEditable: false,
                IsVoteAllowed: true,
                Body: "Ja jestem zadowoloną użytkowniczką Deebota. Dobrze się sprawdza u nas w domu - na nic nie wpada, równomiernie pracuje, podąża wyznaczonymi trasami. Absolutne 5 na 5.",
                ChildComments: null,
                Votes: null,
                Rating: 6,
                Photos: null,
                IsConfirmedByPurchase: false,
              },
              {
                ProductId: "1018517",
                Id: "360756",
                AuthorName: "Fiona",
                IsRegisteredAuthor: false,
                IsAdminAuthor: false,
                CreateTime: "2022-03-24T21:48:17Z",
                IsEditable: false,
                IsVoteAllowed: true,
                Body: "Robotem steruje się za pomocą aplikacji w telefonie co jest bardzo wygodne. Sam robot ma kompaktowe wymiary, cicho pracuje i jest dokładny. Polecam",
                ChildComments: null,
                Votes: null,
                Rating: 6,
                Photos: null,
                IsConfirmedByPurchase: false,
              },
              {
                ProductId: "1018517",
                Id: "360672",
                AuthorName: "Agnes",
                IsRegisteredAuthor: false,
                IsAdminAuthor: false,
                CreateTime: "2022-03-24T19:58:19Z",
                IsEditable: false,
                IsVoteAllowed: true,
                Body: 'Nie jestem wielką "fanką" robotów sprzątających, ale po kilku użyciach Deebot zmieniam zdanie. Sprzęt, który znacznie ułatwia życie. Podłogi i dywany sprzątnięte dokładnie, że nie ominie żadnego pyłku czy okruszka. Dla mnie sprzątanie nabrało innego wymiaru.',
                ChildComments: null,
                Votes: null,
                Rating: 5,
                Photos: null,
                IsConfirmedByPurchase: false,
              },
              {
                ProductId: "1018517",
                Id: "349717",
                AuthorName: "Ala",
                IsRegisteredAuthor: false,
                IsAdminAuthor: false,
                CreateTime: "2022-03-07T13:55:53Z",
                IsEditable: false,
                IsVoteAllowed: true,
                Body: "Wystarczy uruchomić apkę i po niedługim czasie ma się wysprzątany dom. To jest rozwiązanie, którego potrzebowałam!",
                ChildComments: null,
                Votes: null,
                Rating: 6,
                Photos: null,
                IsConfirmedByPurchase: false,
              },
              {
                ProductId: "1018517",
                Id: "349682",
                AuthorName: "Przemek",
                IsRegisteredAuthor: false,
                IsAdminAuthor: false,
                CreateTime: "2022-03-07T13:25:17Z",
                IsEditable: false,
                IsVoteAllowed: true,
                Body: "Świetny! Sprzątanie za jego pomocą jest czystą przyjemnością. Aplikacja do jego obsługi jest prosta w obsłudze i bardzo intuicyjna. A sam robot niezwykle dokladny!",
                ChildComments: null,
                Votes: null,
                Rating: 6,
                Photos: null,
                IsConfirmedByPurchase: false,
              },
              {
                ProductId: "1018517",
                Id: "349649",
                AuthorName: "Anka",
                IsRegisteredAuthor: false,
                IsAdminAuthor: false,
                CreateTime: "2022-03-07T12:50:18Z",
                IsEditable: false,
                IsVoteAllowed: true,
                Body: "Dzięki niemu codziennie mam lśniącą podłogę! Rewelacja!!!",
                ChildComments: null,
                Votes: null,
                Rating: 6,
                Photos: null,
                IsConfirmedByPurchase: false,
              },
              {
                ProductId: "1018517",
                Id: "349522",
                AuthorName: "Piotr",
                IsRegisteredAuthor: false,
                IsAdminAuthor: false,
                CreateTime: "2022-03-07T10:13:40Z",
                IsEditable: false,
                IsVoteAllowed: true,
                Body: "Nie mogę narzekać. Jest bardzo dokładny, nie zacina się i nie gubi mapy. Sprząta zawsze tam, gdzie go zaprogramuję. Polecam!",
                ChildComments: null,
                Votes: null,
                Rating: 6,
                Photos: null,
                IsConfirmedByPurchase: false,
              },
              {
                ProductId: "1018517",
                Id: "346596",
                AuthorName: "Dorota",
                IsRegisteredAuthor: false,
                IsAdminAuthor: false,
                CreateTime: "2022-03-02T20:01:26Z",
                IsEditable: false,
                IsVoteAllowed: true,
                Body: "Ja daje 5 gwiazdek :) Robot spełnia swoją funkcję. Odkąd mam go w domu to sama w ogóle nie sprzątam podłóg i nie odkurzam dywanów.",
                ChildComments: null,
                Votes: null,
                Rating: 6,
                Photos: null,
                IsConfirmedByPurchase: false,
              },
              {
                ProductId: "1018517",
                Id: "342814",
                AuthorName: "Jagoda",
                IsRegisteredAuthor: false,
                IsAdminAuthor: false,
                CreateTime: "2022-02-24T05:55:16Z",
                IsEditable: false,
                IsVoteAllowed: true,
                Body: "Jestem nim zachwycona. Super inteligentna bestia. Robi co trzeba, a ja kocham tę świadomość, że mój dom zawsze jest perfekcyjnie wysprzątany.",
                ChildComments: null,
                Votes: null,
                Rating: 6,
                Photos: null,
                IsConfirmedByPurchase: false,
              },
              {
                ProductId: "1018517",
                Id: "326920",
                AuthorName: "iwona",
                IsRegisteredAuthor: false,
                IsAdminAuthor: false,
                CreateTime: "2022-02-01T12:15:52Z",
                IsEditable: false,
                IsVoteAllowed: true,
                Body: "Bardzo fajny, zaawansowany technologicznie sprzęt. Ma szereg funkcji, które sprawiają że jest efektywny oraz wydajny.",
                ChildComments: null,
                Votes: null,
                Rating: 6,
                Photos: null,
                IsConfirmedByPurchase: false,
              },
              {
                ProductId: "1018517",
                Id: "318739",
                AuthorName: "Marzena",
                IsRegisteredAuthor: false,
                IsAdminAuthor: false,
                CreateTime: "2022-01-20T18:10:28Z",
                IsEditable: false,
                IsVoteAllowed: true,
                Body: "Dzięki niemu moje życie przestało być monotonne. Odkurzacz i mop to już nie moja działka. Polecam każdej kobiecie. Za nie wielkie w sumie pieniądze zyskujemy mnóstwo czasu dla siebie. Na takiego genialnego pomocnika zasługuje każda z nas.",
                ChildComments: null,
                Votes: null,
                Rating: 6,
                Photos: null,
                IsConfirmedByPurchase: false,
              },
              {
                ProductId: "1018517",
                Id: "308636",
                AuthorName: "Karina",
                IsRegisteredAuthor: false,
                IsAdminAuthor: false,
                CreateTime: "2022-01-07T17:11:53Z",
                IsEditable: false,
                IsVoteAllowed: true,
                Body: "Sprawdza się w 100% bardzo dokładnie zbiera kurz, a jedno naładowanie spokojnie wystarcza na posprzątanie całego mieszkania. A to, że jednocześnie umie odkurzać i myć to jest coś wspaniałego! Od zakupu oszczędziłam dzięki niemu mnóstwo czasu :)))",
                ChildComments: null,
                Votes: null,
                Rating: 6,
                Photos: null,
                IsConfirmedByPurchase: false,
              },
              {
                ProductId: "1018517",
                Id: "308305",
                AuthorName: "Mania",
                IsRegisteredAuthor: false,
                IsAdminAuthor: false,
                CreateTime: "2022-01-07T11:37:53Z",
                IsEditable: false,
                IsVoteAllowed: true,
                Body: "Sprząta dokładnie, omija przeszkody, radzi sobie z moimi włochatymi dywanami. Jestem w 100% zadowolona.",
                ChildComments: null,
                Votes: null,
                Rating: 6,
                Photos: null,
                IsConfirmedByPurchase: false,
              },
              {
                ProductId: "1018517",
                Id: "305486",
                AuthorName: "beciaa",
                IsRegisteredAuthor: false,
                IsAdminAuthor: false,
                CreateTime: "2022-01-04T11:16:49Z",
                IsEditable: false,
                IsVoteAllowed: true,
                Body: "najlepszy robot sprzątający, polecam! Szczególnie jeśli komuś zależy na tym, aby robot był cichy i moża by było wytycznać mu trasy.",
                ChildComments: null,
                Votes: null,
                Rating: 6,
                Photos: null,
                IsConfirmedByPurchase: false,
              },
            ],
            OnlineAvailability: {
              LastItemsLeft: {
                ShowLabel: false,
              },
              AvailabilityText: "",
              DeliveryText:
                "Kup teraz - zamówienie otrzymasz już we wtorek 6 grudnia",
              DeliveryDate: "2022-12-05T23:00:00Z",
              AvailabilityTooltipHtml:
                '<div class="AvailabilityTooltipHtml">Termin realizacji może ulec zmianie, jeśli:\n\t\t\t\t\t\t\t <ul>\n\t\t\t\t\t\t\t    <li>skorzystasz z usługi wniesienia lub montażu;</li>\n\t\t\t\t\t\t\t    <li>zamówienie obejmuje produkty z dłuższym czasem realizacji zamówienia - wysyłka następuje po skompletowaniu całego zamówienia;</li>\n\t\t\t\t\t\t\t    <li>jako formę płatności wybierzesz przelew lub raty - wysyłka następuje po otrzymaniu przez nas płatności na konto lub informacji o przyznaniu kredytu ratalnego;</li>\n\t\t\t\t\t\t\t    <li>dodasz uwagi do zamówienia</li>\n\t\t\t\t\t\t\t    <li>zamówienie obejmuje produkty wielkogabarytowe, które wymagają szczególnej obsługi z uwagi na nietypowy rozmiar i konieczność dodatkowego zabezpieczenia towaru na czas transportu</li>\n\t\t\t\t\t\t\t </ul></div>',
              ExpiredAfterMinutes: 0,
              AvailabilityCode: "available",
              ExpirationTime: null,
            },
            DepartmentsAvailability: null,
            ShipmentCosts: [
              {
                Title: "Kurier - InPost, UPS, FedEx, DTS lub Poczta Polska",
                ShipmentMethod: "Courier",
                PaymentMethod: "Unknown",
                Value: 0,
                Html: null,
                Target: "All",
              },
              {
                Title: "Punkt odbioru - Poczta Polska",
                ShipmentMethod: "PolishPostDeliveryPoint",
                PaymentMethod: "Unknown",
                Value: 0,
                Html: null,
                Target: "All",
              },
            ],
            ProductDescription:
              '<div class="content"><div class="row text-left fresh-content">\r\n\t<div class="col-md-2 text-center">\r\n\t\t<img alt="ikona" class="ico" src="https://satysfakcja.stati.pl/allegro_new/ikonki/svg/proof.svg" /></div>\r\n\t<div class="col-md-10">\r\n\t\t<h2 class="text-left">\r\n\t\t\tRobot sprzątający Ecovacs Deebot T9+</h2>\r\n\t\t<p>\r\n\t\t\tEcovacs Deebot T9+ to automatyczny robot sprzątający, kt&oacute;ry zapewnia inteligentne czyszczenie r&oacute;żnych rodzaj&oacute;w podł&oacute;g. Połączenie odkurzacza z mopem gwarantuje jeszcze bardziej kompleksowe sprzątanie. Robot wyposażony został w innowacyjne oraz sprawdzone rozwiązania, dzięki kt&oacute;rym sprzątanie domu wchodzi na wyższy poziom. Duża pojemność pojemnika na kurz (420 ml) pozwala na jeszcze dłuższą pracę urządzenia, bez konieczności opr&oacute;żniania zbiornika. W zestawie znajdziesz także stacje dokującą z automatycznym opr&oacute;żnianiem odpad&oacute;w.</p>\r\n\t\t<img alt="Robot sprzątający Ecovacs Deebot T9+" src="https://satysfakcja.stati.pl/allegro_new/AGD/ECOVACS/DEEBOTT9+/f1-robot-sprzatajacy-deebot-t9+.jpg" /></div>\r\n</div>\r\n<div class="row text-left fresh-content">\r\n\t<div class="col-md-2 text-center">\r\n\t\t<img alt="ikona" class="ico" src="https://satysfakcja.stati.pl/allegro_new/ikonki/svg/robotodk.svg" style="width: 95px; height: 95px;" /></div>\r\n\t<div class="col-md-10">\r\n\t\t<h2 class="text-left">\r\n\t\t\tTechnologia TrueMapping</h2>\r\n\t\t<p>\r\n\t\t\tTechnologa TrueMapping oparta jest na technologii wykrywania przestrzennego D-ToF, zastosowanej po raz pierwszy do tej roli w robotach firmy Ecovacs. Mapy podłogi można utworzyć w ciągu kilku sekund, co zwiększa całkowitą wydajność czyszczenia. Robot DEEBOT T9+&nbsp;może w inteligentny spos&oacute;b poruszać się po mieszkaniu użytkownika, zapewniając inteligentne i dokładne czyszczenie.</p>\r\n\t\t<img alt="Mapowanie w robocie sprzątającym ECOVACS Deebot T9+" src="https://satysfakcja.stati.pl/allegro_new/AGD/ECOVACS/DEEBOTT9+/f2-dtof-w-deebot-t9+.jpg" /></div>\r\n</div>\r\n<div class="row text-left fresh-content">\r\n\t<div class="col-md-2 text-center">\r\n\t\t<img alt="ikona" class="ico" src="https://satysfakcja.stati.pl/allegro_new/ikonki/svg/kropla.svg" /></div>\r\n\t<div class="col-md-10">\r\n\t\t<h2 class="text-left">\r\n\t\t\tTechnologia OZMO PRO 2.0 w robocie sprzątającym ECOVACS DEEBOT T9+</h2>\r\n\t\t<p>\r\n\t\t\tRobot sprzątający Ecovacs Deebot T9+ został wyposażony w innowacyjną technologię zmywania. Za sprawą systemu zmywania OZMO&trade; Pro 2.0 urządzenie nie tylko odkurza i wyciera za jednym razem &ndash; wyposażony jest r&oacute;wnież we wkład zmywający zasilany elektrycznie i wibrujący z wysoką częstotliwością, aby lepiej poradzić sobie z uporczywymi plamami. W zależności od indywidualnych potrzeb można ustawić cztery r&oacute;żne poziomy przepływu wody.</p>\r\n\t\t<img alt="Technologia OZMO PRO 2.0 w robocie sprzątającym ECOVACS DEEBOT T9+" src="https://satysfakcja.stati.pl/allegro_new/AGD/ECOVACS/DEEBOTT9+/f3-oznopro-w-deebot-t9+.jpg" /></div>\r\n</div>\r\n<div class="row text-left fresh-content">\r\n\t<div class="col-md-2 text-center">\r\n\t\t<img alt="ikona" class="ico" src="https://satysfakcja.stati.pl/allegro_new/ikonki/svg/smartfon.svg" /></div>\r\n\t<div class="col-md-10">\r\n\t\t<h2 class="text-left">\r\n\t\t\tZdalne sterowanie urządzeniem</h2>\r\n\t\t<p>\r\n\t\t\tSteruj robotem Deebot T9+ w dowolnym czasie i miejscu. Aplikacja ECOVACS umożliwia bez żadnego wysiłku zaplanować sprzątanie, ustawić tryb czyszczenia, a także monitorować bieżącą pracę urządzenia. Korzystaj z zaawansowanych funkcji w aplikacji i interfejsie map. Planuj i aktywuj cykle czyszczenia według własnego uznania, a także ustawiaj jak i gdzie Deebot ma posprzątać - wygodnie i bezproblemowo, trzymając smartfon w dłoni.</p>\r\n\t\t<img alt="Zdalne sterowanie robotem sprzątającym ECOVACS DEEBOT T9+" src="https://satysfakcja.stati.pl/allegro_new/AGD/ECOVACS/DEEBOTT9+/f4-zdalne-sterowanie-w-deebot-t9+.jpg" /></div>\r\n</div>\r\n<div class="row text-left fresh-content">\r\n\t<div class="col-md-2 text-center">\r\n\t\t<img class="ico" src="https://satysfakcja.stati.pl/allegro_new/ikonki/svg/klip_yt.svg" /></div>\r\n\t<div class="col-md-10">\r\n\t\t<h2 class="text-left">\r\n\t\t\tDokonaj najlepszego wyboru</h2>\r\n\t\t<p>\r\n\t\t\tZobacz film ukazujący zalety i najdrobniejsze szczeg&oacute;ły robota sprzątającego Ecovacs DEEBOT T9+. Poznaj zasady działania oraz dowiedz się więcej, oglądając poniższy materiał wideo.</p>\r\n\t\t<div class="video-container" style="position:relative;padding-bottom:56.25%;padding-top:30px;background: #ccc; margin: 30px 0 40px 0;height:0;overflow:hidden;">\r\n\t\t\t<div class="embed-responsive embed-responsive-16by9">\r\n\t\t\t\t<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/fAmnEpnO7JY?modestbranding=1&amp;rel=0" style="position:absolute;top:0;left:0;width:100%;height:100%;border:none;"></iframe></div>\r\n\t\t</div>\r\n\t</div>\r\n</div></div>',
            Features: [
              {
                ValueGroups: [
                  {
                    Values: null,
                    Id: "134472",
                    FullName: "Odkurzanie",
                    ShortName: "Odkurzanie",
                    Description: null,
                  },
                  {
                    Values: null,
                    Id: "134473",
                    FullName: "Mopowanie",
                    ShortName: "Mopowanie",
                    Description: null,
                  },
                ],
                Id: "858700000000",
                FullName: "Opcje sprzątania",
                ShortName: "Opcje sprzątania",
                FilterName: null,
                Type: "None",
                Range: null,
                UnitName: null,
                Description: null,
              },
              {
                ValueGroups: [
                  {
                    Values: null,
                    Id: "134764",
                    FullName: "Aplikacja mobilna",
                    ShortName: "Aplikacja mobilna",
                    Description: null,
                  },
                ],
                Id: "680100000000",
                FullName: "Sterowanie",
                ShortName: "Sterowanie",
                FilterName: null,
                Type: "None",
                Range: null,
                UnitName: null,
                Description: null,
              },
              {
                ValueGroups: [
                  {
                    Values: null,
                    Id: "134482",
                    FullName: "Tak",
                    ShortName: "Tak",
                    Description: null,
                  },
                ],
                Id: "680000000000",
                FullName: "Automatyczny powrót do stacji dokującej",
                ShortName: "Automatyczny powrót do stacji dokującej",
                FilterName: null,
                Type: "None",
                Range: null,
                UnitName: null,
                Description: null,
              },
              {
                ValueGroups: [
                  {
                    Values: null,
                    Id: "139325",
                    FullName: "Harmonogram sprzątania",
                    ShortName: "Harmonogram sprzątania",
                    Description: null,
                  },
                  {
                    Values: null,
                    Id: "218647",
                    FullName: "Automatyczne dostosowanie mocy ssania",
                    ShortName: "Automatyczne dostosowanie mocy ssania",
                    Description: null,
                  },
                  {
                    Values: null,
                    Id: "149205",
                    FullName:
                      "Monitorowanie pracy urządzenia w czasie rzeczywistym",
                    ShortName:
                      "Monitorowanie pracy urządzenia w czasie rzeczywistym",
                    Description: null,
                  },
                  {
                    Values: null,
                    Id: "143428",
                    FullName: "Regulowanie prędkości przepływu wody",
                    ShortName: "Regulowanie prędkości przepływu wody",
                    Description: null,
                  },
                  {
                    Values: null,
                    Id: "188052",
                    FullName:
                      "Strefy zakazane –  wybrane miejsce na mapie jako obszar bez odkurzania",
                    ShortName:
                      "Strefy zakazane –  wybrane miejsce na mapie jako obszar bez odkurzania",
                    Description: null,
                  },
                  {
                    Values: null,
                    Id: "140600",
                    FullName: "Regulacja siły ssania",
                    ShortName: "Regulacja siły ssania",
                    Description: null,
                  },
                  {
                    Values: null,
                    Id: "199864",
                    FullName: "Odświeżanie powietrza",
                    ShortName: "Odświeżanie powietrza",
                    Description: null,
                  },
                  {
                    Values: null,
                    Id: "211714",
                    FullName: "Rozpoznawanie dywanów",
                    ShortName: "Rozpoznawanie dywanów",
                    Description: null,
                  },
                ],
                Id: "679900000000",
                FullName: "Funkcje",
                ShortName: "Funkcje",
                FilterName: null,
                Type: "None",
                Range: null,
                UnitName: null,
                Description: null,
              },
              {
                ValueGroups: [
                  {
                    Values: null,
                    Id: "134703",
                    FullName: "Auto",
                    ShortName: "Auto",
                    Description: null,
                  },
                  {
                    Values: null,
                    Id: "183480",
                    FullName: "OZMO™ Pro",
                    ShortName: "OZMO™ Pro",
                    Description: null,
                  },
                  {
                    Values: null,
                    Id: "188049",
                    FullName: "Strefowe",
                    ShortName: "Strefowe",
                    Description: null,
                  },
                ],
                Id: "681600000000",
                FullName: "Tryby sprzątania",
                ShortName: "Tryby sprzątania",
                FilterName: null,
                Type: "None",
                Range: null,
                UnitName: null,
                Description: null,
              },
              {
                ValueGroups: [
                  {
                    Values: null,
                    Id: "134489",
                    FullName: "Wykrywający przeszkody",
                    ShortName: "Wykrywający przeszkody",
                    Description: null,
                  },
                  {
                    Values: null,
                    Id: "134490",
                    FullName: "Zabezpieczający przed upadkiem",
                    ShortName: "Zabezpieczający przed upadkiem",
                    Description: null,
                  },
                  {
                    Values: null,
                    Id: "253658",
                    FullName: "Skanowanie laserowe dToF",
                    ShortName: "Skanowanie laserowe dToF",
                    Description: null,
                  },
                ],
                Id: "680700000000",
                FullName: "Czujniki",
                ShortName: "Czujniki",
                FilterName: null,
                Type: "None",
                Range: null,
                UnitName: null,
                Description: null,
              },
              {
                ValueGroups: [
                  {
                    Values: null,
                    Id: "183476",
                    FullName: "do 6,5 godziny",
                    ShortName: "do 6,5 godziny",
                    Description: null,
                  },
                ],
                Id: "680500000000",
                FullName: "Czas ładowania",
                ShortName: "Czas ładowania",
                FilterName: null,
                Type: "None",
                Range: null,
                UnitName: null,
                Description: null,
              },
              {
                ValueGroups: [
                  {
                    Values: null,
                    Id: "183477",
                    FullName: "ok. 175 minut",
                    ShortName: "ok. 175 minut",
                    Description: null,
                  },
                ],
                Id: "680600000000",
                FullName: "Czas pracy",
                ShortName: "Czas pracy",
                FilterName: null,
                Type: "None",
                Range: null,
                UnitName: null,
                Description: null,
              },
              {
                ValueGroups: [
                  {
                    Values: null,
                    Id: "156767",
                    FullName: "Akumulator",
                    ShortName: "Akumulator",
                    Description: null,
                  },
                ],
                Id: "721400000000",
                FullName: "Zasilanie",
                ShortName: "Zasilanie",
                FilterName: null,
                Type: "None",
                Range: null,
                UnitName: null,
                Description: null,
              },
              {
                ValueGroups: [
                  {
                    Values: null,
                    Id: "150860",
                    FullName: "5200 mAh",
                    ShortName: "5200 mAh",
                    Description: null,
                  },
                ],
                Id: "949000000000",
                FullName: "Pojemność akumulatora",
                ShortName: "Pojemność akumulatora",
                FilterName: null,
                Type: "None",
                Range: null,
                UnitName: null,
                Description: null,
              },
              {
                ValueGroups: [
                  {
                    Values: null,
                    Id: "134500",
                    FullName: "14,4 V",
                    ShortName: "14,4 V",
                    Description: null,
                  },
                ],
                Id: "680400000000",
                FullName: "Napięcie akumulatora",
                ShortName: "Napięcie akumulatora",
                FilterName: null,
                Type: "None",
                Range: null,
                UnitName: null,
                Description: null,
              },
              {
                ValueGroups: [
                  {
                    Values: null,
                    Id: "134795",
                    FullName: "0,42 l",
                    ShortName: "0,42 l",
                    Description: null,
                  },
                ],
                Id: "680200000000",
                FullName: "Pojemność worka / pojemnika",
                ShortName: "Pojemność worka / pojemnika",
                FilterName: null,
                Type: "None",
                Range: null,
                UnitName: null,
                Description: null,
              },
              {
                ValueGroups: [
                  {
                    Values: null,
                    Id: "175226",
                    FullName: "180 ml",
                    ShortName: "180 ml",
                    Description: null,
                  },
                ],
                Id: "680300000000",
                FullName: "Pojemność zbiornika na wodę",
                ShortName: "Pojemność zbiornika na wodę",
                FilterName: null,
                Type: "None",
                Range: null,
                UnitName: null,
                Description: null,
              },
              {
                ValueGroups: [
                  {
                    Values: null,
                    Id: "188783",
                    FullName: "50 W",
                    ShortName: "50 W",
                    Description: null,
                  },
                ],
                Id: "679600000000",
                FullName: "Moc silnika",
                ShortName: "Moc silnika",
                FilterName: null,
                Type: "None",
                Range: null,
                UnitName: null,
                Description: null,
              },
              {
                ValueGroups: [
                  {
                    Values: null,
                    Id: "190093",
                    FullName: "3000 Pa",
                    ShortName: "3000 Pa",
                    Description: null,
                  },
                ],
                Id: "679700000000",
                FullName: "Moc ssania",
                ShortName: "Moc ssania",
                FilterName: null,
                Type: "None",
                Range: null,
                UnitName: null,
                Description: null,
              },
              {
                ValueGroups: [
                  {
                    Values: null,
                    Id: "183443",
                    FullName: "67 dB",
                    ShortName: "67 dB",
                    Description: null,
                  },
                ],
                Id: "679800000000",
                FullName: "Poziom hałasu",
                ShortName: "Poziom hałasu",
                FilterName: null,
                Type: "None",
                Range: null,
                UnitName: null,
                Description: null,
              },
              {
                ValueGroups: [
                  {
                    Values: null,
                    Id: "183494",
                    FullName: "Stacja ładująco-oczyszczająca",
                    ShortName: "Stacja ładująco-oczyszczająca",
                    Description: null,
                  },
                  {
                    Values: null,
                    Id: "140581",
                    FullName: "Szczotka boczna x 2",
                    ShortName: "Szczotka boczna x 2",
                    Description: null,
                  },
                  {
                    Values: null,
                    Id: "144013",
                    FullName: "Filtr",
                    ShortName: "Filtr",
                    Description: null,
                  },
                  {
                    Values: null,
                    Id: "188796",
                    FullName: "Mop jednorazowy x 10",
                    ShortName: "Mop jednorazowy x 10",
                    Description: null,
                  },
                  {
                    Values: null,
                    Id: "199867",
                    FullName: "Kapsułka do odświeżacza powietrza",
                    ShortName: "Kapsułka do odświeżacza powietrza",
                    Description: null,
                  },
                  {
                    Values: null,
                    Id: "199868",
                    FullName: "Nakładka na kapsułki odświeżające",
                    ShortName: "Nakładka na kapsułki odświeżające",
                    Description: null,
                  },
                  {
                    Values: null,
                    Id: "230708",
                    FullName: "Narzędzie do czyszczenia",
                    ShortName: "Narzędzie do czyszczenia",
                    Description: null,
                  },
                ],
                Id: "681400000000",
                FullName: "Wyposażenie standardowe",
                ShortName: "Wyposażenie standardowe",
                FilterName: null,
                Type: "None",
                Range: null,
                UnitName: null,
                Description: null,
              },
              {
                ValueGroups: [
                  {
                    Values: null,
                    Id: "134603",
                    FullName: "Biały",
                    ShortName: "Biały",
                    Description: null,
                  },
                ],
                Id: "680900000000",
                FullName: "Kolor",
                ShortName: "Kolor",
                FilterName: null,
                Type: "None",
                Range: null,
                UnitName: null,
                Description: null,
              },
              {
                ValueGroups: [
                  {
                    Values: null,
                    Id: "134619",
                    FullName: "9,4 cm",
                    ShortName: "9,4 cm",
                    Description: null,
                  },
                ],
                Id: "681000000000",
                FullName: "Wysokość",
                ShortName: "Wysokość",
                FilterName: null,
                Type: "None",
                Range: null,
                UnitName: null,
                Description: null,
              },
              {
                ValueGroups: [
                  {
                    Values: null,
                    Id: "139352",
                    FullName: "35,3 cm",
                    ShortName: "35,3 cm",
                    Description: null,
                  },
                ],
                Id: "681100000000",
                FullName: "Szerokość",
                ShortName: "Szerokość",
                FilterName: null,
                Type: "None",
                Range: null,
                UnitName: null,
                Description: null,
              },
              {
                ValueGroups: [
                  {
                    Values: null,
                    Id: "139353",
                    FullName: "35,3 cm",
                    ShortName: "35,3 cm",
                    Description: null,
                  },
                ],
                Id: "681200000000",
                FullName: "Długość",
                ShortName: "Długość",
                FilterName: null,
                Type: "None",
                Range: null,
                UnitName: null,
                Description: null,
              },
              {
                ValueGroups: [
                  {
                    Values: null,
                    Id: "134752",
                    FullName: "24 miesiące (gwarancja producenta)",
                    ShortName: "24 miesiące",
                    Description: null,
                  },
                ],
                Id: "681500000000",
                FullName: "Gwarancja",
                ShortName: "Gwarancja",
                FilterName: null,
                Type: "None",
                Range: null,
                UnitName: null,
                Description: null,
              },
            ],
            SubstituteProducts: null,
            ComplementaryProducts: [
              {
                CommentsRating: 0,
                CommentsCount: 0,
                FeatureSummary: [
                  "Typ produktu: Ściereczka mopująca",
                  "Przeznaczenie: Robot sprzątający",
                  "Kompatybilność: DEEBOT OZMO T8/N8/N8 PRO/T9/T10/T10 PLUS",
                  "Sztuk w opakowaniu: 25 szt.",
                ],
                FeatureSummaryStructured: [
                  {
                    ShortName: "Typ produktu",
                    Description: null,
                    ValueSeparator: ", ",
                    ValueGroups: [
                      {
                        ShortName: "Ściereczka mopująca",
                        Description: null,
                      },
                    ],
                  },
                  {
                    ShortName: "Przeznaczenie",
                    Description: null,
                    ValueSeparator: ", ",
                    ValueGroups: [
                      {
                        ShortName: "Robot sprzątający",
                        Description: null,
                      },
                    ],
                  },
                  {
                    ShortName: "Kompatybilność",
                    Description: null,
                    ValueSeparator: ", ",
                    ValueGroups: [
                      {
                        ShortName: "DEEBOT OZMO T8/N8/N8 PRO/T9/T10/T10 PLUS",
                        Description: null,
                      },
                    ],
                  },
                  {
                    ShortName: "Sztuk w opakowaniu",
                    Description: null,
                    ValueSeparator: ", ",
                    ValueGroups: [
                      {
                        ShortName: "25 szt.",
                        Description: null,
                      },
                    ],
                  },
                ],
                AvailabilityStatus: "Available",
                ProducerCode: "D-MM25-2027",
                FreeShipment: false,
                InstallmentMinimum: null,
                Marks: null,
                AlternativeGroupID: null,
                AlternativeProducts: null,
                AlternativeProductItems: null,
                Id: "1017517",
                Name: "Jednorazowe ściereczki do T8/N8/N8 PRO/T9/T10/T10 PLUS 25szt",
                Price: 93.99,
                OldPrice: null,
                PriceInfo: {
                  Price: 93.99,
                  OldPrice: null,
                  IsPriceVisible: true,
                },
                Producer: {
                  Id: "1251",
                  Name: "Ecovacs",
                },
                Category: {
                  Id: "2468",
                  NameSingular: "Akcesoria do odkurzaczy i robotów",
                  NamePlural: "Akcesoria do odkurzaczy i robotów",
                  Photo: null,
                  ParentCategory: null,
                  ParentGroup: {
                    Id: "19",
                    Name: "AGD małe",
                  },
                },
                SecondaryCategory: null,
                MainPhoto: {
                  Url: "https://cdn.al.to/i/setup/images/prod/big/product-large,,2021/6/pr_2021_6_10_9_56_50_964_00.jpg",
                  ThumbnailUrl:
                    "https://cdn.al.to/i/setup/images/prod/big/product-small,,2021/6/pr_2021_6_10_9_56_50_964_00.jpg",
                  UrlTemplate:
                    "https://cdn.al.to/i/setup/images/prod/big/{SIZE},,2021/6/pr_2021_6_10_9_56_50_964_00.jpg",
                },
                WebUrl:
                  "https://www.al.to/p/1017517-akcesoria-do-odkurzaczy-i-robotow-ecovacs-jednorazowe-sciereczki-do-t8-n8-n8-pro-t9-t10-t10-plus-25szt.html",
                IsEsd: false,
                EsdType: "NotDefined",
              },
              {
                CommentsRating: 0,
                CommentsCount: 0,
                FeatureSummary: [
                  "Typ produktu: Zestaw worków",
                  "Przeznaczenie: Worek na pył do „automatycznej stacji ssącej” CH1918",
                  "Kompatybilność: Kompatybilny z serią T8",
                  "Sztuk w opakowaniu: 3 szt.",
                ],
                FeatureSummaryStructured: [
                  {
                    ShortName: "Typ produktu",
                    Description: null,
                    ValueSeparator: ", ",
                    ValueGroups: [
                      {
                        ShortName: "Zestaw worków",
                        Description: null,
                      },
                    ],
                  },
                  {
                    ShortName: "Przeznaczenie",
                    Description: null,
                    ValueSeparator: ", ",
                    ValueGroups: [
                      {
                        ShortName:
                          "Worek na pył do „automatycznej stacji ssącej” CH1918",
                        Description: null,
                      },
                    ],
                  },
                  {
                    ShortName: "Kompatybilność",
                    Description: null,
                    ValueSeparator: ", ",
                    ValueGroups: [
                      {
                        ShortName: "Kompatybilny z serią T8",
                        Description: null,
                      },
                    ],
                  },
                  {
                    ShortName: "Sztuk w opakowaniu",
                    Description: null,
                    ValueSeparator: ", ",
                    ValueGroups: [
                      {
                        ShortName: "3 szt.",
                        Description: null,
                      },
                    ],
                  },
                ],
                AvailabilityStatus: "Available",
                ProducerCode: "D-DB03-2014",
                FreeShipment: true,
                InstallmentMinimum: null,
                Marks: null,
                AlternativeGroupID: null,
                AlternativeProducts: null,
                AlternativeProductItems: null,
                Id: "1013880",
                Name: "Worek na pył do automatycznej stacji 3szt (T8+/N8/T8/T9)",
                Price: 93.99,
                OldPrice: null,
                PriceInfo: {
                  Price: 93.99,
                  OldPrice: null,
                  IsPriceVisible: true,
                },
                Producer: {
                  Id: "1251",
                  Name: "Ecovacs",
                },
                Category: {
                  Id: "2468",
                  NameSingular: "Akcesoria do odkurzaczy i robotów",
                  NamePlural: "Akcesoria do odkurzaczy i robotów",
                  Photo: null,
                  ParentCategory: null,
                  ParentGroup: {
                    Id: "19",
                    Name: "AGD małe",
                  },
                },
                SecondaryCategory: null,
                MainPhoto: {
                  Url: "https://cdn.al.to/i/setup/images/prod/big/product-large,,2021/1/pr_2021_1_16_13_45_1_870_00.jpg",
                  ThumbnailUrl:
                    "https://cdn.al.to/i/setup/images/prod/big/product-small,,2021/1/pr_2021_1_16_13_45_1_870_00.jpg",
                  UrlTemplate:
                    "https://cdn.al.to/i/setup/images/prod/big/{SIZE},,2021/1/pr_2021_1_16_13_45_1_870_00.jpg",
                },
                WebUrl:
                  "https://www.al.to/p/1013880-akcesoria-do-odkurzaczy-i-robotow-ecovacs-worek-na-pyl-do-automatycznej-stacji-3szt-t8-n8-t8-t9.html",
                IsEsd: false,
                EsdType: "NotDefined",
              },
              {
                CommentsRating: 0,
                CommentsCount: 0,
                FeatureSummary: [
                  "Typ produktu: Zapach do odkurzacza",
                  "Przeznaczenie: Odkurzacz mopujący",
                  "Kompatybilność: DEEBOT T9",
                  "Sztuk w opakowaniu: 3 szt.",
                ],
                FeatureSummaryStructured: [
                  {
                    ShortName: "Typ produktu",
                    Description: null,
                    ValueSeparator: ", ",
                    ValueGroups: [
                      {
                        ShortName: "Zapach do odkurzacza",
                        Description: null,
                      },
                    ],
                  },
                  {
                    ShortName: "Przeznaczenie",
                    Description: null,
                    ValueSeparator: ", ",
                    ValueGroups: [
                      {
                        ShortName: "Odkurzacz mopujący",
                        Description: null,
                      },
                    ],
                  },
                  {
                    ShortName: "Kompatybilność",
                    Description: null,
                    ValueSeparator: ", ",
                    ValueGroups: [
                      {
                        ShortName: "DEEBOT T9",
                        Description: null,
                      },
                    ],
                  },
                  {
                    ShortName: "Sztuk w opakowaniu",
                    Description: null,
                    ValueSeparator: ", ",
                    ValueGroups: [
                      {
                        ShortName: "3 szt.",
                        Description: null,
                      },
                    ],
                  },
                ],
                AvailabilityStatus: "Available",
                ProducerCode: "D-DZ03-2050-WB",
                FreeShipment: false,
                InstallmentMinimum: null,
                Marks: null,
                AlternativeGroupID: null,
                AlternativeProducts: null,
                AlternativeProductItems: null,
                Id: "1018976",
                Name: "Kapsuła do atomizera (Dzika borówka) do serii T9 (3 szt.)",
                Price: 93.99,
                OldPrice: null,
                PriceInfo: {
                  Price: 93.99,
                  OldPrice: null,
                  IsPriceVisible: true,
                },
                Producer: {
                  Id: "1251",
                  Name: "Ecovacs",
                },
                Category: {
                  Id: "2468",
                  NameSingular: "Akcesoria do odkurzaczy i robotów",
                  NamePlural: "Akcesoria do odkurzaczy i robotów",
                  Photo: null,
                  ParentCategory: null,
                  ParentGroup: {
                    Id: "19",
                    Name: "AGD małe",
                  },
                },
                SecondaryCategory: null,
                MainPhoto: {
                  Url: "https://cdn.al.to/i/setup/images/prod/big/product-large,,2021/6/pr_2021_6_9_10_28_38_350_00.jpg",
                  ThumbnailUrl:
                    "https://cdn.al.to/i/setup/images/prod/big/product-small,,2021/6/pr_2021_6_9_10_28_38_350_00.jpg",
                  UrlTemplate:
                    "https://cdn.al.to/i/setup/images/prod/big/{SIZE},,2021/6/pr_2021_6_9_10_28_38_350_00.jpg",
                },
                WebUrl:
                  "https://www.al.to/p/1018976-akcesoria-do-odkurzaczy-i-robotow-ecovacs-kapsula-do-atomizera-dzika-borowka-do-serii-t9-3-szt.html",
                IsEsd: false,
                EsdType: "NotDefined",
              },
              {
                CommentsRating: 0,
                CommentsCount: 0,
                FeatureSummary: [
                  "Typ produktu: Zestaw akcesoriów",
                  "Kompatybilność: Kompatybilne z DEEBOT OZMO 950/920, Kompatybilny z serią OZMO T8, Kompatybilny z serią OZMO T9, Kompatybilny z serią OZMO N8",
                  "Filtr w zestawie: 3 szt.",
                  "Gwarancja: 24 miesiące",
                ],
                FeatureSummaryStructured: [
                  {
                    ShortName: "Typ produktu",
                    Description: null,
                    ValueSeparator: ", ",
                    ValueGroups: [
                      {
                        ShortName: "Zestaw akcesoriów",
                        Description: null,
                      },
                    ],
                  },
                  {
                    ShortName: "Kompatybilność",
                    Description: null,
                    ValueSeparator: ", ",
                    ValueGroups: [
                      {
                        ShortName: "Kompatybilne z DEEBOT OZMO 950/920",
                        Description: null,
                      },
                      {
                        ShortName: "Kompatybilny z serią OZMO T8",
                        Description: null,
                      },
                      {
                        ShortName: "Kompatybilny z serią OZMO T9",
                        Description: null,
                      },
                      {
                        ShortName: "Kompatybilny z serią OZMO N8",
                        Description: null,
                      },
                    ],
                  },
                  {
                    ShortName: "Filtr w zestawie",
                    Description: null,
                    ValueSeparator: ", ",
                    ValueGroups: [
                      {
                        ShortName: "3 szt.",
                        Description: null,
                      },
                    ],
                  },
                  {
                    ShortName: "Gwarancja",
                    Description: null,
                    ValueSeparator: ", ",
                    ValueGroups: [
                      {
                        ShortName: "24 miesiące",
                        Description: null,
                      },
                    ],
                  },
                ],
                AvailabilityStatus: "Available",
                ProducerCode: "DX5G-KTA",
                FreeShipment: true,
                InstallmentMinimum: null,
                Marks: null,
                AlternativeGroupID: null,
                AlternativeProducts: null,
                AlternativeProductItems: null,
                Id: "1013849",
                Name: "Zestaw serwisowy dla serii OZMO 920/950/N8/T8/T9",
                Price: 169,
                OldPrice: null,
                PriceInfo: {
                  Price: 169,
                  OldPrice: null,
                  IsPriceVisible: true,
                },
                Producer: {
                  Id: "1251",
                  Name: "Ecovacs",
                },
                Category: {
                  Id: "2468",
                  NameSingular: "Akcesoria do odkurzaczy i robotów",
                  NamePlural: "Akcesoria do odkurzaczy i robotów",
                  Photo: null,
                  ParentCategory: null,
                  ParentGroup: {
                    Id: "19",
                    Name: "AGD małe",
                  },
                },
                SecondaryCategory: null,
                MainPhoto: {
                  Url: "https://cdn.al.to/i/setup/images/prod/big/product-large,,2021/1/pr_2021_1_16_12_43_25_610_00.jpg",
                  ThumbnailUrl:
                    "https://cdn.al.to/i/setup/images/prod/big/product-small,,2021/1/pr_2021_1_16_12_43_25_610_00.jpg",
                  UrlTemplate:
                    "https://cdn.al.to/i/setup/images/prod/big/{SIZE},,2021/1/pr_2021_1_16_12_43_25_610_00.jpg",
                },
                WebUrl:
                  "https://www.al.to/p/1013849-akcesoria-do-odkurzaczy-i-robotow-ecovacs-zestaw-serwisowy-dla-serii-ozmo-920-950-n8-t8-t9.html",
                IsEsd: false,
                EsdType: "NotDefined",
              },
              {
                CommentsRating: 0,
                CommentsCount: 0,
                FeatureSummary: [
                  "Typ produktu: Zapach do odkurzacza",
                  "Przeznaczenie: Odkurzacz mopujący",
                  "Kompatybilność: DEEBOT T9",
                  "Sztuk w opakowaniu: 3 szt.",
                ],
                FeatureSummaryStructured: [
                  {
                    ShortName: "Typ produktu",
                    Description: null,
                    ValueSeparator: ", ",
                    ValueGroups: [
                      {
                        ShortName: "Zapach do odkurzacza",
                        Description: null,
                      },
                    ],
                  },
                  {
                    ShortName: "Przeznaczenie",
                    Description: null,
                    ValueSeparator: ", ",
                    ValueGroups: [
                      {
                        ShortName: "Odkurzacz mopujący",
                        Description: null,
                      },
                    ],
                  },
                  {
                    ShortName: "Kompatybilność",
                    Description: null,
                    ValueSeparator: ", ",
                    ValueGroups: [
                      {
                        ShortName: "DEEBOT T9",
                        Description: null,
                      },
                    ],
                  },
                  {
                    ShortName: "Sztuk w opakowaniu",
                    Description: null,
                    ValueSeparator: ", ",
                    ValueGroups: [
                      {
                        ShortName: "3 szt.",
                        Description: null,
                      },
                    ],
                  },
                ],
                AvailabilityStatus: "Available",
                ProducerCode: "D-DZ03-2050-BL",
                FreeShipment: false,
                InstallmentMinimum: null,
                Marks: null,
                AlternativeGroupID: null,
                AlternativeProducts: null,
                AlternativeProductItems: null,
                Id: "1018979",
                Name: "Kapsuła do atomizera (Bergamotka&Lawenda) do serii T9 3 szt.",
                Price: 93.99,
                OldPrice: null,
                PriceInfo: {
                  Price: 93.99,
                  OldPrice: null,
                  IsPriceVisible: true,
                },
                Producer: {
                  Id: "1251",
                  Name: "Ecovacs",
                },
                Category: {
                  Id: "2468",
                  NameSingular: "Akcesoria do odkurzaczy i robotów",
                  NamePlural: "Akcesoria do odkurzaczy i robotów",
                  Photo: null,
                  ParentCategory: null,
                  ParentGroup: {
                    Id: "19",
                    Name: "AGD małe",
                  },
                },
                SecondaryCategory: null,
                MainPhoto: {
                  Url: "https://cdn.al.to/i/setup/images/prod/big/product-large,,2021/6/pr_2021_6_9_10_29_54_634_00.jpg",
                  ThumbnailUrl:
                    "https://cdn.al.to/i/setup/images/prod/big/product-small,,2021/6/pr_2021_6_9_10_29_54_634_00.jpg",
                  UrlTemplate:
                    "https://cdn.al.to/i/setup/images/prod/big/{SIZE},,2021/6/pr_2021_6_9_10_29_54_634_00.jpg",
                },
                WebUrl:
                  "https://www.al.to/p/1018979-akcesoria-do-odkurzaczy-i-robotow-ecovacs-kapsula-do-atomizera-bergamotka-lawenda-do-serii-t9-3-szt.html",
                IsEsd: false,
                EsdType: "NotDefined",
              },
              {
                CommentsRating: 6,
                CommentsCount: 1,
                FeatureSummary: [
                  "Rodzaj produktu: Wkład do mopa",
                  "Przeznaczenie: Podłogi twarde, Podłogi drewniane, Parkiet",
                  "Gwarancja: 24 miesiące",
                ],
                FeatureSummaryStructured: [
                  {
                    ShortName: "Rodzaj produktu",
                    Description: null,
                    ValueSeparator: ", ",
                    ValueGroups: [
                      {
                        ShortName: "Wkład do mopa",
                        Description: null,
                      },
                    ],
                  },
                  {
                    ShortName: "Przeznaczenie",
                    Description: null,
                    ValueSeparator: ", ",
                    ValueGroups: [
                      {
                        ShortName: "Podłogi twarde",
                        Description: null,
                      },
                      {
                        ShortName: "Podłogi drewniane",
                        Description: null,
                      },
                      {
                        ShortName: "Parkiet",
                        Description: null,
                      },
                    ],
                  },
                  {
                    ShortName: "Gwarancja",
                    Description: null,
                    ValueSeparator: ", ",
                    ValueGroups: [
                      {
                        ShortName: "24 miesiące",
                        Description: null,
                      },
                    ],
                  },
                ],
                AvailabilityStatus: "Available",
                ProducerCode: "160933",
                FreeShipment: false,
                InstallmentMinimum: null,
                Marks: null,
                AlternativeGroupID: null,
                AlternativeProducts: null,
                AlternativeProductItems: null,
                Id: "477611",
                Name: "Wkład Ultramax XL",
                Price: 45,
                OldPrice: null,
                PriceInfo: {
                  Price: 45,
                  OldPrice: null,
                  IsPriceVisible: true,
                },
                Producer: {
                  Id: "1127",
                  Name: "Vileda",
                },
                Category: {
                  Id: "2659",
                  NameSingular: "Akcesoria do sprzątania",
                  NamePlural: "Akcesoria do sprzątania",
                  Photo: null,
                  ParentCategory: null,
                  ParentGroup: {
                    Id: "19",
                    Name: "AGD małe",
                  },
                },
                SecondaryCategory: null,
                MainPhoto: {
                  Url: "https://cdn.al.to/i/setup/images/prod/big/product-large,,2019/2/pr_2019_2_7_12_51_0_137_00.jpg",
                  ThumbnailUrl:
                    "https://cdn.al.to/i/setup/images/prod/big/product-small,,2019/2/pr_2019_2_7_12_51_0_137_00.jpg",
                  UrlTemplate:
                    "https://cdn.al.to/i/setup/images/prod/big/{SIZE},,2019/2/pr_2019_2_7_12_51_0_137_00.jpg",
                },
                WebUrl:
                  "https://www.al.to/p/477611-akcesoria-do-sprzatania-vileda-wklad-ultramax-xl.html",
                IsEsd: false,
                EsdType: "NotDefined",
              },
              {
                CommentsRating: 6,
                CommentsCount: 3,
                FeatureSummary: [
                  "Rodzaj produktu: Mop",
                  "Przeznaczenie: Powierzchnie płaskie",
                  "Gwarancja: 24 miesiące",
                ],
                FeatureSummaryStructured: [
                  {
                    ShortName: "Rodzaj produktu",
                    Description: null,
                    ValueSeparator: ", ",
                    ValueGroups: [
                      {
                        ShortName: "Mop",
                        Description: null,
                      },
                    ],
                  },
                  {
                    ShortName: "Przeznaczenie",
                    Description: null,
                    ValueSeparator: ", ",
                    ValueGroups: [
                      {
                        ShortName: "Powierzchnie płaskie",
                        Description: null,
                      },
                    ],
                  },
                  {
                    ShortName: "Gwarancja",
                    Description: null,
                    ValueSeparator: ", ",
                    ValueGroups: [
                      {
                        ShortName: "24 miesiące",
                        Description: null,
                      },
                    ],
                  },
                ],
                AvailabilityStatus: "Available",
                ProducerCode: "160932",
                FreeShipment: false,
                InstallmentMinimum: null,
                Marks: null,
                AlternativeGroupID: null,
                AlternativeProducts: null,
                AlternativeProductItems: null,
                Id: "477609",
                Name: "Ultramax BOX XL",
                Price: 129,
                OldPrice: null,
                PriceInfo: {
                  Price: 129,
                  OldPrice: null,
                  IsPriceVisible: true,
                },
                Producer: {
                  Id: "1127",
                  Name: "Vileda",
                },
                Category: {
                  Id: "2659",
                  NameSingular: "Akcesoria do sprzątania",
                  NamePlural: "Akcesoria do sprzątania",
                  Photo: null,
                  ParentCategory: null,
                  ParentGroup: {
                    Id: "19",
                    Name: "AGD małe",
                  },
                },
                SecondaryCategory: null,
                MainPhoto: {
                  Url: "https://cdn.al.to/i/setup/images/prod/big/product-large,,2019/2/pr_2019_2_7_13_58_37_871_00.jpg",
                  ThumbnailUrl:
                    "https://cdn.al.to/i/setup/images/prod/big/product-small,,2019/2/pr_2019_2_7_13_58_37_871_00.jpg",
                  UrlTemplate:
                    "https://cdn.al.to/i/setup/images/prod/big/{SIZE},,2019/2/pr_2019_2_7_13_58_37_871_00.jpg",
                },
                WebUrl:
                  "https://www.al.to/p/477609-akcesoria-do-sprzatania-vileda-ultramax-box-xl.html",
                IsEsd: false,
                EsdType: "NotDefined",
              },
              {
                CommentsRating: 6,
                CommentsCount: 10,
                FeatureSummary: [
                  "Rodzaj produktu: Mop",
                  "Przeznaczenie: Podłogi drewniane",
                  "Gwarancja: 24 miesiące",
                ],
                FeatureSummaryStructured: [
                  {
                    ShortName: "Rodzaj produktu",
                    Description: null,
                    ValueSeparator: ", ",
                    ValueGroups: [
                      {
                        ShortName: "Mop",
                        Description: null,
                      },
                    ],
                  },
                  {
                    ShortName: "Przeznaczenie",
                    Description: null,
                    ValueSeparator: ", ",
                    ValueGroups: [
                      {
                        ShortName: "Podłogi drewniane",
                        Description: null,
                      },
                    ],
                  },
                  {
                    ShortName: "Gwarancja",
                    Description: null,
                    ValueSeparator: ", ",
                    ValueGroups: [
                      {
                        ShortName: "24 miesiące",
                        Description: null,
                      },
                    ],
                  },
                ],
                AvailabilityStatus: "Available",
                ProducerCode: "155737",
                FreeShipment: false,
                InstallmentMinimum: null,
                Marks: null,
                AlternativeGroupID: null,
                AlternativeProducts: null,
                AlternativeProductItems: null,
                Id: "393335",
                Name: "Ultramax BOX (mop + wiaderko)",
                Price: 109,
                OldPrice: null,
                PriceInfo: {
                  Price: 109,
                  OldPrice: null,
                  IsPriceVisible: true,
                },
                Producer: {
                  Id: "1127",
                  Name: "Vileda",
                },
                Category: {
                  Id: "2659",
                  NameSingular: "Akcesoria do sprzątania",
                  NamePlural: "Akcesoria do sprzątania",
                  Photo: null,
                  ParentCategory: null,
                  ParentGroup: {
                    Id: "19",
                    Name: "AGD małe",
                  },
                },
                SecondaryCategory: null,
                MainPhoto: {
                  Url: "https://cdn.al.to/i/setup/images/prod/big/product-large,,2017/11/pr_2017_11_17_11_18_52_914_06.jpg",
                  ThumbnailUrl:
                    "https://cdn.al.to/i/setup/images/prod/big/product-small,,2017/11/pr_2017_11_17_11_18_52_914_06.jpg",
                  UrlTemplate:
                    "https://cdn.al.to/i/setup/images/prod/big/{SIZE},,2017/11/pr_2017_11_17_11_18_52_914_06.jpg",
                },
                WebUrl:
                  "https://www.al.to/p/393335-akcesoria-do-sprzatania-vileda-ultramax-box-mop-wiaderko.html",
                IsEsd: false,
                EsdType: "NotDefined",
              },
              {
                CommentsRating: 6,
                CommentsCount: 16,
                FeatureSummary: [
                  "Rodzaj produktu: Mop",
                  "Przeznaczenie: Podłogi twarde, Podłogi drewniane, Płytki, Parkiet",
                  "Gwarancja: 24 miesiące",
                ],
                FeatureSummaryStructured: [
                  {
                    ShortName: "Rodzaj produktu",
                    Description: null,
                    ValueSeparator: ", ",
                    ValueGroups: [
                      {
                        ShortName: "Mop",
                        Description: null,
                      },
                    ],
                  },
                  {
                    ShortName: "Przeznaczenie",
                    Description: null,
                    ValueSeparator: ", ",
                    ValueGroups: [
                      {
                        ShortName: "Podłogi twarde",
                        Description: null,
                      },
                      {
                        ShortName: "Podłogi drewniane",
                        Description: null,
                      },
                      {
                        ShortName: "Płytki",
                        Description: null,
                      },
                      {
                        ShortName: "Parkiet",
                        Description: null,
                      },
                    ],
                  },
                  {
                    ShortName: "Gwarancja",
                    Description: null,
                    ValueSeparator: ", ",
                    ValueGroups: [
                      {
                        ShortName: "24 miesiące",
                        Description: null,
                      },
                    ],
                  },
                ],
                AvailabilityStatus: "Available",
                ProducerCode: "168475",
                FreeShipment: false,
                InstallmentMinimum: null,
                Marks: null,
                AlternativeGroupID: null,
                AlternativeProducts: null,
                AlternativeProductItems: null,
                Id: "388773",
                Name: "UltraMax  1-2 Spray",
                Price: 109,
                OldPrice: null,
                PriceInfo: {
                  Price: 109,
                  OldPrice: null,
                  IsPriceVisible: true,
                },
                Producer: {
                  Id: "1127",
                  Name: "Vileda",
                },
                Category: {
                  Id: "2659",
                  NameSingular: "Akcesoria do sprzątania",
                  NamePlural: "Akcesoria do sprzątania",
                  Photo: null,
                  ParentCategory: null,
                  ParentGroup: {
                    Id: "19",
                    Name: "AGD małe",
                  },
                },
                SecondaryCategory: null,
                MainPhoto: {
                  Url: "https://cdn.al.to/i/setup/images/prod/big/product-large,,2017/12/pr_2017_12_13_9_23_56_481_00.JPG",
                  ThumbnailUrl:
                    "https://cdn.al.to/i/setup/images/prod/big/product-small,,2017/12/pr_2017_12_13_9_23_56_481_00.JPG",
                  UrlTemplate:
                    "https://cdn.al.to/i/setup/images/prod/big/{SIZE},,2017/12/pr_2017_12_13_9_23_56_481_00.JPG",
                },
                WebUrl:
                  "https://www.al.to/p/388773-akcesoria-do-sprzatania-vileda-ultramax-1-2-spray.html",
                IsEsd: false,
                EsdType: "NotDefined",
              },
              {
                CommentsRating: 6,
                CommentsCount: 28,
                FeatureSummary: [
                  "Rodzaj produktu: Mop obrotowy",
                  "Przeznaczenie: Podłogi twarde, Podłogi drewniane, Parkiet",
                  "Gwarancja: 24 miesiące",
                ],
                FeatureSummaryStructured: [
                  {
                    ShortName: "Rodzaj produktu",
                    Description: null,
                    ValueSeparator: ", ",
                    ValueGroups: [
                      {
                        ShortName: "Mop obrotowy",
                        Description: null,
                      },
                    ],
                  },
                  {
                    ShortName: "Przeznaczenie",
                    Description: null,
                    ValueSeparator: ", ",
                    ValueGroups: [
                      {
                        ShortName: "Podłogi twarde",
                        Description: null,
                      },
                      {
                        ShortName: "Podłogi drewniane",
                        Description: null,
                      },
                      {
                        ShortName: "Parkiet",
                        Description: null,
                      },
                    ],
                  },
                  {
                    ShortName: "Gwarancja",
                    Description: null,
                    ValueSeparator: ", ",
                    ValueGroups: [
                      {
                        ShortName: "24 miesiące",
                        Description: null,
                      },
                    ],
                  },
                ],
                AvailabilityStatus: "Available",
                ProducerCode: "163422",
                FreeShipment: false,
                InstallmentMinimum: null,
                Marks: null,
                AlternativeGroupID: null,
                AlternativeProducts: null,
                AlternativeProductItems: null,
                Id: "388761",
                Name: "Easy Wring and Clean TURBO",
                Price: 139,
                OldPrice: null,
                PriceInfo: {
                  Price: 139,
                  OldPrice: null,
                  IsPriceVisible: true,
                },
                Producer: {
                  Id: "1127",
                  Name: "Vileda",
                },
                Category: {
                  Id: "2659",
                  NameSingular: "Akcesoria do sprzątania",
                  NamePlural: "Akcesoria do sprzątania",
                  Photo: null,
                  ParentCategory: null,
                  ParentGroup: {
                    Id: "19",
                    Name: "AGD małe",
                  },
                },
                SecondaryCategory: null,
                MainPhoto: {
                  Url: "https://cdn.al.to/i/setup/images/prod/big/product-large,,2017/12/pr_2017_12_13_8_54_10_438_00.JPG",
                  ThumbnailUrl:
                    "https://cdn.al.to/i/setup/images/prod/big/product-small,,2017/12/pr_2017_12_13_8_54_10_438_00.JPG",
                  UrlTemplate:
                    "https://cdn.al.to/i/setup/images/prod/big/{SIZE},,2017/12/pr_2017_12_13_8_54_10_438_00.JPG",
                },
                WebUrl:
                  "https://www.al.to/p/388761-akcesoria-do-sprzatania-vileda-easy-wring-and-clean-turbo.html",
                IsEsd: false,
                EsdType: "NotDefined",
              },
            ],
            PromotionTypes: null,
            Eans: null,
            Banners: [
              {
                Id: "4322",
                Title: "skorzystaj z rat 0%",
                Subtitle: " zrealizuj marzenia już teraz",
                Description: "Raty 0%  2021-2022",
                Photo: {
                  Url: null,
                  ThumbnailUrl: null,
                  UrlTemplate: null,
                },
                Url: null,
                HtmlCode:
                  '<style>\r\n   .app-banner-template {\r\n      padding: 20px 8px;\r\n   }\r\n\r\n   .app-banner-template h3 {\r\n      font-size: 13px;\r\n      font-weight: 400;\r\n      color: #1a1a1a;\r\n      line-height: 16px;\r\n      padding: 0;\r\n      margin: 0 0 4px;\r\n   }\r\n\r\n   .app-banner-template h2 {\r\n      font-size: 18px;\r\n      font-weight: 500;\r\n      color: #1a1a1a;\r\n      line-height: 22px;\r\n      padding: 0;\r\n      margin: 0 0 24px;\r\n   }\r\n\r\n   .app-banner-content {\r\n      margin-bottom: 16px;\r\n   }\r\n\r\n   .app-banner-image {\r\n      text-align: center;\r\n      margin-bottom: 10px;\r\n   }\r\n\r\n   .app-banner-image img {\r\n      display: inline-block;\r\n      vertical-align: middle;\r\n      max-width: 100%;\r\n      max-height: 174px;\r\n   }\r\n\r\n   .app-banner-step {\r\n      position: relative;\r\n      display: flex;\r\n      align-items: center;\r\n      min-height: 64px;\r\n      padding-left: 72px;\r\n   }\r\n\r\n   .app-banner-step + .app-banner-step {\r\n      margin-top: 12px;\r\n   }\r\n\r\n   .app-banner-step-image {\r\n      position: absolute;\r\n      top: 0;\r\n      left: 0;\r\n      width: 64px;\r\n      height: 64px;\r\n   }\r\n\r\n   .app-banner-step-image svg {\r\n      width: 100%;\r\n      height: 100%;\r\n   }\r\n\r\n   .app-banner-step-content p {\r\n      font-size: 14px;\r\n      color: #1a1a1a;\r\n      line-height: 20px;\r\n      padding: 0;\r\n      margin: 0;\r\n   }\r\n\r\n   .app-banner-promo-code {\r\n      display: inline-block;\r\n      vertical-align: middle;\r\n      position: relative;\r\n      padding: 6px 52px 6px 20px;\r\n      font-size: 14px;\r\n      color: #4d4d4d;\r\n      letter-spacing: 0.13em;\r\n      line-height: 20px;\r\n      border: 1px dashed #00b1ed;\r\n      margin-top: 8px;\r\n      word-break: break-all;\r\n   }\r\n\r\n   .app-banner-copy-button {\r\n      display: inline-block;\r\n      vertical-align: middle;\r\n      position: absolute;\r\n      top: -1px;\r\n      right: -1px;\r\n      bottom: -1px;\r\n      width: 32px;\r\n      background: #00b1ed;\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n      border: 0;\r\n      outline: none;\r\n      cursor: pointer;\r\n      padding: 0;\r\n   }\r\n\r\n   .app-banner-copy-button svg {\r\n      display: block;\r\n      width: 20px;\r\n      height: 20px;\r\n   }\r\n\r\n   .app-banner-copy-button svg * {\r\n      fill: #fff;\r\n   }\r\n\r\n   .app-banner-promo-code.is-copied {\r\n      border-color: #13ac00;\r\n   }\r\n\r\n   .app-banner-promo-code.is-copied .app-banner-copy-button {\r\n      pointer-events: none;\r\n      background: #13ac00;\r\n   }\r\n\r\n   .app-banner-promo-code-message {\r\n      font-size: 13px;\r\n      line-height: 16px;\r\n      color: #13ac00;\r\n      margin: 4px 0 0;\r\n      min-height: 16px;\r\n   }\r\n\r\n   .app-banner-description,\r\n   .app-banner-description a,\r\n   .app-banner-regulations,\r\n   .app-banner-regulations a {\r\n      font-size: 12px;\r\n      color: #4d4d4d;\r\n      line-height: 16px;\r\n   }\r\n\r\n   .app-banner-description{\r\n      margin-bottom: 8px;\r\n   }\r\n\r\n   .app-banner-regulations,\r\n   .app-banner-regulations a {\r\n      font-size: 13px;\r\n   }\r\n\r\n   .app-banner-description a,\r\n   .app-banner-regulations a {\r\n      text-decoration: underline;\r\n   }\r\n\r\n   @media (min-width: 768px) {\r\n      .app-banner-content {\r\n         display: flex;\r\n         align-items: flex-start;\r\n         flex-direction: row-reverse;\r\n         justify-content: space-between;\r\n      }\r\n\r\n      .app-banner-image {\r\n         width: 240px;\r\n      }\r\n\r\n      .app-banner-image img {\r\n         width: 240px;\r\n         max-height: 100%;\r\n      }\r\n\r\n      .app-banner-steps {\r\n         max-width: calc(100% - 260px);\r\n      }\r\n   }\r\n</style>\r\n\r\n<div class="app-banner-template">\r\n   <h3>skorzystaj z rat 0%</h3>\r\n   <h2> zrealizuj marzenia już teraz</h2>\r\n   <div class="app-banner-content">\r\n      <div class="app-banner-image">\r\n         <img src="image_62a1c4db0749c7.35184792.jpg" alt="skorzystaj z rat 0%" />\r\n      </div>\r\n      <div class="app-banner-steps">\r\n         <div class="app-banner-step">\r\n            <div class="app-banner-step-image">\r\n               <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">\r\n                  <g fill="none">\r\n                    <rect width="64" height="64"/>\r\n                    <path fill="#4D4D4D" d="M36.224,37.482 C36.4880013,37.482 36.6933326,37.5479993 36.84,37.68 C36.9866674,37.8120007 37.06,37.9953322 37.06,38.23 C37.06,38.4793346 36.990334,38.6699993 36.851,38.802 C36.711666,38.9340007 36.5026681,39 36.224,39 L28.942,39 C28.6633319,39 28.454334,38.9340007 28.315,38.802 C28.175666,38.6699993 28.106,38.4793346 28.106,38.23 C28.106,37.9953322 28.1793326,37.8120007 28.326,37.68 C28.4726674,37.5479993 28.6779987,37.482 28.942,37.482 L31.67,37.482 L31.67,25.69 L29.272,27.252 C29.1546661,27.3253337 29.0373339,27.362 28.92,27.362 C28.7146656,27.362 28.5350008,27.2666676 28.381,27.076 C28.2269992,26.8853324 28.15,26.6800011 28.15,26.46 C28.15,26.1519985 28.2673322,25.9320007 28.502,25.8 L31.846,23.622 C32.0953346,23.4606659 32.3519987,23.38 32.616,23.38 C32.8653346,23.38 33.0706659,23.4606659 33.232,23.622 C33.3933341,23.7833341 33.474,24.0106652 33.474,24.304 L33.474,37.482 L36.224,37.482 Z"/>\r\n                    <g transform="translate(11 11)">\r\n                      <polygon fill="#969696" points="40.133 40.174 0 40.174 0 42 42 42 42 18.261 40.133 18.261"/>\r\n                      <polygon fill="#B4B4B4" points="40.174 1.826 40.174 18.261 42 18.261 42 0 22.826 0 22.826 1.826"/>\r\n                      <polygon fill="#CCC" points="1.826 1.826 22.826 1.826 22.826 0 0 0 0 27.391 1.826 27.391"/>\r\n                      <polygon fill="#4D4D4D" points="0 27.391 0 42 1.826 42 1.826 27.391"/>\r\n                    </g>\r\n                  </g>\r\n               </svg>\r\n            </div>\r\n            <div class="app-banner-step-content" data-banner-step-index="1">\r\n               <p>dodaj do koszyka produkty o wartości min. 300 zł</p>\r\n            </div>\r\n         </div>\r\n         <div class="app-banner-step">\r\n            <div class="app-banner-step-image">\r\n               <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">\r\n                  <g fill="none" fill-rule="evenodd">\r\n                    <rect width="64" height="64"/>\r\n                    <g transform="translate(11 11)">\r\n                      <g fill-rule="nonzero">\r\n                        <polygon fill="#969696" points="40.133 40.174 0 40.174 0 42 42 42 42 18.261 40.133 18.261"/>\r\n                        <polygon fill="#B4B4B4" points="40.174 1.826 40.174 18.261 42 18.261 42 0 22.826 0 22.826 1.826"/>\r\n                        <polygon fill="#CCC" points="1.826 1.826 22.826 1.826 22.826 0 0 0 0 27.391 1.826 27.391"/>\r\n                        <polygon fill="#4D4D4D" points="0 27.391 0 42 1.826 42 1.826 27.391"/>\r\n                      </g>\r\n                      <text fill="#4D4D4D" font-family="Nunito-Regular, Nunito" font-size="22">\r\n                        <tspan x="15" y="28">2</tspan>\r\n                      </text>\r\n                    </g>\r\n                  </g>\r\n               </svg>\r\n            </div>\r\n            <div class="app-banner-step-content" data-banner-step-index="2">\r\n               <p>wybierz metodę płatności Raty</p>\r\n            </div>\r\n         </div>\r\n         <div class="app-banner-step">\r\n            <div class="app-banner-step-image">\r\n               <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">\r\n                  <g fill="none" fill-rule="evenodd">\r\n                    <rect width="64" height="64"/>\r\n                    <g transform="translate(11 11)">\r\n                      <g fill-rule="nonzero">\r\n                        <polygon fill="#969696" points="40.133 40.174 0 40.174 0 42 42 42 42 18.261 40.133 18.261"/>\r\n                        <polygon fill="#B4B4B4" points="40.174 1.826 40.174 18.261 42 18.261 42 0 22.826 0 22.826 1.826"/>\r\n                        <polygon fill="#CCC" points="1.826 1.826 22.826 1.826 22.826 0 0 0 0 27.391 1.826 27.391"/>\r\n                        <polygon fill="#4D4D4D" points="0 27.391 0 42 1.826 42 1.826 27.391"/>\r\n                      </g>\r\n                      <text fill="#4D4D4D" font-family="Nunito-Regular, Nunito" font-size="22">\r\n                        <tspan x="15" y="28">3</tspan>\r\n                      </text>\r\n                    </g>\r\n                  </g>\r\n               </svg>\r\n            </div>\r\n            <div class="app-banner-step-content" data-banner-step-index="3">\r\n               <p>dokończ składanie zamówienia i złóż wniosek o kredyt w wybranym banku</p>\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </div>\r\n   <div class="app-banner-description"><br></div>\r\n   <div class="app-banner-regulations">Akcja dotyczy zamówień produktów z kategorii objętych promocją o minimalnej wartości 300 zł. O przyznaniu kredytu decyduje bank. W ramach promocji można rozłożyć zakup na od 3 do 10 rat 0%</div>\r\n</div>\r\n\r\n<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.4/clipboard.min.js"></script>\r\n<script type="text/javascript">\r\n   var getPreviousSibling = function (elem, selector) {\r\n      var sibling = elem.previousElementSibling;\r\n\r\n      if (!selector) {\r\n         return sibling;\r\n      }\r\n\r\n      while (sibling) {\r\n         if (sibling.matches(selector)) return sibling;\r\n         sibling = sibling.previousElementSibling;\r\n      }\r\n   };\r\n\r\n   var BannerTemplate = function(code, codePosition) {\r\n      this.options = {\r\n         stepElementSelector: \'.app-banner-step-content\',\r\n         messageClassName: \'app-banner-promo-code-message\',\r\n         messageCopy: \'Skopiowano kod\',\r\n         promoCodeClassName: \'app-banner-promo-code\',\r\n         copyButtonClassName: \'app-banner-copy-button\',\r\n         copiedClassName: \'is-copied\',\r\n         copiedStateTimeout: 3000,\r\n      };\r\n      this.wrapper = getPreviousSibling(document.currentScript, \'.app-banner-template\');\r\n      this.iconSvgTemplates = {\r\n         copy: \'<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\' +\r\n               \'<g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\' +\r\n                  \'<g id="icons/copy/copy_24" fill="#505050">\' +\r\n                     \'<path d="M10,4 L9,4 L9,1.5 C9,1.22385763 9.22385763,1 9.5,1 L17.5,1 C17.6326082,1 17.7597852,1.05267842 17.8535534,1.14644661 L22.8535534,6.14644661 C22.9473216,6.2402148 23,6.36739176 23,6.5 L23,18.5 C23,18.7761424 22.7761424,19 22.5,19 L16,19 L16,18 L22,18 L22,6.70710678 L17.2928932,2 L10,2 L10,4 Z" id="Combined-Shape"></path>\' +\r\n                     \'<path d="M18,6 L21.2928932,6 L18,2.70710678 L18,6 Z M17.8535534,1.14644661 L22.8535534,6.14644661 C23.1685358,6.46142904 22.9454524,7 22.5,7 L17.5,7 C17.2238576,7 17,6.77614237 17,6.5 L17,1.5 C17,1.05454757 17.538571,0.831464179 17.8535534,1.14644661 Z" id="Rectangle-42" fill-rule="nonzero"></path>\' +\r\n                     \'<path d="M2,6 L2,22 L14,22 L14,10.7071068 L9.29289322,6 L2,6 Z M9.85355339,5.14644661 L14.8535534,10.1464466 C14.9473216,10.2402148 15,10.3673918 15,10.5 L15,22.5 C15,22.7761424 14.7761424,23 14.5,23 L1.5,23 C1.22385763,23 1,22.7761424 1,22.5 L1,5.5 C1,5.22385763 1.22385763,5 1.5,5 L9.5,5 C9.63260824,5 9.7597852,5.05267842 9.85355339,5.14644661 Z" id="Combined-Shape" fill-rule="nonzero"></path>\' +\r\n                     \'<path d="M10,10 L13.2928932,10 L10,6.70710678 L10,10 Z M9.85355339,5.14644661 L14.8535534,10.1464466 C15.1685358,10.461429 14.9454524,11 14.5,11 L9.5,11 C9.22385763,11 9,10.7761424 9,10.5 L9,5.5 C9,5.05454757 9.53857096,4.83146418 9.85355339,5.14644661 Z" id="Rectangle-42" fill-rule="nonzero"></path>\' +\r\n                  \'</g>\' +\r\n               \'</g>\' +\r\n            \'</svg>\',\r\n         copied: \'<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\' +\r\n            \'<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\' +\r\n               \'<g id="bannerKP_full_hover_copied_1156" transform="translate(-345.000000, -1075.000000)" fill="#FFFFFF" fill-rule="nonzero">\' +\r\n                  \'<g id="Group-9" transform="translate(161.000000, 1027.000000)">\' +\r\n                        \'<g id="Group-7" transform="translate(80.000000, 40.000000)">\' +\r\n                           \'<g id="Group-5" transform="translate(96.000000, 0.000000)">\' +\r\n                              \'<g id="Icon/24/office/copy_24" transform="translate(8.000000, 8.000000)">\' +\r\n                                    \'<path d="M16.8568803,6.11412818 C17.0699914,5.75894298 17.5306866,5.64376919 17.8858718,5.85688031 C18.241057,6.06999143 18.3562308,6.53068662 18.1431197,6.88587182 L12.1431197,16.8858718 C11.887518,17.3118747 11.295855,17.3761481 10.9547401,17.0149676 L6.70474014,12.5149676 C6.42033136,12.2138289 6.43389364,11.7391489 6.73503235,11.4547401 C7.03617106,11.1703314 7.51085108,11.1838936 7.79525986,11.4850324 L11.365919,15.2657303 L16.8568803,6.11412818 Z" id="Checkbox"></path>\' +\r\n                              \'</g>\' +\r\n                           \'</g>\' +\r\n                        \'</g>\' +\r\n                  \'</g>\' +\r\n               \'</g>\' +\r\n            \'</g>\' +\r\n         \'</svg>\',\r\n      };\r\n      this.codePosition = codePosition;\r\n      this.code = code;\r\n      this.createMessage();\r\n      this.createPromoBox();\r\n      this.appendPromoBoxToStep();\r\n   };\r\n\r\n   BannerTemplate.prototype.createMessage = function() {\r\n      this.message = document.createElement(\'div\');\r\n      this.message.className = this.options.messageClassName;\r\n   }\r\n\r\n   BannerTemplate.prototype.createPromoBox = function() {\r\n      this.promoBox = document.createElement(\'div\');\r\n      this.promoBox.className = this.options.promoCodeClassName;\r\n      this.promoBox.innerHTML = this.code;\r\n\r\n      this.copyButton = document.createElement(\'button\');\r\n      this.copyButton.type = \'button\';\r\n      this.copyButton.className = this.options.copyButtonClassName;\r\n      this.copyButton.innerHTML = this.iconSvgTemplates.copy;\r\n      this.copyButton.setAttribute(\'data-clipboard-text\', this.code);\r\n\r\n      this.promoBox.appendChild(this.copyButton);\r\n   }\r\n\r\n   BannerTemplate.prototype.appendPromoBoxToStep = function() {\r\n      this.stepElement = this.wrapper.querySelector(this.options.stepElementSelector + \'[data-banner-step-index="\' + this.codePosition + \'"]\');\r\n\r\n      if (this.stepElement) {\r\n         this.stepElement.appendChild(this.promoBox);\r\n         this.stepElement.appendChild(this.message);\r\n\r\n         this.clipboard = new ClipboardJS(this.copyButton);\r\n         this.clipboard.on(\'success\', this.onClipboardSuccess.bind(this));\r\n      }\r\n   }\r\n\r\n   BannerTemplate.prototype.onClipboardSuccess = function() {\r\n      this.promoBox.className = this.options.promoCodeClassName + \' \' + this.options.copiedClassName;\r\n      this.copyButton.innerHTML = this.iconSvgTemplates.copied;\r\n      this.message.innerText = this.options.messageCopy;\r\n\r\n      setTimeout(this.resetPromoBoxState.bind(this), this.options.copiedStateTimeout);\r\n   }\r\n\r\n   BannerTemplate.prototype.resetPromoBoxState = function() {\r\n      this.promoBox.className = this.options.promoCodeClassName;\r\n      this.copyButton.innerHTML = this.iconSvgTemplates.copy;\r\n      this.message.innerText = \'\';\r\n   }\r\n\r\n   new BannerTemplate(\'0\', 0);\r\n</script>\r\n',
                BannerType: "product_only_one_web",
                LayoutName: "ProductPage_PromotionBanner_Default",
                Variables: [
                  {
                    Name: "title",
                    Type: "text",
                    Value: "skorzystaj z rat 0%",
                    Photo: null,
                  },
                  {
                    Name: "subtitle",
                    Type: "text",
                    Value: " zrealizuj marzenia już teraz",
                    Photo: null,
                  },
                  {
                    Name: "photo",
                    Type: "image",
                    Value: "image_62a1c4db0749c7.35184792.jpg",
                    Photo: {
                      Url: "https://cdn.al.to/i/img/banners/normal,,image_62a1c4db0749c7.35184792.jpg?filters=trim",
                      ThumbnailUrl:
                        "https://cdn.al.to/i/img/banners/medium,,image_62a1c4db0749c7.35184792.jpg?filters=trim",
                      UrlTemplate:
                        "https://cdn.al.to/i/img/banners/{SIZE},,image_62a1c4db0749c7.35184792.jpg?filters=trim",
                    },
                  },
                  {
                    Name: "firstStep",
                    Type: "text",
                    Value: "dodaj do koszyka produkty o wartości min. 300 zł",
                    Photo: null,
                  },
                  {
                    Name: "secondStep",
                    Type: "text",
                    Value: "wybierz metodę płatności Raty",
                    Photo: null,
                  },
                  {
                    Name: "thirdStep",
                    Type: "text",
                    Value:
                      "dokończ składanie zamówienia i złóż wniosek o kredyt w wybranym banku",
                    Photo: null,
                  },
                  {
                    Name: "code",
                    Type: "text",
                    Value: "0",
                    Photo: null,
                  },
                  {
                    Name: "description",
                    Type: "long-text",
                    Value: "<br>",
                    Photo: null,
                  },
                  {
                    Name: "regulations",
                    Type: "text",
                    Value:
                      "Akcja dotyczy zamówień produktów z kategorii objętych promocją o minimalnej wartości 300 zł. O przyznaniu kredytu decyduje bank. W ramach promocji można rozłożyć zakup na od 3 do 10 rat 0%",
                    Photo: null,
                  },
                  {
                    Name: "codePosition",
                    Type: "enum",
                    Value: "0",
                    Photo: null,
                  },
                  {
                    Name: "tabTitle",
                    Type: "text",
                    Value: "raty 0%",
                    Photo: null,
                  },
                ],
                Conditions:
                  "category[2129+2128+2849+2427+2428+2430+2426+2425+2429+2306+2295+2431+1847+3072+2425+2710+2898+2901+2073+2415+1949+1990+2957+1943+1944+1948+1946+1947+1951+1950+1997+2063+1973+1975+1980+1988+1949+1986+1990+2957+2354+1798+2417+2416+3113+3112+2418+3021+2595+2427+3072+3042+3044+3045+3059+1984+3486]-product[1027201]",
              },
            ],
            AlternativeProducts: null,
            AdditionalServices: null,
            AdditionalServicesDetails: null,
            IsExtendedConfiguration: false,
            IsAvailableInDepartments: false,
            LeasingInfo: [],
            ProductMarksExtended: [],
            Movies: [],
            Photos3D: null,
            CommentsPhotos: [],
            GalleryItemsCount: 6,
            SaleInfo: null,
            HasPromotionPrices: false,
            CommentStatistics: {
              Ratings: [
                {
                  Rank: 1,
                  Count: 0,
                  TotalCount: 0,
                },
                {
                  Rank: 2,
                  Count: 0,
                  TotalCount: 0,
                },
                {
                  Rank: 3,
                  Count: 0,
                  TotalCount: 0,
                },
                {
                  Rank: 4,
                  Count: 0,
                  TotalCount: 0,
                },
                {
                  Rank: 5,
                  Count: 2,
                  TotalCount: 2,
                },
                {
                  Rank: 6,
                  Count: 18,
                  TotalCount: 18,
                },
              ],
              TotalConfirmedPurchase: 0,
              TotalForThisVariant: 20,
              AverageRating: 5.9,
            },
            EnergyLabel: null,
            ProductLimitation: null,
            CommentsRating: 5.9,
            CommentsCount: 20,
            FeatureSummary: [
              "Opcje sprzątania: Odkurzanie, Mopowanie",
              "Czas pracy: ok. 175 minut",
              "Funkcje: Harmonogram sprzątania, Automatyczne dostosowanie mocy ssania, Monitorowanie pracy urządzenia w czasie rzeczywistym, Regulowanie prędkości przepływu wody, Strefy zakazane –  wybrane miejsce na mapie jako obszar bez odkurzania, Regulacja siły ssania, Odświeżanie powietrza, Rozpoznawanie dywanów",
              "Sterowanie: Aplikacja mobilna",
              "Czujniki: Wykrywający przeszkody, Zabezpieczający przed upadkiem, Skanowanie laserowe dToF",
              "Tryby sprzątania: Auto, OZMO™ Pro, Strefowe",
              "Gwarancja: 24 miesiące",
            ],
            FeatureSummaryStructured: [
              {
                ShortName: "Opcje sprzątania",
                Description: null,
                ValueSeparator: ", ",
                ValueGroups: [
                  {
                    ShortName: "Odkurzanie",
                    Description: null,
                  },
                  {
                    ShortName: "Mopowanie",
                    Description: null,
                  },
                ],
              },
              {
                ShortName: "Czas pracy",
                Description: null,
                ValueSeparator: ", ",
                ValueGroups: [
                  {
                    ShortName: "ok. 175 minut",
                    Description: null,
                  },
                ],
              },
              {
                ShortName: "Funkcje",
                Description: null,
                ValueSeparator: ", ",
                ValueGroups: [
                  {
                    ShortName: "Harmonogram sprzątania",
                    Description: null,
                  },
                  {
                    ShortName: "Automatyczne dostosowanie mocy ssania",
                    Description: null,
                  },
                  {
                    ShortName:
                      "Monitorowanie pracy urządzenia w czasie rzeczywistym",
                    Description: null,
                  },
                  {
                    ShortName: "Regulowanie prędkości przepływu wody",
                    Description: null,
                  },
                  {
                    ShortName:
                      "Strefy zakazane –  wybrane miejsce na mapie jako obszar bez odkurzania",
                    Description: null,
                  },
                  {
                    ShortName: "Regulacja siły ssania",
                    Description: null,
                  },
                  {
                    ShortName: "Odświeżanie powietrza",
                    Description: null,
                  },
                  {
                    ShortName: "Rozpoznawanie dywanów",
                    Description: null,
                  },
                ],
              },
              {
                ShortName: "Sterowanie",
                Description: null,
                ValueSeparator: ", ",
                ValueGroups: [
                  {
                    ShortName: "Aplikacja mobilna",
                    Description: null,
                  },
                ],
              },
              {
                ShortName: "Czujniki",
                Description: null,
                ValueSeparator: ", ",
                ValueGroups: [
                  {
                    ShortName: "Wykrywający przeszkody",
                    Description: null,
                  },
                  {
                    ShortName: "Zabezpieczający przed upadkiem",
                    Description: null,
                  },
                  {
                    ShortName: "Skanowanie laserowe dToF",
                    Description: null,
                  },
                ],
              },
              {
                ShortName: "Tryby sprzątania",
                Description: null,
                ValueSeparator: ", ",
                ValueGroups: [
                  {
                    ShortName: "Auto",
                    Description: null,
                  },
                  {
                    ShortName: "OZMO™ Pro",
                    Description: null,
                  },
                  {
                    ShortName: "Strefowe",
                    Description: null,
                  },
                ],
              },
              {
                ShortName: "Gwarancja",
                Description: null,
                ValueSeparator: ", ",
                ValueGroups: [
                  {
                    ShortName: "24 miesiące",
                    Description: null,
                  },
                ],
              },
            ],
            AvailabilityStatus: "Available",
            ProducerCode: "DLX13-54EC",
            FreeShipment: true,
            InstallmentMinimum: 254.9,
            Marks: null,
            AlternativeGroupID: null,
            AlternativeProductItems: null,
            Id: "1018517",
            Name: "DEEBOT T9+",
            Price: 2549,
            OldPrice: null,
            PriceInfo: {
              Price: 2549,
              OldPrice: null,
              IsPriceVisible: true,
            },
            Producer: {
              Id: "1251",
              Name: "Ecovacs",
            },
            Category: {
              Id: "2960",
              NameSingular: "Robot sprzątający",
              NamePlural: "Roboty sprzątające",
              Photo: null,
              ParentCategory: {
                Id: "2416",
                NameSingular: "Sprzątanie",
                NamePlural: "Sprzątanie",
                Photo: {
                  Url: "https://cdn.al.to/i/img/category/large,,cat_2020-08-22_9_6_0_713.png",
                  ThumbnailUrl:
                    "https://cdn.al.to/i/img/category/small,,cat_2020-08-22_9_6_0_713.png",
                  UrlTemplate:
                    "https://cdn.al.to/i/img/category/{SIZE},,cat_2020-08-22_9_6_0_713.png",
                },
                ParentCategory: null,
                ParentGroup: {
                  Id: "19",
                  Name: "AGD małe",
                },
              },
              ParentGroup: {
                Id: "19",
                Name: "AGD małe",
              },
            },
            SecondaryCategory: [],
            MainPhoto: {
              Url: "https://cdn.al.to/i/setup/images/prod/big/product-large,,2021/4/pr_2021_4_23_10_14_55_451_00.jpg",
              ThumbnailUrl:
                "https://cdn.al.to/i/setup/images/prod/big/product-small,,2021/4/pr_2021_4_23_10_14_55_451_00.jpg",
              UrlTemplate:
                "https://cdn.al.to/i/setup/images/prod/big/{SIZE},,2021/4/pr_2021_4_23_10_14_55_451_00.jpg",
            },
            WebUrl:
              "https://www.al.to/p/1018517-robot-sprzatajacy-ecovacs-deebot-t9.html",
            IsEsd: false,
            EsdType: "NotDefined",
          },
          Price: 2249,
          OldPrice: 2549,
          PromotionGainText: "Oszczędź 300 zł",
          PromotionGainTextLines: ["Oszczędź", "300 zł"],
          PromotionGainValue: 300,
          PromotionTotalCount: 10,
          SaleCount: 0,
          MaxBuyCount: 1,
          PromotionName: "Robot sprzątający Ecovacs DEEBOT T9+",
          PromotionEnd: "2022-12-03T20:00:00Z",
          HtmlContent: null,
          PromotionPhoto: {
            Url: "https://cdn.al.to/i/img/promotions/hot-shot-large,,hs_2022_12_2_7_39_57.PNG",
            ThumbnailUrl:
              "https://cdn.al.to/i/img/promotions/hot-shot-large,,hs_2022_12_2_7_39_57.PNG",
            UrlTemplate: null,
          },
          IsActive: true,
          IsSuspended: false,
          MinimumInstallmentValue: 224.9,
        },
        result: {
          Id: "32309",
          Price: 2249,
          OldPrice: 2549,
          PromotionGainText: "Oszczędź 300 zł",
          PromotionGainTextLines: ["Oszczędź", "300 zł"],
          PromotionGainValue: 300,
          PromotionTotalCount: 10,
          SaleCount: 0,
          MaxBuyCount: 1,
          PromotionName: "Robot sprzątający Ecovacs DEEBOT T9+",
          PromotionEnd: "2022-12-03T20:00:00Z",
          PromotionPhoto: {
            Url: "https://cdn.al.to/i/img/promotions/hot-shot-large,,hs_2022_12_2_7_39_57.PNG",
            ThumbnailUrl:
              "https://cdn.al.to/i/img/promotions/hot-shot-large,,hs_2022_12_2_7_39_57.PNG",
            UrlTemplate: null,
          },
          Product: {
            AvailabilityStatus: "Available",
            IsEsd: false,
            Name: "DEEBOT T9+",
            MainPhoto: {
              Url: "https://cdn.al.to/i/setup/images/prod/big/product-large,,2021/4/pr_2021_4_23_10_14_55_451_00.jpg",
              ThumbnailUrl:
                "https://cdn.al.to/i/setup/images/prod/big/product-small,,2021/4/pr_2021_4_23_10_14_55_451_00.jpg",
              UrlTemplate:
                "https://cdn.al.to/i/setup/images/prod/big/{SIZE},,2021/4/pr_2021_4_23_10_14_55_451_00.jpg",
            },
            Price: 2549,
            ProducerCode: "DLX13-54EC",
            Producer: {
              Id: "1251",
              Name: "Ecovacs",
            },
            ProductDescription:
              '<div class="content"><div class="row text-left fresh-content">\r\n\t<div class="col-md-2 text-center">\r\n\t\t<img alt="ikona" class="ico" src="https://satysfakcja.stati.pl/allegro_new/ikonki/svg/proof.svg" /></div>\r\n\t<div class="col-md-10">\r\n\t\t<h2 class="text-left">\r\n\t\t\tRobot sprzątający Ecovacs Deebot T9+</h2>\r\n\t\t<p>\r\n\t\t\tEcovacs Deebot T9+ to automatyczny robot sprzątający, kt&oacute;ry zapewnia inteligentne czyszczenie r&oacute;żnych rodzaj&oacute;w podł&oacute;g. Połączenie odkurzacza z mopem gwarantuje jeszcze bardziej kompleksowe sprzątanie. Robot wyposażony został w innowacyjne oraz sprawdzone rozwiązania, dzięki kt&oacute;rym sprzątanie domu wchodzi na wyższy poziom. Duża pojemność pojemnika na kurz (420 ml) pozwala na jeszcze dłuższą pracę urządzenia, bez konieczności opr&oacute;żniania zbiornika. W zestawie znajdziesz także stacje dokującą z automatycznym opr&oacute;żnianiem odpad&oacute;w.</p>\r\n\t\t<img alt="Robot sprzątający Ecovacs Deebot T9+" src="https://satysfakcja.stati.pl/allegro_new/AGD/ECOVACS/DEEBOTT9+/f1-robot-sprzatajacy-deebot-t9+.jpg" /></div>\r\n</div>\r\n<div class="row text-left fresh-content">\r\n\t<div class="col-md-2 text-center">\r\n\t\t<img alt="ikona" class="ico" src="https://satysfakcja.stati.pl/allegro_new/ikonki/svg/robotodk.svg" style="width: 95px; height: 95px;" /></div>\r\n\t<div class="col-md-10">\r\n\t\t<h2 class="text-left">\r\n\t\t\tTechnologia TrueMapping</h2>\r\n\t\t<p>\r\n\t\t\tTechnologa TrueMapping oparta jest na technologii wykrywania przestrzennego D-ToF, zastosowanej po raz pierwszy do tej roli w robotach firmy Ecovacs. Mapy podłogi można utworzyć w ciągu kilku sekund, co zwiększa całkowitą wydajność czyszczenia. Robot DEEBOT T9+&nbsp;może w inteligentny spos&oacute;b poruszać się po mieszkaniu użytkownika, zapewniając inteligentne i dokładne czyszczenie.</p>\r\n\t\t<img alt="Mapowanie w robocie sprzątającym ECOVACS Deebot T9+" src="https://satysfakcja.stati.pl/allegro_new/AGD/ECOVACS/DEEBOTT9+/f2-dtof-w-deebot-t9+.jpg" /></div>\r\n</div>\r\n<div class="row text-left fresh-content">\r\n\t<div class="col-md-2 text-center">\r\n\t\t<img alt="ikona" class="ico" src="https://satysfakcja.stati.pl/allegro_new/ikonki/svg/kropla.svg" /></div>\r\n\t<div class="col-md-10">\r\n\t\t<h2 class="text-left">\r\n\t\t\tTechnologia OZMO PRO 2.0 w robocie sprzątającym ECOVACS DEEBOT T9+</h2>\r\n\t\t<p>\r\n\t\t\tRobot sprzątający Ecovacs Deebot T9+ został wyposażony w innowacyjną technologię zmywania. Za sprawą systemu zmywania OZMO&trade; Pro 2.0 urządzenie nie tylko odkurza i wyciera za jednym razem &ndash; wyposażony jest r&oacute;wnież we wkład zmywający zasilany elektrycznie i wibrujący z wysoką częstotliwością, aby lepiej poradzić sobie z uporczywymi plamami. W zależności od indywidualnych potrzeb można ustawić cztery r&oacute;żne poziomy przepływu wody.</p>\r\n\t\t<img alt="Technologia OZMO PRO 2.0 w robocie sprzątającym ECOVACS DEEBOT T9+" src="https://satysfakcja.stati.pl/allegro_new/AGD/ECOVACS/DEEBOTT9+/f3-oznopro-w-deebot-t9+.jpg" /></div>\r\n</div>\r\n<div class="row text-left fresh-content">\r\n\t<div class="col-md-2 text-center">\r\n\t\t<img alt="ikona" class="ico" src="https://satysfakcja.stati.pl/allegro_new/ikonki/svg/smartfon.svg" /></div>\r\n\t<div class="col-md-10">\r\n\t\t<h2 class="text-left">\r\n\t\t\tZdalne sterowanie urządzeniem</h2>\r\n\t\t<p>\r\n\t\t\tSteruj robotem Deebot T9+ w dowolnym czasie i miejscu. Aplikacja ECOVACS umożliwia bez żadnego wysiłku zaplanować sprzątanie, ustawić tryb czyszczenia, a także monitorować bieżącą pracę urządzenia. Korzystaj z zaawansowanych funkcji w aplikacji i interfejsie map. Planuj i aktywuj cykle czyszczenia według własnego uznania, a także ustawiaj jak i gdzie Deebot ma posprzątać - wygodnie i bezproblemowo, trzymając smartfon w dłoni.</p>\r\n\t\t<img alt="Zdalne sterowanie robotem sprzątającym ECOVACS DEEBOT T9+" src="https://satysfakcja.stati.pl/allegro_new/AGD/ECOVACS/DEEBOTT9+/f4-zdalne-sterowanie-w-deebot-t9+.jpg" /></div>\r\n</div>\r\n<div class="row text-left fresh-content">\r\n\t<div class="col-md-2 text-center">\r\n\t\t<img class="ico" src="https://satysfakcja.stati.pl/allegro_new/ikonki/svg/klip_yt.svg" /></div>\r\n\t<div class="col-md-10">\r\n\t\t<h2 class="text-left">\r\n\t\t\tDokonaj najlepszego wyboru</h2>\r\n\t\t<p>\r\n\t\t\tZobacz film ukazujący zalety i najdrobniejsze szczeg&oacute;ły robota sprzątającego Ecovacs DEEBOT T9+. Poznaj zasady działania oraz dowiedz się więcej, oglądając poniższy materiał wideo.</p>\r\n\t\t<div class="video-container" style="position:relative;padding-bottom:56.25%;padding-top:30px;background: #ccc; margin: 30px 0 40px 0;height:0;overflow:hidden;">\r\n\t\t\t<div class="embed-responsive embed-responsive-16by9">\r\n\t\t\t\t<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/fAmnEpnO7JY?modestbranding=1&amp;rel=0" style="position:absolute;top:0;left:0;width:100%;height:100%;border:none;"></iframe></div>\r\n\t\t</div>\r\n\t</div>\r\n</div></div>',
            WebUrl:
              "https://www.al.to/p/1018517-robot-sprzatajacy-ecovacs-deebot-t9.html",
          },
        },
      },
    ].forEach(({ json, result }) =>
      expect(HotShotSchema.parse(json)).toEqual(result)
    ));
});
