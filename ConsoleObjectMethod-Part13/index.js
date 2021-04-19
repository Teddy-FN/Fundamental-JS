const user = {
    name: 'Teddy',
    age: 22,
    skills: [
        'HTML', 'CSS', 'JavaScript', 'React'
    ]
}
console.table(user)

const countries = [
    'England', 'Indonesia', 'Amerika Serikat', 'Japan', 'Singapore', 'Germany'
]
console.table(countries)



const users = [
    {
        name: 'Asabeneh',
        title: 'Programmer',
        country: 'Finland',
        city: 'Helsinki',
        age: 250
    },
    {
        name: 'Eyob',
        title: 'Teacher',
        country: 'Sweden',
        city: 'London',
        age: 25
    },
    {
        name: 'Asab',
        title: 'Instructor',
        country: 'Norway',
        city: 'Oslo',
        age: 22
    },
    {
        name: 'Matias',
        title: 'Developer',
        country: 'Denmark',
        city: 'Copenhagen',
        age: 28
    }
]
console.table(users)


const countris = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
]
// Reguler Loop
console.time('Reguler Loop')
for (let i = 0; i < countris.length; i++) {
    console.log(countris[i][0], countris[i][1])
}
console.timeEnd('Reguler Loop')
// For Of Loop
console.time('For Of Loop')
for (const [country, city] of countris) {
    console.log(country, city)
}
console.timeEnd('For Of Loop')


// ForEach
console.time('forEach')
countris.forEach(([country, city]) => {
    console.log(country, city)
})
console.timeEnd('forEach')


// Console info 
console.info('Hello There')
console.info('30 Days of javaScript is really challenge for me')


// Console assert 
console.assert(4 > 3, '4 Is greater than 3')
console.assert(3 > 4, '3 is not greater than 4')



// Console group 
const names = [
    'Teddy', 'Ferdian', 'Abrar', 'Amrullah'
]

console.group('Names')
console.log(names)
console.groupEnd()

const personInfo = {
    name: 'Teddy',
    age: 22,
    country: 'Indonesia',
    address: {
        street: 'Nakula',
        city: 'Sukoharjo'
    }
}
console.group('Person Info')
console.log(personInfo)
console.groupEnd()

const listUser = [
    {
        name: 'Teddy',
        age: 22,
        status: false
    },
    {
        name: 'Bella',
        age: 20,
        status: false
    },
    {
        name: 'Dendi',
        age: 22,
        status: false
    },
    {
        name: 'Febrian',
        age: 20,
        status: true
    }
]
console.group()
console.log(listUser)
console.groupEnd()