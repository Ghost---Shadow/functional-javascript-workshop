function duckCount(...args) {
  const nullFiltered = args.filter(obj => obj); // remove null objects
  const validObjects = nullFiltered.filter(obj => Object.prototype.hasOwnProperty.call(obj, 'quack'));
  return validObjects.length;
}

module.exports = duckCount;

// Ideal case
{
  const notDuck = Object.create({ quack: true });
  const duck = { quack: true };
  console.log('Ideal case:', duckCount(duck, notDuck) === 1);
}

// Null case
{
  const obj1 = null;
  const obj2 = null;
  console.log('Null case:', duckCount(obj1, obj2) === 0);
}

// Null, empty and undefined argument case
{
  const obj1 = { quack: null };
  const obj2 = { quack: '' };
  const obj3 = { quack: undefined };
  console.log(
    'Null, empty and undefined argument case:',
    duckCount(obj1, obj2, obj3) === 3,
  );
}
