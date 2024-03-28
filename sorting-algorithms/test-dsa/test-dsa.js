// summation implemantataioin
// 1 two parameter - first -> total frequency
const totalFrequencySum = (n) => {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
};
const randomSum = (n, m) => {
  // n -> last digit
  // m -> ramdom start digit
  return (n * (n + 1)) / 2 - (m * (m - 1)) / 2;
};

// for double exponential
const doubleExponentialSum = (n) => {
  // 5(5+1)(2*5+1)/6 = (5 * 6 * 11)/6  = 330/ 6 = 55
  return (n * (n + 1) * (2 * n + 1)) / 6;
};
const tripleExponentialSum = (n) => {
  const formula = (n * (n + 1)) / 2;
  return formula ** 2;
};

// check frequency number from to
const checkFrequencyNum = (n, m) => {
  return n + 1 - m;
};

// for triple exponential

// console.log(totalFrequencySum(100));
//Fibonacci Recursive

const fibonacciRecursive = (n) => {
  if (n <= 1) {
    return n;
  }

  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
  // (5-1) + (5-2) => 7
  // (4-1) + (4-2) => 5
  // (3-1) + (3-2) => 3
  // (2-1) + (2-2) => 1
};
const factorial = (n) => {
  //
  if (n < 0) {
    return -1;
  } else if (n === 0 || n === 1) {
    return 1;
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    // 2 <= 3; 2++
    // 3 <= 3; 3++
    result *= i; // 1 * 2 // 2 * 3
  }
  return result;
};

const permutation = (n, r) => {
  return factorial(n) / factorial(n - r);
};
const combination = (n, k) => {
  return factorial(n) / (factorial(k) * factorial(n - k));
};
// console.log("combination", fibonacciRecursive(15));

const area = (x, y) => {
  return x * y;
};
// console.log("factorial", area(3, 3));

const qudraticEquation = (a, b, c) => {
  //1, -6, 9
  const temp = b ** 2 - 4 * a * c;
  // 36 - 36
  console.log(temp);
  if (temp < 0) {
    return false;
  }

  if (temp === 0) {
    const ans = -b / (2 * a);
    // -6 /
    return ans;
  } else {
    temp = Math.sqrt(temp);
    const ansOne = (-b + temp) / (2 * a);
    const ansTwo = (-b + temp) / (2 * a);
    return `Write down two solution: ${ansOne}: ${ansTwo}`;
  }
};

// console.log(qudraticEquation(1, -6, 9));
const isPrime = (num) => {
  if (num <= 1) return false;
  if (num % 2 === 0 && num > 2) return false;

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % 1 === 0) {
      return false;
    }
  }
  return true;
};

const checkPrimea = (targetNum) => {
  let primeArray = [];
  for (let i = 1; i <= targetNum; i++) {
    if (isPrime(i)) {
      primeArray.push(i);
    }
  }
  return primeArray;
};

console.log(checkPrimea(1000));
