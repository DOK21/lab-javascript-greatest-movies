const movies = require('./data');

// The `movies` array from the file `src/data.js`.
console.log('movies: ', movies);

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arrayOfMovies) {
  const directors = arrayOfMovies.map(function (moviesWehave) {
    return moviesWehave.director;
  });
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  //*drama** movies where **Steven Spielberg** is the director.
  const steveSdramas = movies.filter(function (stevesDramaMovies) {
    if (
      stevesDramaMovies.director === 'Steven Spielberg' &&
      stevesDramaMovies.genre.includes('Drama')
    ) {
      return true;
    }
  });
  return steveSdramas.length;
}
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arrayOfscores) {
  if (!arrayOfscores.length) {
    return 0;
  }
  const sumOfscores = arrayOfscores.reduce(function (
    accuMulator,
    currentValue
  ) {
    if (currentValue.score === '' || !currentValue.score) {
      currentValue.score = 0;
    }
    return accuMulator + currentValue.score;
  },
  0);
  const aveRage = sumOfscores / arrayOfscores.length;
  return Number(aveRage.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const dramaMovies = movies.filter(function (dramaMovies) {
    if (!movies.length) {
      return 0;
    }
    if (dramaMovies.genre.includes('Drama')) {
      return true;
    }
  });
  return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(yearNumbersArray) {
  // let yearNumbersArray
  const sortedArray = yearNumbersArray.slice();
  sortedArray.sort(function (yearA, yearB) {
    if (yearA.year === yearB.year) {
      //if (yearA.title.localecompare(yearB.title))
      return yearA.title.localecompare(yearB.title);
    }
    return yearA.year - yearB.year;
    //return new Date(b.date) - new Date(a.date)
  });
  return sortedArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
