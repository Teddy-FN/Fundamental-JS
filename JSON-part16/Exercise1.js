const skills = ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python']
let age = 250;
let isMarried = true
const student = {
    firstName: 'Asabeneh',
    lastName: 'Yetayehe',
    age: 250,
    isMarried: true,
    skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python',]
}

/*
    1. Change skills array to JSON using JSON.stringify()
    2. Stringify the age variable
    3. Stringify the isMarried variable
    4. Stringify the student object
*/

// Number 1
const arrToJson = arr => {
    const obj = JSON.stringify(arr)
    console.log(obj)
}
arrToJson(skills)

// Number 2 
const numberToJSon = numb => {
    const objNumber = JSON.stringify(numb)
    console.log(objNumber)
}
numberToJSon(age)


// Number 3
const isMarriedObj = bool => {
    const married = JSON.stringify(bool)
    console.log(married)
}
isMarriedObj(isMarried)

// Number 4
const objToJson = obj => {
    const objUser = JSON.stringify(obj)
    console.log(objUser)
}
objToJson(student)
