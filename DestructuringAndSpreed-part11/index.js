// Example 
const numbers = [1, 2, 3]
let [numOne, numTwo, numThree] = numbers
console.log(numOne, numTwo, numThree)

// Another Example
const names = ['Teddy', 'Rio', 'Michael', 'Nami', 'Dendi']
const [personOne, personTwo, personThree, personFour, personFive] = names
console.log(personOne, personTwo, personThree, personFour, personFive)

// Jika ada 2 array 
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]
const [frontEnd, backEnd] = fullStack
console.log(frontEnd)
console.log(backEnd)


const namesUser = [undefined, 'Brayn', 'David']
let [
    firstPerson = 'Maya',
    secondPerson,
    thirdPerson,
    fourthPerson = 'Mia'
] = namesUser
console.log(firstPerson, secondPerson, thirdPerson, fourthPerson)


// Destructuring during iteration 
const countries = [
    ['Findland', 'Helsinki'],
    ['Indonesia', 'Jakarta'],
    ['Japan', 'Tokyo'],
    ['Norway', 'Oslo']
]
for (const [country, city] of countries) {
    console.log(country, city)
}


const fullStackDeveloper = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]
for (const [first, second, third] of fullStackDeveloper) {
    console.log(first, second, third)
}


// Destructuring Object
const rectangle = {
    width: 20,
    height: 30,
    area: 200
}
let { width, height, area, perimeter } = rectangle
console.log(width, height, area, perimeter)

// Renaming during destructuring
const square = {
    width: 40,
    height: 20,
    area: 100
}
let { width: w, height: h, area: a } = square
console.log(w, h, a)


// Kita juga bisa menambahkan default value 
const rectangle2 = {
    width: 20,
    height: 30,
    area: 200
}
let { width: wi, height: he, area: ar, perimeters = 50 } = rectangle2
console.log(wi, he, ar, perimeters)


// Object parameter without destructuring 
const rect = {
    width: 100,
    height: 200
}
let calculate = rectangle => {
    return 2 * (rectangle.width + rectangle.height)
}
console.log(calculate(rect))



// Another Example 
const person = {
    firstName: 'Teddy',
    lastName: 'Ferdian',
    age: 22,
    country: 'Indonesia',
    job: 'Junior Software enggineer',
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'Redux',
        'Node',
        'MongoDB'
    ],
    languages: [
        'Indonesia', 'Javanese', 'English'
    ]
}

const getPersonInfo = obj => {
    const skills = obj.skills
    const formatedSkils = skills.slice(0, skills.length - 1)
    const languages = obj.languages
    const formatedLanguages = languages.slice(0).join(', ')
    console.log(formatedLanguages)

    const personInfo = `Hello my name is ${obj.firstName} ${obj.lastName}, I am ${obj.age} years old, I am from ${obj.country}, and I am be ${obj.job}, my skills is ${formatedSkils} i can speak using ${formatedLanguages}`
    return personInfo
}
console.log(getPersonInfo(person))



// Object parameter with destructuring 
const kotakAja = {
    width: 200,
    height: 500
}
const calculatePerimeter = ({ width, height }) => {
    return 2 + (width * height)
}
console.log(calculatePerimeter(kotakAja))


const geInfoUser = ({
    firstName,
    lastName,
    age,
    country,
    job,
    skills,
    languages
}) => {
    const skillsFormated = skills.slice(0, skills.length - 1).join(', ')
    const laguagesFormated = languages.join(', ')
    const userInformation = `Hello my name is ${firstName + lastName} im ${age} years old, im from ${country} iam ${job} i can speak ${laguagesFormated} and im can use technology is ${skillsFormated}`
    return userInformation
}

console.log(geInfoUser(person))




// Destructuring obejct during literation 
const todoList = [
    {
        task: 'Prepare JS Test',
        time: '4/1/2020 8:30',
        completed: true
    },
    {
        task: 'Give JS Test',
        time: '4/1/2020 9:40',
        completed: false
    },
    {
        task: 'Acessed JS Test',
        time: '4/1/2020 12:20',
        completed: false
    }
]

for (const { task, time, completed } of todoList) {
    console.log(task, time, completed)
}


// Spread or test operator 
const numbersBro = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10
]
let [num1, num2, num3, num4, ...number] = numbersBro
console.log(num1, num2, num3, num4, number)

const countrys = [
    'Germany',
    'Fance',
    'Indonesia',
    'Japan',
    'Singapore',
    'Dubai',
    'America Serikat',
    'Denmark',
    'England',
    'Italy'
]
let [ger, fra, ...country] = countrys
console.log(ger, fra)
console.log(country)

// Spread Operator Array 
const numb = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10
]
let ood = new Array()
let even = []
let notAll
for (const num of numb) {
    if (num % 2 === 0) {
        ood.push(num)
    } else if (num % 2 === 1) {
        even.push(num)
    } else {
        notAll = 'Bukan angka yang dimasukan ke dalam array'
    }
}
// Di gabungkan 
const allNumber = [...even, ...ood]
console.log(allNumber)


const technologiesUseFrontEnd = ['HTML', 'CSS', 'JavaScript', 'SASS']
const technologiesUseBackEnd = ['Node', 'MongoDB', 'Express']
const fullStackDev = [...technologiesUseFrontEnd, ...technologiesUseBackEnd]
console.log(fullStackDev)


// Spread Operator Obejct 
const personInformation = {
    name: 'Teddy Ferdian',
    job: 'No',
    age: 22
}

const copiedUserInformation = { ...personInformation }
console.log(copiedUserInformation)

// Update object spread Operator
const updateValue = { ...copiedUserInformation, job: 'Junior Programmer' }
console.log(updateValue)


// Spread operator using arrow function 
const sumNumber = (...angka) => {
    let sum = 0
    for (const num of angka) {
        sum += num
    }
    return sum
}
console.log(sumNumber(1, 2, 3, 4, 5, 6))