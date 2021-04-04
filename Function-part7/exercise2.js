const solveLinEquation = (a, b, c) => {
    let result = 1 + ', ' + c / (a * 1.0);
}


/*
    Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
*/

const showDateTime = () => {
    let date = new Date()
        , years = date.getFullYear()
        , month = date.getMonth() + 1
        , days = date.getDay() + 1
        , hours = date.getHours()
        , minutes = date.getMinutes()
    let getMonth;
    if (month > 10) {
        getMonth = `1${month}`
    } else {
        getMonth = `0${month}`
    }
    console.log('WKWKWK', getMonth)
    let getDays;
    if (days > 10) {
        getDays = `1${days}`
    } else if (days > 20) {
        getDays = `2${days}`
    } else if (days > 30) {
        getDays = `3${days}`
    } else {
        getDays = `0${days}`
    }
    let getMinutes;
    if (minutes < 10) {
        getMinutes = `0${minutes}`
    } else {
        getMinutes = minutes
    }
    const getFullYear = `${getDays}/${getMonth}/${years} ${hours}:${getMinutes}`
    return getFullYear;
}
console.log(showDateTime())



/*
    Declare a function name swapValues. This function swaps value of x to y.

    swapValues(3, 4) // x => 4, y=>3
    swapValues(4, 5) // x = 5, y = 4
*/

const swapValues = (x, y) => {
    let a = x
    let b = y
    let result = [a, b] = [b, a]
    return result
}
console.log(swapValues(3, 4))


/*
    Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
    console.log(reverseArray([1, 2, 3, 4, 5]))
    //[5, 4, 3, 2, 1]
    console.log(reverseArray(['A', 'B', 'C']))
    //['C', 'B', 'A']
*/

const reverseArray = arr => {
    /*
    let result = arr.reverse()
    return result
    */
    let newArr = new Array()
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] !== undefined) {
            newArr.push(arr[i])
        }
    }
    return newArr
}
console.log(reverseArray([1, 2, 3, 4, 5]))
console.log(reverseArray(['A', 'B', 'C']))

/*
    Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
*/
const capitalizeArray = arr => {
    let capitalArr = new Array()
    for (let i = 0; i < arr.length; i++) {
        capitalArr.push(arr[i].toUpperCase())
    }
    return capitalArr
}
console.log(capitalizeArray(['indonesia', 'Maria Ozawa', 'Yua mikami']))

/*
    Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
*/
const addItem = (...arr) => {
    let resultArr = new Array()
    for (let i = 0; i < arr.length; i++) {
        resultArr.push(arr[i])
    }
    return resultArr
}
let items = addItem('wlwkwkwk', 'lolol', 'MIYABI', 'Ngakak')
console.log('LOLOLOLO', items)

/*
    Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
*/
const removeItem = (...arr) => {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        let nampungBaru = arr[i]
        console.log('NEW ARR', nampungBaru)
        if (nampungBaru.length <= 5) newArr.push(nampungBaru)
    }
    return newArr
}
console.log(removeItem('hello', 'WhatsApp', 'Makan', 'diet'))

/*
    Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
*/
const numb = 100;
const sumOfOdds = (num = numb) => {
    let oddNumb = []
    for (let i = 1; i < num; i++) {
        if (i % 2 === 1) {
            oddNumb.push(i)
        }
    }
    let sumOdd = oddNumb.join('+')
    return eval(sumOdd)

}
console.log(sumOfOdds())



/*
    Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
*/
const sumOfEven = (num = numb) => {
    let arrEvenNumb = []
    for (var i = 1; i < num; i++) {
        if (i % 2 === 0) {
            arrEvenNumb.push(i)
        }
    }
    let sumEvenNum = arrEvenNumb.join('+')
    return eval(sumEvenNum)
}
console.log(sumOfEven())


/*
Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
    evensAndOdds(100);
    The number of odds are 50.
    The number of evens are 51.
*/
const evenAndOdds = (num = numb) => {
    let resultOddNumb = ''
        , resultEvenNumb = ''
    if (num) {
        resultOddNumb = `The number of odds are ${num / 2}`
        resultEvenNumb = `The number of odds are ${(num / 2) + 1}`
    }
    console.log(resultOddNumb)
    console.log(resultEvenNumb)
}
evenAndOdds()


/*
Write a function which takes any number of arguments and return the sum of the arguments
    sum(1, 2, 3) // -> 6
    sum(1, 2, 3, 4) // -> 10
*/
const sumArg = (...arg) => {
    let numbs = arg.join('+')
    let sum = eval(numbs)
    return sum
}
console.log(sumArg(1, 2, 3))
console.log(sumArg(1, 2, 3, 4))
console.log(sumArg(1, 2, 3, 4, 5, 6, 7, 8, 9))

/*
    Write a function which generates a randomUserIp.
*/
const numbersMax = 255
const randomUserIp = (num = numbersMax) => {
    let nomor1;
    let nomor2;
    let nomor3;
    let nomor4;
    for (let no = 0; no < num; no++) {
        nomor1 = Math.floor(Math.random() * (0 - num) + num)
        nomor2 = Math.floor(Math.random() * (0 - num) + num)
        nomor3 = Math.floor(Math.random() * (0 - num) + num)
        nomor4 = Math.floor(Math.random() * (0 - num) + num)
    }
    const NumberIP = `Number Ip: \n${nomor1}.${nomor2}.${nomor3}.${nomor4}`
    return NumberIP
}
console.log(randomUserIp())

/*
    Write a function which generates a randomMacAddress
*/
const randomMacAddress = () => {
    // const Pattern = /[A-Z]|[0-9]/gi
    const Pattern = '0123456789ABCDEF'
    let digitNumbMac = ''
    for (let words = 0; words < 6; words++) {
        digitNumbMac += Pattern.charAt(Math.floor(Math.random() * 15))
        digitNumbMac += Pattern.charAt(Math.floor(Math.random() * 15))
        if (words != 5) {
            digitNumbMac += '-'
        }
    }
    console.log('NUMB', digitNumbMac)
}
randomMacAddress()


/*
Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
    console.log(randomHexaNumberGenerator());
    '#ee33df'
*/
const randomHexaNumberGenerator = () => {
    const regExp = '0123456789abcdefgh'
        , sharp = '#'
    let result = sharp.concat('')
    for (let i = 0; i < 6; i++) {
        result += regExp.charAt(Math.floor(Math.random() * regExp.length))
    }
    console.log(result)
}
randomHexaNumberGenerator()


/*
    Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
    console.log(userIdGenerator());
        41XTDbE
*/
const userIdGenerator = () => {
    let regExp = 'abcdefABCDEF0123456789'
    let resultId = ''
    for (let i = 0; i < 7; i++) {
        resultId += regExp.charAt(Math.floor(Math.random() * regExp.length))
    }
    return resultId
}
console.log(userIdGenerator())