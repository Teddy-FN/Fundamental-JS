const countries = ['Finland', 'Sweden', 'Norway']

/*
    create an empty set
*/
let newSet = new Set()
/*
    Create a set containing 0 to 10 using loop
*/
for (let i = 0; i <= 10; i++) {
    newSet.add(i)
}
console.log(newSet)

/*
    Remove an element from a set
*/
for (let a = 0; a < newSet.size; a++) {
    if (a % 2 === 0) {
        newSet.delete(a)
    }
}
console.log('DELETE', newSet)

/* Clear a set */
for (let a = 0; a < newSet.size; a++) {
    newSet.clear()
}
console.log('CLEAR', newSet)


/*
    Create a set of 5 string elements from array
*/
let newArr = [
    'Hello', 'World', 'How', 'Are', 'You!'
]
const addString = arr => {
    let newSetArr = new Set()
    for (const arrays of arr) {
        newSetArr.add(arrays)
    }
    console.log(newSetArr)
}
addString(newArr)

/*
    Create a map of countries and number of characters of a country
*/
const languages = [
    'English',
    'French',
    'Spanish',
    'Indonesia',
    'Japan',
    'Singapore',
    'Russia',
    'Korea'
]
const addNewMap = arr => {
    let newMap = new Map()
    for (const arrays of arr) {
        newMap.set(arrays, arrays.length)
    }
    console.log(newMap)
}
addNewMap(languages)