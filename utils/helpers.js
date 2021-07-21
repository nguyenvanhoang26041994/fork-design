
export const loop = (count, cb) => {
  const rs = [];
  for (let i = 0; i < count; i++) {
    rs.push(i);
  }

  return rs.map(cb);
};

export const uniqueId = (prefix = 'uniqueId') => `${prefix}_` + Math.random().toString(36).substr(2, 9);
