function repeat(operation, num) {
    if (num < 0) {
        console.log('Invalid Argument: num must be non-negative');
        return;
    }
    for (let i = 0; i < num; i++) {
        operation();
    }
}

// Do not remove the line below
module.exports = repeat

// Ideal case
{
    let i = 0;
    repeat(function () { i++; }, 10);
    console.log('Num increment test:\t', i === 10);
}

// Zero repeat test
{
    let i = 0;
    repeat(function () { i++; }, 0);
    console.log('Zero repeat test:\t', i === 0);
}

// Negative repeat test
{
    let i = 0;
    repeat(function () { i++; }, -100);
    console.log('Negative repeat test:\t', i === 0);
}