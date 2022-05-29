import PropTypes from 'prop-types';

export const makePlacements = (prefix) => ({
    'top': `${prefix}-top`,
    'top-end': `${prefix}-top-end`,
    'top-start': `${prefix}-top-start`,
    'right': `${prefix}-right`,
    'right-end': `${prefix}-right-end`,
    'right-start': `${prefix}-right-start`,
    'bottom': `${prefix}-bottom`,
    'bottom-end': `${prefix}-bottom-end`,
    'bottom-start': `${prefix}-bottom-start`,
    'left': `${prefix}-left`,
    'left-end': `${prefix}-left-end`,
    'left-start': `${prefix}-left-start`,
  });

export const placementPropType = PropTypes.oneOf([
  'top',
  'top-end',
  'top-start',
  'right',
  'right-end',
  'right-start',
  'bottom',
  'bottom-end',
  'bottom-start',
  'left',
  'left-end',
  'left-start',
  'auto',
  'auto-start',
  'auto-end',
]);
