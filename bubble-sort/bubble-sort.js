const bubbleSort = (arr) => {

    // arr = [4,2,1,5,7,3]
    const swap = (arr, idxOne, idxTwo) => {
        // 4) [4,2,1,5,7,3], 0 , 1
        [arr[idxOne] , arr[idxTwo]] = [arr[idxTwo], arr[idxOne]]
    //   5)  [ arr[0] = 4 , arr[1] = 2 ] = [arr[1] = 2, arr[0] = 4]
    }
    for (let i = arr.length; i > 0; i--) {
        // 1) i = 6, 6 > 0; 6--

        for (let j = 0; j < i - 1; j++) {
            // 2) j = 0 ; 0 < 6 - 1; j++

            if (arr[j] > arr[j + 1]) {
                // 3) arr[0] = 4  > arr[0 + 1] = 2
                swap(arr, j, j + 1)
            }
        }
    }
    // 6) [2,4,1,5,7,3]
    return arr
}

console.log(bubbleSort([4,2,1,5,7,3]));


