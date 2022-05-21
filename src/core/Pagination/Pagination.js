import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Button from '../Button';
import ChevronRight from '../../icons/ChevronRight';
import ChevronLeft from '../../icons/ChevronLeft';
import usePagination from './usePagination';

const loop = (start, end, cb) => {
  const rs = [];
  for (let i = start; i <= end; i++) {
    rs.push(cb(i));
  }
  return rs;
};

const Pagination = ({ className, ...otherProps }) => {
  return (
    <div className={cn('fpagination', className )} {...otherProps} />
  );
};

const Page = ({ className, active, ...otherProps }) => {
  return (
    <Button
      className={cn({'fbtn-primary': active }, className)}
      {...otherProps}
     />
  );
};

const Next = props => <Button color="transparent" icon={<ChevronRight />} {...props} />
const Prev = props => <Button color="transparent" icon={<ChevronLeft />} {...props} />

Page.displayName = 'Pagination.Page';
Next.displayName = 'Pagination.Next';
Prev.displayName = 'Pagination.Prev';
Pagination.displayName = 'Pagination';

Pagination.Page = Page;
Pagination.Next = Next;
Pagination.Prev = Prev;
Pagination.loop = loop;

Pagination.usePagination = usePagination;

Pagination.propTypes = {};
Pagination.defaultProps = {};

export default Pagination;
