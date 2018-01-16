function upperCaser(input) {
    return input.toUpperCase();
}

module.exports = upperCaser

// Ideal case
console.log(upperCaser('hello') === 'HELLO');