import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Button from '../Button';
import ChevronDown from '../icons/ChevronDown';
import Animated from '../Animated';
import Memo from '../Memo';

const Panel = ({
  className,
  title,
  children,
  active,
  fresh,
  onClick,
  disabled,
  ...otherProps
}) => {
  return (
    <div
      {...otherProps}
      className={cn(
        'fpanel', {
          'fpanel-active': active,
          'fpanel-disabled': disabled
        },
        className
      )}
    >
      <button className="fpanel-title" onClick={onClick} disabled={disabled}>
        {title}
        <ChevronDown className="fpanel-icon" />
      </button>
      <Animated.Expand isOpen={active} className="fpanel-content">
        <div className="fpanel-box">
          <Memo watch={active} fresh={fresh}>
            {children}
          </Memo>
        </div>
      </Animated.Expand>
    </div>
  );
};

Panel.displayName = 'Collapse.Panel';
Panel.propTypes = {
  title: PropTypes.any.isRequired,
  className: PropTypes.string,
  defaultActive: PropTypes.bool,
  onClick: PropTypes.func, // do not set default, onClick will be passed by Collapse so it away exsits
  children: PropTypes.any,
  icon: PropTypes.string,
  fresh: PropTypes.bool,
  active: PropTypes.bool,
};
Panel.defaultProps = {};

export default Panel;
