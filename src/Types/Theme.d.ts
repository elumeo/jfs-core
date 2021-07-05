import { PaletteColorOptions } from '@material-ui/core';

declare module '@material-ui/core/styles/createPalette' {

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
