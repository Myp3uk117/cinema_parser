/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';
let numberOfFilms
while (1){
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','')
    if (isNaN(numberOfFilms)){
        alert('Пожалуйста, введите корректное число.')
        continue;
    }
    break;
}
 
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
}

let textToParse_0 = 'Похороны Коджо — 31 марта 2019 г. — «Когда мужчину бросают умирать на незаконном золотом руднике, его дочь путешествует по волшебному ландшафту, чтобы спасти его».Мерата: как мама деколонизировала экран — 12 мая 2019 г. — «Новозеландский киноархив Хепери Мита прослеживает кинематографическое наследие своей матери и выдающегося режиссера маори Мерата Мита».Горящая трость — 6 ноября 2019 г. — «В этом драматическом исследовании персонажей священник из небольшого городка Луизианы и один из его прихожан справляются с горем, алкоголизмом и кризисом веры».Тело помнит, когда мир открылся — 27 ноября 2019 г. — «После травмирующего события две женщины из числа коренного населения в Ванкувере сближаются и образуют прочную связь, несмотря на то, что они ведут разную жизнь».Иезавель — 16 января 2020 г. — «В период зарождения Интернета уязвимая женщина следует за своей сестрой в секс-индустрию в качестве модели веб-камеры, но ее внезапная популярность проверяет их связь».'
let textToParse_1 = 'Остаток — 17 сентября 2020 г. — «Молодой сценарист возвращается в свой родной город, чтобы написать сценарий, основанный на его детстве, и обнаруживает, что его район облагорожен».Айну Мосир — 17 ноября 2020 г. — «Чуткий подросток-айну ищет духовную связь со своим недавно умершим отцом, ориентируясь на свою коренную идентичность в меняющемся мире».Забавный мальчик — 12 декабря 2020 г. — «Студент должен ориентироваться в вопросах сексуальности, идентичности и семьи в условиях социальных потрясений в Шри-Ланке 1970-х и 1980-х годов».Аляска — это драг — 31 декабря 2020 г. — «Измученный хулиганами, начинающая звезда сопротивления, работающая на консервном заводе на Аляске, становится опытным бойцом, и тренер по боксу приглашает на соревнования».'
let textToParse_2 = 'В садах наших матерей — 7 мая 2021 г. — «Незапланированная беременность меняет беззаботную жизнь молодой женщины и ее соседки по квартире, поскольку они обнаруживают, что материнство-одиночка переживает трудности».Кузены — 22 июля 2021 г. — «Три кузена. Три жизни. Разделенные обстоятельствами, но связанные кровью ».Санкофа — 24 сентября 2021 г. — ремастер фильма Хайле Герима 1993 года в формате 4K».Любовь и ярость — 3 декабря 2021 г. — документальный фильм, в котором «рассказывается о кадрах местных художников, которые работают над расширением творческого потенциала коренных народов в постколониальном мире и делают свою карьеру без разрешения».'

function parseString(str){
    let movieList = []
    let symbolIndex = 0, nameMovieStart = 0, nameMovieEnd = 0
    while (symbolIndex < str.length){
        if (str[symbolIndex] == '—'){
            nameMovieEnd = symbolIndex - 1
            movieList.push(str.substring(nameMovieStart, nameMovieEnd))
            console.log('str.substring(nameMovieStart, nameMovieEnd):', str.substring(nameMovieStart, nameMovieEnd))
            while (1){
                symbolIndex++
                if (str[symbolIndex] == '»'){
                    nameMovieStart = symbolIndex+2
                    break;
                }
            }
        }
        symbolIndex++
    }
    return movieList
}

function parseString2(str) {
    let checkpoint = 0
    let movieNames = []
    while (checkpoint < str.length) {
        let cursor = checkpoint
        while(str[cursor] != '—') {
            cursor++
        }
        movieNames.push(str.substring(checkpoint, cursor - 1))
        while(str[cursor] != "»") {
            cursor++
        }
        checkpoint = cursor + 2
    }
    return movieNames;
}

let movieTitles = parseString2(textToParse_0+textToParse_1+textToParse_2)
console.log('movieTitles:', movieTitles)

function validate(movieName) {
    if (movieName === '') {
        alert ('Пожалуйста, введите корректное название фильма.')
        return false
    }
    if (movieName.length > 50) {
        alert('Название фильма слишком длинное. Пожалуйста, введите корректное название.')
        return false
    }
    return true
}
let countMovie = 0
let tempMovie = 1
while (countMovie < personalMovieDB.count){
    tempMovie = prompt(`Введите название фильма, которому хотите поставить оценку. Количество уже оцененных фильмов: ${countMovie}`, movieTitles[Math.floor(Math.random()*(movieTitles.length-1))])
    if (tempMovie === null){
        break
    }
    if (!validate(tempMovie)) {
        continue
    }
    if (personalMovieDB.movies[tempMovie] != undefined) {
        if (!(confirm('Фильм уже есть в базе. Нажмите ОК, чтобы обновить оценку, либо "Отмена", чтобы ввести другое название.'))){
            continue
        }
        // лучше убрать эту строку, т.к. мы хотим менять эту переменную только при записи нового фильма
        countMovie--
    }

    let tempScore = +prompt('Какую оценку поставите от 1 до 10?','7')
    personalMovieDB.movies[tempMovie] = tempScore
    countMovie++
}

console.log('personalMovieDB:', personalMovieDB)
const moviesNameEndings = ['фильмов', 'фильма', 'фильм']
let numberOfFilmsStr = String(personalMovieDB.count) 
let numberOfFilms1 = personalMovieDB.count

let ending = ''
// if (numberOfFilmsStr[numberOfFilmsStr.length-2] == '1'){
//     ending = moviesNameEndings[0]
// } else {
//     switch (numberOfFilmsStr[numberOfFilmsStr.length-1]){
//         case '0':
//         case '5':
//         case '6':
//         case '7':
//         case '8':
//         case '9':
//             ending = moviesNameEndings[0]
//             break;
//         case '2':
//         case '3':
//         case '4':
//             ending = moviesNameEndings[1]
//             break;
//         default:
//             ending = moviesNameEndings[2]
//     }
// }

let digitToEnding = [
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

var decimals = numberOfFilms1 % 100
if (decimals >= 10 && decimals <= 20) {
    ending = digitToEnding[0]
} else {
    let endDigit = decimals % 10
    ending = digitToEnding[endDigit]
}

let scoresReview = ``
for (let movie in personalMovieDB.movies){
    scoresReview += `Вы поставили фильму \"${movie}\" оценку ${personalMovieDB.movies[movie]}.\n`
}
console.log('scoresReview:', scoresReview)

let userStringReview = ''
if (personalMovieDB.count < 20){
    userStringReview = 'Вы просмотрели довольно мало фильмов.'
} else if (personalMovieDB.count >= 20 && personalMovieDB.count <=50){
    userStringReview = 'Вы просмотрели довольно много фильмов.'
} else if (personalMovieDB.count > 50){
    userStringReview = 'Вы настоящий киноман!'
}

alert (`Вы посмотрели ${personalMovieDB.count + ' ' + ending + '.'}\n${scoresReview}\n${userStringReview}`)

