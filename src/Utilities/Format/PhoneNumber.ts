// import AwesomePhoneNumber from 'awesome-phonenumber';
import { CountryCode } from 'libphonenumber-js';

import { PhoneNumberUtil, PhoneNumberFormat } from 'google-libphonenumber';
const {
  parse, isValidNumber, getRegionCodeForNumber, format
} = PhoneNumberUtil.getInstance();

class PhoneNumber {
  // public static formatPhone(msisdn: string, backendRegion: string) {
  //   if (msisdn) {
  //     const defaultCountry = PhoneNumber.correctCountryCode(backendRegion);
  //     const phoneNumber = new AwesomePhoneNumber(msisdn, backendRegion);
  //     if (phoneNumber && phoneNumber.isValid()) {
  //       return phoneNumber.getNumber(
  //         phoneNumber.getRegionCode() !== defaultCountry
  //           ? 'international'
  //           : 'national'
  //       );
  //     }
  //   }
  //   return msisdn;
  // }

  public static formatPhone(msisdn: string, backendRegion: string) {
    if (msisdn) {
      const defaultCountry = PhoneNumber.correctCountryCode(backendRegion);
      const phoneNumber = parse(msisdn, backendRegion);
      if (phoneNumber && isValidNumber(phoneNumber)) {
        return format(
          phoneNumber,
          getRegionCodeForNumber(phoneNumber) !== defaultCountry
            ? PhoneNumberFormat.INTERNATIONAL
            : PhoneNumberFormat.NATIONAL
        );
      }
    }
    return msisdn;
  }

  protected static correctCountryCode(countryCode: string): CountryCode {
    if (!countryCode || countryCode.length == 0) {
      return 'DE' as CountryCode;
    }

    countryCode = countryCode.trim().toUpperCase();
    if (countryCode == 'UK' || countryCode == 'EN') {
      return 'GB' as CountryCode;
    }

    return countryCode as CountryCode;
  }
}

export default PhoneNumber;
