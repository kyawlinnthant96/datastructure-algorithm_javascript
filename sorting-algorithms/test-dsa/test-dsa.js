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

function isInfinitive(word) {
  const verbConjugations = new Map([
    ["s", ""],
    ["es", ""],
    ["ing", "e"],
    ["ed", ""],
  ]);

  for (const [suffix, isInfinitive] of verbConjugations) {
    if (word?.endWith(suffix)) {
      return word.slice(0, -suffix.length) + infinitiveSuffix;
    }
  }

  return word;
}

// const testWord = isInfinitive("working");
// console.log(testWord);

// behind the scence of array index
// LOC(LA[i]) = Base(IA) + w * (i - lower bound)

// sample array in memory address caculation
// 0 | 10 | 1000
// 1 | 20 | 1004
// 2 | 30 | 1008
// 3 | 40 | 1012
// 4 | 50 | 1016

// LOC(arr[3]) = Base(arr) + 4 * (3 - 0) = 1000 + 4 * 3 = 1012

// LOC(arr[4]) = Base(arr) + 4 * ( 4 - 0 ) = 1000 + 4 * 4 = 1016

// multi-dimensional array memory address picking

/* 
    0   1   2   3   4
0  10   20  30  40  50
1  60   70  80` 90  100
2  110  120 130 140 150

lc = column of lower bound
lr = row of lower bound
w = number bytes
LOC(A(R,C)) = Base(A) + w[N * (R-Lr) + (C-Lc)]
LOC(A(1,3)) = 10 + 4 * ( 5 * (1 - 0) + ( 3 - 0 )) = 10 + 4 * 20 = 90

const inde = lb
for (let i = 0; i <= ub; i++ ) {
  index = index + 1
}
let income =[20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41];
length = ub - lb + 1 = 2022 - 2000 + 1 = 23
let output= []
let initialYear = 2000
for (i = 0; i <= length; i++ ) {
  output.push(`${initialYear + i}:${1,000,000}`);
}
*/
const findMin = (arr) => {
  let min = arr[0];
  for (let i = 0; i <= arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  return min;
};

const sort = (arr) => {
  const len = arr.length; // [2,3,5,6,4,1]
  for (let i = 0; i <= len; i++) {
    // i = 0; 0 <= 6; 0++
    for (let j = 0; j <= len - i - 1; j++) {
      // j = 0; 0 <= 6 - 0 - 1; 0++
      // j = 1; 1 <= 6 - 1 - 1; 1++
      // j = 2; 2 <= 6 - 2 - 1; 2++
      // j = 3; 3 <= 6 - 3 - 1; 3++
      // j = 4; 4 <= 6 - 4 - 1; 4++
      // j = 5; 5 <= 6 - 5 - 1; 5++
      // j = 6; 6 <= 6 - 6 - 1; 6++
      if (arr[j] > arr[j + 1]) {
        // (arr[3] = 6 > arr[3+1] = 4)
        const temp = arr[j]; // 6
        arr[j] = arr[j + 1]; // arr[3] = 6 = arr[3 + 1] = 4
        arr[j + 1] = temp; // arr[3 + 1] = 6
      }
    }
  }
  return arr;
};

let arr = [2, 3, 4, 5, 1];
console.log(
  arr.sort(function (a, b) {
    return b - a;
  })
);
