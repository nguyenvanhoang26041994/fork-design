export const getBeginDateOfTheMonth = (date) => {
  const _month = date.getMonth();
  const _year = date.getFullYear();
  return new Date(_year, _month, 1);
};

export const getBeginDateOfTheNextMonth = (date) => {
  const _month = date.getMonth();
  const _year = date.getFullYear();
  return new Date(_year, _month + 1, 1);
};

export const getBeginDateOfThePrevMonth = (date) => {
  const _month = date.getMonth();
  const _year = date.getFullYear();
  return new Date(_year, _month - 1, 1);
};

export const getEndDateOfTheMonth = (date) => {
  const _month = date.getMonth();
  const _year = date.getFullYear();
  return new Date(_year, _month + 1, 0);
};

