/* 
    1. Copy countries array(Avoid mutation)
    2. Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable     sortedCountries
*/
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]
let sortirArrCountries;
for (let i = 0; i < countries.length; i++) {
    if (i === 0) {
        sortirArrCountries = countries.sort((a, b) => a - b)
    }
}
console.log('WKWKWKWKWKWKWK', sortirArrCountries)

/*
    3. Sort the webTechs array and mernStack array
*/
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]
// Sort webtech 
let sortArr = []
for (let i = 0; i < webTechs.length; i++) {
    if (i === 1) {
        sortArr.push(
            webTechs.sort((a, b) => a.localeCompare(b))
        )
    }
}
console.log('Result', sortArr)


const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]

let stackAll = []
for (const frontEnd of fullStack[0]) {
    stackAll.unshift(frontEnd)
}
for (const backEnd of fullStack[1]) {
    stackAll.push(backEnd)
}
for (let i = 0; i < stackAll.length; i++) {
    if (i === 1) {
        let newArr = stackAll.sort((a, b) => a.localeCompare(b))
        stackAll = newArr
    }
}
console.log(stackAll)
