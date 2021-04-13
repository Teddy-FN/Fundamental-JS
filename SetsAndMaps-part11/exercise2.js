/*
    Find a union b
    Find a intersection b
    Find a with b
*/

// Union
let countryA = [
    'India', 'Indonesia', 'America', 'England', 'Spain', 'Japan', 'Korea', 'China'
]
    , countryB = [
        'Indonesia', 'France', 'Arabia', 'Thailand', 'Vietnam', 'Japan', 'German', 'China', 'Korea'
    ]

let UnionC = [...countryA, ...countryB]
let unionFindC = new Set(UnionC)
console.log('LOLOL', unionFindC)


let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const unionEvenNumb = arr => {
    let evenNumb = []
        , oddNumb = [];
    for (const arrs of arr) {
        if (arrs % 2 === 0) {
            evenNumb.push(arrs)
        } else {
            oddNumb.push(arrs)
        }
    }
    let allIn = [...arr, ...evenNumb]
    let unionAll = new Set(allIn)
    console.log(unionAll)
}
unionEvenNumb(num)


// Intersection Arr
let country1 = [
    'Indonesia', 'France', 'Arabia', 'Thailand', 'Vietnam', 'Japan', 'German', 'China', 'Korea'
]
    , country2 = [
        'India', 'Indonesia', 'America', 'England', 'Spain', 'Japan', 'Korea', 'China'
    ]
const intersectionCountry = (param1 = country1, param2 = country2) => {
    let setB = new Set(param2)
    let intersectionC = param1.filter((items) => {
        return setB.has(items)
    })
    console.log(intersectionC)
}
intersectionCountry()

let numb = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10
]
const intersectionNumbers = arr => {
    let evenNumb = []
    for (const arrays of arr) {
        if (arrays % 2 === 0) {
            evenNumb.push(arrays)
        }
    }
    let setArr = new Set(evenNumb)
    let intersection = arr.filter((items) => setArr.has(items))
    console.log(intersection)
}
intersectionNumbers(numb)

// Find arr
let countryAsian = [
    'Indonesia', 'France', 'Arabia', 'Thailand', 'Vietnam', 'Japan', 'German', 'China', 'Korea'
]
const funtionArr = arr => {
    let idxArrOdd = new Array()
    for (let a = 0; a < arr.length; a++) {
        if (a % 2 === 1) {
            idxArrOdd.push(arr[a])
        }
    }
    let newsetArr = new Set(idxArrOdd)
    let findArr = arr.filter((items) => {
        return newsetArr.has(items)
    })
    console.log('FIND', findArr)
}
funtionArr(countryAsian)