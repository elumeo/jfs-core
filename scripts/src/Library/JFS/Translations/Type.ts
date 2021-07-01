export * as Snapshot from './Snapshot';

export type Language = {
  [translation: string]: string;
}

export type Translations = {
  [language: string]: Language;
}

export namespace Table {
  export type Row = {
    key: string;
    de: string;
    en: string;
    it: string;
  };

  export type Language = {
    name: string;
    messages: {
      [key: string]: string;
    };
  };
}