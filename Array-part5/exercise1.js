/*
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]
*/
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const lengthArr = arr.length
console.log(lengthArr)

const firstItem = arr.splice(0, 1)
console.log(firstItem)

const middleItem = arr.splice(3, 1)
console.log(middleItem)

const lastItem = arr.splice(arr.length - 1)
console.log(lastItem)



// console.log(itCompany)
// const lengthArrCompany = itCompany.length
// console.log(lengthArrCompany)

// const firstCompany = itCompany.splice(0, 1)
// console.log(firstCompany)

// const MiddleCompany = itCompany.splice(2, 1)
// console.log(MiddleCompany)

// const lastCompany = itCompany.splice(4, 1)
// console.log(lastCompany)

// const company = itCompany.indexOf('Oracle')
// switch (true) {
//   case (company != -1):
//     alert('Company udah ada di dalam aray')
//     break;
//   default:
//     alert('Company tersebut tidak ada di dalam array')
//     break;
// }

// let pushArrayIndex = itCompany.push(' are big IT companies').toString()





const itCompany = [
  'Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'
]
const upperCaseCompany = itCompany.toString().toUpperCase()
console.log(upperCaseCompany)
// Filter out companies which have more than one 'o' without the filter method
const moreItCompany = itCompany.slice(0, 2)
console.log(moreItCompany)
// Jika menggunakan filter
const pattern = /oo/gi
const moreTwoWordSame = itCompany.filter(word => word.match(pattern))
console.log(moreTwoWordSame)
// Sort Array 
const sortingArr = itCompany.sort()
console.log(sortingArr)
// Slice out the first 3 companies from the array
const sliceFromArr = itCompany.slice(0, 3)
console.log(sliceFromArr)
// Slice out the last 3 companies from the array
const sliceFromLastArr = itCompany.slice(4, 7)
console.log(sliceFromLastArr)
// Slice out the middle IT company or companies from the array
const sliceMiddArr = itCompany.slice(3, 4)
console.log(sliceMiddArr)
// Remove the first IT company from the array
itCompany.shift()
console.log(itCompany)
itCompany.splice(2, 1)
console.log(itCompany)
itCompany.pop()
console.log(itCompany)
// Remove all IT companies 
const removeAll = itCompany.splice()
console.log(removeAll)
