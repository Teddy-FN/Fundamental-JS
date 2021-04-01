const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]
/* 
    Find the longest word in the webTechs array
*/
let hasil = []
for (let tech = 0; tech < webTechs.length; tech++) {
    let longLength = webTechs[tech].length
    // mencari index dari array 
    let indexArr = webTechs.indexOf(webTechs[tech])
    if (indexArr !== -1 && longLength >= 10) {
        hasil.push(webTechs[tech], longLength)
    }
}
console.log(`for the longest word in the webTechs array is ${hasil[0]} because have ${hasil[1]} words`)

/* 
    Use the webTechs array to create the following array of arrays:
    [
        ["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]
    ]
*/
let arrNull = new Array()
for (let tech = 0; tech < webTechs.length; tech++) {
    // STEP 1
    // Make var arr null
    let arrZero = new Array()
    // Find index value in Array 
    let indexValueArr = webTechs.indexOf(webTechs[tech])
    // conditional indexVAlueArr if not FALSE / -1 push to arrZero 
    if (indexValueArr !== -1) {
        arrZero.unshift(webTechs[tech])
    }
    // STEP 2
    // Count length value on Array webTech
    let countLength = webTechs[tech].length
    // don't use conditional just push it 
    arrZero.push(countLength)
    // SGTEP 3 -> console result arrZero if correct we push it to variable array in outside For
    arrNull.push(arrZero)
}
console.log(arrNull)


/*
    An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
*/
let mernStack = new Array()
let expressValue = ['Express']
for (let i = 0; i < webTechs.length; i++) {
    // make variable to fill name value array
    let varValueArr = webTechs[i]
    if (varValueArr.includes('MongoDB') !== false) {
        mernStack.push('MongoDB')
    }
    if (varValueArr.includes('Node') !== false) {
        mernStack.push('Node')
    }
    if (varValueArr.includes('React') !== false) {
        mernStack.push('React')
    }
}
let result = mernStack.concat(expressValue)
console.log(result)

/* 
    Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
*/
for (const webs of webTechs) {
    console.log(webs)
}

/*
    This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
*/
let fruits = ['banana', 'orange', 'mango', 'lemon']
// Bikin penampungan terlebih dulu 
const reverseFruits = []
// Bikin for loopnya
for (let i = fruits.length - 1; i >= 0; i--) {
    reverseFruits.push(fruits[i])
}
console.log(reverseFruits)


/* 
    Print all the elements of array as shown below.
    const fullStack = [
        ['HTML', 'CSS', 'JS', 'React'],
        ['Node', 'Express', 'MongoDB']
    ]
    Output :
        HTML
        CSS
        JS
        REACT
        NODE
        EXPRESS
        MONGODB
*/

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]
let frontEnd = fullStack[0]
    , backEnd = fullStack[1]
console.log(frontEnd)
console.log(backEnd)
let fullStackDev = frontEnd.concat(backEnd)
for (let i = 0; i < fullStackDev.length; i++) {
    console.log(fullStackDev[i].toUpperCase())
}