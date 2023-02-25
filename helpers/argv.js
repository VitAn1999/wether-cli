const getArgs = (args) => {
  const res = {};
  const [arg1, arg2, ...rest] = args;
  rest.forEach((el, idx, arr) => {
    if (el.charAt(0) === '-') {
      if (idx === arr.length - 1 || arr[idx + 1].charAt(0) === '-') {
        res[el.substr(1)] = true;
      } else {
        res[el.substr(1)] = arr[idx + 1];
      }
    }
  });
  return res;
};

export { getArgs };
