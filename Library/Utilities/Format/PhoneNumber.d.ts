import { CountryCode } from 'libphonenumber-js';
declare class PhoneNumber {
    static formatPhone(msisdn: string, backendRegion: string): string;
    protected static correctCountryCode(countryCode: string): CountryCode;
}
export default PhoneNumber;
