/*
    Write a code which can give grades to students according to theirs scores:
        80-100, A
        70-89, B
        60-69, C
        50-59, D
        0-49, F
*/
// const userScore = prompt(parseInt('Enter Your score Here', 'Enter here'))
// const score1 = 'A'
//     , score2 = 'B'
//     , score3 = 'C'
//     , score4 = 'D'
//     , score5 = 'F'
// switch (true) {
//     case (userScore >= 90 && userScore === 100):
//         alert(`Your score is ${userScore} so you get ${score1}`)
//         break;
//     case (userScore >= 70 && userScore <= 89):
//         alert(`Your score is ${userScore} so you get ${score2}`)
//         break;
//     case (userScore >= 60 && userScore <= 69):
//         alert(`Your score is ${userScore} so you get ${score3}`)
//         break;
//     case (userScore >= 50 && userScore <= 69):
//         alert(`Your score is ${userScore} so you get ${score4}`)
//         break;
//     case (userScore >= 0 && userScore <= 49):
//         alert(`Your score is ${userScore} so you get ${score5}`)
//         break;
//     default:
//         alert('MASUKIN ANGKAAAAAAAAA')
//         break;
// }





/*
    Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
        September, October or November, the season is Autumn.
        December, January or February, the season is Winter.
        March, April or May, the season is Spring
        June, July or August, the season is Summer
*/
// const monthsUserInput = prompt('Enter Months to check season\nmust english', 'Enter here')
// const first = monthsUserInput.substr(0, 1).toUpperCase()
// const second = monthsUserInput.replace(monthsUserInput[0], first)
// console.log(second)
// switch (true) {
//     case (second === 'September'):
//     case (second === 'October'):
//     case (second === 'November'):
//         alert('the season is Autumn')
//         break;
//     case (second === 'December'):
//     case (second === 'January'):
//     case (second === 'February'):
//         alert('the season is Winter')
//         break;
//     case (second === 'March'):
//     case (second === 'April'):
//     case (second === 'May'):
//         alert('the season is Spring')
//         break;
//     case (second === 'June'):
//     case (second === 'July'):
//     case (second === 'August'):
//         alert('the season is Summer')
//         break;
//     default:
//         alert('ANDA MEMASUKAN ANGKAA YA!!!!')
//         break;
// }



/*
Check if a day is weekend day or a working day. Your script will take day as an input.
    What is the day  today? Saturday
    Saturday is a weekend.

    What is the day today? saturDaY
    Saturday is a weekend.

    What is the day today? Friday
    Friday is a working day.

    What is the day today? FrIDAy
    Friday is a working day.
*/
const userInputDays = prompt('Check your day', 'Enter here')
const firstLetter = userInputDays.substr(0, 1).toUpperCase()
const secondLetter = userInputDays.substring(1).toLowerCase()
const joinAll = firstLetter.concat(secondLetter)

switch (true) {
    case (joinAll === 'Monday'):
    case (joinAll === 'Tuesday'):
    case (joinAll === 'Wednesday'):
    case (joinAll === 'Thursday'):
    case (joinAll === 'Friday'):
        alert(`${joinAll} is a working day`)
        break;
    case (joinAll === 'Saturday'):
    case (joinAll === 'Sunday'):
        alert(`${joinAll} is a weekend`)
        break;
    default:
        alert('Anda memasukan bukan nama hari, tapi ANGKA ANJINK')
        break;
}
