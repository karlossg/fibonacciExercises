//recursive es6

const fib = n => (n < 2 ? n : fib(n - 2) + fib(n - 1));

//the fast way
const fibFast = n => {
  let memory = [0, 1];
  for (let i = 2; i <= n; i++) {
    memory.push(memory[i - 2] + memory[i - 1]);
  }
  return memory;
};

// fib at position
var fibCount = 0;
var calculateFibAt = function(n) {
  fibCount = fibCount + 1;
  var calc;
  if (n < 2) {
    return n;
  } else {
    return calculateFibAt(n - 2) + calculateFibAt(n - 1);
  }
};

for (var i = 0; i <= 10; i++) {
  var fib = calculateFibAt(i);
  console.log(
    'The Fibonacci number at position ' + i + ' is ' + fib + '; It took ' + fibCount + ' calls to fib to get here'
  );
}
