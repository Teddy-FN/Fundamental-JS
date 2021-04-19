const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
]

/*
    Display the countries array as a table
    Display the countries object as a table
    Use console.group() to group logs
*/

const countryTable = arr => {
    arr.forEach(([country, city]) => {
        console.table([country, city])
    })
}
countryTable(countries)

const objCountries = [
    {
        country: 'Finland',
        city: 'Helsinki'
    },
    {
        country: 'Sweden',
        city: 'Stockholm'
    },
    {
        country: 'Norway',
        city: 'Oslo'
    }
]

const arrObj = obj => {
    obj.map((items) => {
        console.table(items)
    })
}
arrObj(objCountries)



const groupingVar = obj => {
    console.group('Country')
    console.log(obj)
    console.groupEnd()
}
groupingVar(objCountries)