const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
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
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}
/*
    Find the person who has many skills in the users object.
*/
const findPersonHasManySkills = (obj = users) => {
    const skillAlex = obj.Alex.skills
    const skillAsab = obj.Asab.skills
    const skillBrook = obj.Brook.skills
    const skillDaniel = obj.Daniel.skills
    const skillJohn = obj.John.skills
    const skillThomas = obj.Thomas.skills
    const skillPaul = obj.Paul.skills

    let newArr = new Array()
    if (skillAlex.length >= 3) {
        newArr.push('Alex')
        if (skillAsab.length >= 3) {
            newArr.push('Asab')
            if (skillBrook.length >= 3) {
                newArr.push('Brook')
                if (skillDaniel.length >= 3) {
                    newArr.push('Daniel')
                    if (skillJohn.length >= 3) {
                        newArr.push('Thomas')
                        if (skillThomas.length >= 3) {
                            newArr.push('Thomas')
                            if (skillPaul.length >= 3) {
                                newArr.push('Paul')
                            }
                        }
                    }
                }
            }
        }
    }
    return newArr
}
console.log(findPersonHasManySkills())

/* 
    Count logged in users,count users having greater than equal to 50 points from the following object
*/
const countValueObj = (obj = users) => {
    const pointAlex = obj.Alex.points
        , pointAsab = obj.Asab.points
        , pointBrook = obj.Brook.points
        , pointDaniel = obj.Daniel.points
        , pointJohn = obj.John.points
        , pointThomas = obj.Thomas.points
        , pointPaul = obj.Paul.points
    const newArr = new Array()
    newArr.push(pointAlex, pointAsab, pointBrook, pointDaniel, pointJohn, pointPaul, pointThomas)
    let nums = 0
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] >= 50) {
            nums += 1
        }
    }
    return nums
}
countValueObj()


/*
    Find people who are MERN stack developer from the users object
*/
// const MernSkills = (obj = users) => {
//     const skillAlex = obj.Alex.skills
//     const skillAsab = obj.Asab.skills
//     const skillBrook = obj.Brook.skills
//     const skillDaniel = obj.Daniel.skills
//     const skillJohn = obj.John.skills
//     const skillThomas = obj.Thomas.skills
//     const skillPaul = obj.Paul.skill

//     // Arr Penampungan 
//     let arr = new Array() // []

//     // Lopping
//     for (let i = 0; i < 1; i++) {
//         if (skillAlex.indexOf('MongoDB') !== -1) {
//             arr.push('Alex')
//         } else {
//             console.log(false)
//         }
//     }

//     for (let i = 0; i < 1; i++) {
//         if (
//             skillAsab.indexOf('MongoDB') !== -1 && skillAsab.indexOf('Express') !== -1 && skillAsab.indexOf('React') && skillAsab.indexOf('Node')
//         ) {
//             arr.push('Asab')
//         } else {
//             console.log(false)
//         }
//     }

//     for (let i = 0; i < 1; i++) {
//         if (skillBrook.indexOf('MongoDB') !== -1 && skillBrook.indexOf('Express') !== -1 && skillBrook.indexOf('React') && skillBrook.indexOf('Node')) {
//             console.log(true)
//         } else {
//             console.log(false)
//         }
//     }

//     for (let i = 0; i < 1; i++) {
//         if (skillDaniel.indexOf('MongoDB') !== -1 && skillDaniel.indexOf('Express') !== -1 && skillDaniel.indexOf('React') && skillDaniel.indexOf('Node')) {
//             console.log(true)
//         } else {
//             console.log(false)
//         }
//     }
//     for (let i = 0; i < 1; i++) {
//         if (skillJohn.indexOf('MongoDB') !== -1 && skillJohn.indexOf('Express') !== -1 && skillJohn.indexOf('React') && skillJohn.indexOf('Node')) {
//             console.log(true)
//         } else {
//             console.log(false)
//         }
//     }

//     for (let i = 0; i < 1; i++) {
//         if (skillThomas.indexOf('MongoDB') !== -1 && skillThomas.indexOf('Express') !== -1 && skillThomas.indexOf('React') && skillThomas.indexOf('Node')) {
//             console.log(true)
//         } else {
//             console.log(false)
//         }
//     }

//     for (let i = 0; i < 1; i++) {
//         if (skillPaul.indexOf('MongoDB') !== -1 && skillPaul.indexOf('Express') !== -1 && skillPaul.indexOf('React') !== -1 && skillPaul.indexOf('Node') !== -1) {
//             arr.push('Paul')
//         } else {
//             console.log(false)
//         }
//     }
//     console.log(arr)
// }
// MernSkills()

/*
    Set your name in the users object without modifying the original users object
*/
const addNewValueObject = () => {
    const newObj = Object.assign(
        {
            email: 'Teddy@teddy.com',
            skills: ['HTML', 'CSS', 'JavaScript'],
            age: 22,
            isLoggedIn: false,
            points: 100
        }, users)
    return newObj
}
console.log(addNewValueObject())


/*
    Get all keys or properties of users object
*/
const GetPropertyObj = (obj = users) => {
    const getValue = Object.keys(obj)
    console.log(getValue)
}
GetPropertyObj()


/*
    Get all the values of users object
*/
const getValueObject = (obj = users) => {
    const valueObject = Object.values(obj)
    console.log(valueObject)
}
getValueObject()