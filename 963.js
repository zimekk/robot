"use strict";(self.webpackChunk_dev_web=self.webpackChunk_dev_web||[]).push([[963],{3963:(e,r,n)=>{n.d(r,{Mx:()=>u,V_:()=>i});var t=n(195),o=t.z.object({id:t.z.number(),address:t.z.string(),configuration:t.z.object({display_type:t.z.number(),fastcall_uid:t.z.null(),hide_properties_prices_for_anonymous_users:t.z.boolean(),is_autoresponder_enabled:t.z.boolean(),personal_data_processor_name:t.z.string(),personal_data_processor_url:t.z.null(),privacy_policy_url:t.z.string().nullable()}),construction_date_range:t.z.object({lower:t.z.string(),upper:t.z.string(),bounds:t.z.string()}),description:t.z.string().nullable(),geo_point:t.z.object({type:t.z.string(),coordinates:t.z.array(t.z.number())}),has_active_promotions:t.z.boolean(),has_distinction:t.z.boolean(),has_required_prices:t.z.null(),is_holiday_location:t.z.boolean(),logo:t.z.any(),main_image:t.z.object({m_img_155x87:t.z.string(),m_img_224x147:t.z.string(),m_img_277x160:t.z.string(),m_img_336x160:t.z.string(),m_img_350x230:t.z.string(),m_img_350x648:t.z.string(),m_img_375x211:t.z.string(),m_img_440x248:t.z.string(),m_img_440x440:t.z.string(),m_img_500:t.z.string(),m_img_728x728:t.z.string(),m_img_750:t.z.string(),m_img_760x428:t.z.string(),m_img_983x552:t.z.string(),m_img_1160x653:t.z.string(),m_img_1500:t.z.string()}),name:t.z.string(),price_type:t.z.number().nullable(),properties:t.z.number().nullable(),region:t.z.object({full_name:t.z.string(),id:t.z.number(),name:t.z.string(),name_declension_where:t.z.string(),short_name:t.z.string(),short_name_reverted:t.z.string(),slug:t.z.string(),stats:t.z.object({promotions_count_total:t.z.number()})}),slug:t.z.string(),sort_distance:t.z.null(),stats:t.z.object({distance_from_region:t.z.object({center:t.z.boolean(),coords:t.z.array(t.z.number()),region:t.z.string(),distance:t.z.number()}),properties_count_for_sale:t.z.number(),properties_roi_max:t.z.number(),properties_with_roi_count:t.z.number(),ranges_area_max:t.z.number(),ranges_area_min:t.z.number(),ranges_price_m2_max:t.z.number(),ranges_price_m2_min:t.z.number(),ranges_price_max:t.z.number(),ranges_price_min:t.z.number(),ranges_rooms_max:t.z.number(),ranges_rooms_min:t.z.number(),rooms:t.z.array(t.z.number())}),street_name:t.z.string(),street_number:t.z.string().nullable(),type:t.z.number(),vendor:t.z.object({id:t.z.number(),configuration:t.z.object({application_external_api:t.z.null()}),logo:t.z.object({v_log_80x60:t.z.string(),v_log_120x90:t.z.string(),v_log_160x120:t.z.string()}),name:t.z.string(),offices:t.z.array(t.z.object({address:t.z.string(),phone:t.z.string(),mobile:t.z.string().nullable(),type:t.z.number(),region:t.z.object({id:t.z.number(),short_name:t.z.string()})})),slug:t.z.string()}),website:t.z.string().nullable(),change_color:t.z.boolean()}),z=t.z.object({full_name:t.z.string(),full_name_reverted:t.z.string(),id:t.z.number(),included_location:t.z.object({description:t.z.string(),transport_intro:t.z.string(),education_intro:t.z.string(),medical_care_intro:t.z.string(),services_intro:t.z.string(),sport_intro:t.z.string()}),is_duplicate:t.z.boolean(),name:t.z.string(),name_declension_about:t.z.string(),name_declension_what:t.z.string(),name_declension_where:t.z.string(),parent:t.z.object({id:t.z.number(),name:t.z.string(),slug:t.z.string()}).nullable(),short_name:t.z.string(),short_name_reverted:t.z.string(),slug:t.z.string(),stats:t.z.object({active_1_percentile_price_m2:t.z.number().nullable(),active_2_percentile_price_m2:t.z.number().nullable(),active_3_percentile_price_m2:t.z.number().nullable(),average_price_m2:t.z.number().nullable(),offers_count_for_sale:t.z.number(),promotions_count_discounts:t.z.number(),promotions_count_last_minutes:t.z.number(),promotions_count_open_days:t.z.number(),promotions_count_presales:t.z.number(),promotions_count_promotions:t.z.number(),promotions_count_total:t.z.number(),properties_all_count_for_sale:t.z.number(),properties_all_rooms_ranges:t.z.record(t.z.number()),properties_commercials_count_cheap:t.z.number(),properties_commercials_rooms_ranges:t.z.record(t.z.number()),properties_flats_count_cheap:t.z.number(),properties_flats_count_for_sale:t.z.number(),properties_flats_count_luxury:t.z.number(),properties_flats_ranges_area_max:t.z.number(),properties_flats_ranges_area_min:t.z.number(),properties_flats_ranges_price_min:t.z.number(),properties_flats_rooms_ranges:t.z.record(t.z.number()),properties_houses_count_cheap:t.z.number(),properties_houses_count_for_sale:t.z.number(),properties_houses_count_luxury:t.z.number(),properties_houses_count_ready:t.z.number(),properties_flats_count_ready:t.z.number(),properties_commercial_count_ready:t.z.number(),properties_houses_ranges_area_max:t.z.number(),properties_houses_ranges_area_min:t.z.number(),properties_houses_ranges_price_min:t.z.number(),properties_houses_rooms_ranges:t.z.record(t.z.number()),region_type_city:t.z.object({id:t.z.number(),slug:t.z.string(),name:t.z.string()}).nullable(),region_type_county:t.z.null(),region_type_district:t.z.null(),region_type_housing_estate:t.z.null(),region_type_town:t.z.null(),region_type_voivodeship:t.z.object({id:t.z.number(),slug:t.z.string(),name:t.z.string()})}),type:t.z.number(),tree:t.z.object({id:t.z.number(),left:t.z.number(),right:t.z.number()})}),a=t.z.object({abTesting:t.z.object({tests:t.z.object({}),isInitialized:t.z.boolean()}),article:t.z.object({detail:t.z.object({comments:t.z.object({list:t.z.array(t.z.unknown()),listRequest:t.z.number()}),article:t.z.null(),requestState:t.z.number(),relatedArticles:t.z.null(),relatedArticlesRequestState:t.z.number()}),list:t.z.object({articles:t.z.array(t.z.unknown()),page:t.z.number(),count:t.z.number(),pageSize:t.z.number(),requestState:t.z.number(),latestQuery:t.z.object({}),articlesFeatured:t.z.array(t.z.unknown()),category:t.z.null()}),authors:t.z.object({authors:t.z.array(t.z.unknown()),page:t.z.number(),count:t.z.number(),pageSize:t.z.number(),requestState:t.z.number()}),authorDetail:t.z.object({author:t.z.null(),articles:t.z.array(t.z.unknown()),authorRequestState:t.z.number(),articlesPage:t.z.null(),articlesCount:t.z.null()})}),notifications:t.z.array(t.z.unknown()),application:t.z.object({}),backToUrl:t.z.object({url:t.z.string(),text:t.z.string()}),favourite:t.z.object({fetchRequest:t.z.number(),patchRequest:t.z.number().optional(),favourites:t.z.object({offers:t.z.unknown(),articles:t.z.array(t.z.unknown()).optional(),initialized:t.z.boolean()})}),googleMapPOI:t.z.object({detail:t.z.object({pois:t.z.object({}),poisRequest:t.z.number()}),travelDirections:t.z.object({activePoi:t.z.null(),activePoiDirections:t.z.null(),poisDirections:t.z.object({})}),userPoi:t.z.array(t.z.unknown())}).optional(),googleTagManager:t.z.boolean(),homepage:t.z.object({recommendedOfferList:t.z.array(t.z.unknown()),count:t.z.null(),requestState:t.z.number()}),isApplicationSent:t.z.boolean().optional(),isAuthenticated:t.z.boolean(),investmentOffer:t.z.object({articles:t.z.array(t.z.unknown()),stats:t.z.null(),list:t.z.object({offers:t.z.object({offerList:t.z.array(t.z.unknown()),count:t.z.number(),pageSize:t.z.number(),page:t.z.number(),requestState:t.z.number(),latestQuery:t.z.object({})}),seo:t.z.object({seoContent:t.z.null(),requestState:t.z.number()}),form:t.z.object({formValues:t.z.object({category:t.z.string(),subcategory:t.z.string()})}),map:t.z.object({data:t.z.null(),requestState:t.z.number()}),propertiesCount:t.z.number(),propertiesCountRequestState:t.z.number()}),categories:t.z.null()}),login:t.z.object({authModalTab:t.z.number(),userSource:t.z.null(),userHasLoggedIn:t.z.null()}).optional(),marketplace:t.z.object({regions:t.z.array(t.z.unknown())}),metaData:t.z.object({title:t.z.string(),description:t.z.string(),canonical:t.z.string(),next:t.z.string(),robots:t.z.string(),ogDescription:t.z.string(),ogTitle:t.z.string(),ogType:t.z.string(),ogUrl:t.z.string(),dimensionRegion:t.z.string(),lang:t.z.string()}),newsletter:t.z.object({unsubscribe:t.z.object({email:t.z.null(),requestState:t.z.number(),error:t.z.null()})}),offerDetail:t.z.object({offer:t.z.null(),offerRequest:t.z.number(),favouriteOffers:t.z.array(t.z.unknown()).optional(),favouriteOffersRequest:t.z.number().optional(),articles:t.z.array(t.z.unknown()),articlesRequest:t.z.number(),promotions:t.z.array(t.z.unknown()),promotionsRequest:t.z.number(),properties:t.z.object({filter:t.z.object({properties:t.z.array(t.z.unknown()),requestState:t.z.number(),page:t.z.number(),count:t.z.number(),pageSize:t.z.number()}),investment:t.z.object({properties:t.z.array(t.z.unknown()),requestState:t.z.number(),page:t.z.number(),count:t.z.number(),pageSize:t.z.number()}),all:t.z.object({properties:t.z.array(t.z.unknown()),requestState:t.z.number(),page:t.z.number(),count:t.z.number(),pageSize:t.z.number()}),modal:t.z.object({properties:t.z.array(t.z.unknown()),requestState:t.z.number(),page:t.z.number(),count:t.z.number(),pageSize:t.z.number()})}),relatedOffers:t.z.array(t.z.unknown()),relatedOffersRequestState:t.z.number(),nearbyRegions:t.z.array(t.z.unknown()),nearbyRegionsRequestState:t.z.number(),recommendedOffers:t.z.array(t.z.unknown()),appliedOffersList:t.z.array(t.z.unknown()).optional(),appliedOffersListRequestState:t.z.number().optional()}),offerList:t.z.object({list:t.z.object({offers:o.array(),privileged_offers:t.z.array(t.z.unknown()),sold_offers:t.z.array(t.z.unknown()),soon_finished_offers:t.z.array(t.z.unknown()),sold_offers_page:t.z.number(),sold_offers_count:t.z.number(),soon_finished_offers_count:t.z.number(),count:t.z.number(),page:t.z.number(),page_size:t.z.number(),requestState:t.z.number(),latestQuery:t.z.object({type:t.z.string(),region:t.z.array(t.z.string())}),error:t.z.null(),propertiesCount:t.z.number(),propertiesCountRequestState:t.z.number()}),selectedRegions:z.array(),articles:t.z.array(t.z.object({author:t.z.object({name:t.z.string()}),date_published:t.z.string(),date_range:t.z.object({lower:t.z.string(),upper:t.z.null(),bounds:t.z.string()}).nullable(),excerpt:t.z.string(),gallery:t.z.object({image:t.z.object({g_img_440x440:t.z.string()})}),id:t.z.number(),slug:t.z.string(),title:t.z.string()})),articlesRequest:t.z.number(),childrenRegions:t.z.array(t.z.object({id:t.z.number(),name:t.z.string(),slug:t.z.string(),stats:t.z.object({promotions_count_total:t.z.number(),properties_all_count_for_sale:t.z.number(),properties_commercials_count_for_sale:t.z.number(),properties_flats_count_for_sale:t.z.number(),properties_houses_count_for_sale:t.z.number(),vendors_count_for_sale:t.z.number()}),full_name_reverted:t.z.string()})),childrenRegionsRequest:t.z.number(),parentRegions:t.z.array(t.z.unknown()),parentRegionsRequest:t.z.number(),search:t.z.object({id:t.z.number(),slug:t.z.string(),rooms_choice:t.z.array(t.z.unknown()).nullable(),create_date:t.z.string(),update_date:t.z.string(),name:t.z.string(),price:t.z.null(),rooms:t.z.null(),area:t.z.null(),is_luxury:t.z.boolean(),is_mdm:t.z.boolean(),family_type:t.z.null(),is_holiday:t.z.boolean(),holiday_location:t.z.null(),show_in_sitemap:t.z.boolean(),sort:t.z.null(),calls_count:t.z.number(),canonical_url:t.z.null(),seo_description:t.z.string(),seo_meta_keywords:t.z.array(t.z.string()).nullable(),show_meta_fields:t.z.boolean(),meta_title:t.z.null(),meta_description:t.z.string().nullable(),region:t.z.number(),type:t.z.number()}),nearbyRegions:t.z.array(t.z.object({id:t.z.number(),name:t.z.string(),slug:t.z.string(),stats:t.z.object({promotions_count_total:t.z.number(),properties_all_count_for_sale:t.z.number(),properties_commercials_count_for_sale:t.z.number(),properties_flats_count_for_sale:t.z.number(),properties_houses_count_for_sale:t.z.number(),vendors_count_for_sale:t.z.number()}),full_name_reverted:t.z.string()})),nearbyRegionsRequestState:t.z.number()}),offerListMap:t.z.object({list:t.z.object({offers:t.z.array(t.z.unknown()),count:t.z.number(),requestState:t.z.number(),latestQuery:t.z.object({}),error:t.z.null(),propertiesCount:t.z.number()}),selectedOffer:t.z.object({data:t.z.null(),requestState:t.z.number()}),selectedProperty:t.z.object({data:t.z.null(),requestState:t.z.number()}),applicationSentOffers:t.z.object({data:t.z.array(t.z.unknown()),requestState:t.z.number()}).optional(),region:t.z.object({data:t.z.array(t.z.unknown()),requestState:t.z.number()}),selectedRegion:z.array()}),offersNearby:t.z.object({application:t.z.array(t.z.unknown()),applicationRequestState:t.z.number(),offerList:t.z.array(t.z.unknown()),offerListRequestState:t.z.number(),offerDetail:t.z.array(t.z.unknown()),offerDetailRequestState:t.z.number(),propertyDetail:t.z.array(t.z.unknown()),propertyDetailRequestState:t.z.number()}),ourOffer:t.z.object({testimonials:t.z.object({list:t.z.array(t.z.unknown())})}),promotionList:t.z.object({promotions:t.z.array(t.z.unknown()),region:t.z.null(),statistic:t.z.null(),count:t.z.number(),page:t.z.number(),page_size:t.z.number(),requestState:t.z.number(),latestQuery:t.z.object({}),error:t.z.null(),form:t.z.object({formValues:t.z.object({type:t.z.string()})})}),partnersList:t.z.object({list:t.z.array(t.z.unknown())}),property:t.z.object({property:t.z.null(),propertyRequest:t.z.number(),favouriteProperties:t.z.array(t.z.unknown()).optional(),favouritePropertiesRequest:t.z.number().optional(),articles:t.z.array(t.z.unknown()),articlesRequest:t.z.number(),offersNearby:t.z.array(t.z.unknown()),offersNearbyCount:t.z.null(),offersNearbyRequest:t.z.number(),relatedOffers:t.z.array(t.z.unknown()),relatedOffersRequestState:t.z.number(),nearbyRegions:t.z.array(t.z.unknown()),nearbyRegionsRequestState:t.z.number(),promotions:t.z.array(t.z.unknown()),promotionsRequest:t.z.number(),recommendedProperties:t.z.array(t.z.unknown()),otherPropertiesInOffer:t.z.object({list:t.z.array(t.z.unknown()),count:t.z.number(),formValues:t.z.object({rooms:t.z.object({lower:t.z.string(),upper:t.z.string()})}),request:t.z.number(),errors:t.z.null(),excludeCurrentRoomFilterOption:t.z.boolean()}),stats:t.z.object({data:t.z.null(),requestState:t.z.number()}),appliedPropertiesList:t.z.array(t.z.unknown()).optional(),appliedPropertiesListRequestState:t.z.number().optional()}),ranking:t.z.object({cities:t.z.object({list:t.z.array(t.z.unknown())}),monthly:t.z.object({positions:t.z.array(t.z.unknown()),region_description:t.z.null(),month:t.z.null(),year:t.z.null(),region:t.z.null()}),quarterly:t.z.object({positions:t.z.array(t.z.unknown()),year:t.z.null(),quarter:t.z.null()}),quarterList:t.z.object({list:t.z.array(t.z.unknown())}),partnerList:t.z.object({list:t.z.array(t.z.unknown())}),form:t.z.object({formValues:t.z.object({period:t.z.string(),city:t.z.string()})}),region:t.z.null()}),responseState:t.z.object({state:t.z.number(),status:t.z.number(),url:t.z.string()}),search:t.z.object({activeDropdownItem:t.z.object({label:t.z.string(),id:t.z.null()}),multiRegionList:t.z.object({showMultiRegionList:t.z.boolean(),regions:t.z.array(t.z.unknown())}),formValues:t.z.object({search:t.z.string(),type:t.z.array(t.z.unknown()),rooms:t.z.object({lower:t.z.string(),upper:t.z.string()}),price:t.z.object({lower:t.z.string(),upper:t.z.string()}),area:t.z.object({lower:t.z.string(),upper:t.z.string()}),distance:t.z.string()}),currentTab:t.z.number(),fetchAllRequest:t.z.number(),regions:t.z.array(t.z.unknown()),fetchRegionsRequest:t.z.number(),places:t.z.array(t.z.unknown()),fetchPlacesRequest:t.z.number(),offers:t.z.array(t.z.unknown()),fetchOffersRequest:t.z.number(),vendors:t.z.array(t.z.unknown()),fetchVendorsRequest:t.z.number()}),siteMap:t.z.object({regions:t.z.object({voivodeship:t.z.null(),aggregation:t.z.null(),county:t.z.null(),city:t.z.null()}),offers:t.z.null(),articleCategories:t.z.null(),articles:t.z.object({list:t.z.array(t.z.unknown()),count:t.z.number(),page:t.z.number(),page_size:t.z.number()}),vendors:t.z.null()}),smartAds:t.z.object({offers:t.z.array(t.z.unknown())}),terms:t.z.object({content:t.z.null(),slug:t.z.null(),title:t.z.null(),requestState:t.z.number()}).optional(),ui:t.z.object({bottomFixedElementHeight:t.z.null()}),user:t.z.object({profile:t.z.object({data:t.z.null(),requestState:t.z.number(),patchUserForm:t.z.object({formValues:t.z.object({name:t.z.string(),email:t.z.string(),phone:t.z.string(),sex:t.z.string()}),request:t.z.number(),errors:t.z.null()}).optional()}),hidden:t.z.object({fetchRequest:t.z.number(),patchRequest:t.z.number(),hidden:t.z.object({offer:t.z.array(t.z.unknown()),application:t.z.array(t.z.unknown()),recommendation_property:t.z.array(t.z.unknown())})}).optional()}),variables:t.z.object({data:t.z.object({offer_construction_end_date:t.z.array(t.z.object({value:t.z.number(),label:t.z.string()})),offer_facilities:t.z.array(t.z.object({value:t.z.number(),label:t.z.string()})),offer_natural_sites:t.z.array(t.z.object({value:t.z.number(),label:t.z.string()})),offer_configuration_display_type:t.z.array(t.z.object({value:t.z.number(),label:t.z.string()})),offer_funds_protection:t.z.array(t.z.object({value:t.z.number(),label:t.z.string()})),offer_standard_description_type:t.z.array(t.z.object({value:t.z.number(),label:t.z.string()})),offer_parking_place_type:t.z.array(t.z.object({value:t.z.number(),label:t.z.string()})),offer_holiday_location:t.z.array(t.z.object({value:t.z.number(),label:t.z.string()})),offer_size:t.z.array(t.z.object({value:t.z.number(),label:t.z.string()})),offer_distance:t.z.array(t.z.object({value:t.z.number(),label:t.z.string()})),offer_display_type:t.z.array(t.z.object({value:t.z.number(),label:t.z.string()})),offer_price_type:t.z.array(t.z.object({value:t.z.number(),label:t.z.string()})),offer_listing_bullets:t.z.array(t.z.object({value:t.z.number(),label:t.z.string()})),offer_listing_bullets_short:t.z.array(t.z.object({value:t.z.number(),label:t.z.string()})),promotion_type:t.z.array(t.z.object({value:t.z.number(),label:t.z.string()})),property_flat_type:t.z.array(t.z.object({value:t.z.number(),label:t.z.string()})),property_house_type:t.z.array(t.z.object({value:t.z.number(),label:t.z.string()})),property_ownership_form:t.z.array(t.z.object({value:t.z.number(),label:t.z.string()})),property_kitchen_type:t.z.array(t.z.object({value:t.z.number(),label:t.z.string()})),property_quarters:t.z.array(t.z.object({value:t.z.number(),label:t.z.string()})),property_additional_areas:t.z.array(t.z.object({value:t.z.number(),label:t.z.string()})),property_room_area_type:t.z.array(t.z.object({value:t.z.number(),label:t.z.string()})),recommendation_stat_label:t.z.array(t.z.object({value:t.z.number(),label:t.z.string()})),user_type:t.z.array(t.z.object({value:t.z.number(),label:t.z.string()})),user_sex:t.z.array(t.z.object({value:t.z.number(),label:t.z.string()})),vendor_office_type:t.z.array(t.z.object({value:t.z.number(),label:t.z.string()})),vendor_type:t.z.array(t.z.object({value:t.z.number(),label:t.z.string()})),region_type:t.z.array(t.z.object({value:t.z.number(),label:t.z.string()})),application_meeting_time_preferences:t.z.array(t.z.object({value:t.z.number(),label:t.z.string()})),application_source_sections:t.z.array(t.z.object({value:t.z.number().nullable(),label:t.z.string()})),for_investor_search_type:t.z.array(t.z.object({value:t.z.number(),label:t.z.string()})),country_codes:t.z.array(t.z.object({value:t.z.number(),label:t.z.string()}))}),requestState:t.z.number()}),vendor:t.z.object({list:t.z.object({vendors:t.z.array(t.z.unknown()),soldVendors:t.z.array(t.z.unknown()),soldVendorsCount:t.z.number(),allOffersCount:t.z.number(),region:t.z.null(),count:t.z.number(),pageSize:t.z.number(),page:t.z.number(),requestState:t.z.number(),latestQuery:t.z.object({}),regionSEOMetadata:t.z.null()}),detail:t.z.object({articles:t.z.null(),cities:t.z.null(),offers:t.z.array(t.z.unknown()),offersCount:t.z.null(),offersRequest:t.z.number(),offersInRegion:t.z.array(t.z.unknown()),offersInRegionRequest:t.z.number(),rankings:t.z.null(),vendor:t.z.null(),vendorRequest:t.z.number(),count:t.z.null()}),nearbyRegionVendors:t.z.object({nearbyRegions:t.z.array(t.z.unknown()),childrenRegions:t.z.array(t.z.unknown())}),fetchAllRequest:t.z.number()}),viewType:t.z.object({current:t.z.string(),currentData:t.z.object({contentRegion:t.z.string()}),previous:t.z.null()})}),s=o,u=s.omit({change_color:!0,has_distinction:!0}).extend({configuration:s.shape.configuration.omit({display_type:!0,is_autoresponder_enabled:!0})}),i=t.z.object({json:a})}}]);