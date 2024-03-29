import { LANGUAGE, DATE_FORMAT } from 'Types/Language';

const mapLanguageToDateFormat = (language: LANGUAGE): DATE_FORMAT => {
  switch (language) {
    case LANGUAGE.GERMAN:
      return DATE_FORMAT.DE;
    case LANGUAGE.ENGLISH:
      return DATE_FORMAT.EN;
    case LANGUAGE.ITALIAN:
      return DATE_FORMAT.IT;
    default:
      return DATE_FORMAT.DE;
  }
};

export default mapLanguageToDateFormat;
