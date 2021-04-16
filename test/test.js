/*
    const parameter1 = ["g", "o", "o", "g", "l", "e", ".", "c", "o", "m"]
    const parameter2 = ["g", "o", "o", "g", "l", "e", ".", "c", "o", ".", "i", "d"]
    reverseDomain(parameter1) // result: ["c", "o", "m", ".", "g", "o", "o", "g", "l", "e"]
    reverseDomain(parameter2) // result: ["i", "d", ".", "c", "o", ".", "g", "o", "o", "g", "l", "e"]
*/

const parameter1 = ["g", "o", "o", "g", "l", "e", ".", "c", "o", "m"]
const parameter2 = ["g", "o", "o", "g", "l", "e", ".", "c", "o", ".", "i", "d"]

const reverseArr = (param1 = parameter1, param2 = parameter2) => {
    let resultParam1Google = []
        , resultParam1Dot = []
        , resultParam1Com = []
    for (let i = 0; i < param1.length; i++) {
        if (i < 6) {
            resultParam1Google.push(param1[i])
        } else if (i > 6 && i <= param1.length - 1) {
            resultParam1Com.push(param1[i])
        } else {
            resultParam1Dot.push(param1[i])
        }
    }

    let resultParam2Google = []
        , resultParam2Dot = []
        , resultParam2Co = []
        , resultParam2Id = []
    for (let i = 0; i < param2.length; i++) {
        if (i < 6) {
            resultParam2Google.push(param2[i])
        } else if (i > 6 && i < 9) {
            resultParam2Co.push(param2[i])
        } else if (i >= 10 && i <= param2.length - 1) {
            resultParam2Id.push(param2[i])
        } else {
            resultParam2Dot.push(param2[i])
        }
    }
    let reverseDomain1 = resultParam1Com.concat(resultParam1Dot, resultParam1Google)
    let reverseDomain2 = resultParam2Id.concat(resultParam2Dot.slice(0, 1), resultParam2Co, resultParam1Dot, resultParam1Google)
    console.log(reverseDomain1)
    console.log(reverseDomain2)
}
reverseArr()