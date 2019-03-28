const memoize = function(fn) {
  const cache = {};
  return function(...args) {
    //if arg had been called before, return value
    if (cache[args]) {
      return cache[args];
    }
    //else if arg hasn't been called yet
    const result = fn.apply(this, args);
    //store result in cache object
    cache[args] = result;
    return result;
  };
};
