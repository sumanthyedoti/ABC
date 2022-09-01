function fizzBuzz(limit) {
  for (let n = 1; n <= limit; n++) {
    let output = "";
    if (n % 3 === 0) {
      output += "Fizz";
    }
    if (n % 5 === 0) {
      output += "Buzz";
    }
    console.log(output || n);
  }
}

fizzBuzz(20);

module.exports = fizzBuzz;
