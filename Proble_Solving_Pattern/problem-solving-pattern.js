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
    [1,2,4,5]
    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;

    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
    console.log(frequencyCounter1,frequencyCounter2)

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

 console.log(refactorSame([1, 2, 3, 3], [1, 4, 9, 9]));

const validAnagram = (first, last) => {
    if (first.length !== last.length) {
        return false;
    }

    const lookUp = {};

    //** loop and count the character overlap and assign to object */
    for (let i = 0; i < first.length; i++) {
        const letter = first[i];
        lookUp[letter] ? (lookUp[letter] += 1) : (lookUp[letter] = 1);
    }
    //** extract value one bye one comparing over looping value of last character
    for (let i = 0; i < last.length; i++) {
        const letter = last[i];
        if (!lookUp[letter]) {
            return false;
        } else {
            lookUp[letter] -= 1;
        }
        console.log(lookUp);
    }
    return true;
};

// console.log(validAnagram("apple", "ppale"));

// Multiple Pointer
// naive approach
function sumZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
}

// refactor one

function refactorSumOne(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]]
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}

// console.log(refactorSumOne([-3,-2,0,1,3,4,5]))

function countUniqueValues(arr) {
    if (arr.length === 0) return 0;
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j]
        }
        console.log(i, j)
    }
    return i + 1
}

// console.log(countUniqueValues([1,2,3,3,3,4,5,5,5,7,7,7]))

function maxSumArraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    console.log(maxSum ,'first')
    }
    tempSum = maxSum
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i]
        maxSum = Math.max(maxSum, tempSum)
        console.log(tempSum, maxSum)
    }
    return maxSum
}

// console.log(maxSumArraySum([1, 2, 3, 2, 6, 7, 9, 2, 3], 3))


// custom proactice

function spellChecker (word,dictionary) {
   word = word.toLowerCase()
    dictionary = dictionary.map(entry => entry.toLowerCase())

    if (dictionary.includes(word)) {
        return `${word} is spell correctly`
    } else {
        const suggestions = []
        dictionary.forEach(entry => {
            let distance = levenshteinDistance(word,entry)

            if (distance < 3) {
                suggestions.push(entry)
            }
        })

        if (suggestions.length > 0) {
            return `'${word}' is not in the dictionary. Did you mean ${suggestions.join(', ')}?`;
        } else {
            return `'${word}' is not in the dictionary, and no suggestions were found.`;
        }
    }

}

const levenshteinDistance = (word1, word2) => {
    if (word1.length < word2.length) {
        return levenshteinDistance(word2,word1);
    }
    if (word2.length === 0) {
        return word1.length;
    }
    let previousRow = Array.from({length: word2.length + 1}, (_, i) => i);
    console.log(previousRow, "first")
    for (let i = 0; i < word1.length; i++) {
        let currentRow = [i + 1]
        console.log(currentRow, "outer")
        for (let j = 0; j < word2.length; j++) {
            let insertion = previousRow[j + 1] + 1;
            let deletion = previousRow[j] + 1;
            let substitutions = previousRow[j] + (word1[i] !== word2[j] ? 1 : 0);
            console.log(insertion, deletion,substitutions)
            currentRow.push(Math.min(insertion,deletion, substitutions));
            console.log(currentRow, "inner")
        }
        previousRow = currentRow
    }
    return previousRow[previousRow.length - 1]

}



let dictionary = ["apple", "banana","aeroplane", "cherry", "grape", "orange"];
let wordToCheck = "cher";  // Replace with the word you want to check

let result = spellChecker(wordToCheck, dictionary);
console.log(result,"final");
