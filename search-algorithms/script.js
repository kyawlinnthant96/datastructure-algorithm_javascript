function naiveSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
}

// console.log(naiveSearch([2,3,4,5], 5))

function binarySearch(arr, elem) {
  let start = 0; // Corrected initialization
  let end = arr.length - 1;
  while (start <= end) {
    // Corrected loop condition
    let middle = Math.floor((start + end) / 2);
    if (arr[middle] === elem) {
      return middle; // Element found, return its index
    } else if (elem < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return -1; // Element not found
}
console.log(
  binarySearch([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 122, 170], 500)
);

// function naiveStringSearch(long, short) {
//   let count = 0;
//   for (let i = 0; i < long.length; i++) {
//     for (let j = 0; j < short.length; j++) {
//       if (short[j] !== long[i + j]) break;
//       if (j === short.length - 1) count++;
//     }
//   }
//   return count;
// }

// function kmpSearch(text, pattern) {
//   let lps = new Array(pattern.length).fill(0);
//   let i = 1;
//   let j = 0;
//   while (i < pattern.length) {
//     if (pattern[i] === pattern[j]) {
//       lps[i] = j + i;
//       console.log(lps, "in pattern if");
//       i++;
//       j++;
//     } else {
//       if (j !== 0) {
//         j = lps[j - 1];
//       } else {
//         i++;
//       }
//       console.log(lps, "in patter else");
//     }
//   }
//   i = 0;
//   j = 0;
//   while (i < text.length) {
//     if (text[i] === pattern[j]) {
//       i++;
//       j++;
//       if (j === pattern.length) {
//         return i - j;
//       } else {
//         if (j !== 0) {
//           j = lps[j - 1];
//           console.log(j);
//         } else {
//           i++;
//         }
//       }
//     }
//   }
//   return -1;
// }
