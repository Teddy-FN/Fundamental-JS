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
    get getScore() {
        return this.score
    }
    get getSkills() {
        return this.skills
    }

    set setSkills(skill) {
        this.skills += skill
    }

    set setScore(score) {
        return this.score += score
    }

    getFullPerson() {
        let fullName = this.getFullName()
        let skils = this.skills.length > 0 &&
            this.skills.slice(0, this.skill.length - 1).join(', ') +
            ` and ${this.skills[this.skills.length - 1]}`
        let formatedSkills = skils ? `He knows ${skils}` : ''
        let fullPersonInfo = `${fullName} he is ${this.age} he from ${this.country}, ${this.city}. ${formatedSkills}`
        return fullPersonInfo
    }

    static FavoriteSkill() {
        const skills = ['CSS', 'HTML', 'JavaScript', 'React', 'Angular', 'Vue']
        const idx = Math.floor(Math.random() * skills.length)
        return skills[idx]
    }

    static Showdate() {
        let now = new Date()
        let year = now.getFullYear()
        let month = now.getMonth() + 1
        let dates = now.getDate()
        let hours = now.getHours()
        let minutes = now.getMinutes()
        if (hours < 10) {
            hours = '0' + hours
        }
        if (minutes < 10) {
            minutes = '0' + minutes
        }
        let fullTime = `${year}/${month}/${dates} ${hours}:${minutes}`
        return fullTime
    }
}
