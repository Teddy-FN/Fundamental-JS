// Iterate 0 to 10 using for loop, do the same using while and do while loop
// for 
let number = 0
for (let i = 1; i <= 10; i++) {
  console.log(i)
  number += i
}
console.log(number)
let num = 1
while (num <= 10) {
  console.log(num)
  num++
}

let numbs = 1;
do {
  console.log('WHILE', numbs)
  numbs++
} while (numbs <= 10)

// Iterate 10 to 0 using for loop, do the same using while and do while loop
for (let i = 10; i >= 0; i--) {
  console.log(i)
}
let kurang = 10
while (kurang >= 0) {
  console.log('WHILE KURANG', kurang)
  kurang--
}
let kurangs = 10
do {
  console.log('DO WJILE', kurangs)
  kurangs--
} while (kurangs >= 0);

let nWord = 3
let n = ''
for (let i = 1; i <= nWord; i++) {
  if (i === 3) {
    n += 'N'
  } else {
    console.log(i)
  }
}
console.log(n)


/*
    #
    ##
    ###
    ####
    #####
    ######
    #######
*/

let star = ''
for (let i = 1; i <= 7; i++) {
  for (let a = 1; a <= i; a++) {
    star += '*'
  }
  star += '\n'
}
console.log(star)


/* 
  Use loop to print the following pattern:
      0 x 0 = 0
      1 x 1 = 1
      2 x 2 = 4
      3 x 3 = 9
      4 x 4 = 16
      5 x 5 = 25
      6 x 6 = 36
      7 x 7 = 49
      8 x 8 = 64
      9 x 9 = 81
      10 x 10 = 100
*/
for (let i = 0; i <= 10; i++) {
  console.log(`${i} x ${i} = ${i * i}`)
}

/* 
    Using loop print the following pattern
      i    i^2   i^3
      0    0     0
      1    1     1
      2    4     8
      3    9     27
      4    16    64
      5    25    125
      6    36    216
      7    49    343
      8    64    512
      9    81    729
      10   100   1000
*/
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr.unshift('i')
console.log(arr)
for (const arrNumb of arr) {
  if (arrNumb === 'i') {
    console.log(`${arrNumb} ${arrNumb}^2 ${arrNumb}^3`)
  } else {
    console.log(`${arrNumb} ${Math.pow(arrNumb, 2)} ${Math.pow(arrNumb, 3)}`)
  }
}


// Use for loop to iterate from 0 to 100 and print only even numbers
for (var i = 1; i <= 100; i++) {
  switch (true) {
    case (i % 2 === 0):
      console.log(i)
      break;
    default:
      break;
  }
}

// Use for loop to iterate from 0 to 100 and print only odd numbers
for (let i = 1; i <= 100; i++) {
  switch (i <= 100) {
    case (i % 2 === 1):
      console.log('GANJIL', i)
      break;
    default:
      break;
  }
}

// Use for loop to iterate from 0 to 100 and print only prime numbers
for (let i = 0; i <= (100 - 1); i++) {
  if (100 % i === 0) {
    console.log('PRIME', i)
  } else {
    console.log('NOT PRIME')
  }
}


/*
  Use for loop to iterate from 0 to 100 and print the sum of all numbers.
    The sum of all numbers from 0 to 100 is 5050.
*/
let arrs = []
for (let i = 0; i <= 100; i++) {
  console.log(i)
  arrs.push(i)
}
let joins = arrs.join('+')
let results = eval(joins)
console.log(results)

/*
    A. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
    B. The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.
    C. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
*/
let evens = []
let odds = new Array()
let falseValue = ''
const allResult = []
for (let i = 0; i <= 100; i++) {
  switch (i <= 100) {
    case (i % 2 === 0):
      evens.push(i)
      break;
    case (i % 2 === 1):
      odds.push(i)
      break;
    default:
      falseValue = undefined
      break;
  }
}
let addPlusEvens = evens.join('+')
let resultPlusEvens = eval(addPlusEvens) // 2550
allResult.unshift(resultPlusEvens)

let addPlusOdds = odds.join('+')
let resultPlusOdds = eval(addPlusOdds) // 2500
allResult.push(resultPlusOdds)
console.log(allResult)

// Develop a small script which generate array of 5 random numbers
const numbersArr = [1, 2, 3, 4, 5]
let hasilNya;
for (let i = 0; i <= numbersArr.length; i++) {
  hasilNya = Math.floor(Math.random() * numbersArr.length)
}
console.log(hasilNya)

// Develop a small script which generate array of 5 random numbers and the numbers must be unique
const result = []
for (let i = 0; i < 5; i++) {
  let sementara = Math.floor(Math.random() * 5) + 1
  if (result.indexOf(sementara) === -1) {
    result.push(sementara)
  }
}
console.log(result)

// Develop a small script which generate a six characters random id:
let words = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
let lengthsWord = words.length;
console.log('A', lengthsWord)
let resultss = '';
for (let i = 1; i <= lengthsWord; i++) {
  resultss += words.charAt(Math.floor(Math.random() * lengthsWord))
}
let finalStep = resultss.slice(0, 5)
console.log(finalStep)