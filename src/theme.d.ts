import {
  type MixinsOptionsCustomization,
  type PaletteOptionsCustomization,
  type ThemeOptionCustom,
  type TypographyOptionsCustomization,
} from './theme/type';

type CustomPalette = {
  [Key in keyof typeof PaletteOptionsCustomization]: (typeof PaletteOptionsCustomization)[Key];
};

declare module '@mui/material/styles' {
  interface ThemeOptions {
    mixins: MixinsOptionsCustomization;
    optionCustom: ThemeOptionCustom;
  }
  interface Theme {
    palette: PaletteOptionsCustomization;
    typography: TypographyOptionsCustomization;
    mixins: MixinsOptionsCustomization;
    optionCustom: ThemeOptionCustom;
  }
}
