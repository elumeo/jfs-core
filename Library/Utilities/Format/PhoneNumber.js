import { parsePhoneNumberFromString } from 'libphonenumber-js';
class PhoneNumber {
    static formatPhone(msisdn, backendRegion) {
        let formattedMsisdn = msisdn;
        if (msisdn) {
            let defaultCountry = PhoneNumber.correctCountryCode(backendRegion);
            let phoneNumber = parsePhoneNumberFromString(msisdn, defaultCountry);
            if (phoneNumber) {
                if (phoneNumber.country != defaultCountry) {
                    formattedMsisdn = phoneNumber.formatInternational();
                }
                else {
                    formattedMsisdn = phoneNumber.formatNational();
                }
            }
        }
        return formattedMsisdn;
    }
    static correctCountryCode(countryCode) {
        if (!countryCode || countryCode.length == 0) {
            return 'DE';
        }
        countryCode = countryCode.trim().toUpperCase();
        if (countryCode == 'UK' || countryCode == 'EN') {
            return 'GB';
        }
        return countryCode;
    }
}
export default PhoneNumber;
//# sourceMappingURL=PhoneNumber.js.map