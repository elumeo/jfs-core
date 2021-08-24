import { PhoneNumberUtil, PhoneNumberFormat } from 'google-libphonenumber';

export const formatPhone = (msisdn: string, backendRegion: string): string => {
  const phoneUtil = PhoneNumberUtil.getInstance();
  if (msisdn) {
    const defaultCountry = correctCountryCode(backendRegion);
    try {
      const phoneNumber = phoneUtil.parse(msisdn, defaultCountry);
      if (phoneNumber && phoneUtil.isValidNumber(phoneNumber)) {
        return phoneUtil.format(
          phoneNumber,
          phoneUtil.getRegionCodeForNumber(phoneNumber) !== defaultCountry
            ? PhoneNumberFormat.INTERNATIONAL
            : PhoneNumberFormat.NATIONAL,
        );
      }
    } catch (e) {
      return msisdn;
    }
  }
  return msisdn;
};

export const correctCountryCode = (countryCode: string): string => {
  if (!countryCode || countryCode.length == 0) {
    return 'DE';
  }

  countryCode = countryCode.trim().toUpperCase();
  if (countryCode == 'UK' || countryCode == 'EN') {
    return 'GB';
  }

  return countryCode;
};
