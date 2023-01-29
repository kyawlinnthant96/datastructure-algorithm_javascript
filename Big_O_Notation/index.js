//**Scenario one */
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

/* ---------------------------------------------------- */

//** Scenario Two O(1) operation run time is constant even input grow */
function addUpToTwo(n) {
  return (n * (n + 1)) / 2;
}

let temp1 = performance.now();
addUpToTwo(1000000000);
let temp2 = performance.now();

console.log(`Time Elapsed: ${(temp2 - temp1) / 1000} seconds`);

function logAtMost5(n) {
  for (let i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}

/* ---------------------------------------------------- */

//** Scenario three O(n) n is grow the operation runtime is grow proportion */
function countUpAndDown(n) {
  console.log("going up");
  for (var i = 0; i < n; i++) {
    console.log(i);
  }
  console.log("at the top \n Going down...");
  for (var j = n - 1; j >= 0; j--) {
    console.log(j);
  }
  console.log("Back down.Bye");
}

function logAtLeast5(n) {
  for (let i = 0; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}

/* ---------------------------------------------------- */
//** Scenario four O(n2) n is grow operation run time is double  */

function printAllNumber(n) {
  for (var i = 0; i < n; i++) {
    console.log(i);
    for (var j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}
/* ---------------------------------------------------- */
