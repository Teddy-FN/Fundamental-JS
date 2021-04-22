const user = {
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}


// Converting json to objact javaCript
// JSON.parse(json[, reviver])

// Example 
const userText = `{
    "user" : [
        {
            "firstName":"Teddy",
            "lastName":"Ferdian",
            "age":22,
            "email":"tedd@gmail.com"
        },
        {
            "firstName":"Dendi",
            "lastName":"Ishutin",
            "age":30,
            "email":"dendi@gmail.com"
        }, 
        {
            "firstName":"Mark",
            "lastName":"Hoppus",
            "age":40,
            "email":"markhoppus@gmailo.com"
        }
    ]
}`
const jsonToObj = JSON.parse(userText, undefined, 10)
console.log('JSON', jsonToObj)


// using reviver function with JSON.parse
const userTexting = `{
    "user": [
        {
            "firstName":"Teddy",
            "lastName":"Ferdian",
            "age":22,
            "email":"tedd@gmail.com"
        },
        {
            "firstName":"Dendi",
            "lastName":"Ishutin",
            "age":30,
            "email":"dendi@gmail.com"
        }, 
        {
            "firstName":"Mark",
            "lastName":"Hoppus",
            "age":40,
            "email":"markhoppus@gmailo.com"
        }
    ]
}`
const reviverObj = JSON.parse(userTexting, (items, value) => {
    let changeAll = typeof value == 'string' && typeof items != 'email' ? value.toUpperCase() : value
    return changeAll
})
console.log('REVIVER', reviverObj)


// Converting object to JSON 
// JSON.stringify(obj, replacer, space)

const example = {
    Teddy: {
        email: 'teddy@mail.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 22,
        isLoggedIn: false,
        poinst: 30
    },
    Akmal: {
        email: 'akmal@mail.com',
        skils: ['HTML', 'CSS'],
        age: 30,
        isLoggedIn: false,
        poinst: 20
    },
    Reyhan: {
        email: 'reyhan@mail.com',
        skills: ['CSS', 'HTML'],
        age: 30,
        isLoggedIn: false,
        poinst: 20
    },
    Asab: {
        email: 'asab@asab.com',
        skills: [
            'HTML',
            'CSS',
            'JavaScript',
            'Redux',
            'MongoDB',
            'Express',
            'React',
            'Node'
        ],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
}

const toJson = JSON.stringify(example, undefined, 4)
console.log('CONVERT TO JSON', toJson)


// Using a filter Array With JSON.stringfy()
const usersss = {
    firstName: 'Teddy Ferdian',
    lastName: 'Abrar Amrullah',
    country: 'Indonesia',
    city: 'Surakarta',
    email: 'tedd@mail.com',
    skills: [
        'HTML', 'CSS', 'JavaScript'
    ],
    age: 22,
    isLoggedIn: false,
    poinst: 30
}
const objFilter = JSON.stringify(usersss, ['firstName', 'lastName', 'country', 'city'], 4)
console.log('OBJ FILTER', objFilter)
