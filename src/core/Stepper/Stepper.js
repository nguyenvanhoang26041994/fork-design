import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Check from '../../icons/Check';
import X from '../../icons/X';
import Ban from '../../icons/Ban';
import useStepper from './useStepper';

const mStatus = Object.freeze({
  processing: 'fstep-processing',
  completed: 'fstep-completed',
  canceled: 'fstep-canceled',
  error: 'fstep-error',
});

const Button = ({ className, children, ...otherProps }) => (
    <div className="fstep-btn-wrapper">
      <div className={cn('fstep-btn', className)} {...otherProps}>
        <span className="fstep-btn-child">
          {children}
        </span>
        <span className="fstep-btn-error">
          <X style={{ strokeWidth: 3 }} />
        </span>
        <span className="fstep-btn-canceled">
          <Ban style={{ strokeWidth: 3 }} />
        </span>
        <span className="fstep-btn-completed">
          <Check style={{ strokeWidth: 3 }} />
        </span>
      </div>
    </div>
  );

const Content = ({ className, ...otherProps }) => <div className={cn('fstep-content', className)} {...otherProps} />;
const Title = ({ className, ...otherProps }) => <div className={cn('fstep-title', className)} {...otherProps} />;
const Description = ({ className, ...otherProps }) => <div className={cn('fstep-description', className)} {...otherProps} />;
const Step = ({ className, status, ...otherProps }) => <li className={cn('fstep', mStatus[status], className)} {...otherProps} />;

Step.displayName = 'Step';
Step.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.any,
  title: PropTypes.any,
  children: PropTypes.any,
  stepNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  status: PropTypes.string,
  canceledTitle: PropTypes.any,
};
Step.defaultProps = {};

const mDisplays = Object.freeze({
  vertical: 'fstepper-v',
  alternate: 'fstepper-alternate',
});

const Stepper = ({ className, children, display, ...otherProps }) => (
    <ul className={cn('fstepper', mDisplays[display], className)} {...otherProps}>
      {children}
    </ul>
  );

Stepper.Step = Step;
Stepper.Button = Button;
Stepper.Content = Content;
Stepper.Title = Title;
Stepper.Description = Description;

Stepper.useStepper = useStepper;

Stepper.displayName = 'Stepper';
Stepper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  display: PropTypes.string,
};
Stepper.defaultProps = {};

export default Stepper;
