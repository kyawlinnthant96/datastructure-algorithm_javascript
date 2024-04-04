// Bubble sort implementation
// sudo code
/* 
Set upperbound = N - 1
Set out = 1
Set swap = true
Repeat while out <= upperbound and is swap
    swap = false
    Repeat for in = 0 to upperbound - out by 1
        if la[in] > la[in + 1] then;
            swap(in, in+1)
    End of Loop
End of Loop

*/

const bubbleSort = (arr) => {
  let isSwap;
  const UB = arr.length - 1;
  for (let i = 0; i < UB; i++) {
    isSwap = true;
    for (let j = 0; j < UB - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSwap = false;
      }
    }
    if (isSwap) false;
  }
  return arr;
};
/* const bubbleSort = (arr) => {
    [8,7,6,4,5,2,1,3]
  let isSwap;
  const UB = arr.length
  for (let i = UB; i >0; --) { 
    1=> 8; 8 > 0; 8--
    isSwap = true;
    for (let j = 0; j < i - 1; j++) {
        2=> 0; 0 < 8 - 1; 0++
      if (arr[j] > arr[j + 1]) { arr[0] > arr[0 + 1]
        3=> temp = arr[0] = 8
        const temp = arr[j];
        4=> arr[0]->8 = arr[0 + 1]->7
        arr[j] = arr[j + 1]; 
        5=> arr[0+1] -> 7 = 8
        arr[j + 1] = temp;
        isSwap = false;
      }
    }
    if (isSwap) break;
  }
  return arr;
}; */

const bubbleSort2 = (arr) => {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  for (let i = arr.length; i > 0; i--) {
    for (let j = arr.length; j > i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
};

// *Selection Sort

/* 
* psuedo code 
Set UB = N - 1;
Repeat for out = 0 to UB - 1 by 1
    Set min = out
    Repeat for in = out + 1 to UB by 1
        If(LA[min] > LA[in]) then:
            min = in;
    End of loop
End of loop
*/
const selectionSortAlgorithms = (arr) => {
  // arr = [44, 33, 11, 55, 77, 90, 40, 60, 99, 22, 88, 66]
  let len = arr.length; // 12
  for (let i = 0; i < len - 1; i++) {
    // 1 => i = 0; 0 < 12 - 1; 0++
    // 11 => i = 1; 1 < 12 - 1; 1++
    let min = i;
    // 2 => min = 0
    // 6 => min = 1
    // 12 => min = 2
    for (let j = i + 1; j < len; j++) {
      // 3=> j = 0 + 1; 1 < 12; 1++
      // 6=> j = 2; 2 < 12; 2++
      // 9=> j = 3; 3 < 12; 3++
      //skip same iteration
      // 13=> j = 4;
      if (arr[j] < arr[min]) {
        // 4=> arr[1] = 33 < arr[0] = 44 true
        // 7=> arr[2] = 11 < arr[0] = 44 true
        // 10=> arr[3] = 55 < arr[0] = 44 false
        min = j;
        // 5=> min = 1
        // 8=> min = 2
      }
    }

    if (min !== i) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
};

const selectionSortAlgorithms2 = (arr) => {
  const swap = (arr, idx1, idx2) => [
    arr[idx1],
    (arr[idx2] = [arr[idx2], arr[idx1]]),
  ];
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = 0; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) swap(arr, i, lowest);
  }
  return arr;
};

/* 
selection sort reverse order
const reverseOrder = (arr) => {
    const len = arr.length;
    for (let i = 0; i <= len; i++) {
        let max = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[max] < arr[j] ) {
                max = j
            }
        }
        if (max !== i) {
            const temp = arr[i]
            arr[i] = arr[max]
        }
    }
}


* Insertion Sort
Set UB = N - 1;
Repeat for out = 1 to UB by 1
Set temp = LA[out]
in = out 
Repeat while in > 0 and LA[in - 1] >= temp then;
    LA[in] = LA[in - 1]
    in = in - 1
End of loop
LA[in] = temp
End of loop

*/

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let j = i;
    for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
    console.log(arr);
  }
  return arr;
}

// function merge(arr1, arr2) {
//   let results = [];
//   let i = 0;
//   let j = 0;
//   while (i < arr1.length && j < arr2.length) {
//     if (arr2[j] > arr1[i]) {
//       results.push(arr1[i]);
//       i++;
//     } else {
//       results.push(arr2[j]);
//       j++;
//     }
//   }
//   while (i < arr1.length) {
//     results.push(arr1[i]);
//     i++;
//   }
//   while (j < arr2.length) {
//     results.push(arr2[j]);
//     j++;
//   }
//   return results;
// }

/* 
quick sort 
loc = LB
pivot = LA[UB]
left = LB
right = UB
repeate while true
  repeat while LA[left] < pivot;
    left = left + 1;
  End of loop;
  repeat while LA[right] >= pivot and right > LB
    right = right - 1;
  End of loop
  if left >= right then;
    break;
  else swap(left, right)
End of loop
Swap(left,UB)
return left;

*/
function pivot(arr) {
  let start = 0;
  let end = arr.length;
  function swap(array, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  let pivot = arr[start];
  let swapIdx = start;
  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  console.log(arr);
}

console.log(merge([44, 33, 11, 55], [77, 90, 40, 60, 99, 22, 88, 66]));
