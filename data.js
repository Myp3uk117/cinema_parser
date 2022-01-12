function simplify(str){
    str = str.split(' ').join('').toLowerCase();
    return str;
}
function validate(movieName) {
    if (movieName === '') {
        alert('Пожалуйста, введите корректное название фильма.')
        return false
    }
    if (movieName.length > 50) {
        alert('Название фильма слишком длинное. Пожалуйста, введите корректное название.')
        return false
    }
    return true
}
function parseString2(str) {
    let checkpoint = 0
    let movieNames = []
    while (checkpoint < str.length) {
        let cursor = checkpoint
        while (str[cursor] != '—') {
            cursor++
        }
        movieNames.push(str.substring(checkpoint, cursor - 1))
        while (str[cursor] != "»") {
            cursor++
        }
        checkpoint = cursor + 2
    }
    return movieNames;
}
function parseString(str) {
    let movieList = []
    let symbolIndex = 0,
        nameMovieStart = 0,
        nameMovieEnd = 0
    while (symbolIndex < str.length) {
        if (str[symbolIndex] == '—') {
            nameMovieEnd = symbolIndex - 1
            movieList.push(str.substring(nameMovieStart, nameMovieEnd))
            console.log('str.substring(nameMovieStart, nameMovieEnd):', str.substring(nameMovieStart, nameMovieEnd))
            while (1) {
                symbolIndex++
                if (str[symbolIndex] == '»') {
                    nameMovieStart = symbolIndex + 2
                    break;
                }
            }
        }
        symbolIndex++
    }
    return movieList
}

const arrDecimals = [
    'двадцать',
    'тридцать',
    'сорок',
    'пятьдесят',
    'шестьдесят',
    'семьдесят',
    'восемьдесят',
    'девяносто',
    'сто'
]

const arrNumbers = [
    'один',
    'два',
    'три',
    'четыре',
    'пять',
    'шесть',
    'семь',
    'восемь',
    'девять'
]
const arrTensNumbers = [
    'десять',
    'одиннадцать',
    'двенадцать',
    'тринадцать',
    'четырнадцать',
    'пятнадцать',
    'шестнадцать',
    'семнадцать',
    'восемнадцать',
    'девятнадцать',
]

const digitToEnding = [
    'фильмов',
    'фильм',
    'фильма',
    'фильма',
    'фильма',
    'фильмов',
    'фильмов',
    'фильмов',
    'фильмов',
    'фильмов',
]

const moviesNameEndings = [
    'фильмов', 
    'фильма', 
    'фильм'
]

let strOneToHundred = arrNumbers.slice()

strOneToHundred = strOneToHundred.concat(arrTensNumbers)

for (let decimal of arrDecimals) {
    strOneToHundred.push(decimal)
    for (let singleNumber of arrNumbers) {
        strOneToHundred.push(decimal + ' ' + singleNumber)
    }
}

for (let i = 0; i< strOneToHundred.length; i++){
    strOneToHundred[i] = strOneToHundred[i].split(' ').join('')
}

console.log('strOneToHundred:', strOneToHundred)