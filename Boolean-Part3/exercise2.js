// Jika ingin mencoba uncommand aja yakk

// const height = prompt('Enter number of Height triangle', 'Enter Here!!')
//     , base = prompt('Enter number of base triangle', 'Enter Here!!')
//     , result = `${0.5 * base * height}`


// if (height !== base) {
//     alert('Tolong masukan angka!')
// } else {
//     alert(`Triangle area is 0,5 X ${base} X ${height} = ${0.5 * base * height}\nThank You for choice number!!!`)
// }



// const sideA = parseInt(prompt('Enter number for side A', 'Enter Here'))
// const sideB = parseInt(prompt('Enter number for side B', 'Enter Here'))
// const sideC = parseInt(prompt('Enter number for side C', 'Enter Here'))
// const perimeter = parseInt(`${sideA + sideB + sideC}`)

// switch (true) {
//     case (perimeter !== NaN):
//         alert(`
//     side a: ${sideA}
//     side b: ${sideB}
//     side c: ${sideC}
//     The perimeter of the triangle is ${perimeter}`)
//         break;
//     default:
//         alert('MASUKAN ANGKA WOI!!');
//         break;
// }


// const lengths = parseInt(prompt('Enter length rectangle', 'Enter here'))
// const widths = parseInt(prompt('Enter Width rectangle', 'Enter here'))
// const area = parseInt(`${lengths * widths}`)
// if (lengths !== `${lengths}` && widths === `${widths}`) {
//     alert('MASUKAN ANGKA WOI')
// } else {
//     alert(`
//     your input lenghts side : ${lengths}
//     your input width side: ${widths}
//     Total area : ${area}
//     perimeter of rectangle ${2 * (lengths * widths)}
//     `)
// }



// Radius prompt 
// const radius = parseInt(prompt('Enter Your number radius', 'Enter here'))
// const PI = Math.PI
// const circleArea = PI * radius * radius
// const circumCircle = 2 * PI * radius
// if (!(radius === parseInt(radius))) {
//     alert('MASUKAN ANGKA WOI')
// } else {
//     alert(`
//     Radius: ${radius}
//     Circle Area: ${circleArea}
//     circumference circle: ${circumCircle}
//     `)
// }



// y = 2x -2 
// y = 0
// x = 0
// zeroNumb = `2x - 2`
// x = 2 / 2
// result = x
// console.log(result)



//  Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
// const userHours = prompt('Enter Hours', 'Enter here!')
// const ratePerHour = prompt('Enter rate perHour', 'Per Hour!')
// const WeeklyEarning = parseInt(`${userHours * ratePerHour}`)

// userHours !== NaN || ratePerHour !== NaN
//     ? alert(WeeklyEarning)
//     : alert('MASUKIN ANGKA NJINK')


// const fullName = prompt('Enter Your Name', 'Enter Here')
// fullName.length >= 7 ? alert('WOIII KEPANJANGAN ANJINKKK') : alert('KEPENDEKAN CUKK')


// const yourName = prompt('Enter Your Name', 'Enter Here')
// const familyName = prompt('Enter Your family name', 'Enter Here')
// yourName.length >= familyName.length ? alert(`${yourName}, ${yourName} is longer than your family name, ${familyName}
// `) : alert(`${yourName}, ${yourName} is shoter than your family name, ${familyName}`)


// let myAge = 22
// let yourAge = 30
// myAge <= yourAge && yourAge > myAge ? console.log(`I am ${yourAge - myAge} years olders than you`) : console.log(`I am ${yourAge - myAge} years yougers than you`)


// Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
// const age = parseInt(prompt('Enter your birth year', 'Enter Here'))
// const date = new Date()
// const years = date.getFullYear()
// const rules = years - age
// rules >= 18 ? alert(`You are ${rules}. You are old enough to drive`) : alert(`You are ${rules}. You will be allowed to drive after ${18 - rules} years.`)


// Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
// const ages = prompt('Enter your ages', 'Enter here')
// const date = new Date()
// const years = date.getFullYear()
// const minutes = 60
// const total = parseInt((ages * minutes) * years)
// ages !== null ? alert(`You lives ${total} seconds.`) : alert('MASUKIN ANGKA ASTAGA')


/* 
    Create a human readable time format using the Date time object
    YYYY-MM-DD HH:mm
    DD-MM-YYYY HH:mm
    DD/MM/YYYY HH:mm
*/
const date = new Date()
const year = date.getFullYear()
    , months = date.getMonth() + 1
    , days = date.getDay() + 1
    , hours = date.getHours()
    , minutes = date.getMinutes()
// A
console.log(year + '-' + months + '-' + days + ' ' + hours + ':' + minutes)
// B 
console.log(days + '-' + months + '-' + year + ' ' + hours + ':' + minutes)
// C
console.log(days + '/' + months + '/' + year + ' ' + hours + ':' + minutes)