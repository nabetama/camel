interface rObj {
  [key: string]: any;
}

const camelize = (obj: Object | string): Object | string => {
  if (typeof obj === "string") {
    return toCamelCase(obj);
  }
  return recursive(obj);
};

const toCamelCase = (s: string): string => {
  return s.replace(/[_.-](\w|$)/g, (_: string, captured: string) =>
    captured.toUpperCase()
  );
};

const recursive = (obj: rObj): Object =>
  Object.keys(obj).reduce((acum: rObj, cur: string) => {
    acum[toCamelCase(cur)] = obj[cur];
    return acum;
  }, {});

export default camelize;
