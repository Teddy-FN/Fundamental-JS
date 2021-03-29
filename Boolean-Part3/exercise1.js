const firstName = 'Teddy'
    , lastName = 'Ferdian'
    , country = 'Indonesia'
let age = 22
    , isMarried = false
const year = 1998

console.log('tipe data firstName :', typeof firstName)

console.log(typeof age === typeof year)
console.log(typeof firstName === typeof lastName)
console.log(typeof age == typeof firstName)

const numb = '10'
console.log(typeof parseInt(numb) == typeof 10)

const numbr = '9.8'
console.log(parseInt(Math.ceil(numbr)) === 10)

/* 
    thruty Value :
    1. All string
    2. All number (positive or negative) except zero
    3. Boolean True
*/

/* 
    Falsy Value : 
    1. 0 
    2. 0 number 
    3. undefined
    4. null
    5. "", '', `` (empty string)
    6. NaN
    7. Boolean false
*/

console.log('A', 4 > 3)
console.log('B', 4 >= 3)
console.log('C', 4 < 3)
console.log('D', 4 <= 3)
console.log('E', 4 == 4)
console.log('F', 4 === 4)
console.log('G', 4 != 4)
console.log('H', 4 !== 4)
console.log('I', 4 != '4')
console.log('J', 4 == '4')
console.log('K', 4 === '4')


const py = 'ptyhon'
    , jrg = 'jargon'
console.log(!(py.length === jrg.length))

console.log('I', 4 > 3 && 10 < 12)
console.log('II', 4 > 3 && 10 > 12)
console.log('III', 4 > 3 || 10 < 12)
console.log('IV', 4 > 3 || 10 > 12)
console.log('V', !(4 > 3))
console.log('VI', !(4 < 3))
console.log('VII', !(false))
console.log('VIII', !(4 > 3 && 10 < 12))
console.log('IX', !(4 > 3 && 10 > 12))
console.log('X', !(4 === '4'))
console.log('XII', !(py.includes('on') == jrg.includes('on')))


const date = new Date()
const getYear = date.getFullYear()
const getMonth = date.getMonth() + 1
const dates = date.getDate()
const day = date.getDay() + 1
const hours = date.getHours()
const minutes = date.getMinutes()
console.log(getYear, getMonth, dates, day, hours, minutes)

// Find out the numbers of seconds elapsed from January 1, 1970 to now.
let oldYears = date.getFullYear() - 51
console.log(oldYears)
let minutesOldYears = (oldYears * 60) * date.getUTCFullYear()
console.log(minutesOldYears)