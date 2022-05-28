export default (obj: any, propName: any): any => {
  if (typeof propName === 'string') {
    return obj[propName];
  }
  return '';
};
