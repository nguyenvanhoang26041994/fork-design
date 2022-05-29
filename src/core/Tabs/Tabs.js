import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Tab from './Tab';
import Panel from './Panel';
import useTabs from './useTabs';

const Tabs = ({ className, ...otherProps }) => (
    <div className={cn('ftabs', className )} {...otherProps} />
  );

Tabs.Tab = Tab;
Tabs.Panel = Panel;
Tabs.useTabs = useTabs;

Tabs.displayName = 'Tabs';
Tabs.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
Tabs.defaultProps = {
  onChange: f => f,
};

export default Tabs;
