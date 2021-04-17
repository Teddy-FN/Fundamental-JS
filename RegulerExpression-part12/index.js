// Creating Pattern With RegExp Costructor with global flag and insensitive flag
// let words = 'love';
// let gi = 'gi';
// let RegExp = new RegExp(words, gi)

// Creating Pattern WithOut RegExp constructor 
let patter = /love/gi

/* 
    RegExp object methods 
        1. test() -> boolean true / false
        2. match() -> array grouping
        3. search() -> jika true mengembalikan index value jika false -1
        4. replace() -> mengganti value lama dengan value yang baru
*/
const str = 'I love JavaScript'
    , pattern = /love/
let result = pattern.test(str)
console.log(result)

let resultMatch = str.match(pattern)
console.log(resultMatch)

let searchResult = str.search(pattern)
let searchResult2 = str.search(/LOVE/g)
console.log(searchResult)
console.log(searchResult2)

const words = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'
matchReplaced = words.replace(/Python|python/g, 'JavaScript')
console.log(matchReplaced)

const txt = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'

let replacesWords = txt.replace(/%/g, '')
console.log(replacesWords)



// Square Bracket 
const patternBracet = /[aA]pple/gi
const textBracketPattern = 'Apple and banana are fruits,  An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. '
const matchesPattern = textBracketPattern.match(patternBracet)
console.log(matchesPattern)


// If Want More value 
const moreOneValuePattern = /[aA]pple|[bB]anana/gi
const matcherMoreOne = textBracketPattern.match(moreOneValuePattern)
console.log(matcherMoreOne)

// Escape Character in RegExp 
const patternDigit = /\d/g
const exampleText = 'This reguler expresion example was made in january 12, 2020'
const matchersPatternDigit = exampleText.match(patternDigit)
console.log(matchersPatternDigit)

// One or more time (+)
const moreOneDigits = /\d+/g
const moreOneDigit = exampleText.match(moreOneDigits)
console.log(moreOneDigit)


// Period 
const patternPeriod = /[a]./gi
const textPeriod = 'Apple and banana are fruits'
const results = textPeriod.match(patternPeriod)
console.log(results)

// Period + more 
const combinePattern = /[a].+/g
const resultCombinePattern = textPeriod.match(combinePattern)
console.log(resultCombinePattern)

// Zero or more times (*)
const patternZero = /[a].*/g
const resultZeroPattern = textPeriod.match(patternZero)
console.log(resultZeroPattern)

// Zero or one times (?)
const patternOneTimes = /[Ee]-?mail/g
const textOneTimes = 'I am not sure if there is a convention how to write the word e-mail.\
Some people write it email others may write it as Email or E-mail.'
const matchesOneTimes = textOneTimes.match(patternOneTimes)
console.log(matchesOneTimes)

// Quantifier {} -> di gunakan untuk mencari panjang / length dari string 
const patternQuantifier = /[a-zA-Z]{5}/g
const textQuantifier = 'I am not sure if there is a convention how to write the word e-mail.\
Some people write it email others may write it as Email or E-mail.'
const resultPattern = textQuantifier.match(patternQuantifier)
console.log(resultPattern)

// Cart (^) mean StartWith / neagtion
// Start with
const examplePatternCart = /^this/gi
const txtExamplePatternCart = 'This regular expression example was made in December 6,  2019.'
const patternCartMatch = txtExamplePatternCart.match(examplePatternCart)
console.log(patternCartMatch)

// Negation 
const exampleNegationCart = /[^A-Za-z,. ]+/g
const negationMatch = txtExamplePatternCart.match(exampleNegationCart)
console.log(negationMatch)


// Exact match must have ^ to start and $ to end it 
const examplePatternMatchTxt = /^[A-Z][a-z]{0,5}$/;
const exmpaleTextName = 'Teddy'
const matchingTxtPattern = examplePatternMatchTxt.test(exmpaleTextName)
console.log(matchingTxtPattern)
