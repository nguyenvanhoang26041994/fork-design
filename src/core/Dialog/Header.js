import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const Header = ({ className, ...otherProps }) => (
    <div className={cn('fdialog-header', className)} {...otherProps} />
  );

Header.displayName = 'Dialog.Header';
Header.propTypes = {
  className: PropTypes.string,
};
Header.defaultProps = {};

export default Header;
