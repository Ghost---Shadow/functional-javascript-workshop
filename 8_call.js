function duckCount() {
  return Array.prototype.slice.call(arguments)
    .filter(obj => obj) // remove null objects
    .filter(obj => Object.prototype.hasOwnProperty.call(obj, 'quack'))
    .length;
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
  console.log('Ideal case:', duckCount(obj1, obj2) === 0);
}
