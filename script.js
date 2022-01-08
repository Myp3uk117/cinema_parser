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

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','')
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

for (let countMovie = 0; countMovie < numberOfFilms; countMovie++){
    let tempMovie = prompt('Один из последних просмотренных фильмов?', movieTitles[Math.floor(Math.random()*(movieTitles.length-1))])
    let tempScore = +prompt('Какую оценку поставите от 1 до 10?','7')
    personalMovieDB.movies[tempMovie] = tempScore
}

console.log('personalMovieDB:', personalMovieDB)
