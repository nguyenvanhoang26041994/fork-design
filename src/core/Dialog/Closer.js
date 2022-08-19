import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Button from '../Button';
import X from '../../icons/X';

const Closer = ({ className, ...otherProps }) => (
    <Button className={cn('fdialog-closer', className)} {...otherProps} />
  );

Closer.displayName = 'Dialog.Closer';
Closer.defaultProps = {
  color: 'transparent',
  rounded: true,
  icon: <X />,
};

export default Closer;
