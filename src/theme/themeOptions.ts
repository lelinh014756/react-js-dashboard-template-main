import { type ThemeOptions } from '@mui/material/styles';
import { type CustomizationStore } from '@redux/slice/customizationSlice';
// assets
import colors from '@styles/sass/abstracts/_variables.module.scss';

import themeMixins from './mixins';
// project imports
import themePalette from './palette';
import { type ThemeColorCustomization, type ThemeOptionCustom } from './type';

/**
 * Represent theme style and structure as per Material-UI
 * @param {JsonObject} customization customization parameter object
 */

type Colors = ThemeColorCustomization & Readonly<Record<string, string>>;

export const themeOptions = (customization: CustomizationStore) => {
  const color = colors as Colors;

  const themeOption: ThemeOptionCustom = {
    colors: color,
    heading: color.grey900,
    paper: color.paper,
    backgroundDefault: color.paper,
    background: color.primaryLight,
    darkTextPrimary: color.grey700,
    darkTextSecondary: color.grey500,
    textDark: color.grey900,
    menuSelected: color.secondaryDark,
    menuSelectedBack: color.secondaryLight,
    divider: color.grey200,
    customization,
  };

  const themeConfig: ThemeOptions = {
    direction: 'ltr',
    palette: themePalette(themeOption),
    mixins: themeMixins,
    shape: {
      borderRadius: customization.borderRadius,
    },
    optionCustom: themeOption,
  };

  return themeConfig;
};

export default themeOptions;
