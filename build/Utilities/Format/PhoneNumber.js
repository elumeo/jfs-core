import { PhoneNumberUtil, PhoneNumberFormat } from 'google-libphonenumber';
class PhoneNumber {
    static formatPhone(msisdn, backendRegion) {
        const phoneUtil = PhoneNumberUtil.getInstance();
        if (msisdn) {
            const defaultCountry = PhoneNumber.correctCountryCode(backendRegion);
            try {
                const phoneNumber = phoneUtil.parse(msisdn, defaultCountry);
                if (phoneNumber && phoneUtil.isValidNumber(phoneNumber)) {
                    return phoneUtil.format(phoneNumber, phoneUtil.getRegionCodeForNumber(phoneNumber) !== defaultCountry
                        ? PhoneNumberFormat.INTERNATIONAL
                        : PhoneNumberFormat.NATIONAL);
                }
            }
            catch (e) {
                return msisdn;
            }
        }
        return msisdn;
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