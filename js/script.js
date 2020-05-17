/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

let promotion=document.querySelector('.promo__adv'),
    body=document.querySelector('body')

promotion.remove();
let genre=document.querySelector('.promo__genre');
console.log(genre);
genre.textContent='Драма'

let conten=document.querySelector('.promo__bg');

conten.style.backgroundImage='url("../img/bg.jpg")';

let listFilms=document.querySelector('.promo__interactive-list');

// listFilms.forEach(item=>{
//     item.remove()
// });
listFilms.innerHTML="";
movieDB.movies.sort();
movieDB.movies.forEach((item , i)=>{
    listFilms.innerHTML+=
    `
    <li class="promo__interactive-item">${i+1}. ${item}
    <div class="delete"></div>
    </li>
    `
})