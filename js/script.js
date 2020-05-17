/* Задания на урок HW6:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

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