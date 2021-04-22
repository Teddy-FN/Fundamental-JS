class Animal {
    constructor(category, name, age, color, legs) {
        this.category = category
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
    }
}
class Cat extends Animal {
    constructor(category, name, age, color, legs) {
        super(category, name, age, color, legs)
        this.category = category
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
        this.gender = 'undefined'
        this.hoby = []
        this.like = []
        this.hate = 'Undefined'
    }
    get getHoby() {
        return this.hoby
    }
    get getLike() {
        return this.like
    }
    get getHate() {
        return this.hate
    }
    get getGender() {
        return this.gender
    }
    set setGender(gender) {
        return this.gender.replace(this.gender, gender)
    }

    set setHoby(hobies) {
        return this.hoby.push(hobies)
    }
    set setLike(likely) {
        return this.like.push(likely)
    }
    set setHate(haters) {
        return this.hate.replace(this.hate, haters)
    }

    getFullInformation = () => {
        const formatedHoby = this.hoby.length > 0 &&
            this.hoby.slice(0, this.hoby.length - 1).join(', ') +
            ` and ${this.hoby[this.hoby.length - 1]}`
        const formatedLike = this.like.length > 0 &&
            this.like.slice(0, this.like.length - 1).join(', ') +
            ` and ${this.like[this.like.length - 1]}`
        const fullInformation = this.gender === 'Male' ?
            `Hello i have a ${this.category} he name is ${this.name} he ${this.age} he has a beatiful ${this.color} color, he has ${this.legs} legs, and really like ${formatedLike}, he hobies is ${formatedHoby} he doesn\'t like ${this.hate}`
            :
            `Hello i have a ${this.category} her name is ${this.name} her ${this.age} her has a beatiful ${this.color} color, her has ${this.legs} legs, and really like ${formatedLike}, her hobies is ${formatedHoby} she doesn\'t like ${this.hate}`

        return fullInformation
    }
}

class Dog extends Animal {
    constructor(category, name, age, color, legs) {
        super(category, name, age, color, legs)
        this.category = category
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
        this.hoby = []
        this.like = []
        this.gender = ''
        this.hate = 'undefined'
    }
    get getHoby() {
        return this.hoby
    }
    get getLike() {
        return this.like
    }
    get getGender() {
        return this.gender
    }
    get getHate() {
        return this.hate
    }
    set setHoby(hobies) {
        return this.hoby.push(hobies)
    }
    set setLike(likely) {
        return this.like.push(likely)
    }
    set setGender(genders) {
        return this.gender.replace(this.gender, genders)
    }
    set setHate(haters) {
        return this.hate.replace(this.hate, haters)
    }

    getFullInformation = () => {
        const formatedHobies = this.hoby.length > 0 &&
            this.hoby.slice(0, this.hoby.length - 1).join(', ') +
            ` and ${this.hoby[this.hoby.length - 1]}`
        const formatedLike
        if (this.like.length > 0) {
            formatedLike = this.like.slice(0, this.like.length - 1) + ` and ${this.like[this.like.length - 1]}`
        } else {
            formatedLike = 'She doesn\'t like Anything'
        }
        const fullInformation = this.gender === 'Male' ?
            `Hello i have a ${this.category} he name is ${this.name} he ${this.age} he has a beatiful ${this.color} color, he has ${this.legs} legs, and really like ${formatedLike}, he hobies is ${formatedHoby} he doesn\'t like ${this.hate}`
            :
            `Hello i have a ${this.category} her name is ${this.name} her ${this.age} her has a beatiful ${this.color} color, her has ${this.legs} legs, and really like ${formatedLike}, her hobies is ${formatedHoby} she doesn\'t like ${this.hate}`
        return fullInformation
    }
}

const animal1 = new Cat('Cat', 'Joni', 12, 'Brown', 4)
animal1.hate = 'Shower'
animal1.setHoby = 'Playing'
animal1.setHoby = 'Walking-walking'
animal1.setLike = 'Eat'
animal1.setLike = 'Sleeping'
animal1.gender = 'Male'
console.log(animal1.getFullInformation())
console.log(animal1.getHoby)