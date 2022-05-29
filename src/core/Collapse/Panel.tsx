import React from 'react';
import cn from 'classnames';

import type { PanelProps } from './types';
import ChevronDown from '../../icons/ChevronDown';
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
}: PanelProps): any => (
  <div
    {...otherProps}
    className={cn(
      'fpanel', {
        'fpanel-active': active,
        'fpanel-disabled': disabled,
      },
      className,
    )}
  >
    <button type="button" className="fpanel-title" onClick={onClick} disabled={disabled}>
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

Panel.displayName = 'Collapse.Panel';
Panel.defaultProps = {};

export default Panel;
