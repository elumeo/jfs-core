declare module '@mui/material/styles' {
  declare const createTheme;
  declare const responsiveFontSizes;
  declare const ThemeProvider;
  interface Theme {
    status: {
      danger: React.CSSProperties['color'];
    };
  }

  interface Palette {
    rubin: Palette['rubin'],
    rodolith: Palette['rodolith'],
    topas: Palette['topas'],
    apatith: Palette['apatith'],
    peridot: Palette['peridot'],
    citrin: Palette['citrin'],
    quarz: Palette['quarz'],
  }
  interface PaletteOptions {
    neutral: PaletteOptions['primary'];
  }

  interface PaletteColor {
    darker?: string;
  }
  interface SimplePaletteColorOptions {
    darker?: string;
  }
  interface ThemeOptions {
    status: {
      danger: React.CSSProperties['color'];
    };
  }
}