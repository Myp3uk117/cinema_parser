function simplify(str){
    str = str.split(' ').join('').toLowerCase();
    return str;
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