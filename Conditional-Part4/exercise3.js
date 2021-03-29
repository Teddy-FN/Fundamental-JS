/*
    Write a program which tells the number of days in a month.
        Enter a month: January
        January has 31 days.

        Enter a month: JANUARY
        January has 31 day

        Enter a month: February
        February has 28 days.

        Enter a month: FEbruary
        February has 28 days.
    Write a program which tells the number of days in a month, now consider leap year.
*/
const userInputMonths = prompt('Enter a month:', 'Enter Here,broo')
const firstLetter = userInputMonths.substr(0, 1).toUpperCase()
const secondLetter = userInputMonths.substr(1).toLowerCase()
const months = firstLetter.concat(secondLetter)

switch (true) {
    case months === 'January':
    case months === 'March':
    case months === 'May':
    case months === 'July':
    case months === 'August':
    case months === 'October':
    case months === 'December':
        alert(`${months} has 31 days`)
        break;
    case months === 'February':
        alert(`${months} has 28 days`)
        break;
    case months === 'April':
    case months === 'June':
    case months === 'September':
    case months === 'November':
        alert(`${months} has 30 days`)
        break;
    default:
        alert('MASUKIN BULAN LAHHH')
        break;
}