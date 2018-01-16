function upperCaser(input) {
    return input.toUpperCase();
}

module.exports = upperCaser

// Ideal case
console.log('Ideal case test:\t', upperCaser('hello') === 'HELLO');

// More than one word
console.log('More words test:\t', upperCaser('hello world') === 'HELLO WORLD');