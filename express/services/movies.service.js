const Movie = require("../models/movie.model.js");

const findAllMovies = async () => {
    return await Movie.find();
}

const findMovieById = async id => {
    return await Movie.findById(id);
}

const findMoviesByDirectorName = async director => {
    return await Movie.find({ director: { $eq: director } });
}

const createMovie = async movieInfo => {
    try {
        const movie = new Movie(movieInfo);
        await movie.save(); // Persists to the DB
        return movie;
    } catch (err) {
        console.log(err)
        throw { 
            message: 'Error creating object',
            status: 400
        }
    }
}

const updateMovie = async (id, movieInfo) => {
    try {
        const movie = await Movie.findById(id);
        if (movieInfo.actors != null) {
            movie.actors = movieInfo.actors;
        }
        if (movieInfo.name != null) {
            movie.name = movieInfo.name;
        }
        if (movieInfo.img != null) movie.img = movieInfo.img;
        if (movieInfo.director != null) movie.director = movieInfo.director;
        await movie.save();
        return movie;
    } catch (err) {
        throw { 
            message: 'Error updating movie',
            status: 400
        }
    }
}

const deleteMovieById = async id => {
    try {
        await Movie.findByIdAndDelete(id);
    } catch (err) {
        throw { 
            message: 'Error deleting movie',
            status: 400
        }
    }
}

module.exports = { findAllMovies, findMovieById, findMoviesByDirectorName, createMovie, updateMovie, deleteMovieById };