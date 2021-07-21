import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Tippy from '@tippyjs/react';

import {
  placementPropType,
} from '../placements';

const Overlay = ({
  placement,
  sticky,
  strategy,
  interactive,
  showOnCreate,
  children,
  content,
  role,
  animation,
  popperOptions,
  plugins,
  arrow,
  reference,
  ...otherProps
}) => {
  const _popperOptions = useMemo(() => ({
    ...popperOptions,
    strategy: strategy,
  }), [popperOptions, strategy]);

  const _plugins = useMemo(() => {
    const __plugins = [];
    __plugins.concat(plugins);
  
    if (sticky) {
      __plugins.push(stickyPlugin);
    }
    return __plugins;
  }, [sticky, plugins]);

  return (
    <Tippy
      sticky={sticky}
      plugins={_plugins}
      arrow={arrow}
      role={role}
      popperOptions={_popperOptions}
      interactive={interactive}
      showOnCreate={showOnCreate}
      animation={animation}
      placement={placement}
      content={content}
      {...otherProps}
    >
      {children}
    </Tippy>
  );
};

Overlay.displayName = 'Overlay';
Overlay.propTypes = {
  theme: PropTypes.string,
  content: PropTypes.string,
  children: PropTypes.any,
  animation: PropTypes.oneOf([
    'perspective-extreme',
    'perspective-subtle',
    'perspective',
    'scale-extreme',
    'scale-subtle',
    'scale',
    'shift-away-extreme',
    'shift-away-subtle',
    'shift-away',
    'shift-toward-extreme',
    'shift-toward-subtle',
    'shift-toward',
  ]),
  placement: placementPropType,
  role: PropTypes.string,
  reference: PropTypes.any,
  followCursor: PropTypes.bool,
};
Overlay.defaultProps = {
  animation: 'fade',
  interactive: true,
  strategy: 'fixed',
  placement: 'top',
  sticky: false,
};

export default Overlay;
