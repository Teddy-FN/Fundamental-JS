// javaScript merupakan onject oriented programming
/*
    Defining class
    class ClassName {

    }
*/

// Example 
// class Person {
//     constructor(firstName, lastName) {
//         console.log('THIS', this)
//         this.Person = firstName
//         this.lastName = lastName
//     }
// }
// const person = new Person('Teddy', 'Ferdian')
// const person1 = new Person('Denny', 'Ardian')
// const person2 = new Person('Knucle', 'Puck')
// console.log(person)
// console.log(person1)
// console.log(person2)


// Using class person we created three object. + class methods a.k.a Function inside object class
/*
class person {
    constructor(
        firstName = 'Unkown',
        lastName = 'Anonymous',
        age = undefined,
        country = 'undefined',
        city = 'undefined'
    ) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
    }

    getFullName = () => {
        const fullName = `${this.firstName} ${this.lastName}`
        return fullName
    }
}
const personUser = new person('Teddy', 'Ferdian', 22, 'Indonesia', 'Surakarta')
const personUser1 = new person()
*/


// Properties with initial value
class Person {
    constructor(firstName, lastName, age, country, city) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
        this.score = 0
        this.skills = []
    }
    getFullName = () => {
        const fullName = `${this.firstName} ${this.lastName}`
        return fullName
    }
}
const person = new Person()

console.log(person.score)
console.log(person.skills)



// Getter
class UserPerson {
    constructor(firstName, lastName, age, country, city) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
        this.score = 0
        this.skills = []
    }

    getFullName = () => {
        const fullName = this.firstName + this.lastName
        return fullName
    }

    get getScore() {
        return this.score
    }

    get getSkill() {
        return this.skills
    }
}

const person1 = new UserPerson('Teddy', 'Ferdian', 22, 'Indonesia', 'Surakarta')
const person2 = new UserPerson('Dondi', 'Dwi', 23, 'Indonesia', 'Jaten')

console.log(person1.getScore)
console.log(person2.getScore)

console.log(person1.getSkill)
console.log(person2.getSkill)



// Setter 
// class users {
//     constructor(firstName, lastName, age, country, city) {
//         this.firstName = firstName
//         this.lastName = lastName
//         this.age = age
//         this.country = country
//         this.city = city
//         this.score = 0
//         this.skills = []
//     }
//     getFullName = () => {
//         const fullName = `${this.firstName} ${this.lastName}`
//         return fullName
//     }
//     get getScore() {
//         return this.score
//     }
//     get getSkills() {
//         return this.skills
//     }
//     set setScore(score) {
//         console.log('SCORE', score)
//         this.score += score
//     }
//     set setSkills(skills) {
//         console.log('SKILL', skills)
//         this.skills.push(skills)
//     }
// }

// const person3 = new users('Teddy', 'Ferdian', 22, 'Indonesia', 'Surakarta')
// const person4 = new users('Wreck', 'Wraplh', 300, 'England', 'London')

// person3.setScore = 10
// person3.setSkills = 'React'
// person3.setSkills = 'JavaScript'
// person3.setSkills = 'Html'

// person4.setSkills = 'Sleeping'
// person4.setSkills = 'Eat'
// person4.setSkills = 'Playing Games'
// person4.setScore = 10

// console.log(person3.score)
// console.log(person4.score)
// console.log(person3.skills)
// console.log(person4.skills)








class UserPersons {
    constructor(firstName, lastName, age, country, city) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
        this.score = 0
        this.skills = []
    }

    getFullName = () => {
        const fullName = `${this.firstName} ${this.lastName}`
        return fullName
    }

    get getScore() {
        return this.score
    }
    get getSkill() {
        return this.skills
    }
    set setScore(score) {
        return this.score += score
    }
    set setSkill(skill) {
        this.skills.push(skill)
    }

    personInfo() {
        let fullName = this.getFullName()
        let skills =
            this.skills.length > 0 &&
            this.skills.slice(0, this.skills.length - 1).join(', ') +
            ` and ${this.skills[this.skills.length - 1]}`

        let formatedSkills = skills ? `He knows ${skills}` : ''
        let info = `${fullName} is ${this.age}. He Lives ${this.country} from ${this.city}. ${formatedSkills}`
        return info
    }
}

const personInformation = new UserPersons('Teddy', 'Ferdian', 22, 'Indonesia', 'Surakarta')

personInformation.score = 100
personInformation.setSkill = 'CSS'
personInformation.setSkill = 'React'
personInformation.setSkills = 'JavaScript'


console.log('WWKKW', personInformation.getSkill)
console.log(personInformation.personInfo())