import { AxiosResponse } from "axios";
import JscClient from "./Client";
import { Observable, Subject } from "rxjs";
import { PayloadAction } from "typesafe-actions";
import { ROOM_UPDATE_ACTION_ID } from "Constant/WebSocket";
import { IWebSocketRoom } from "Types/WebSocket";
namespace JSCApi {
  export interface IUrlParams {
    filter?: string;
    options?: string;
    searchString?: string;
  }
  export interface IJscClientConfig {
    params?: IUrlParams;
  }
  export namespace DTO {
    namespace Aggregation {
      export interface IProductDetailsAggregationDTO {
        product?: DTO.Product.IProductDTO;
        media?: DTO.Product.IMediaDTO[];
        localization?: DTO.Product.Localization.IContainerDTO[];
        productTags?: DTO.Product.Tag.IProductTagsDTO[];
        availabilities?: DTO.Stock.IAvailableVariantStockDTO[];
        variants?: DTO.Product.Variant.IProductVariantDTO[];
        productVariants?: DTO.Product.Variant.IProductVariantDTO[];
        ringSizeChangeabilities?: DTO.Product.Variant.IRingsizeChangeabilityDTO[];
        productSalesPrice?: DTO.Product.IProductSalesPriceLocalDTO;
        reservations?: DTO.Product.Reservation.IReservationDTO[];
        approvalDetails?: DTO.Product.IProductApprovalDetailsDTO;
      }
      export interface IAggregatedGameDetailsDTO {
        game?: DTO.Game.IGameDTO;
        gameVariants?: DTO.Game.IGameVariantPerformanceDTO[];
        settings?: DTO.Game.ISettingsOverviewDTO;
        stockInfo?: DTO.Game.IGameStockInfoDTO;
        salesStatistic?: DTO.Game.IGameSalesStatisticDTO;
        createdAt?: string;
        createdBy?: string;
        modifiedAt?: string;
        modifiedBy?: string;
      }
    }
    namespace Product {
      export const I_MEDIA_DTO_SIZE_SMALL = "small";
      export const I_MEDIA_DTO_SIZE_LARGE = "large";
      export const I_MEDIA_DTO_SIZE_HUGE = "huge";
      export const I_MEDIA_DTO_TYPE_IMAGE = "image";
      export const I_MEDIA_DTO_TYPE_VARIANT_IMAGE = "variantImage";
      export const I_MEDIA_DTO_TYPE_VIDEO = "video";
      export const I_MEDIA_DTO_TYPE_360 = "360";
      export const I_MEDIA_DTO_TYPE_SPRITE = "spriteVideo";
      export const I_MEDIA_DTO_TYPE_SWF = "swfVideo";
      export const I_MEDIA_DTO_TYPE_TEASER = "teaser";
      export const I_MEDIA_DTO_TYPE_BANNER = "banner";
      export const I_MEDIA_DTO_SIZE_LO_RES = "loRes";
      export const I_MEDIA_DTO_SIZE_MID_RES = "midRes";
      export const I_MEDIA_DTO_SIZE_HI_RES = "hiRes";
      export const I_MEDIA_DTO_TYPE_STREAM_REPLAY = "streamReplay";
      export const I_MEDIA_DTO_TYPE_VERTICAL_STREAM = "verticalStream";
      export const I_MEDIA_DTO_TYPE_STREAM_CLEAN_FEED = "streamCleanFeed";
      export const I_MEDIA_DTO_MEDIUM_AVAILABLE = "available";
      export const I_MEDIA_DTO_MEDIUM_UNAVAILABLE = "unavailable";
      export const I_MEDIA_DTO_STREAM_TYPE_HLS = "hls";
      export const I_MEDIA_DTO_STREAM_TYPE_HDS = "hds";
      export const I_MEDIA_DTO_STREAM_TYPE_MP4 = "mp4";
      export const I_MEDIA_DTO_STREAM_TYPE_EMBEDDABLE_HTML_PLAYER =
        "embeddableHtmlPlayer";
      export const I_MEDIA_DTO_ENCODING_240p = "240p";
      export const I_MEDIA_DTO_ORIENTATION_PORTRAIT = "portrait";
      export const I_MEDIA_DTO_ORIENTATION_LANDSCAPE = "landscape";
      export const I_MEDIA_DTO_CODEC_H264 = "h.264";
      export const I_MEDIA_DTO_CODEC_H265 = "h.265";
      export const I_PRODUCT_INFO_LOCAL_DTO_PRODUCT_TYPE_UNDEFINED =
        "undefined";
      export const I_PRODUCT_INFO_LOCAL_DTO_PRODUCT_TYPE_NORMAL = "normal";
      export const I_PRODUCT_INFO_LOCAL_DTO_PRODUCT_TYPE_HIGHLIGHT =
        "highlight";
      export const I_PRODUCT_INFO_WEB_DTO_VISIBILITY_NONE = "none";
      export const I_PRODUCT_INFO_WEB_DTO_VISIBILITY_CATALOG = "catalog";
      export const I_PRODUCT_INFO_WEB_DTO_VISIBILITY_SEARCH = "search";
      export const I_PRODUCT_INFO_WEB_DTO_VISIBILITY_CATALOG_SEARCH =
        "catalog search";
      export const I_PRODUCT_INFO_WEB_DTO_UPLOAD_STATUS_INITIATED = "initiated";
      export const I_PRODUCT_INFO_WEB_DTO_UPLOAD_STATUS_UPLOADED = "uploaded";
      export const I_PRODUCT_INFO_WEB_DTO_UPLOAD_STATUS_ERROR = "error";
      export const I_PRODUCT_INFO_WEB_DTO_STATUS_ENABLED = "enabled";
      export const I_PRODUCT_INFO_WEB_DTO_STATUS_DISABLED = "disabled";
      export const I_PRODUCT_INFO_WEB_DTO_STATUS_PAUSED_FOR_QUEUE =
        "pausedForQueue";
      export const I_PRODUCT_INFO_WEB_DTO_STATUS_WAITING_FOR_UPLOAD =
        "waitingForUpload";
      export const I_PRODUCT_VARIANT_DTO_SAMPLE_VARIANT_TYPE_NO_SAMPLE =
        "noSample";
      export const I_PRODUCT_VARIANT_DTO_SAMPLE_VARIANT_TYPE_PRIMARY_SAMPLE =
        "primarySample";
      export const I_PRODUCT_VARIANT_DTO_SAMPLE_VARIANT_TYPE_BACKUP_SAMPLE =
        "backupSample";
      export const I_RINGSIZE_CHANGEABILITY_DTO_CHANGE_UPSIZE = "upsize";
      export const I_RINGSIZE_CHANGEABILITY_DTO_CHANGE_DOWNSIZE = "downsize";
      export const I_RESERVATION_DTO_ENTRY_EDITOR_CLI = "AS NIGHT";
      export const I_RESERVATION_DTO_LOCK_HIGHLIGHT = "Highlights";
      export const I_RESERVATION_DTO_LOCK_GEM = "Gem";
      export const I_RESERVATION_DTO_LOCK_MARKETING = "Marketing";
      export const I_RESERVATION_DTO_LOCK_SALE = "Sale";
      export const I_RESERVATION_DTO_LOCK_NOTV = "notv";
      export const I_RESERVATION_DTO_LOCK_FAMILY = "Family";
      export const I_RESERVATION_DTO_LOCK_EXPORT = "Export";
      export const I_RESERVATION_DTO_LOCK_EXPORT_REASON_ITALY = "Italy";
      export const I_RESERVATION_DTO_LOCK_EXPORT_REASON_GERMANY = "Germany";
      export const I_RESERVATION_DTO_LOCK_EXPORT_REASON_UNITED_KINGDOM =
        "UnitedKingdom";
      export const I_RESERVATION_DTO_LEGACY_SAVE_TYPE_CREATE = "create";
      export const I_RESERVATION_DTO_LEGACY_SAVE_TYPE_UPDATE = "update";
      export const I_RESERVATION_DTO_LOCK_STATE_RESET = "0";
      export const I_RESERVATION_DTO_LOCK_STATE_ACTIVE = "1";
      export const I_RESERVATION_DTO_LOCK_STATE_DELETE = "2";
      export interface IProductDTO {
        baseDTO?: DTO.Product.IProductBaseDTO;
        infoDTO?: DTO.Product.IProductInfoDTO;
        priceLocalDTO?: DTO.Product.IProductPriceLocalDTO;
        gemsDTO?: DTO.Product.IProductGemDTO[];
        mediaCollection?: DTO.Product.IMediaDTO[];
        infoLocalDTO?: DTO.Product.IProductInfoLocalDTO;
        infosWebDTO?: DTO.Product.IProductInfoWebDTO[];
        priceGlobalCollectionDTO?: DTO.Product.IProductPriceGlobalDTO[];
      }
      export interface IProductBaseDTO {
        productId?: string;
        name?: string;
        created?: string;
        modified?: string;
        isApprovedData?: boolean;
        sourceProductId?: string;
        sourceVariantId?: string;
        createdAt?: string;
        createdBy?: string;
        modifiedAt?: string;
        modifiedBy?: string;
      }
      export interface IProductInfoDTO {
        productId?: string;
        jewelryType?: string;
        material?: string;
        materialFamily?: string;
        materialWeight?: number;
        gemsCaratSum?: number;
        numberOfGems?: number;
        model?: string;
        modelDesign?: string;
        designType?: string;
        setCode?: string;
        family?: string;
        isMultiSize?: boolean;
        isOnDemand?: boolean;
        itemSize?: string;
        itemSizeExt?: string;
        creator?: string;
        manufacturer?: string;
        originalProductId?: string;
        gia?: string;
        brand?: string;
        legacyArticleId?: string;
        isInCatalogue?: boolean;
        createdAt?: string;
        createdBy?: string;
        modifiedAt?: string;
        modifiedBy?: string;
      }
      export interface IProductPriceLocalDTO {
        productId?: number;
        purchasePriceOriginal?: number;
        actualPurchasePriceOriginal?: number;
        purchasePrice?: number;
        purchasePriceWithVat?: number;
        actualPurchasePrice?: number;
        actualPurchasePriceWithVat?: number;
        targetPrice?: number;
        startPrice?: number;
        targetPriceCalculated?: number;
        startPriceCalculated?: number;
        webPrice?: number;
        highestAuctionEndPrice?: number;
        lowestAuctionEndPrice?: number;
        lastAuctionEndPrice?: number;
        bundlingPrice?: number;
        createdAt?: string;
        createdBy?: string;
        modifiedAt?: string;
        modifiedBy?: string;
      }
      export interface IProductGemDTO {
        id?: number;
        name?: string;
        productId?: string;
        gemFamily?: string;
        gemShape?: string;
        gemShapeFamily?: string;
        numberOfGems?: number;
        caratPerGem?: number;
        caratSum?: number;
        gemSetting?: string;
        isMainGem?: boolean;
        gemOrder?: number;
        gemWidth?: number;
        gemHeight?: number;
        gemOrigin?: string;
        gemColor?: string;
        createdAt?: string;
        createdBy?: string;
        modifiedAt?: string;
        modifiedBy?: string;
      }
      export interface IMediaDTO {
        productId?: string;
        variantId?: string;
        type?: string;
        offsetMS?: number;
        durationMS?: number;
        streamType?: string;
        encoding?: string;
        url?: string;
        size?: string;
        available?: string;
        orientation?: string;
        codec?: string;
        metaInfo?: DTO.Media.IMediaMetaInfoDTO;
        createdAt?: string;
        createdBy?: string;
        modifiedAt?: string;
        modifiedBy?: string;
      }
      export interface IProductInfoLocalDTO {
        productId?: string;
        productType?: string;
        brand?: string;
        gameFormatComment?: string;
        additionalComment?: string;
        isDisabledOnDemand?: boolean;
        isRestrictedMultiSize?: boolean;
        hasNoTvLock?: boolean;
        salesChannelWebShopStatusEnabled?: boolean;
        salesChannelPersonalShopStatusEnabled?: boolean;
        createdAt?: string;
        createdBy?: string;
        modifiedAt?: string;
        modifiedBy?: string;
      }
      export interface IProductInfoWebDTO {
        productId?: string;
        status?: string;
        language?: string;
        price?: number;
        newFrom?: string;
        newTo?: string;
        visibility?: string;
        visibleFrom?: string;
        uploadedAt?: string;
        completeLocalisationData?: boolean;
        color?: string;
        uploadStatus?: string;
        lastError?: string;
        currentPrice?: number;
        inWebShopSince?: string;
        createdAt?: string;
        createdBy?: string;
        modifiedAt?: string;
        modifiedBy?: string;
      }
      export interface IProductPriceGlobalDTO {
        productId?: number;
        currency?: string;
        factoryCostOriginal?: number;
        factoryCost?: number;
        targetPrice?: number;
        startPrice?: number;
        createdAt?: string;
        createdBy?: string;
        modifiedAt?: string;
        modifiedBy?: string;
      }
      export interface IProductSalesPriceLocalDTO {
        productId?: number;
        salesPrice?: number;
        salesPriceStaff?: number;
        isSalesPriceReducedByLastGames?: boolean;
        createdAt?: string;
        createdBy?: string;
        modifiedAt?: string;
        modifiedBy?: string;
      }
      export interface IProductApprovalDetailsDTO {
        productId?: string;
        approvedBy?: string;
        approvedAt?: string;
        invoiceNr?: string;
        deliveredAt?: string;
        poNumber?: string;
        createdAt?: string;
        createdBy?: string;
        modifiedAt?: string;
        modifiedBy?: string;
      }
      export namespace Localization {
        export interface IContainerDTO {
          container?: string;
          data?: string;
          createdAt?: string;
          createdBy?: string;
          modifiedAt?: string;
          modifiedBy?: string;
        }
      }
      export namespace Tag {
        export interface IProductTagsDTO {
          productId?: string;
          tagType?: string;
          tags?: DTO.Product.Tag.ITagDTO[];
          createdAt?: string;
          createdBy?: string;
          modifiedAt?: string;
          modifiedBy?: string;
        }
        export interface ITagDTO {
          name?: string;
          expirationDate?: string;
          count?: number;
          createdAt?: string;
          createdBy?: string;
          modifiedAt?: string;
          modifiedBy?: string;
        }
      }
      export namespace Variant {
        export interface IProductVariantDTO {
          material?: string;
          productId?: string;
          ringsize?: string;
          variantId?: string;
          isDesignated?: boolean;
          sampleVariantType?: string;
          hasStock?: boolean;
          createdAt?: string;
          createdBy?: string;
          modifiedAt?: string;
          modifiedBy?: string;
        }
        export interface IRingsizeChangeabilityDTO {
          productId?: string;
          originalRingsize?: string;
          minimalRingsize?: string;
          maximalRingsize?: string;
          preferredChange?: string;
          createdAt?: string;
          createdBy?: string;
          modifiedAt?: string;
          modifiedBy?: string;
        }
      }
      export namespace Reservation {
        export interface IReservationDTO {
          entryId?: number;
          entryDateTime?: string;
          category?: string;
          reason?: string;
          reasonExport?: string;
          reasonWeb?: string;
          productId?: string;
          startDate?: string;
          lockEnd?: string;
          expirationDate?: string;
          expectedShowTime?: string;
          comment?: string;
          editor?: string;
          basket?: string;
          saveTypeForLegacyResult?: string;
          gem1?: string;
          createdAt?: string;
          createdBy?: string;
          modifiedAt?: string;
          modifiedBy?: string;
        }
      }
    }
    namespace Media {
      export interface IMediaMetaInfoDTO {
        internalVideoId?: string;
        presenter?: string;
        createdAt?: string;
        createdBy?: string;
        modifiedAt?: string;
        modifiedBy?: string;
      }
    }
    namespace Stock {
      export interface IAvailableVariantStockDTO {
        productId?: string;
        variantId?: string;
        quantityAvailable?: number;
        sku?: number;
        createdAt?: string;
        createdBy?: string;
        modifiedAt?: string;
        modifiedBy?: string;
      }
    }
    namespace Customer {
      export const I_CUSTOMER_MSISDN_DTO_TYPE_NONE = "defaultMsisdn";
      export const I_CUSTOMER_MSISDN_DTO_TYPE_WEBSHOP_AUCTION =
        "webshopAuctionMsisdn";
      export const I_CUSTOMER_MSISDN_DTO_TYPE_WEBSHOP_BILLING =
        "webShopBillingMsisdn";
      export const I_CUSTOMER_MSISDN_DTO_TYPE_WEBSHOP_SHIPPING =
        "webShopShippingMsisdn";
      export const I_CUSTOMER_MSISDN_DTO_TYPE_MOBILE_APP_DEFAULT =
        "mobile_app_default";
      export interface ICustomerRankingDTO {
        customerRanking?: string;
        customerName?: string;
        customerCity?: string;
        customerBuyRate?: number;
        customerHotnessRank?: number;
        customerOrdersToday?: number;
        customerId?: string;
        customerMedianPrice?: number;
        paidVolume?: number;
        isIncognito?: boolean;
        createdAt?: string;
        createdBy?: string;
        modifiedAt?: string;
        modifiedBy?: string;
      }
      export interface ICustomerMsisdnDTO {
        id?: string;
        msisdn?: string;
        preferred?: boolean;
        creationDate?: string;
        source?: string;
        isBlocked?: boolean;
        types?: string[];
        createdAt?: string;
        createdBy?: string;
        modifiedAt?: string;
        modifiedBy?: string;
      }
    }
    namespace Game {
      export const I_PRODUCT_BUNDLE_BASE_DTO_BROKEN_STATUS_OK = "ok";
      export const I_PRODUCT_BUNDLE_BASE_DTO_BROKEN_STATUS_DEFECT = "defect";
      export const I_PRODUCT_BUNDLE_BASE_DTO_BROKEN_STATUS_NOT_CHECKED =
        "notChecked";
      export const I_PRODUCT_BUNDLE_BASE_DTO_TYPE_CREATION = "creation";
      export const I_PRODUCT_BUNDLE_BASE_DTO_TYPE_FIXED_STOCK = "fixedStock";
      export const I_PRODUCT_BUNDLE_BASE_DTO_PLANNED_NOT = "notplanned";
      export const I_PRODUCT_BUNDLE_BASE_DTO_PLANNED_QUEUE = "queue";
      export const I_PRODUCT_BUNDLE_BASE_DTO_STATUS_INACTIVE = "inactive";
      export const I_PRODUCT_BUNDLE_BASE_DTO_STATUS_ACTIVATED = "activated";
      export const I_PRODUCT_BUNDLE_BASE_DTO_STATUS_DEACTIVATED = "deactivated";
      export const I_PRODUCT_BUNDLE_BASE_DTO_STATUS_DELETED = "deleted";
      export const I_PRODUCT_BUNDLE_BASE_DTO_PREFIX_MULTI_CREATION = "PC";
      export const I_PRODUCT_BUNDLE_BASE_DTO_PREFIX_SINGLE_VARIANTS = "PS";
      export const I_PRODUCT_BUNDLE_BASE_DTO_MAX_IDENTIFIER_NUMBER = "8";
      export const I_GAME_DTO_STATUS_PLANNED = "planned";
      export const I_GAME_DTO_STATUS_PREPARED = "prepared";
      export const I_GAME_DTO_STATUS_STARTING = "starting";
      export const I_GAME_DTO_STATUS_RUNNING = "running";
      export const I_GAME_DTO_STATUS_ENDED = "ended";
      export const I_GAME_DTO_STATUS_CLOSED = "closed";
      export const I_GAME_DTO_STATUS_CLEANUP_CLOSED = "cleanupClosed";
      export const I_GAME_DTO_STATUS_CANCELLED = "cancelled";
      export const I_GAME_DTO_STATUS_KILLED = "killed";
      export const I_GAME_DTO_GAME_MODE_NORMAL = "normal";
      export const I_GAME_DTO_GAME_MODE_ONDEMAND = "ondemand";
      export const I_GAME_DTO_GAME_MODE_MULTISIZE = "multisize";
      export const I_GAME_DTO_GAME_TYPE_SINGLE_VARIANT = "singleVariant";
      export const I_GAME_DTO_GAME_TYPE_ONDEMAND = "ondemand";
      export const I_GAME_DTO_GAME_TYPE_MULTI_VARIANT = "multiVariant";
      export const I_GAME_DTO_GAME_TYPE_MULTI_CREATION = "multiCreation";
      export const I_GAME_DTO_GAME_TYPE_MULTI_PRODUCT = "multiProduct";
      export const I_GAME_DTO_SALE_MODE_DEFAULT = "default";
      export const I_GAME_DTO_SALE_MODE_RETAIL = "retail";
      export const I_GAME_DTO_BID_STATUS_ENABLED = "enabled";
      export const I_GAME_DTO_BID_STATUS_DISABLED = "disabled";
      export const I_GAME_VARIANT_PERFORMANCE_DTO_GAME_VARIANT_STATUS_ENABLED =
        "enabled";
      export const I_GAME_VARIANT_PERFORMANCE_DTO_GAME_VARIANT_STATUS_DISABLED =
        "disabled";
      export const I_VIEWER_STATISTICS_CHANNEL_DTO_CHANNEL_HBBTV = "hbbtv";
      export const I_VIEWER_STATISTICS_CHANNEL_DTO_CHANNEL_STREAM = "stream";
      export const I_VIEWER_STATISTICS_CHANNEL_DTO_CHANNEL_API = "api";
      export const I_VIEWER_STATISTICS_CHANNEL_DTO_CHANNEL_CLEAN_FEED_STREAM =
        "cleanFeedStream";
      export interface IGameStatisticDTO {
        showDate?: string;
        marginInPercent?: number;
        performancePerMinute?: number;
        producerName?: string;
        presenterName?: string;
        allQuantity?: number;
        cancellationQuantity?: number;
        returnQuantity?: number;
        endPriceInCent?: number;
        specialName?: string;
        guestName?: string;
        gameId?: string;
        runtimeEntryId?: string;
        createdAt?: string;
        createdBy?: string;
        modifiedAt?: string;
        modifiedBy?: string;
      }
      export interface IGameSoundDTO {
        name?: string;
        path?: string;
        activatedAt?: string;
        createdAt?: string;
        createdBy?: string;
        modifiedAt?: string;
        modifiedBy?: string;
      }
      export interface IGlobalGameSettingsDTO {
        guests?: string[];
        presenters?: string[];
        producers?: string[];
        specials?: string[];
        createdAt?: string;
        createdBy?: string;
        modifiedAt?: string;
        modifiedBy?: string;
      }
      export interface IShiftDTO {
        id?: number;
        shift?: number;
        startsAt?: string;
        endsAt?: string;
        pattern?: string;
        patternStartsAt?: string;
        patternEndsAt?: string;
        presenter?: string;
        producer?: string;
        guest?: string;
        special?: string;
        priceCrashPresetValue?: number;
        isPriceCrashPresetEnabled?: boolean;
        createdAt?: string;
        createdBy?: string;
        modifiedAt?: string;
        modifiedBy?: string;
      }
      export interface IGameDTO {
        gameType?: string;
        currentPriceInCent?: number;
        endPriceInCent?: number;
        freeDelivery?: boolean;
        gameEndedAt?: string;
        gameMode?: string;
        gameStartedAt?: string;
        id?: string;
        isHighlight?: boolean;
        plannedFor?: string;
        presenter?: string;
        producer?: string;
        productId?: string;
        quantityAtStart?: number;
        quantityCurrent?: number;
        pretendedQuantityAtStart?: number;
        remark?: string;
        specialBrand?: string;
        specialGuest?: string;
        startPriceInCent?: number;
        status?: string;
        startId?: number;
        showGame?: string;
        articleId?: string;
        runtimeEntryId?: string;
        saleMode?: string;
        shift?: number;
        bidStatus?: string;
        isProductBundle?: boolean;
        relatedProductIds?: string[];
        productBundleIdentifier?: string;
        planer?: string;
        withRemoteStock?: boolean;
        showSpecial?: string;
        isRobotGame?: boolean;
        createdAt?: string;
        createdBy?: string;
        modifiedAt?: string;
        modifiedBy?: string;
      }
      export interface IGameVariantPerformanceDTO {
        stockAtStart?: number;
        stockAvailable?: number;
        sold?: number;
        gameId?: string;
        variantId?: string;
        productId?: string;
        ringsize?: string;
        material?: string;
        status?: string;
        keymap?: string;
        disabledAt?: string;
        createdAt?: string;
        createdBy?: string;
        modifiedAt?: string;
        modifiedBy?: string;
      }
      export interface ISettingsOverviewDTO {
        showCaller?: boolean;
        onlineCount?: number;
        callerCount?: number;
        potentialBidderCount?: number;
        isHighlightShow?: boolean;
        activeTimerInSeconds?: number;
        soundFile?: string;
        soundActivatedAt?: string;
        soundFilePath?: string;
        tickerState?: boolean;
        highlightPricechange?: number;
        highlightBidder?: number;
        highlightBidLockEnabled?: boolean;
        mottos?: number;
        schnapp?: number;
        jump?: number;
        system?: number;
        price?: number;
        jumptime?: number;
        shippingCost?: number;
        autoSinkActivated?: boolean;
        productInfoBoxVisible?: boolean;
        infoBoxProductId?: string;
        priceCrashCount?: number;
        maxAllowedAnonymousBids?: number;
        createdAt?: string;
        createdBy?: string;
        modifiedAt?: string;
        modifiedBy?: string;
      }
      export interface IGameStockInfoDTO {
        stockAtStart?: number;
        stockAvailable?: number;
        createdAt?: string;
        createdBy?: string;
        modifiedAt?: string;
        modifiedBy?: string;
      }
      export interface IGameSalesStatisticDTO {
        confirmedPieces?: number;
        confirmedRevenue?: number;
        confirmedMargin?: number;
        confirmedMarginRate?: number;
        createdAt?: string;
        createdBy?: string;
        modifiedAt?: string;
        modifiedBy?: string;
      }
      export interface IViewerStatisticsDTO {
        baseDTO?: DTO.Game.IViewerStatisticsBaseDTO;
        channelCollection?: DTO.Game.IViewerStatisticsChannelDTO[];
      }
      export interface IViewerStatisticsBaseDTO {
        timestamp?: string;
        gameId?: number;
        createdAt?: string;
        createdBy?: string;
        modifiedAt?: string;
        modifiedBy?: string;
      }
      export interface IViewerStatisticsChannelDTO {
        channel?: string;
        count?: number;
        createdAt?: string;
        createdBy?: string;
        modifiedAt?: string;
        modifiedBy?: string;
      }
      export namespace ProductBundle {
        export interface IProductBundleDTO {
          base?: DTO.Game.ProductBundle.IProductBundleBaseDTO;
          members?: DTO.Game.ProductBundle.IProductBundleMemberDTO[];
          createdAt?: string;
          createdBy?: string;
          modifiedAt?: string;
          modifiedBy?: string;
        }
        export interface IProductBundleBaseDTO {
          id?: string;
          name?: string;
          type?: string;
          bundleIdentifier?: string;
          bundleIdentifierPrefix?: string;
          status?: string;
          targetPrice?: number;
          startPrice?: number;
          targetPriceRevised?: number;
          startPriceRevised?: number;
          purchasePrice?: number;
          purchasePriceVat?: number;
          legacyArticleName?: string;
          plannedIn?: string;
          plannedAt?: string;
          brokenStatus?: string;
          bundleMatchingValue?: string;
          createdAt?: string;
          createdBy?: string;
          modifiedAt?: string;
          modifiedBy?: string;
        }
        export interface IProductBundleMemberDTO {
          productId?: string;
          variantId?: string;
          problems?: string[];
          position?: number;
          keymap?: string;
          createdAt?: string;
          createdBy?: string;
          modifiedAt?: string;
          modifiedBy?: string;
        }
      }
    }
    namespace Order {
      export const I_ORDER_ITEM_DTO_SOO_TV = "tv";
      export const I_ORDER_ITEM_DTO_SOO_BID_AGENT_NATIVE = "bidAgentNative";
      export const I_ORDER_ITEM_DTO_SOO_BID_AGENT_FR = "bidAgentFR";
      export const I_ORDER_ITEM_DTO_SOO_BID_AGENT_NL = "bidAgentNL";
      export const I_ORDER_ITEM_DTO_SOO_BID_AGENT_ES = "bidAgentES";
      export const I_ORDER_ITEM_DTO_SOO_BID_AGENT_IT = "bidAgentIT";
      export const I_ORDER_ITEM_DTO_SOO_BID_AGENT_EN = "bidAgentEN";
      export const I_ORDER_ITEM_DTO_SOO_BID_AGENT_EN_EXTERNAL =
        "bidAgentENExternal";
      export const I_ORDER_ITEM_DTO_SOO_WEBSHOP_NATIVE = "webshopNative";
      export const I_ORDER_ITEM_DTO_SOO_WEBSHOP_FR = "webshopFR";
      export const I_ORDER_ITEM_DTO_SOO_WEBSHOP_NL = "webshopNL";
      export const I_ORDER_ITEM_DTO_SOO_WEBSHOP_ES = "webshopES";
      export const I_ORDER_ITEM_DTO_SOO_WEBSHOP_IT = "webshopIT";
      export const I_ORDER_ITEM_DTO_SOO_PERSONAL_SHOP = "personalShop";
      export const I_ORDER_ITEM_DTO_SOO_PERSONAL_SHOP_WEB_NATIVE =
        "personalShopWebNative";
      export const I_ORDER_ITEM_DTO_SOO_PERSONAL_SHOP_WEB_FR =
        "personalShopWebFR";
      export const I_ORDER_ITEM_DTO_SOO_PERSONAL_SHOP_WEB_NL =
        "personalShopWebNL";
      export const I_ORDER_ITEM_DTO_SOO_PERSONAL_SHOP_WEB_ES =
        "personalShopWebES";
      export const I_ORDER_ITEM_DTO_SOO_PERSONAL_SHOP_WEB_IT =
        "personalShopWebIT";
      export const I_ORDER_ITEM_DTO_SOO_APP_MOBILE_ANDROID = "appMobileAndroid";
      export const I_ORDER_ITEM_DTO_SOO_APP_MOBILE_IOS = "appMobileIOS";
      export const I_ORDER_ITEM_DTO_SOO_APP_SMART_TV = "appSmartTv";
      export const I_ORDER_ITEM_DTO_SOO_RETROSPECTIVE_ENTRY =
        "retrospectiveEntry";
      export const I_ORDER_ITEM_DTO_SOO_EMPLOYEE_SALE = "employeeSale";
      export const I_ORDER_ITEM_DTO_SOO_KATSHOP_INT = "katShopInt";
      export const I_ORDER_ITEM_DTO_SOO_PERSONAL_SHOP_KAT_INT =
        "personalShopKatInt";
      export const I_ORDER_ITEM_DTO_SOO_APP_MOBILE_SHOP_ANDROID =
        "appShoppingAndroid";
      export const I_ORDER_ITEM_DTO_SOO_APP_MOBILE_SHOP_IOS = "appShoppingIOS";
      export const I_ORDER_ITEM_DTO_FORMER_REFERENCE_TYPE_ORDER_ENTRY_ID =
        "orderEntryId";
      export const I_ORDER_ITEM_DTO_FORMER_REFERENCE_TYPE_RESERVATION_ID =
        "reservationEntryId";
      export const I_ORDER_ITEM_DTO_ORDER_ITEM_TYPE_DEFAULT = "default";
      export const I_ORDER_ITEM_DTO_ORDER_ITEM_TYPE_PROPOSED = "proposed";
      export const I_ORDER_ITEM_DTO_ORDER_ITEM_TYPE_MANUAL = "manual";
      export const I_ORDER_ITEM_DTO_ORDER_ITEM_STATUS_BOOKED = "booked";
      export const I_ORDER_ITEM_DTO_ORDER_ITEM_STATUS_CANCELLED = "cancelled";
      export const I_ORDER_ITEM_DTO_ORDER_ITEM_STATUS_PENDING = "pending";
      export const I_ORDER_ITEM_DTO_ORDER_ITEM_STATUS_PRE_PENDING =
        "prePending";
      export const I_ORDER_ITEM_DTO_ORDER_ITEM_STATUS_REJECTED = "rejected";
      export const I_ORDER_ITEM_DTO_ORDER_CONTEXT_PERSONAL_SHOPPER =
        "personalShopper";
      export const I_ORDER_ITEM_DTO_ORDER_CONTEXT_EMERGENCY_BID =
        "emergencyBid";
      export const I_ORDER_ITEM_DTO_ORDER_CONTEXT_APP_RECENT_GAMES =
        "appRecentGames";
      export const I_ORDER_ITEM_DTO_ORDER_CONTEXT_APP_SHOP_ACCESSORIES =
        "appShopAccessories";
      export const I_ORDER_ITEM_DTO_ORDER_CONTEXT_APP_SIMILAR_ITEM =
        "appSimilarItem";
      export const I_ORDER_ITEM_DTO_ORDER_CONTEXT_APP_SHOP = "appShop";
      export const I_ORDER_ITEM_DTO_ORDER_CONTEXT_APP_LIKED_ITEM =
        "appLikedItem";
      export const I_ORDER_ITEM_DTO_ORDER_CONTEXT_APP_MYJUWELO = "appMyJuwelo";
      export const I_ORDER_ITEM_DTO_ORDER_CONTEXT_WEB_RECENT_GAMES =
        "webRecentGames";
      export const I_ORDER_ITEM_DTO_ORDER_ITEM_PRODUCER_LAST_GAMES =
        "LAST GAMES";
      export const I_ORDER_ITEM_DTO_ORDER_ITEM_PRODUCER_PERSONAL_SHOPPER =
        "PersonalShopper";
      export const I_ORDER_ITEM_DTO_CANCEL_REASON_MANUAL = "manual";
      export const I_ORDER_ITEM_DTO_CANCEL_REASON_PAYMENT_DEADLINE =
        "paymentDeadline";
      export const I_ORDER_ITEM_DTO_CANCELLATION_REASON_CC_STORNO = "ccStorno";
      export const I_ORDER_ITEM_DTO_CANCELLATION_REASON_CUSTOMER_NOT_CREDITWORTHY =
        "customerNotCreditworthy";
      export const I_ORDER_ITEM_DTO_CANCELLATION_REASON_PRODUCT_NOT_AVAILABLE =
        "productNotAvailable";
      export const I_ORDER_ITEM_DTO_CANCELLATION_REASON_END_OF_PAYMENT_TERMS =
        "endOfPaymentTerms";
      export const I_ORDER_ITEM_DTO_CANCELLATION_REASON_DEFECT = "defect";
      export const I_ORDER_ITEM_DTO_CANCELLATION_REASON_LOST = "lost";
      export const I_ORDER_ITEM_DTO_RETURN_REASON_CC_STORNO = "ccStorno";
      export const I_ORDER_ITEM_DTO_RETURN_REASON_CUSTOMER_NOT_CREDITWORTHY =
        "customerNotCreditworthy";
      export const I_ORDER_ITEM_DTO_RETURN_REASON_PRODUCT_NOT_AVAILABLE =
        "productNotAvailable";
      export const I_ORDER_ITEM_DTO_RETURN_REASON_END_OF_PAYMENT_TERMS =
        "endOfPaymentTerms";
      export const I_ORDER_ITEM_DTO_RETURN_REASON_DEFECT = "defect";
      export const I_ORDER_ITEM_DTO_RETURN_REASON_LOST = "lost";
      export const I_ORDER_ITEM_DTO_RETURN_REASON_RETURN_BEFORE_SHIPPING =
        "returnBeforeShipping";
      export const I_ORDER_ITEM_DTO_RETURN_REASON_UNDELIVERABLE =
        "undeliverable";
      export const I_ORDER_ITEM_DTO_RETURN_REASON_UNSATISFIED = "unsatisfied";
      export const I_ORDER_ITEM_DTO_RETURN_REASON_REFUSED = "refused";
      export const I_ORDER_ITEM_DTO_RETURN_REASON_UNRETURNABLE = "unreturnable";
      export const I_ORDER_ITEM_DTO_RETURN_REASON_NOT_PICKED_UP = "notPickedUp";
      export const I_ORDER_ITEM_DTO_RETURN_REASON_OTHER = "other";
      export const I_ORDER_ITEM_DTO_RETURN_REASON_WRONG_ITEM = "wrongItem";
      export const I_ORDER_ITEM_DTO_RETURN_REASON_DELIVERED_TOO_LATE =
        "deliveredTooLate";
      export const I_ORDER_ITEM_DTO_RETURN_REASON_PREFERRING_ANOTHER_ITEM =
        "preferringAnotherItem";
      export const I_ORDER_ITEM_DTO_RETURN_REASON_UNEXPECTED_COLOR =
        "unexpectedColor";
      export const I_ORDER_ITEM_DTO_RETURN_REASON_UNEXPECTED_SIZE =
        "unexpectedSize";
      export const I_ORDER_ITEM_DTO_RETURN_REASON_DISLIKE_THE_WORKMANSHIP =
        "dislikeTheWorkmanship";
      export const I_ORDER_ITEM_DTO_RETURN_REASON_BAD_PRICE_PERFORMANCE_RATIO =
        "badPricePerformanceRatio";
      export const I_ORDER_ITEM_DTO_RETURN_REASON_TOO_SMALL = "tooSmall";
      export const I_ORDER_ITEM_DTO_RETURN_REASON_TOO_BIG = "tooBig";
      export const I_ORDER_ITEM_DTO_RETURN_REASON_TOO_SHORT = "tooShort";
      export const I_ORDER_ITEM_DTO_RETURN_REASON_TOO_LONG = "tooLong";
      export const I_ORDER_ITEM_DTO_RETURN_REASON_NOT_PROVIDED = "notProvided";
      export const I_ORDER_ITEM_DTO_SORT_BY_CHRONOLOGICALLY_DESC_KEEP_ORDER_IDS_TOGETHER =
        "chronologicallyDescKeepOrderIdsTogether";
      export const I_ORDER_ITEM_DTO_SORT_BY_VARIANT_ID = "variantId";
      export const I_ORDER_ITEM_DTO_SORT_BY_DATE_TIME = "dateTime";
      export const I_ORDER_ITEM_DTO_SORT_BY_SOURCE = "source";
      export interface IOrderItemDTO {
        id?: string;
        orderId?: string;
        orderContext?: string;
        customerId?: string;
        productId?: string;
        variantId?: string;
        packedSku?: string;
        quantity?: number;
        startPrice?: number;
        biddingPrice?: number;
        endPrice?: number;
        orderTimestamp?: string;
        ringsize?: string;
        material?: string;
        referenceNumber?: string;
        isAutoBookable?: boolean;
        packedEndAt?: string;
        packedStartAt?: string;
        sourceOfOrder?: string;
        payform?: string;
        cancelledAt?: string;
        cancellationSendToPaymentProviderAt?: string;
        biddingMsisdn?: string;
        sellingChannel?: string;
        isPaymentFallback?: boolean;
        gameId?: string;
        formerReferenceType?: string;
        formerReferenceId?: string;
        remarks?: string;
        remarkEntries?: string[];
        runtimeEntryId?: string;
        presenter?: string;
        producer?: string;
        orderItemType?: string;
        openBasketShippingCost?: number;
        infoText?: string;
        cancellationInfoText?: string;
        cancellationFormOfRefund?: string;
        cancellationRefundInitiated?: boolean;
        infoTextEntries?: string[];
        status?: string;
        showSpecial?: string;
        paymentVendorTransactionId?: string;
        paymentVendorName?: string;
        preVoucherRedemptionEndPrice?: number;
        redemptionVoucherAssignmentId?: number;
        isOndemand?: boolean;
        originalPayform?: string;
        paidAt?: string;
        orderDate?: string;
        bookingDate?: string;
        productName?: string;
        productPurchasePrice?: number;
        cancelReason?: string;
        cancellationReason?: string;
        returnId?: string;
        returnReason?: string;
        initialRemoteBooking?: boolean;
        anonymousInstanceId?: string;
        isHighlight?: boolean;
        parcelTrackingId?: string;
        callAgent?: string;
        paymentReminderAt?: string;
        paymentDeadlineAt?: string;
        isBid?: boolean;
        isAnonymousBid?: boolean;
        orderOffsetCreditBalance?: number;
        packedBy?: string;
        cancelledBy?: string;
        returnedAt?: string;
        returnedBy?: string;
        createdAt?: string;
        createdBy?: string;
        modifiedAt?: string;
        modifiedBy?: string;
      }
    }
    namespace WebSocket {
      export interface IWebSocketRoomUpdateDTO<T1> {
        crc?: string;
        room?: string;
        namespace?: string;
        data?: T1;
        createdAt?: string;
        createdBy?: string;
        modifiedAt?: string;
        modifiedBy?: string;
      }
    }
  }
  export namespace JSCApi {
    export const getProductDetails = (
      config?: IJscClientConfig
    ): Promise<
      AxiosResponse<DTO.Aggregation.IProductDetailsAggregationDTO[]>
    > =>
      JscClient.get<DTO.Aggregation.IProductDetailsAggregationDTO[]>(
        "/aggregation/product/details",
        config
      );
  }
  export namespace JSCApi {
    export const getCustomersRanking = (
      config?: IJscClientConfig
    ): Promise<AxiosResponse<DTO.Customer.ICustomerRankingDTO[]>> =>
      JscClient.get<DTO.Customer.ICustomerRankingDTO[]>(
        "/customers/ranking",
        config
      );
  }
  export namespace JSCApi {
    export const getGameStatistics = (
      config?: IJscClientConfig
    ): Promise<AxiosResponse<DTO.Game.IGameStatisticDTO[]>> =>
      JscClient.get<DTO.Game.IGameStatisticDTO[]>("/games/statistics", config);
    export const getGamesSounds = (
      config?: IJscClientConfig
    ): Promise<AxiosResponse<DTO.Game.IGameSoundDTO[]>> =>
      JscClient.get<DTO.Game.IGameSoundDTO[]>("/games/sounds", config);
  }
  export namespace JSCApi {
    export const getGlobalGameSettings = (
      config?: IJscClientConfig
    ): Promise<AxiosResponse<DTO.Game.IGlobalGameSettingsDTO>> =>
      JscClient.get<DTO.Game.IGlobalGameSettingsDTO>(
        "/globalgamesettings",
        config
      );
  }
  export namespace JSCApi {
    export const getProductBundles = (
      config?: IJscClientConfig
    ): Promise<AxiosResponse<DTO.Game.ProductBundle.IProductBundleDTO[]>> =>
      JscClient.get<DTO.Game.ProductBundle.IProductBundleDTO[]>(
        "/productBundles",
        config
      );
  }
  export namespace JSCApi {
    export const getCurrentShiftConfig = (
      config?: IJscClientConfig
    ): Promise<AxiosResponse<DTO.Game.IShiftDTO>> =>
      JscClient.get<DTO.Game.IShiftDTO>("/shift/current/config", config);
    export const getShifts = (
      config?: IJscClientConfig
    ): Promise<AxiosResponse<DTO.Game.IShiftDTO[]>> =>
      JscClient.get<DTO.Game.IShiftDTO[]>("/shifts", config);
  }
  export namespace JSCApi {
    export const ROOM_CURRENT_GAME_BIDS: IWebSocketRoom = {
      namespace: "Jsc2Jfs",
      room: "currentGameBids",
    };
    const onRoomUpdateCurrentGameBidsSubject = new Subject<
      DTO.Order.IOrderItemDTO[]
    >();
    const onRoomUpdateCurrentGameBids$ = onRoomUpdateCurrentGameBidsSubject.asObservable();
    export const onRoomUpdateCurrentGameBids = function (
      action: PayloadAction<
        string,
        DTO.WebSocket.IWebSocketRoomUpdateDTO<DTO.Order.IOrderItemDTO[]>
      >
    ): Observable<DTO.Order.IOrderItemDTO[]> {
      if (
        action.type === ROOM_UPDATE_ACTION_ID &&
        action.payload.room === ROOM_CURRENT_GAME_BIDS.room
      ) {
        onRoomUpdateCurrentGameBidsSubject.next(action.payload.data);
      }

      return onRoomUpdateCurrentGameBids$;
    };
    export const ROOM_CURRENT_GAME_DETAILS: IWebSocketRoom = {
      namespace: "Jsc2Jfs",
      room: "currentGameDetails",
    };
    const onRoomUpdateCurrentGameDetailsSubject = new Subject<
      DTO.Aggregation.IAggregatedGameDetailsDTO
    >();
    const onRoomUpdateCurrentGameDetails$ = onRoomUpdateCurrentGameDetailsSubject.asObservable();
    export const onRoomUpdateCurrentGameDetails = function (
      action: PayloadAction<
        string,
        DTO.WebSocket.IWebSocketRoomUpdateDTO<
          DTO.Aggregation.IAggregatedGameDetailsDTO
        >
      >
    ): Observable<DTO.Aggregation.IAggregatedGameDetailsDTO> {
      if (
        action.type === ROOM_UPDATE_ACTION_ID &&
        action.payload.room === ROOM_CURRENT_GAME_DETAILS.room
      ) {
        onRoomUpdateCurrentGameDetailsSubject.next(action.payload.data);
      }

      return onRoomUpdateCurrentGameDetails$;
    };
    export const ROOM_CURRENT_GAME_PLAYER: IWebSocketRoom = {
      namespace: "Jsc2Jfs",
      room: "currentGamePlayer",
    };
    const onRoomUpdateCurrentGamePlayerSubject = new Subject<
      DTO.Customer.ICustomerMsisdnDTO[]
    >();
    const onRoomUpdateCurrentGamePlayer$ = onRoomUpdateCurrentGamePlayerSubject.asObservable();
    export const onRoomUpdateCurrentGamePlayer = function (
      action: PayloadAction<
        string,
        DTO.WebSocket.IWebSocketRoomUpdateDTO<DTO.Customer.ICustomerMsisdnDTO[]>
      >
    ): Observable<DTO.Customer.ICustomerMsisdnDTO[]> {
      if (
        action.type === ROOM_UPDATE_ACTION_ID &&
        action.payload.room === ROOM_CURRENT_GAME_PLAYER.room
      ) {
        onRoomUpdateCurrentGamePlayerSubject.next(action.payload.data);
      }

      return onRoomUpdateCurrentGamePlayer$;
    };
    export const ROOM_LAST_HALF_HOUR_VIEWER_STATISTICS: IWebSocketRoom = {
      namespace: "Jsc2Jfs",
      room: "lastHalfHourViewerStatistics",
    };
    const onRoomUpdateLastHalfHourViewerStatisticsSubject = new Subject<
      DTO.Game.IViewerStatisticsDTO[]
    >();
    const onRoomUpdateLastHalfHourViewerStatistics$ = onRoomUpdateLastHalfHourViewerStatisticsSubject.asObservable();
    export const onRoomUpdateLastHalfHourViewerStatistics = function (
      action: PayloadAction<
        string,
        DTO.WebSocket.IWebSocketRoomUpdateDTO<DTO.Game.IViewerStatisticsDTO[]>
      >
    ): Observable<DTO.Game.IViewerStatisticsDTO[]> {
      if (
        action.type === ROOM_UPDATE_ACTION_ID &&
        action.payload.room === ROOM_LAST_HALF_HOUR_VIEWER_STATISTICS.room
      ) {
        onRoomUpdateLastHalfHourViewerStatisticsSubject.next(
          action.payload.data
        );
      }

      return onRoomUpdateLastHalfHourViewerStatistics$;
    };
    export const ROOM_PLANNED_GAMES_FOR_CURRENT_DAY: IWebSocketRoom = {
      namespace: "Jsc2Jfs",
      room: "plannedGamesForCurrentDay",
    };
    const onRoomUpdatePlannedGamesForCurrentDaySubject = new Subject<
      DTO.Game.IGameDTO[]
    >();
    const onRoomUpdatePlannedGamesForCurrentDay$ = onRoomUpdatePlannedGamesForCurrentDaySubject.asObservable();
    export const onRoomUpdatePlannedGamesForCurrentDay = function (
      action: PayloadAction<
        string,
        DTO.WebSocket.IWebSocketRoomUpdateDTO<DTO.Game.IGameDTO[]>
      >
    ): Observable<DTO.Game.IGameDTO[]> {
      if (
        action.type === ROOM_UPDATE_ACTION_ID &&
        action.payload.room === ROOM_PLANNED_GAMES_FOR_CURRENT_DAY.room
      ) {
        onRoomUpdatePlannedGamesForCurrentDaySubject.next(action.payload.data);
      }

      return onRoomUpdatePlannedGamesForCurrentDay$;
    };
  }
}
export default JSCApi;
