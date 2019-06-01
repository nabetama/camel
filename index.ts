type rObj = {
  [key: string]: any;
};

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

const recursive = (obj: rObj): any => {
  if (!obj || typeof obj !== "object") {
    return obj;
  }
  return Object.keys(obj).reduce<rObj>((acum, cur) => {
    acum[toCamelCase(cur)] = recursive(obj[cur]);
    return acum;
  }, {});
};

export default camelize;
