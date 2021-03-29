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
