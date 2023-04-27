const numbers = [1, 2, 3, 4, 5];

/*

for (let index = 0; index < numbers.length; index++) {
    const number = numbers[index];
    tens.push(number * 10);
}


numbers.forEach(
    function(number) {
        tens.push(number * 10);
    }
);
*/

const tens = numbers.map((number) => number * 10);
console.log(tens);