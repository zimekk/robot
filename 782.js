"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[782],{782:(e,t,o)=>{o.d(t,{Sj:()=>s,VW:()=>z});var n=o(9862),i=n.z.object({aggregatedStandardOption:n.z.boolean(),categorizedOptionGroups:n.z.object({default_PL:n.z.object({optionGroups:n.z.string().array(),category:n.z.string()}).array().optional()}).passthrough().optional(),definedByVg:n.z.boolean().optional(),displayType:n.z.string().optional(),equipmentFlag:n.z.string().optional(),images:n.z.object({default:n.z.string()}),marketingText:n.z.object({}),name:n.z.object({default_PL:n.z.string(),pl_PL:n.z.string().optional(),en_PL:n.z.string().optional()}),nonDerivedDisplayType:n.z.string().optional(),optionFlag:n.z.string(),packageFlag:n.z.string(),standard:n.z.boolean(),translatedOptionGroups:n.z.object({default_PL:n.z.array(n.z.string()).optional()}).passthrough().optional(),translatedSalesGroups:n.z.object({default_PL:n.z.array(n.z.string().nullable()),pl_PL:n.z.array(n.z.string().nullable()),en_PL:n.z.array(n.z.string())}).optional(),type:n.z.string(),ucpType:n.z.string().optional(),usageType:n.z.string().optional()}),r=n.z.object({documentId:n.z.string(),ordering:n.z.unknown(),vehicleSpecification:n.z.unknown()}),a=(n.z.object({id:n.z.number(),item:n.z.string(),data:r.extend({documentId:n.z.string(),media:n.z.object({cosyImages:n.z.record(n.z.string()),eveCpMedia:n.z.object({configId:n.z.string(),contentBaseUrl:n.z.string(),expirationDate:n.z.string()}).optional()}),ordering:n.z.object({distributionData:n.z.object({actualLocationId:n.z.string().optional(),bufferedDeliveryDate:n.z.string(),carrierLoad:n.z.string().optional(),dealerLocation:n.z.object({latitude:n.z.number(),longitude:n.z.number()}).optional(),addressLocale:n.z.unknown({}).optional(),destinationLocationDomesticDealerNumber:n.z.string().optional(),distributionMot:n.z.string().optional(),expectedDeliveryDate:n.z.string().optional(),holds:n.z.object({agInvoiceHold:n.z.boolean().optional(),qualityHoldFlag:n.z.boolean().optional(),vehDelHoldFlg:n.z.boolean().optional()}),load:n.z.string().optional(),manufacturerDistributionPrio:n.z.string().optional(),qualityHoldFlag:n.z.boolean().optional(),shippingDealerNumber:n.z.string().optional(),transportFlag:n.z.string().optional(),locationOutletNickname:n.z.string().optional()}),productionData:n.z.object({ckdFlag:n.z.boolean().optional(),confirmedDeliveryDateFrom:n.z.string().optional(),confirmedDeliveryDateTo:n.z.string().optional(),confirmedDeliveryDateInitialFrom:n.z.string().optional(),confirmedDeliveryDateInitialTo:n.z.string().optional(),confirmedProductionWeek:n.z.string().optional(),endOfProduction:n.z.string().optional(),engineNumber:n.z.string().optional(),factoryCode:n.z.string().optional(),orderNumber:n.z.string(),orderStatus:n.z.number(),plannedEndOfProduction:n.z.string().optional(),productionDataError:n.z.string().optional(),productionDate:n.z.string(),productionProcess:n.z.string().optional(),productionQuotaCode:n.z.string(),productType:n.z.string(),tsn:n.z.string().optional(),vin7:n.z.string(),vin10:n.z.string(),vin17:n.z.string()})}),price:n.z.object({listPriceCurrency:n.z.string(),equipmentsTotalPrice:n.z.number(),equipmentsTotalGrossPrice:n.z.number(),equipmentsTotalListPriceNet:n.z.number(),equipmentsTotalListPriceGross:n.z.number(),netListPrice:n.z.number(),grossListPrice:n.z.number(),netModelPrice:n.z.number(),grossModelPrice:n.z.number(),modelSalesPriceNet:n.z.number(),modelSalesPriceGross:n.z.number(),netSalesPrice:n.z.number(),grossSalesPrice:n.z.number(),taxes:n.z.object({totalTaxes:n.z.number(),taxes:n.z.object({key:n.z.string(),category:n.z.string(),amount:n.z.number(),percentage:n.z.number()}).array()}),priceUpdatedAt:n.z.string()}),salesProcess:n.z.object({reason:n.z.string().optional(),type:n.z.string()}),vehicleLifeCycle:n.z.object({isRepaired:n.z.boolean().optional()}),vehicleSpecification:n.z.object({modelAndOption:n.z.object({baseFuelType:n.z.string(),brand:n.z.string(),bodyType:n.z.string(),bodyTypeDescription:n.z.object({pl_PL:n.z.string()}).optional(),color:n.z.object({hexColorCode:n.z.string(),rgbColorCode:n.z.object({r:n.z.number(),g:n.z.number(),b:n.z.number()}),labColorCode:n.z.object({l:n.z.number(),a:n.z.number(),b:n.z.number()}),clusterFine:n.z.string(),clusterRough:n.z.string()}),equipments:n.z.record(i),model:n.z.object({agModelCode:n.z.string(),derivative:n.z.string(),effectDateRange:n.z.object({from:n.z.string(),to:n.z.string().optional()}),modelDescription:n.z.object({default_PL:n.z.string(),pl_PL:n.z.string(),en_PL:n.z.string().optional()}),modelName:n.z.string(),steering:n.z.string(),vgModelCode:n.z.string()}),modelRange:n.z.object({name:n.z.string(),description:n.z.object({default_PL:n.z.string().optional(),pl_PL:n.z.string()})})})})}),created:n.z.date(),checked:n.z.date().nullable(),updated:n.z.date().nullable(),removed:n.z.date().nullable()}),n.z.object({metadata:n.z.object({totalCount:n.z.number()}),hits:n.z.object({score:n.z.number(),vehicle:r.passthrough(),country:n.z.string()}).array()})),z=r.extend({ordering:n.z.object({distributionData:n.z.object({locationOutletNickname:n.z.string().optional()})}),price:n.z.object({equipmentsTotalGrossPrice:n.z.number(),grossSalesPrice:n.z.number()}),salesProcess:n.z.object({reason:n.z.string(),type:n.z.enum(["AVAILABLE","RESERVED_MANUAL","SOLD"])}),vehicleSpecification:n.z.object({modelAndOption:n.z.object({brand:n.z.string(),model:n.z.object({modelName:n.z.string()}),modelRange:n.z.object({name:n.z.string()})})})}),s=n.z.object({json:a})}}]);