//  Stringify the students object with only firstName, lastName and skills properties
const student = {
    firstName: 'Asabeneh',
    lastName: 'Yetayehe',
    age: 250,
    isMarried: true,
    skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python',]
}


const objFilterToJson = obj => {
    const toJson = JSON.stringify(obj, ['firstName', 'lastName', 'skills'], 4)
    console.log(toJson)
}
objFilterToJson(student)