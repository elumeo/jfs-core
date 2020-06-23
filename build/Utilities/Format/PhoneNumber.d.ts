declare class PhoneNumber {
    static formatPhone(msisdn: string, backendRegion: string): string;
    protected static correctCountryCode(countryCode: string): string;
}
export default PhoneNumber;
