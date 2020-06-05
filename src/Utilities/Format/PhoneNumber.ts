import { PhoneNumberUtil, PhoneNumberFormat } from 'google-libphonenumber';

class PhoneNumber {
  public static formatPhone(msisdn: string, backendRegion: string) {
    const phoneUtil = PhoneNumberUtil.getInstance();
    if (msisdn) {
      const defaultCountry = PhoneNumber.correctCountryCode(backendRegion);
      const phoneNumber = phoneUtil.parse(msisdn, defaultCountry);
      if (phoneNumber && phoneUtil.isValidNumber(phoneNumber)) {
        return phoneUtil.format(
          phoneNumber,
          phoneUtil.getRegionCodeForNumber(phoneNumber) !== defaultCountry
            ? PhoneNumberFormat.INTERNATIONAL
            : PhoneNumberFormat.NATIONAL
        );
      }
    }
    return msisdn;
  }

  protected static correctCountryCode(countryCode: string): string {
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
