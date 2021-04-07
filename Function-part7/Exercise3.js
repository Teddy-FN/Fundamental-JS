/*
    Modify question number n . Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

    userIdGeneratedByUser()
        'kcsy2
        SMFYb
        bWmeq
        ZXOYh
        2Rgxf'

    userIdGeneratedByUser()
        '1GCSgPLMaBAVQZ26
        YD7eFwNQKNs7qXaT
        ycArC5yrRupyG00S
        UbGxOFI7UXSWAyKN
        dIV0SSUTgAdKwStr'
*/
// const userIdGenerateByUser = () => {
//     let inputUser1 = parseInt(prompt('Number column your character', 'enter here'))
//         , inputUser2 = parseInt(prompt('Number row your character', 'enter here'))
//     let charaWord = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTVWXYZ1234567890'
//         , result = ''
//     for (let i = 0; i < inputUser1 && i < inputUser2; i++) {
//         result += charaWord.charAt(Math.floor(Math.random() * inputUser2))
//     }
//     console.log(result)
// }
// userIdGenerateByUser()



/*
Write a function name rgbColorGenerator and it generates rgb colors.

    rgbColorGenerator()
    rgb(125,244,255)
*/
const rgbColorGenerator = () => {
    let text = 'rgb'
    let number = 255

    let color1
        , color2
        , color3
    for (let a = 0; a < 1; a++) {
        color1 = Math.floor(Math.random() * (0 - number) + number)
        color2 = Math.floor(Math.random() * (0 - number) + number)
        color3 = Math.floor(Math.random() * (0 - number) + number)
    }
    let result = text.concat(`(${color1},${color2},${color3})`)
    console.log(result)
}
rgbColorGenerator()


/*
    Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
*/
const arrayOfHexaColors = () => {
    let newArr = []
    let chara = 'abcdef123456789'
    let sharp = '#'
    let charaResult = '';
    for (let a = 1; a <= 6; a++) {
        let news = chara.charAt(Math.floor(Math.random() * chara.length))
        charaResult += news
    }
    const result = sharp.concat(charaResult)
    newArr.push(result)
    return newArr
}
console.log(arrayOfHexaColors())

/*
    Write a function arrayOfRgbColors which return any number of RGB colors in an array.
*/
const arrayOfRgbColors = () => {
    let rgb = 'rgb'
    let num = 255
    let color1
        , color2
        , color3;
    let newArr = new Array()
    for (a = 0; a < 3; a++) {
        color1 = Math.floor(Math.random() * (0 - num) + num)
        for (b = 0; b < 1; b++) {
            color2 = Math.floor(Math.random() * (0 - num) + num)
            for (let c = 0; c < 1; c++) {
                color3 = Math.floor(Math.random() * (0 - num) + num)
            }
        }
    }
    let result = rgb.concat(`(${color1},${color2},${color3})`)
    newArr.push(result)
    return newArr

}
console.log(arrayOfRgbColors())


/*
    Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
*/
const convertHexaToRgb = () => {

}