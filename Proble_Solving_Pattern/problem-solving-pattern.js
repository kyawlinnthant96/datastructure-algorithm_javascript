//** function call name is same and accept two array and if return true every value in the arry include a corresponding values of square in second array  */

//** first naive approach */

function naviveSame(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) return false;
    console.log(arr2);
    arr2.splice(correctIndex, 1);
  }
  return true;
}

///* refactor

function refactorSame(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

// console.log(refactorSame([1, 2, 3, 3], [1, 4, 9, 9]));

const validAnagram = (first, last) => {
  if (first.length !== last.length) {
    return false;
  }

  const lookUp = {};

  for (let i = 0; i < first.length; i++) {
    const letter = first[i];
    lookUp[letter] ? (lookUp[letter] += 1) : (lookUp[letter] = 1);
  }
  for (let i = 0; i < last.length; i++) {
    const letter = last[i];
    if (!lookUp[letter]) {
      return false;
    } else {
      lookUp[letter] -= 1;
    }
  }
  return true;
};

console.log(validAnagram("apple", "ppale"));
