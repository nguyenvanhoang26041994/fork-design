import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const Footer = ({ className, ...otherProps }) => (
    <div className={cn('fdialog-footer', className)} {...otherProps} />
  );

Footer.displayName = 'Dialog.Footer';
Footer.propTypes = {
  className: PropTypes.string,
};
Footer.defaultProps = {};

export default Footer;
