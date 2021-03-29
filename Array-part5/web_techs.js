const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]
const techWebs = 'Sass'
if (!(webTechs.indexOf(techWebs) !== -1)) {
    webTechs.push(techWebs)
    if (webTechs.indexOf(techWebs) === webTechs.lastIndexOf(techWebs)) {
        console.log(`${techWebs} is a CSS preprocess`)
    } else {
        console.log('SUDAH ADA BROO')
    }
} else {
    console.log('Is already exist')
}
console.log(webTechs)