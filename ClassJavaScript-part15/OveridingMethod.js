class Person {
    constructor(firstName, lastName, age, country, city) {
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

class studentInfo extends Person {
    constructor(firstName, lastName, age, country, city) {
        super(firstName, lastName, age, country, city)
        this.gender = gender
        this.skill = []
        this.score = []
    }

    get getSkills() {
        return this.setSkills
    }

    get getScore() {
        return this.score
    }

    set setSkills(skills) {
        this.skill.push(skills)
    }

    set setScore(score) {
        this.score.push(score)
    }

    getPersonInfo() {
        let value = 0
        const personName = this.getFullName()
        const skill = this.skill.length > 0 &&
            this.skill.slice(0, this.skill.length - 1).join(', ') +
            ` and ${this.skill[this.skill.length - 1]}`

        const fortmatedSkill = skill ? `I can use ${skill}` : ''

        let result
        for (let i = 0; i < this.value.length; i++) {
            value += parseFloat(this.score[i])
            let resultScoreUser = value / this.value.length
            result = resultScoreUser
        }

        let fullPersonInfo = `${personName} im ${this.age} years old, Im from ${this.country} ${this.city}, ${fortmatedSkill} and i get score ${result}`
        return fullPersonInfo
    }
}