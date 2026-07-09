function movies(arr) {
    class Movie {
        constructor(name) {
            this.name = name;
        }
    }
    let movieList = [];

    for (let line of arr) {
        if (line.includes("addMovie")) {
            let name = line.slice("addMovie ".length);
            movieList.push(new Movie(name));
        } else if (line.includes("directedBy")) {
            let [name, director] = line.split(" directedBy ");
            let movie = movieList.find(m => m.name === name);
            if (movie) {
                movie.director = director;
            }
        } else if (line.includes("onDate")) {
            let [name, date] = line.split(" onDate ");
            let movie = movieList.find(m => m.name === name);
            if (movie) {
                movie.date = date;
            }
        }
    }

    for (let movie of movieList) {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    }
}

movies([ 'addMovie Fast and Furious', 'addMovie Godfather', 'Inception directedBy Christopher Nolan', 'Godfather directedBy Francis Ford Coppola', 'Godfather onDate 29.07.2018', 'Fast and Furious onDate 30.07.2018', 'Batman onDate 01.08.2018', 'Fast and Furious directedBy Rob Cohen' ]);
console.log("--------------------------------");
movies([ 'addMovie The Avengers', 'addMovie Superman', 'The Avengers directedBy Anthony Russo', 'The Avengers onDate 30.07.2010', 'Captain America onDate 30.07.2010', 'Captain America directedBy Joe Russo']);