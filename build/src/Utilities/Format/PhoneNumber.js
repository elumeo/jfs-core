"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.correctCountryCode = exports.formatPhone = void 0;
var google_libphonenumber_1 = require("google-libphonenumber");
var formatPhone = function (msisdn, backendRegion) {
    var phoneUtil = google_libphonenumber_1.PhoneNumberUtil.getInstance();
    if (msisdn) {
        var defaultCountry = (0, exports.correctCountryCode)(backendRegion);
        try {
            var phoneNumber = phoneUtil.parse(msisdn, defaultCountry);
            if (phoneNumber && phoneUtil.isValidNumber(phoneNumber)) {
                return phoneUtil.format(phoneNumber, phoneUtil.getRegionCodeForNumber(phoneNumber) !== defaultCountry
                    ? google_libphonenumber_1.PhoneNumberFormat.INTERNATIONAL
                    : google_libphonenumber_1.PhoneNumberFormat.NATIONAL);
            }
        }
        catch (e) {
            return msisdn;
        }
    }
    return msisdn;
};
exports.formatPhone = formatPhone;
var correctCountryCode = function (countryCode) {
    if (!countryCode || countryCode.length == 0) {
        return 'DE';
    }
    countryCode = countryCode.trim().toUpperCase();
    if (countryCode == 'UK' || countryCode == 'EN') {
        return 'GB';
    }
    return countryCode;
};
exports.correctCountryCode = correctCountryCode;
