import { PaletteColor, PaletteColorOptions } from '@mui/styles/createPalette';

declare module '@mui/styles/createPalette' {
  // tslint:disable-next-line:interface-name
  interface Palette {
    rubin: PaletteColor;
    rodolith: PaletteColor;
    topas: PaletteColor;
    apatith: PaletteColor;
    peridot: PaletteColor;
    citrin: PaletteColor;
    quarz: PaletteColor;
  }

  // tslint:disable-next-line:interface-name
  interface PaletteOptions {
    rubin: PaletteColorOptions;
    rodolith: PaletteColorOptions;
    topas: PaletteColorOptions;
    apatith: PaletteColorOptions;
    peridot: PaletteColorOptions;
    citrin: PaletteColorOptions;
    quarz: PaletteColorOptions;
  }
}
