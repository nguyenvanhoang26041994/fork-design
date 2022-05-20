import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import Clock from '../icons/Clock';

const Content = ({ className, ...otherProps}) => <div className={cn('ftimeline-content', className)} {...otherProps} />;
const Button = ({ className, ...otherProps}) => <div className={cn('ftimeline-btn', className)} {...otherProps} />;
const Item = ({ className, ...otherProps }) => <li className={cn('ftimeline-item', className)} {...otherProps} />;

const mAlign = Object.freeze({
  right: 'ftimeline-right',
  left: 'ftimeline-left',
  alternate: 'ftimeline-alternate',
});

const Timeline = ({ className, reverse, align, ...otherProps }) => {
  return (
    <ul
      className={cn(
        'ftimeline',
        mAlign[align],
        {
          'ftimeline-reverse': reverse
        },
        className
      )}
      {...otherProps}
    />
  );
};

Timeline.displayName = 'Timeline';
Content.displayName = 'Timeline.Content';
Button.displayName = 'Timeline.Button';
Item.displayName = 'Timeline.Item';

Content.defaultProps = {
  className: PropTypes.string,
};
Button.defaultProps = {
  children: <Clock />,
  className: PropTypes.string,
};
Item.defaultProps = {
  className: PropTypes.string,
};

Timeline.Item = Item;
Timeline.Content = Content;
Timeline.Button = Button;

Timeline.propTypes = {
  className: PropTypes.string,
  align: PropTypes.string,
  reverse: PropTypes.bool,
};
Timeline.defaultProps = {
  align:'left',
};

export default Timeline;
