console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to \'help\' one another.')

console.log('Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.')



const numb = '10'
const chnge = parseInt(numb)
if (chnge === 10) console.log(true)


const floatNumb = '9.89'
if (floatNumb !== 10) {
    const changeData = Math.round(parseFloat(floatNumb))
    console.log(changeData)
}


const generateNumber = Math.floor(Math.random() * 100)
console.log(generateNumber)

// Without Function
const generateNumber2 = Math.floor(Math.random() * 50) + 50;
console.log('SOAL2', generateNumber2)
// If using function ES 6
const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}
console.log(randomNumber(50, 100))

// 0 - 255
const generateNumber3 = Math.floor(Math.random() * 255);
console.log(generateNumber3)


let word = 'abcdefghijklmnopqrstuvwxyz123456789'
let mixRandom = word.charAt(Math.floor(Math.random() * word.length))
console.log(mixRandom)

let number1 = 1
let number2 = 2
let number3 = 3
let number4 = 4
let number5 = 5
console.log(`
${number1} ${number1 / number1} ${Math.pow(number1, 1)} ${Math.pow(number1, 2)} ${Math.pow(number1, 3)}
${number2} ${number2 / number2} ${Math.pow(number2, 1)} ${Math.pow(number2, 2)} ${Math.pow(number2, 3)}
${number3} ${number3 / number3} ${Math.pow(number3, 1)} ${Math.pow(number3, 2)} ${Math.pow(number3, 3)}
${number4} ${number4 / number4} ${Math.pow(number4, 1)} ${Math.pow(number4, 2)} ${Math.pow(number4, 3)}
${number5} ${number5 / number5} ${Math.pow(number5, 1)} ${Math.pow(number5, 2)} ${Math.pow(number5, 3)}
`)

let text = 'You cannot end a sentence with because because because is a conjunction'
const changeValue = text.substring(31, 55)
console.log(changeValue)

const changeValue2 = text.substr(31, 23)
console.log(changeValue2)