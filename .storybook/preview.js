import { themes } from '@storybook/theming';

import '../fork-design.css';
import '../fork-design-gallery.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: 'centered',
  docs: {
    theme: themes.dark,
  },
}