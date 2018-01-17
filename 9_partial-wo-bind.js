function logger(namespace) {
  return function applyName(...args) {
    args.unshift(namespace);
    console.log.apply(null, args);
    return Array.prototype.join.apply(args); // for testing
  };
}

module.exports = logger;

// Basic testing
{
  const warn = logger('WARN:');
  console.log(warn('a', 'b', 'c') === 'WARN:,a,b,c');
}
