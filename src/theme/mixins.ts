import themeConfig from '@shared/configs/themeConfig';
import {
  matchUpMd,
  matchUpSm,
  mobileSpacing,
  pcSpacing,
  tabletSpacing,
} from '@shared/constant';

import { type MixinsOptionsCustomization } from './type';

const themeMixins: MixinsOptionsCustomization = {
  toolbar: {
    minHeight: '48px',
    height: themeConfig.toolbarHeightSm,
    padding: `${mobileSpacing}px`,
    [matchUpSm]: {
      padding: `${tabletSpacing}px`,
      height: themeConfig.toolbarHeightLg,
    },
    [matchUpMd]: {
      paddingInline: `${pcSpacing}px`,
    },
  },
  spacingResponsive1: {
    xs: `${mobileSpacing}px`,
    sm: 2,
    md: 2.5,
  },
};

export default themeMixins;
