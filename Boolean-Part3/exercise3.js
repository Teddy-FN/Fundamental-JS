/*
    Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
        YYY-MM-DD HH:mm eg. 20120-01-02 07:05
*/
const times = new Date()
const years = times.getFullYear()
const months = times.getMonth() + 1
const days = times.getDay() + 1
const hours = times.getHours()
const minutes = times.getMinutes()

const month = parseInt(months) <= 10 ? `0${months}` : months
const day = parseInt(days) <= 10 ? `0${days}` : days
const time = hours <= 10 && minutes <= 10 ? `0${hours}:0${minutes}` : `${hours}:${minutes}`
console.log(month)
console.log(day)
console.log(time)

const yearsNow = `${years}-${month}-${day} ${time}`
console.log(yearsNow)