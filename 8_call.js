function duckCount() {
  return Array.prototype.slice.call(arguments)
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
