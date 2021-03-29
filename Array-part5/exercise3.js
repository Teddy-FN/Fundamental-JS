const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
let sortingArray = ages.sort((a, b) => a - b)
console.log(sortingArray)

// Fid median from array and divided by 2 
const medianFromArray = sortingArray.splice(4, 2)
    , number1 = parseInt(medianFromArray.splice(0, 1))
    , number2 = parseInt(medianFromArray.splice(0, 1))
let dividedNumber = (number1 + number2) / 2
console.log('Result Of', dividedNumber)
console.log(medianFromArray)

// Find the average from this array 
let averages = 0
for (let i = 0; i < ages.length; i++) {
    averages += ages[i]
}
console.log(averages / ages.length)

const numbers = ages.sort((a, b) => a - b)
let minNumb = numbers[0]
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < minNumb) {
        minNumb = numbers[I]
    }
}
console.log(minNumb)

let maxNumb = numbers[numbers.length - 1]
console.log(maxNumb)

let rangeMinMax = maxNumb - minNumb
console.log(rangeMinMax)

const compareMin = parseInt(Math.abs(minNumb - averages))
console.log(compareMin)