/* 
Declare a function fullName and it print out your full name.
Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
*/
const namaDepan = 'Teddy Ferdian'
    , namaBelakang = 'Abrar Amrullah'
const fullName = (firstName, lastName) => {
    let myName = `${firstName} ${lastName}`
    return myName
}
console.log(fullName(namaDepan, namaBelakang))

/* 
    Declare a function addNumbers and it takes two two parameters and it returns sum.
*/
let addNumbers = () => {
    let sum = 2 + 2
    return sum
}
console.log(addNumbers())

/*
    An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
*/
let lengthRectangle = 10
    , widthRectangle = 20
let areaOfRectangle = (length, width) => {
    let area = length * width
    return area
}
console.log(areaOfRectangle(lengthRectangle, widthRectangle))


/*
    A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
*/
let lengthOfRectangle = 20
    , widthOfRectangle = 30
let perimeterOfRectangle = (length, widths) => {
    let perimeter = 2 * (length + widths)
    return perimeter
}
console.log(perimeterOfRectangle(lengthRectangle, widthRectangle))

/*
    A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
*/
const lengthPrism = 20
    , widthPrism = 50
    , heightPrism = 100
    , volumeOfRectPrsim = (lengths, widths, heights) => {
        const volumeOfPrism = lengths * widths * heights
        return volumeOfPrism
    }
console.log(volumeOfRectPrsim(lengthPrism, widthPrism, heightPrism))


/* 
    Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
*/
const radius = '20'
    , areaOfCircle = (r) => {
        const PI = Math.PI
        let radiusCircle = parseInt(r)
        let area = Math.floor(PI * Math.pow(radiusCircle, 2))
        return area
    }
console.log(areaOfCircle(radius))


/*
    Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
*/
const Picircle = Math.PI
    , circumOfCircle = (PI = Picircle, r = '30') => {
        let circumReference = Math.floor(2 * PI * parseInt(r))
        return circumReference
    }
console.log(circumOfCircle())

/*
    Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
*/
const massCall = '1000'
    , volumeCall = '50'
const callCulatedDensity = (mass = parseInt(massCall), volume = volumeCall) => {
    let volumeNumb = parseInt(volume)
    let callDensity = mass / volumeNumb
    return callDensity
}
console.log(callCulatedDensity())


/* 
    Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
*/
const distance = '80'
    , timeTaken = '40'
const callSpeed = (dist = distance, times = timeTaken) => {
    let callCulated = dist / times
    return parseInt(callCulated)
}
console.log(callSpeed())


/*
    Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
*/
const weightsCall = '50'
    , grtv = '100'
    , weightsCallFunction = (weight = parseInt(weightsCall), gravity = parseInt(grtv)) => {
        let weights = weight * gravity
        return weights
    }
console.log(weightsCallFunction())


/* 
    Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelciusToFahrenheit.
*/
const oC = 30
    , convertFarenheit = (oc = oC) => {
        const oF = (oc / 9 * 5) + 32
        return Math.floor(oF)
    }
console.log(convertFarenheit())


/*
Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

    The same groups apply to both men and women.
    Underweight: BMI is less than 18.5
    Normal weight: BMI is 18.5 to 24.9
    Overweight: BMI is 25 to 29.9
    Obese: BMI is 30 or more
*/

const ages = 14
    , berat = 69
    , tinggi = 170
    , bodyMAssIndex = (age = ages, berat, tinggi) => {
        const tinggiKeMeter = tinggi / 100
            , bmiCall = berat / (tinggiKeMeter * tinggiKeMeter)
        let result = '';
        if (age >= 20) {
            if (bmiCall >= 30) {
                return result = 'Obese'
            } else if (bmiCall >= 25 && bmiCall < 29.9) {
                return result = 'Overheight'
            } else if (bmiCall >= 18.5 && bmiCall < 24.9) {
                return result = 'Normal Weight'
            } else {
                return result = 'Underweight'
            }
        } else {
            return result = 'NOT YET'
        }
    }

let bmiRumus = bodyMAssIndex(ages, berat, tinggi)
if (bmiRumus !== undefined) {
    console.log(bmiRumus = bodyMAssIndex(ages, berat, tinggi))
} else {
    console.log(bmiRumus = 'Berarti belum cukup umur dek')
}


/*
    Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
*/
const word = 'AugUST'
let firstLetter = word.slice(0, 1).toUpperCase()
    , lastLetter = word.substr(1, word.length - 1).toLowerCase()
const months = firstLetter.concat(lastLetter)
const checkSeason = (month = months) => {
    let result = ''
    switch (month) {
        case 'September':
        case 'October':
        case 'November':
            return result += 'Autumn'
            break;
        case 'December':
        case 'January':
        case 'February':
            return result += 'Winter'
            break;
        case 'March':
        case 'April':
        case 'May':
            return result += 'Spring'
            break;
        case 'June':
        case 'July':
        case 'August':
            return result += 'Summer'
            break;
        default:
            return result = 'WKWKWK'
            break;
    }
}
console.log(checkSeason())

/*
    Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
*/
const findMax = (a, b, c) => {
    let numb = []
    numb.push(a, b, c)
    /*
    Using ES6
        const maxNumb = Math.max(...numb)
        return maxNumb
    */
    //    Using For Loop
    let max = numb[0]
    for (let number = 1; number < numb.length; number++) {
        if (numb[number] > max) {
            max = numb[number]
        }
    }
    return max
}
let numbers = findMax(0, 10, 5)
console.log(numbers)