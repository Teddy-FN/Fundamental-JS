/*
   1. Explain the difference between forEach, map, filter, and reduce.

    ForEach ->  iterate an array, forEach only with array and it takes callback function with elements, index parameter, and array it self
    map -> iterate an array elements abd modifiy the array elements, it takes a callback funtion with elements, index, array param and return a new array
    filter -> filter out items which full filtering condtions and returns a new array 
    reduce -> reduce takes a callback funtion. the callback funtion takes accumulator, current, and optional initial value as a parameter and returns single value.
*/


const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]

/*
   2. Define a call function before you them in forEach, map, filter or reduce.
   3. Use forEach to console.log each country in the countries array.
   4. Use forEach to console.log each name in the names array.
   5. Use forEach to console.log each number in the numbers array.
*/

// const country = arr => {
//     let newArr = new Array()
//     arr.forEach((element, idx) => {
//         newArr.push(element)
//     });
//     return newArr
// }
// console.log(country(countries))

// const forEachArrExample = (nama, numb) => {
//     // Arr Name
//     let newArrName = new Array()
//         , newArrNumb = []
//     nama.forEach((names) => {
//         newArrName.push(names)
//     })
//     console.log(newArrName)

//     // Arr Numb 
//     numb.forEach((Numbs) => {
//         newArrNumb.push(Numbs)
//     })
//     console.log(newArrNumb)
// }
// forEachArrExample(names, numbers)


/*
    6. Use map to create a new array by changing each country to uppercase in the countries array.
    7. Use map to create an array of countries length from countries array.
    8. Use map to create a new array by changing each number to square in the numbers array
    9. Use map to change to each name to uppercase in the names array
    10.Use map to map the products array to its corresponding prices.
*/


const mappingArr = (country = countries) => {
    let newArr = []
    let lengthArr = new Array()
    country.map(countrys => {
        newArr.push(countrys.toUpperCase())
        lengthArr.push(countrys.length)
    })
    console.log(newArr)
    console.log(lengthArr)
}
mappingArr()


const changingArrNumb = (numb) => {
    let newArr = []
    numb.map(nomor => {
        if (nomor % 2 === 0) {
            newArr.push('square')
        } else {
            newArr.push(nomor)
        }
    })
    console.log(newArr)
}
changingArrNumb(numbers)


const changingEachIdxNumb = (name) => {
    let newArr = []
    name.forEach((elements, idx) => {
        if (idx % 2 === 1) {
            newArr.push(elements.toUpperCase())
        } else {
            newArr.push(elements)
        }
    });
    return newArr
}
console.log(changingEachIdxNumb(names))

const arrProducts = (product = products) => {
    let newArr = []
        , defaults = 'No Prices'
    product.forEach((items, idx) => {
        console.log(idx)
        newArr.push(items.price)
    })
    console.log(newArr)
}
arrProducts()



/*
    11. Use filter to filter out countries containing land.
    12. Use filter to filter out countries having six character.
    13. Use filter to filter out countries containing six letters and more in the country array.
    14. Use filter to filter out country start with 'E';
    15. Use filter to filter out only prices with values.
*/

const filterLand = (country = countries) => {
    let newArr = country.filter((counts) => counts.includes('land'))
    console.log(newArr)
}
filterLand()

const countryLengthSix = (country = countries) => {
    let newArr = country.filter((counts) => counts.length == 6)
    console.log(newArr)
}
countryLengthSix()

const sixLettersArr = (country = countries) => {
    let newArr = country.filter((items) => items.length > 6)
    console.log(newArr)
}
sixLettersArr()

const firstChar = (country = countries) => {
    let newArr
    country.filter((items) => {
        if (items.startsWith('E') === false) {
            newArr = 'nothing'
        }
    })
    console.log(newArr)
}
firstChar()

const productPrices = (items = products) => {
    let newArr = []
    items.filter((itm) => {
        return newArr.push(itm.price)
    })
    console.log(newArr)
}
productPrices()


/*
   16. Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
*/
let arr = [5, 4, 1, 10, 7, 8]
const getStringLists = (items = arr) => {
    let newArr = []
    items.filter((itms) => {
        return newArr.push(itms)
    })
    console.log(newArr)
}
getStringLists()

/*
   17. Use reduce to sum all the numbers in the numbers array.
*/
const sumAllNumberArr = (numb = numbers) => {
    let sum = 0
    numb.reduce((items, cur) => {
        return sum = items + cur
    })
    console.log(sum)
}
sumAllNumberArr()


/*
   18. Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
*/
const countriesss = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const concatenateArrCountries = (country = countriesss) => {
    let newArr = new Array()
    country.reduce((items, curr) => {
        newArr.push(curr)
    })
    console.log(newArr)
}
concatenateArrCountries()


/*
   19. Explain the difference between some and every
   some -> check if some the elements are similiar in one aspect and returns boolean
   every -> check if all the elements are similiar in one aspect and returns boolean
*/


/*
    20. Use some to check if some names' length greater than seven in names array
    21. Use every to check if all the countries contain the word land
*/
const checkLengthName = (name = names) => {
    let newArr = []
    name.some((items) => {
        if (items.length >= 7) {
            return newArr.push(items)
        }
    })
    return newArr
}
console.log(checkLengthName())


const checkUseEvery = (country = countriesss) => {
    let arr = country.every((items) =>
        items.match('land')
    )
    console.log(arr)
}
checkUseEvery()

/*
    22. Explain the difference between find and findIndex.
    find -> return the first elements which satisfies the condition
    findIndex -> return the position of the first elements which satisfies the condition
*/

/*
    23. Use find to find the first country containing only six letters in the countries array
    24. Use findIndex to find the position of the first country containing only six letters in the countries array
    25. Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
    26. Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
*/
const findIdx = (country = countriesss) => {
    let arr = []
    country.find((items) => {
        arr.push(items.length == 6)
    })
    console.log(arr)
}
findIdx()

const findIdxPosition = (country = countriesss) => {
    let arr;
    country.findIndex((items, idx) => {
        if (items.length == 6) {
            arr = idx
        }
    })
    console.log('LOLOL', arr)
}
findIdxPosition()

const indexPosition = (country = countriesss) => {
    let result;
    country.findIndex((items) => {
        if (items.match('Norway')) {
            return result = true
        } else {
            return result = false
        }
    })
    console.log(result)
}
indexPosition()

const indexPositionCountry = (country = countriesss) => {
    let result;
    country.findIndex((items) => {
        if (items.match('Russia')) {
            return result = true
        } else {
            return result = false
        }
    })
    console.log(result)
}
indexPositionCountry()