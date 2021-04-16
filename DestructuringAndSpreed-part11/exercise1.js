const constants = [2.72, 3.14, 9.81, 37, 100]
// Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
const [e = 2.72, PI = 3.14, gravity = 9.81, humanBodyTemp = 37, waterBoilingTemp = 100] = constants
console.log(e, PI, gravity, humanBodyTemp, waterBoilingTemp)


const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
// Destructure and assign the elements of countries array to fin, est, sw, den, nor
const [fin = 'Finland', est = 'Estonia', sw = 'Sweden', den = 'Denmark', nor = 'Norway'] = countries
console.log(fin, est, sw, den, nor)


const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60
}
// Destructure the rectangle object by its properties or keys
const objectProp = ({ width, height, area, perimeter }) => {
    console.log(width, height, area, perimeter)
}
objectProp(rectangle)

