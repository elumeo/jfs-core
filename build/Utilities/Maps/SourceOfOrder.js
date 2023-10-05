"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contextBySource = exports.SourceOfOrder = void 0;
var SourceOfOrder = /** @class */ (function () {
    function SourceOfOrder() {
    }
    SourceOfOrder.TV = "tv";
    SourceOfOrder.RETROSPECTIVE_ENTRY = "retrospectiveEntry";
    SourceOfOrder.EMPLOYEE_SALE = "employeeSale";
    SourceOfOrder.WEBSHOP_NATIVE = "webshopNative";
    SourceOfOrder.WEBSHOP_FR = "webshopFR";
    SourceOfOrder.WEBSHOP_NL = "webshopNL";
    SourceOfOrder.WEBSHOP_ES = "webshopES";
    SourceOfOrder.WEBSHOP_IT = "webshopIT";
    SourceOfOrder.KATSHOP_INT = "katShopInt";
    SourceOfOrder.WEBSHOP_EN = "webshopEN";
    SourceOfOrder.WEBSHOP_TV_CHECKOUT_NATIVE = "webshopTvCheckoutNative";
    SourceOfOrder.WEBSHOP_TV_CHECKOUT_FR = "webshopTvCheckoutFR";
    SourceOfOrder.WEBSHOP_TV_CHECKOUT_NL = "webshopTvCheckoutNL";
    SourceOfOrder.WEBSHOP_TV_CHECKOUT_ES = "webshopTvCheckoutES";
    SourceOfOrder.WEBSHOP_TV_CHECKOUT_IT = "webshopTvCheckoutIT";
    SourceOfOrder.WEBSHOP_TV_CHECKOUT_EN = "webshopTvCheckoutEN";
    SourceOfOrder.ORDER_PROCESSING_RULE = "orderProcessingRule";
    SourceOfOrder.BID_AGENT_NATIVE = "bidAgentNative";
    SourceOfOrder.BID_AGENT_FR = "bidAgentFR";
    SourceOfOrder.BID_AGENT_NL = "bidAgentNL";
    SourceOfOrder.BID_AGENT_ES = "bidAgentES";
    SourceOfOrder.BID_AGENT_IT = "bidAgentIT";
    SourceOfOrder.BID_AGENT_EN = "bidAgentEN";
    SourceOfOrder.BID_AGENT_EN_EXTERNAL = "bidAgentENExternal";
    SourceOfOrder.PERSONAL_SHOP = "personalShop";
    SourceOfOrder.PERSONAL_SHOP_EVENT = "personalShopEvent";
    SourceOfOrder.PERSONAL_SHOP_WEB_NATIVE = "personalShopWebNative";
    SourceOfOrder.PERSONAL_SHOP_WEB_FR = "personalShopWebFR";
    SourceOfOrder.PERSONAL_SHOP_WEB_NL = "personalShopWebNL";
    SourceOfOrder.PERSONAL_SHOP_WEB_ES = "personalShopWebES";
    SourceOfOrder.PERSONAL_SHOP_WEB_IT = "personalShopWebIT";
    SourceOfOrder.PERSONAL_SHOP_WEB_EN = "personalShopWebEN";
    SourceOfOrder.PERSONAL_SHOP_KAT_INT = "personalShopKatInt";
    SourceOfOrder.APP_MOBILE_ANDROID = "appMobileAndroid";
    SourceOfOrder.APP_MOBILE_IOS = "appMobileIOS";
    SourceOfOrder.APP_SMART_TV = "appSmartTv";
    SourceOfOrder.APP_MOBILE_SHOP_ANDROID = 'appShoppingAndroid';
    SourceOfOrder.APP_MOBILE_SHOP_IOS = 'appShoppingIOS';
    SourceOfOrder.GIFT_ITEMS = "giftItems";
    SourceOfOrder.UNITYMEDIA = "app_hbbTvUNITY";
    SourceOfOrder.fromSource = function (source) { var _a; return (_a = exports.contextBySource === null || exports.contextBySource === void 0 ? void 0 : exports.contextBySource[source]) !== null && _a !== void 0 ? _a : ''; };
    return SourceOfOrder;
}());
exports.SourceOfOrder = SourceOfOrder;
exports.contextBySource = {
    0: SourceOfOrder.TV,
    1: SourceOfOrder.BID_AGENT_NATIVE,
    2: SourceOfOrder.RETROSPECTIVE_ENTRY,
    // 3 was "Katalog". No longer in use.
    4: SourceOfOrder.WEBSHOP_NATIVE,
    5: SourceOfOrder.WEBSHOP_FR,
    6: SourceOfOrder.EMPLOYEE_SALE,
    7: SourceOfOrder.APP_MOBILE_ANDROID,
    8: SourceOfOrder.PERSONAL_SHOP,
    // 9 was "Juwelo Pur". No longer in use.
    10: SourceOfOrder.WEBSHOP_NL,
    11: SourceOfOrder.WEBSHOP_ES,
    12: SourceOfOrder.BID_AGENT_FR,
    13: SourceOfOrder.BID_AGENT_NL,
    14: SourceOfOrder.BID_AGENT_ES,
    15: SourceOfOrder.PERSONAL_SHOP_WEB_NATIVE,
    16: SourceOfOrder.PERSONAL_SHOP_WEB_FR,
    17: SourceOfOrder.PERSONAL_SHOP_WEB_NL,
    18: SourceOfOrder.PERSONAL_SHOP_WEB_ES,
    19: SourceOfOrder.APP_MOBILE_IOS,
    20: SourceOfOrder.APP_SMART_TV,
    21: SourceOfOrder.KATSHOP_INT,
    22: SourceOfOrder.PERSONAL_SHOP_KAT_INT,
    23: SourceOfOrder.BID_AGENT_EN,
    24: SourceOfOrder.BID_AGENT_EN_EXTERNAL,
    // 25 manual process: "shoppify order"
    26: SourceOfOrder.UNITYMEDIA,
    27: SourceOfOrder.APP_MOBILE_SHOP_ANDROID,
    28: SourceOfOrder.APP_MOBILE_SHOP_IOS,
    29: SourceOfOrder.PERSONAL_SHOP_WEB_IT,
    30: SourceOfOrder.WEBSHOP_IT,
    31: SourceOfOrder.BID_AGENT_IT,
    32: SourceOfOrder.WEBSHOP_TV_CHECKOUT_NATIVE,
    33: SourceOfOrder.WEBSHOP_TV_CHECKOUT_FR,
    34: SourceOfOrder.WEBSHOP_TV_CHECKOUT_NL,
    35: SourceOfOrder.WEBSHOP_TV_CHECKOUT_ES,
    36: SourceOfOrder.WEBSHOP_TV_CHECKOUT_IT,
    37: SourceOfOrder.PERSONAL_SHOP_EVENT,
    38: SourceOfOrder.ORDER_PROCESSING_RULE,
    39: SourceOfOrder.WEBSHOP_TV_CHECKOUT_EN,
    40: SourceOfOrder.WEBSHOP_EN,
    41: SourceOfOrder.PERSONAL_SHOP_WEB_EN
};
exports.default = SourceOfOrder;
