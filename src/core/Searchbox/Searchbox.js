import React, { useRef, useEffect } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import Textbox from '../Textbox';
import Search from '../../icons/Search';
import X from '../../icons/X';
import Loader from '../Loader';

const Searchbox = React.forwardRef(({ className, loading, ...otherProps }, ref) => (
    <div className={cn('fsearchbox', className)}>
      <Textbox
        className="fsearchbox-textbox"
        spellCheck={false}
        {...otherProps}
        ref={ref}
      />
      {loading
        ? <Loader.Spinner className="fsearchbox-search-icon" />
        : <Search className="fsearchbox-search-icon" />
      }
    </div>
  ));

Searchbox.displayName = 'Searchbox';
Searchbox.propTypes = {};
Searchbox.defaultProps = {};

export default Searchbox;
