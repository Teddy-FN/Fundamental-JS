let challenge = '30 Days Of JavaScript'
console.log(challenge)
console.log(challenge.length)

const upperWord = challenge.toUpperCase()
console.log(upperWord)

const lowerWord = challenge.toLowerCase()
console.log(lowerWord)

const sbtr = challenge.substr(0, 2)
console.log(sbtr)

const sbtrng = challenge.substring(3, 21)
console.log(sbtrng)

const checkin = challenge.includes('Script')
console.log(checkin)

const splt = challenge.split()
console.log(splt)

let comp = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const spt = comp.split(',')
console.log(spt)

const chng = challenge.replace('JavaScript', 'Python')
console.log(chng)

const charaWord = challenge.charAt(15)
console.log(charaWord)

const codeChara = challenge.charCodeAt('J')
console.log(codeChara)

const idxOf = challenge.indexOf('30')
console.log(idxOf)

const lastIdxOf = challenge.lastIndexOf('Script')
console.log(lastIdxOf)

const text = 'You cannot end a sentence with because because because is a conjunction'

const iOf = text.indexOf('because')
console.log(iOf)

const lstIdxOf = text.lastIndexOf('because')
console.log(lstIdxOf)

const srch = text.search('because')
console.log(srch)


const text2 = '     30 Days Of JavaScript    '
const trm = text2.trim()
console.log(trm)

const strt = text2.trim().startsWith('30')
console.log(strt)

const endWth = text2.trim().endsWith('Script')
console.log(endWth)

const mtch = /a/g
const matchValue = text2.trim().match(mtch)
console.log(matchValue)

const firstWord = '30 Days Of'
    , lastWord = 'JavaScript'
    , space = ' '
let fullWord = firstWord.concat(space, lastWord)
console.log(fullWord)


let result = fullWord.concat(',')
const rpt = result.repeat(2)
console.log(rpt)