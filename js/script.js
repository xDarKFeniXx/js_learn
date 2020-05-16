"use strict";
const numberOfFilms=+prompt('Сколько фильмов вы уже посмотрели?', '')
const personalMovieDB={
    count: numberOfFilms,
    movies: {},
    actors:{},
    genres:[],
    privat:false
};
const a=promt('один из последнийх просмотренных фильмов', ''),
      b=promt('На сколько вы его оцените', ''),
      c=promt('один из последнийх просмотренных фильмов', ''),
      d=promt('На сколько вы его оцените', '');

personalMovieDB.movies[a]=b;
personalMovieDB.movies[c]=d;
console.log(personalMovieDB);
