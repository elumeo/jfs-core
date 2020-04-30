import { CountryCode, parsePhoneNumberFromString } from 'libphonenumber-js';

class PhoneNumber {

  public static formatPhone(msisdn: string, backendRegion: string) {
    let formattedMsisdn: string = msisdn;
    if (msisdn) {
      let defaultCountry = PhoneNumber.correctCountryCode(backendRegion);

      let phoneNumber = parsePhoneNumberFromString(msisdn, defaultCountry);
      if (phoneNumber) {
        if (phoneNumber.country != defaultCountry) {
          formattedMsisdn = phoneNumber.formatInternational();
        } else {
          formattedMsisdn = phoneNumber.formatNational()
        }
      }
    }

    return formattedMsisdn;
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
