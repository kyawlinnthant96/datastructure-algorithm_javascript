// first recursion

function countDown(num) {
    if (num <= 0) {
        console.log("All done")
        return
    }
    console.log(num)
    num--;
    countDown(num)
}
// countDown(4)
// second recursive func

function sumRange(num) {
    if (num === 1) {
         return 1;
    }

    return num + sumRange(num - 1)
}

function factorial(num) {
    let total =1 ;
    for(let i = num; i > 1; i--) {
        total *= i;
    }
    return total
}

function factorialTwo(num) {
    if (num === 1) return 1;
    return num * factorialTwo(num - 1)
}

// helper method recursion
// principle of recursion
function collectOddValues(arr) {
    let result = [];

    // helper function accept input value
    function helper(helperInput) {
        if (helperInput.length === 0) {
            return;
        }
        // input of first element is odd let push to result
        if (helperInput[0] % 2 !== 0) {
                result.push(helperInput[0])
        }
        //  then recursive call and remove curr operation value
        helper(helperInput.slice(1));
    }
    helper(arr);
    return result;
}

// console.log(collectOddValues([1,2,3,4,5,6,7,8,9]))

//  pure recursion
function pureRecursion(arr) {
    let newArr = [];

    if (arr.length === 0) {
        return newArr;
    }
    if (arr[0] % 2 !== 0) {
        return newArr.push(arr[0])
    }
    newArr = newArr.concat(pureRecursion(arr.slice(1)))
    return newArr
}

function capitalizeWord (arr) {
    if (arr.length === 1) {
        return [arr[0].toUpperCase()];
    }

    let res = capitalizeWord(arr.slice(0, -1))
    console.log(res)
    res.push(arr.slice(arr.length -1)[0].toUpperCase)
    return res;

}
function capitalizeFirst(array) {
  // Base case: if array has only one element
  if (array.length === 1) {
    // Capitalize the first letter of the string and return it in an array
    return [array[0][0].toUpperCase() + array[0].substr(1)];
  }

  // Recursive case:
  // Call capitalizeFirst with array excluding the last element
  const res = capitalizeFirst(array.slice(0, -1));

  // Capitalize the first letter of the last element
  const string = array[array.length - 1][0].toUpperCase() + array[array.length - 1].substr(1);

  // Append the capitalized string to the result array obtained from recursive call
  res.push(string);

  // Return the result array
  return res;
}

// Dummy data
const data = ['hello', 'world', 'example'];

// Call the function with dummy data
console.log(capitalizeFirst(data));


