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
// const countrys = 'Ethiopia'
// if (countries.indexOf(countrys) !== -1) {
//     console.log(
//         countries.splice(4, 1).toString().toUpperCase()
//     )
// } else {
//     countries.push('Ethiopia')
// }

// // Find Index middle om Countries
// const FinlandCountries = 'Finland'
// let middleValue = countries.splice(
//     countries.indexOf(FinlandCountries), 1
// ).toString().toUpperCase()
// console.log(middleValue)


// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
let evenIndex = new Array()
    , oddIndex = []
for (let i = 1; i < countries.length; i++) {
    console.log('urutan ke', i + "adalah negara", countries[i])
    if (i % 2 === 0) {
        evenIndex.push(countries[i])
    } else {
        oddIndex.push(countries[i])
    }
}
console.log(evenIndex)
console.log(oddIndex)
