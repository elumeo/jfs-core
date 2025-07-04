import { LANGUAGE, DATE_FORMAT } from 'Types/Language';

const mapLanguageToDateFormat = (language: LANGUAGE): DATE_FORMAT => {
  switch (language) {
    case LANGUAGE.GERMAN:
      return DATE_FORMAT.DE;
    case LANGUAGE.ENGLISH:
      return DATE_FORMAT.EN;
    case LANGUAGE.ITALIAN:
      return DATE_FORMAT.IT;
    case LANGUAGE.SPANISH:
      return DATE_FORMAT.ES;
    case LANGUAGE.POLISH:
      return DATE_FORMAT.PL; // Assuming Polish uses the same format as English
    default:
      return DATE_FORMAT.DE;
  }
};

export default mapLanguageToDateFormat;
