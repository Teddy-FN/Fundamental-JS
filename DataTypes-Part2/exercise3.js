const text = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
let pattern = /\love/gi
let searching = text.match(pattern)
let counting = Math.floor(searching.length)
console.log(counting)


const words = 'You cannot end a sentence with because because because is a conjunction'
const matching = words.match(/because/gi)
console.log(matching)


const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
const spaceWords = ''

const changeTexts = sentence.replace(
    '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching',
    'I am a teacher, and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher This 30DaysOfJavaScript is also the result of love of teaching',
)
console.log(changeTexts)

// Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

const months = 12
const salary = 5000
const ennualSallary = 10000
const bonusCourse = 15000
const total = `He earns ${salary} euro from salary per month, ${ennualSallary} euro annual bonus, ${bonusCourse} euro online courses per month. and the total is ${salary + ennualSallary + bonusCourse} per month`
console.log(total)