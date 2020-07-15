const numberOfFilms = +prompt('How much films do you see?', '');

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};

const x = prompt('What the last film did you see?'),
   y = prompt('What rating it worthy?'),
   a = prompt('What the last film did you see?'),
   b = prompt('What rating it worthy?');

personalMovieDB.movies[x] = y;
personalMovieDB.movies[a] = b;

console.log(personalMovieDB);

