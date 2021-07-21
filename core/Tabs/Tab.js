import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const Tab = ({ className, active, ...otherProps }) => {
  return (
    <button
      className={cn('ftabs-tab', { 'ftabs-tab-active': active }, className)}
      {...otherProps}
    />
  );
};

Tab.displayName = 'Tabs.Tab';
Tab.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  fresh: PropTypes.bool,
  title: PropTypes.any,
  active: PropTypes.bool,
};
Tab.defaultProps = {};

export default Tab;
