
export class SourceOfOrder {
  static TV = "tv";
  static RETROSPECTIVE_ENTRY = "retrospectiveEntry";
  static EMPLOYEE_SALE = "employeeSale";
  static WEBSHOP_NATIVE = "webshopNative";
  static WEBSHOP_FR = "webshopFR";
  static WEBSHOP_NL = "webshopNL";
  static WEBSHOP_ES = "webshopES";
  static WEBSHOP_IT = "webshopIT";
  static KATSHOP_INT = "katShopInt";
  static WEBSHOP_EN = "webshopEN";
  static WEBSHOP_TV_CHECKOUT_NATIVE = "webshopTvCheckoutNative";
  static WEBSHOP_TV_CHECKOUT_FR = "webshopTvCheckoutFR";
  static WEBSHOP_TV_CHECKOUT_NL = "webshopTvCheckoutNL";
  static WEBSHOP_TV_CHECKOUT_ES = "webshopTvCheckoutES";
  static WEBSHOP_TV_CHECKOUT_IT = "webshopTvCheckoutIT";
  static WEBSHOP_TV_CHECKOUT_EN = "webshopTvCheckoutEN";
  static ORDER_PROCESSING_RULE = "orderProcessingRule";
  static BID_AGENT_NATIVE = "bidAgentNative";
  static BID_AGENT_FR = "bidAgentFR";
  static BID_AGENT_NL = "bidAgentNL";
  static BID_AGENT_ES = "bidAgentES";
  static BID_AGENT_IT = "bidAgentIT";
  static BID_AGENT_EN = "bidAgentEN";
  static BID_AGENT_EN_EXTERNAL = "bidAgentENExternal";
  static PERSONAL_SHOP = "personalShop";
  static PERSONAL_SHOP_EVENT = "personalShopEvent";
  static PERSONAL_SHOP_WEB_NATIVE = "personalShopWebNative";
  static PERSONAL_SHOP_WEB_FR = "personalShopWebFR";
  static PERSONAL_SHOP_WEB_NL = "personalShopWebNL";
  static PERSONAL_SHOP_WEB_ES = "personalShopWebES";
  static PERSONAL_SHOP_WEB_IT = "personalShopWebIT";
  static PERSONAL_SHOP_WEB_EN = "personalShopWebEN";
  static PERSONAL_SHOP_KAT_INT = "personalShopKatInt";
  static APP_MOBILE_ANDROID = "appMobileAndroid";
  static APP_MOBILE_IOS = "appMobileIOS";
  static APP_SMART_TV = "appSmartTv";
  static APP_MOBILE_SHOP_ANDROID = 'appShoppingAndroid';
  static APP_MOBILE_SHOP_IOS = 'appShoppingIOS';
  static GIFT_ITEMS = "giftItems";
  static UNITYMEDIA = "app_hbbTvUNITY";
  static fromSource = (source: number) => contextBySource?.[source] ?? '';
}
export const contextBySource: Record<number, string> = {
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
  26: SourceOfOrder.UNITYMEDIA, //unitymedia, with a smart tv app. manuallily set
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
}
export default SourceOfOrder;
