/* 
    Develop a small script which generate any number of characters random id:
            fe3jo1gl124g
          xkqci4utda1lmbelpkm03rba
*/

let words = 'abcdefghijklmopqrstuvwxyz123456789'
const lengthsWords = words.length;
let result = ''
for (let i = 0; i <= lengthsWords; i++) {
    result += words.charAt(Math.floor(Math.random() * lengthsWords))
}
let finalStep = result.slice(0, 8)
console.log(finalStep)


/*
    Write a script which generates a random hexadecimal number.
        '#ee33df'
*/
let wordsHex = '0123456abcdef'
let resultColor = ''
for (let i = 1; i <= wordsHex.length; i++) {
    if (wordsHex[i] <= 6) {
        resultColor += wordsHex.charAt(Math.floor(Math.random() * wordsHex.length))
        console.log(resultColor)
    }
}
let sharp = '#'
let colorHex = resultColor
let colorHexaDecimal = sharp.concat(colorHex)
console.log('COLOR', colorHexaDecimal)


/*
    Write a script which generates a random rgb color number.
        rgb(240,180,80)
*/
let number1 = ''
    , number2 = ''
    , number3 = '';

const arra = []
const rgb = 'rgb'

for (let i = 0; i <= 255; i++) {
    if (i <= 0) {
        number1 += Math.floor(Math.random() * (0 - 255) + 255)
        arra.push(number1)
    }
}
for (let i = 0; i <= 255; i++) {
    if (i <= 0) {
        number2 += Math.floor(Math.random() * (0 - 255) + 255)
        arra.push(number2)
    }
}
for (let i = 0; i <= 255; i++) {
    if (i <= 0) {
        number3 += Math.floor(Math.random() * (0 - 255) + 255)
        arra.push(number3)
    }
}
let arrToString = arra.toString()
let stepFinal = rgb.concat(`(${arrToString})`)
console.log(stepFinal)


/*
    Using the above countries array, create the following new array.
        ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
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
let resultCountries = [];
for (const country of countries) {
    resultCountries.push(country.toUpperCase())
}
console.log(resultCountries)
/*
    Using the above countries array, create an array for countries length'.
        [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
*/
let nampungJumlah = []
for (let i = 0; i <= countries.length; i++) {
    let resultsAss = countries.indexOf(countries[i])
    if (resultsAss !== -1) {
        nampungJumlah.push(countries[i].length)
    }
}
console.log(nampungJumlah)

/*


Use the countries array to create the following array of arrays:
[
  ['Albania', 'ALB', 7],
  ['Bolivia', 'BOL', 7],
  ['Canada', 'CAN', 6],
  ['Denmark', 'DEN', 7],
  ['Ethiopia', 'ETH', 8],
  ['Finland', 'FIN', 7],
  ['Germany', 'GER', 7],
  ['Hungary', 'HUN', 7],
  ['Ireland', 'IRE', 7],
  ['Japan', 'JAP', 5],
  ['Kenya', 'KEN', 5]
]
*/
const arrayWord = []
for (let i = 0; i < countries.length; i++) {
    let count = []
    let countLength = countries.indexOf(countries[i])
    // Count Length
    if (countLength !== -1) {
        count.push(countries[i].length)
    }
    // Push Name Countries
    if (countLength !== -1) {
        count.unshift(countries[i])
    }
    // Push 3 Word upperCase name countrys
    if (countLength !== -1) {
        count.splice(1, 0, countries[i].toUpperCase().slice(0, 3))
    }
    arrayWord.push(count)
}
console.log(arrayWord)



/*
    In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
        ['Finland', 'Iceland']
*/
let nampungLagi = []
for (let i = 0; i < countries.length; i++) {
    let strings = countries[i].toString().match('land')
    if (strings !== null) {
        nampungLagi.push(strings.input)
    }
}
console.log(nampungLagi)

/*
    In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
        ['Finland', 'Iceland']
*/

let nampungLastWord = []
for (let i = 0; i < countries.length; i++) {
    let lastIndexArr = countries[i].toString().match('ia')
    if (lastIndexArr !== null) {
        nampungLastWord.push(lastIndexArr.input)
    }
}
console.log(nampungLastWord)

/*
Using the above countries array, find the country containing the biggest number of characters.
Ethiopia
*/
let resultsssss = ''
for (let i = 0; i < countries.length; i++) {
    let indexCountris = countries[i].length
    let countsssss = countries.indexOf(countries[i])
    if (indexCountris === 8 && countsssss !== -1) {
        resultsssss = countries[i]
    }
}
console.log(resultsssss)




/* 
    Using the above countries array, find the country containing only 5 characters.
        ['Japan', 'Kenya']
*/
let hasilKetemu = []
for (let i = 0; i < countries.length; i++) {
    let countLengthCountries = countries[i].length
    let countIndexCountries = countries.indexOf(countries[i])
    if (countLengthCountries === 5 && countIndexCountries !== -1) {
        hasilKetemu.push(countries[i])
    }
}
console.log('RESULT', hasilKetemu)


