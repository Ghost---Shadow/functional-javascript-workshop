function logger(namespace) {
  return function applyName(...args) {
    args.unshift(namespace);
    // filter null arguments
    const filteredArgs = args.filter(arg => arg);
    console.log.apply(null, filteredArgs);
    return filteredArgs.join(' ');
  };
}

module.exports = logger;

// Basic testing
{
  const warn = logger('WARN:');
  console.log(' Ideal testing:', warn('a', 'b', 'c') === 'WARN: a b c');
}

// Null testing
{
  let warn;
  warn = logger(null);
  console.log('Null logging\t', warn('a', 'b', 'c') === 'a b c');

  warn = logger('WARN:');
  console.log('No arguments:\t', warn() === 'WARN:');

  warn = logger('WARN:');
  console.log('Null arguments:\t', warn(null) === 'WARN:');
}
