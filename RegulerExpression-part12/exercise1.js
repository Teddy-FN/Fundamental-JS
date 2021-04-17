/*
    Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
*/
const text = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'

const calculateNumb = txt => {
    const patternDigit = /\d+/g
    const matchingDigit = txt.match(patternDigit)
    let num = 0
    for (const numb of matchingDigit) {
        const convertString = parseInt(numb)
        num += convertString
    }
    return num
}
console.log('Calculate the total annual income', calculateNumb(text))

/*
    The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.


    points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']
    sortedPoints =  [-4, -3, -1, -1, 0, 2, 4, 8]
    distance = 12
*/
const points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']
const positionParticle = (arr) => {
    let distance = 0
    const newArr = []
    for (const num of arr) {
        newArr.push(parseInt(num))
    }
    const sortedPoints = newArr.sort((a, b) => a - b)
    for (const numb of sortedPoints.slice(newArr.length - 2)) {
        distance += numb
    }
    return distance
}
console.log(positionParticle(points))

/*
    Write a pattern which identify if a string is a valid JavaScript variable

    is_valid_variable('first_name') # True
    is_valid_variable('first-name') # False
    is_valid_variable('1first_name') # False
    is_valid_variable('firstname') # True
*/
const identifyString = paramText => {
    const pattern = /_/gi
    const pattern2 = /-/gi
    const pattern3 = /^[0-9]/gi
    for (const text of paramText) {
        if (text.match(pattern)) {
            return true
        } else if (text.match(pattern2)) {
            return false
        } else if (text.match(pattern3)) {
            return false
        } else if (!paramText.match(pattern) && !paramText.match(pattern2) && !paramText.match(pattern3)) {
            return true
        }
    }
}
console.log(identifyString('first_name'))
console.log(identifyString('first-name'))
console.log(identifyString('1first_name'))
console.log(identifyString('firstname'))