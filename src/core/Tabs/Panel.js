import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import Memo from '../Memo';

const Panel = ({ className, active, fresh, ...otherProps }) => (
    <Memo watch={active} fresh={fresh}>
      <div
        className={cn('ftabs-panel', { 'ftabs-panel-active': active }, className)}
        {...otherProps}
      />
    </Memo>
  );

Panel.displayName = 'Tabs.Panel';
Panel.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  fresh: PropTypes.bool,
  title: PropTypes.any,
  active: PropTypes.bool,
};
Panel.defaultProps = {};

export default Panel;
