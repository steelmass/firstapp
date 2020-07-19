"use strict";

const personalMovieDB = {
   count: 0,
   movies: {},
   actors: {},
   genres: [],
   privat: false,

   start: function () {
      personalMovieDB.count = +prompt('How much films do you see?', '');

      while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
         personalMovieDB.count = +prompt('How much films do you see?', '');
      }
   },

   rememberMyFilms: function () {
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
   },

   detectPersonalLevel: function () {
      if (personalMovieDB.count < 10) {
         console.log('You see very few films!');
      } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
         console.log('You are classic viewer!');
      } else if (personalMovieDB.count >= 30) {
         console.log('You are movie fun!');
      } else {
         console.log('Error');
      }
   },

   showMyDB: function (hidden) {
      if (!hidden) {
         console.log(personalMovieDB);
      }
   },

   toggleVisibleMyDB: function () {
      if (personalMovieDB.privat) {
         personalMovieDB.privat = false;
      } else {
         personalMovieDB.privat = true;
      }
   },

 
   writeYourGenres: function () {
      for (let i = 1; 3 >= i; i++) {
      personalMovieDB.genres[i - 1] = prompt(`What your favorite genre at number ${i}`);
         
         if (personalMovieDB.genres[i - 1] === null || 
             personalMovieDB.genres[i - 1] === '') {
            i--;
         }
      }

      personalMovieDB.genres.forEach((item, index) => {
        console.log(`Your favourite genre #${index + 1} is ${item}`);
      });
   },

};












// Object.setPrototypeOf(start, personalMovieDB);
// Object.setPrototypeOf(rememberMyFilms, personalMovieDB);
// Object.setPrototypeOf(detectPersonalLevel, personalMovieDB);
// Object.setPrototypeOf(writeYourGenres, personalMovieDB);
// Object.setPrototypeOf(showMyDB, personalMovieDB);