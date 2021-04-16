const parameter1 = ["g", "o", "o", "g", "l", "e", ".", "c", "o", "m"]
const parameter2 = ["g", "o", "o", "g", "l", "e", ".", "c", "o", ".", "i", "d"]


const reverseArr = (param1 = parameter1, param2 = parameter2) => {
    let arrSplit = []
        , arrGoogle = []
        , arrCo = []
        , arrDot = []
        , arrM = []
        , arrId = [];
    for (let i = 0; i < param2.length; i++) {
        if (param2[i].indexOf(param1[i]) !== -1) {
            arrSplit.push(param2[i])
        } else {
            if (param1[i] === undefined && param2[i] !== undefined) {
                arrId.push(param2[i])
            } else {
                arrM.push(param1[i])
            }
        }
    }
    for (let go = 0; go < arrSplit.length; go++) {
        if (go <= 5) {
            arrGoogle.push(arrSplit[go])
        } else if (go > 6 && go <= arrSplit.length - 1) {
            arrCo.push(arrSplit[go])
        } else {
            arrDot.push(arrSplit[go])
        }
    }
    let reverseDomain1 = arrCo.concat(arrM, arrDot, arrGoogle)
    let reverseDomain2 = arrId.concat(arrDot, arrCo, arrDot, arrGoogle)
    // return reverseDomain1
    return reverseDomain2
}
console.log(reverseArr())