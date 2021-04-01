const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
]

/* 
    Extract all the countries contain the word 'land' from the countries array and print it as array
    1. Buat variable untuk menampung value
    2. buat for loop arr 
    3. Filter value arr yang ada kata land
    4. Jika suda ketemu maka akan di push ke dalam variable yang sudah kita buat tadi
*/
const ArrACount = new Array()
for (let country = 0; country < countries.length; country++) {
    const Regex = /land/i
    let toStringArr = countries[country].toString().match(Regex)
    if (toStringArr !== null) {
        ArrACount.push(toStringArr.input)
    }
}
console.log('FINAL', ArrACount)

/*
    Find the country containing the hightest number of characters in the countries array
    ALGROTIMA
    1. Bikin variable untuk menampung result 
    2. bikikn for Loop 
    3. Setelah bikin for loop kita filter indexnya
    4. kita perbandiungkan dengan nilai yang tertinggi 
*/
let resultVariable = []
for (let countTech = 0; countTech < countries.length; countTech++) {
    let lengthCounts = countries[countTech].length
    if (lengthCounts === 21) {
        resultVariable.push(countries[countTech])
    }
}
console.log('HASIL', resultVariable)

/*
    Extract all the countries containing only four characters from the countries array and print it as array
    ALGORITMA
    1. Bikin variable untuk menamoung arr 
    2. Bikin for loop 
    3. split value sebanyak 4 character
    4. push ke dalam penampungan arr
*/
let penampungArrCount = []
for (let negara = 0; negara < countries.length; negara++) {
    let negaraCountry = countries[negara].toString().slice(0, 4)
    // Push 
    penampungArrCount.push(negaraCountry)
}
console.log("Result Hasil", penampungArrCount)

/*
    Extract all the countries containing two or more words from the countries array and print it as array
*/
let nampungArrBaru = []
for (let a = 0; a < countries.length; a++) {
    let negaraBaru = countries[a].toString().slice(0, 2)
    nampungArrBaru.push(negaraBaru)
}
console.log(nampungArrBaru)

/*
    Reverse the countries array and capitalize each country and stored it as an array
*/

let nampungArrReverse = []
for (let i = countries.length - 1; i > 0; i--) {
    nampungArrReverse.push(countries[i])
}
console.log(nampungArrReverse)