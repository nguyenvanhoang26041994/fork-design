import { isArray, isObject } from 'lodash';

/**
 * Find latest props based on dependencies.
 *
 * @param {object} props - The input props.
 * @param {array} deps - The array has value to find.
 * @return {string} The latest key of value.
 */

export default (props = {}, deps = []) => {
  const fallBack = '';

  if (!isObject(props) || !isArray(deps)) {
    return fallBack;
  }

  if (deps.length === 0) {
    return fallBack;
  }

  const propsKey = Object.keys(props);
  for (let i = propsKey.length - 1; i >= 0; i -= 1) {
    if (deps.indexOf(propsKey[i]) >= 0) {
      return propsKey[i];
    }
  }

  return fallBack;
};
