class Person {
    constructor(firstName, lastName, age, country, city) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
    }
    getFullName() {
        let fullName = `${this.firstName} ${this.lastName}`
        return fullName
    }

    personInfo() {
        let fullPersonName = this.getFullName()
        let fullInfo = `${fullPersonName} he is ${this.age} years old he from ${this.country} ${this.city}`
        return fullInfo
    }
}

class student extends Person {
    saySomething() {
        console.log('Hello iam a child Components')
    }
}

const person = new Person('Teddy', 'Ferdian', 22, 'Indonesia', 'Surakarta')
console.log(person)
console.log(person.getFullName())
console.log(person.personInfo())