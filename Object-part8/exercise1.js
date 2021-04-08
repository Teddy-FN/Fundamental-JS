/*
    1. Create an empty object called dog
    2. Print the the dog object on the console
    3. Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
    4. Get name, legs, color, age and bark value from the dog object
    5. Set new properties the dog object: breed, getDogInfo
*/
const dog = {
    name: 'Key',
    legs: 4,
    color: 'brown',
    age: 200,
    bark: () => {
        return 'Woof Woof'
    },
    breed: () => {
        return 'House'
    },
    getDogInfo: () => {
        return `I have a dog his name is ${this.name}, his have ${this.legs} legs, his has a beautiful ${this.color} skin, and when he sound alwasy ${dog.bark()} and his bredd on ${dog.breed()}`
    }
}
console.log('INI OBJECT', dog.getDogInfo())