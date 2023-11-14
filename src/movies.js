// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directorArray = moviesArray.map(function(movie){
        return movie.director
    })
    return directorArray
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let spielbergMovies = 0
    moviesArray.forEach(function(movie) {
        if ((movie.director == 'Steven Spielberg') && movie.genre.includes('Drama')) {
            spielbergMovies += 1
        }
    })
    return spielbergMovies
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    let average = 0

    if (moviesArray.length == 0) {
        return 0
    }

    moviesArray.forEach(function(movie){
        if (movie.score != undefined) {
            average += movie.score
        }
    })
    average = average/(moviesArray.length)
    average = average.toFixed(2)
    average = Number(average)
    return average
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let average = 0
    let dramaCount = 0

    moviesArray.forEach(function(movie){
        if ((movie.score != undefined) && movie.genre.includes(('Drama'))) {
            average += movie.score
            dramaCount += 1
        }
    })

    if (dramaCount == 0) {
        return 0
    }

    average = average/(dramaCount)
    average = average.toFixed(2)
    average = Number(average)
    return average
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const yearArray = [...moviesArray]
    yearArray.sort(function(a, b) {
        if (a.year != b.year) {
            return a.year - b.year
        }
        else {
            return a.title.localeCompare(b.title);
        }
    })
    return yearArray
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const titleArray = [...moviesArray]
    titleArray.sort(function(a, b) {
        return a.title.localeCompare(b.title);
    })

    let onlyTitleArray = titleArray.slice(0,20).map(function(movie) {
        return movie.title
    })
    return onlyTitleArray
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
