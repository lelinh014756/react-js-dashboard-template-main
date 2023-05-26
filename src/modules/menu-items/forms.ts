import IconPictureInPicture from '@assets/svg/IconPictureInPicture';

import { type MenuItem } from './type';

const forms: MenuItem = {
  id: 'forms',
  title: 'Forms',
  type: 'group',
  children: [
    {
      id: 'components',
      title: 'Components',
      type: 'collapse',
      icon: IconPictureInPicture,
      children: [
        {
          id: 'button',
          title: 'Button',
          type: 'item',
          url: '/components/button',
        },
        {
          id: 'autocomplete',
          title: 'Autocomplete',
          type: 'item',
          url: '/components/autocomplete',
        },
        {
          id: 'checkbox',
          title: 'Checkbox',
          type: 'item',
          url: '/components/checkbox',
        },
        {
          id: 'date-time',
          title: 'Date & Time',
          type: 'item',
          url: '/components/date-time',
        },
        {
          id: 'select',
          title: 'Select',
          type: 'item',
          url: '/components/select',
        },
      ],
    },
  ],
};

export default forms;
