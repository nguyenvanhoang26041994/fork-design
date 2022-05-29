import React from 'react';
import cn from 'classnames';

import Dialog from '../Dialog';
import Button from '../Button';

const PureConfirm = ({
  children,
  className,
  onNo,
  onYes,
  noText,
  yesText,
  ...otherProps
}) => (
    <Dialog className={cn('fpureconfirm', className)} {...otherProps}>
      <Dialog.Body>
        {children}
      </Dialog.Body>
      <Dialog.Footer>
        <Button onClick={onNo}>{noText}</Button>
        <Button color="primary" onClick={onYes}>{yesText}</Button>
      </Dialog.Footer>
    </Dialog>
  );

PureConfirm.defaultProps = {
  noText: 'No',
  yesText: 'Yes',
};

export default PureConfirm;

