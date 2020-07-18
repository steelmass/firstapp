"use strict";

let numberOfFilms;

function start() {
   numberOfFilms = +prompt('How much films do you see?', '');

   while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms) ) {
      numberOfFilms = +prompt('How much films do you see?', '');
   }
}

start();

function rememberMyFilms() {
   for (let i = 0; 2 > i; i++) {
      let x = prompt('What the last film did you see?'),
         y = prompt('What rating it worthy?');

      if (x === null || y === null) {
         i--;
      } else if (x.length > 50 || y.length > 50) {
         i--;
      } else if (x === '' || y === '') {
         i--;
      } else {
         personalMovieDB.movies[x] = y;
      }

   }
}

rememberMyFilms();


function detectPersonalLevel() {
   if (personalMovieDB.count < 10) {
      console.log('You see very few films!');
   } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log('You are classic viewer!');
   } else if (personalMovieDB.count >= 30) {
      console.log('You are movie fun!');
   } else {
      console.log('Error');
   }
}


detectPersonalLevel();


const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};


function writeYourGenres() {

   for (let i = 1; 3 >= i; i++) {
      personalMovieDB.genres[i - 1] = prompt(`What your favorite genre at number ${i}`);
   } 
}

writeYourGenres();
console.log(personalMovieDB);

function showMyDB(hidden) {
   if (!hidden) {
      console.log(personalMovieDB);
   }
}

showMyDB(personalMovieDB.privat);