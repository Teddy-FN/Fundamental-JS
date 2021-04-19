/* 
    10 > 2 * 10 use console.assert()
    Write a warning message using console.warn()
    Write an error message using console.error()
*/

const consoleAssert = (param1, param2) => {
    let number = 2
    console.assert(param1 > number * param2, 'INI HASILE APA')

}
consoleAssert(10, 10)


const warnConsole = weather => {
    weather === 'rain' ?
        console.log(true) :
        console.warn('Jawaban Anda salah')
}
warnConsole('sunny')


const errorConsole = num => {
    let result
    if (num % 2 === 0) {
        return result = 'Genap'
    } else if (num % 2 === 1) {
        return result = 'Ganjil'
    } else {
        console.error('Manusia Nggak guna')
    }
    return result
}
console.log(errorConsole('Hello'))