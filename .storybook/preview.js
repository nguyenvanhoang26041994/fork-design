import { themes } from '@storybook/theming';

import '../src/styles/index.scss';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: 'centered',
  docs: {
    theme: themes.dark,
  },
}