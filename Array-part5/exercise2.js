// let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// const word = text.split(' ')
// console.log(word)
// console.log(word.length)

// /* 
//     In the following shopping cart add, remove, edit items
//     const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//         A. add 'Meat' in the beginning of your shopping cart if it has not been already added
//         B. add Sugar at the end of you shopping cart if it has not been already added
//         C. remo 'Honey' if you are allergic to honey
//         D. modify Tea to 'Green Tea'
// */
// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// const meats = 'Meat'
// const sugars = 'Sugar'
// // A
// if (shoppingCart.indexOf(meats) === -1) {
//     shoppingCart.unshift(meats)
// } else {
//     console.log('has been already added')
// }
// // B
// if (shoppingCart.indexOf(sugars) != true) {
//     shoppingCart.push(sugars)
// } else {
//     console.log('has been already added')
// }
// console.log(shoppingCart)
// // C
// const honey = 'honey'
// const firtsLetter = honey.substr(0, 1).toUpperCase()
// const lastLetter = honey.substring(1).toLowerCase()
// const joinString = firtsLetter.concat(lastLetter).toString()
// if (shoppingCart.indexOf(joinString) != -1) {
//     shoppingCart.splice(shoppingCart.indexOf(joinString))
// } else {
//     console.log(`${joinString} is Not exist`)
// }
// console.log(shoppingCart)


