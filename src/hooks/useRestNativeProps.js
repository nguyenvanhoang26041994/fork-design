import { useMemo } from 'react';
import pick from 'lodash/pick';

const useRestNativeProps = (props) => useMemo(() => pick(props, [
    'className',
    'style',
    'onClick',
    'onTouchStart',
    'onTouchEnd',
    'onTouchStart',
    'onKeyPress',
    'onKeyUp',
    'onKeyDown',
    'onFocus',
  ]), [props]);

export default useRestNativeProps;
