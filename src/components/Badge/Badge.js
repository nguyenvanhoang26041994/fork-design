import React from 'react';
import PropTypes from 'prop-types';

import Counter from './Counter';
import Dot from './Dot';
import Label from './Label';

import PureBadge from './PureBadge';

const Badge = f => f;

Badge.PureBadge = PureBadge;
Badge.displayName = 'Badge';
Badge.propTypes = {};
Badge.defaultProps = {};

Badge.Counter = ({
  count,
  overflow,
  color,
  renderOverflow,
  ...otherProps
}) => {
  return (
    <PureBadge
      badge={(
        <Counter
          count={count}
          overflow={overflow}
          renderOverflow={renderOverflow}
          color={color}
          className="fbadge-ui"
        />
      )}
      {...otherProps}
    />
  );
};

Badge.Counter.displayName = 'Badge.Counter';
Badge.Counter.propTypes = {
  color: PropTypes.string,
  count: PropTypes.number,
  overflow: PropTypes.number,
  renderOverflow: PropTypes.func,
};
Badge.Counter.defaultProps = {};

Badge.Dot = ({ color, ...otherProps }) => {
  return (
    <PureBadge
      badge={<Dot color={color} className="fbadge-ui" />}
      {...otherProps}
    />
  );
};

Badge.Dot.displayName = 'Badge.Dot';
Badge.Dot.propTypes = {
  color: PropTypes.string,
};
Badge.Dot.defaultProps = {};

Badge.Label = ({
  label,
  color,
  ...otherProps
}) => {
  return (
    <PureBadge
      badge={(
        <Label
          color={color}
          label={label}
          className="fbadge-ui"
        />
      )}
      {...otherProps}
    />
  );
};

Badge.Label.displayName = 'Badge.Label';
Badge.Label.propTypes = {
  color: PropTypes.string,
  label: PropTypes.any,
};
Badge.Label.defaultProps = {};

export default Badge;
export { PureBadge };
