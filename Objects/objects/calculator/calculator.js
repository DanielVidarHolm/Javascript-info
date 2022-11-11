// Create an object calculator with three methods:

// read() prompts for two values and saves them as object properties with names a and b respectively.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.
// let calculator = {
//   // ... your code ...
// };

// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );


let calculator = {
    val1: 0,
    val2: 0,
    read() {
        this.val1 = prompt('first value')
        this.val2 = prompt('second value')
    },
    sum() {
        return Number(this.val1) + Number(this.val2)
    },
    mul() {
        return this.val1 * this.val2
    }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );