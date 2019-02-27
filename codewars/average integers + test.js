//average integers + test 



function average(numbers) {
  return sum(numbers) / numbers.length;
}

function sum(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

function assertEqual(actual, expected, testName) {
    if(actual === expected) {
        console.log('Passed');
    } else {
        console.log('Failed, expected ' + expected + ' but got ' + actual);
    }
}
    var input = [1, 2, 4, 8, 2, 1];
    var expected = 3;
    var actual = average(input);
assertEqual(average(input), expected, 'should return average of array')