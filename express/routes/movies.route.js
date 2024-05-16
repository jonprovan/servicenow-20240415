const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const { objectIdValidator } = require('../middlewares/mongodbMiddleware.js');
const { findAllMovies, createMovie, findMovieById, findMoviesByDirectorName, updateMovie, deleteMovieById } = require('../services/movies.service.js');

// Everything in this file is focused on movies

// const movies = [{
//     id: 1,
//     name: 'Star Wars',
//     year: 1977
// }, {
//     id: 2,
//     name: 'Shawshank Redemption',
//     year: 1995
// }, {
//     id: 3,
//     name: 'Dune'
// }, {
//     id: 4,
//     name: 'Scott Pilgrim vs The World'
// }, {
//     id: 5,
//     name: 'Baby Driver'
// }];

router.use((req, res, next) => {
    console.log('Movie Router!');
    next();
});

// /movies
router.get('/', async (req, res) => {
    if (req.query.director != null) {
        // this handles when a query is passed
        // const filteredMovies = movies.filter(movie => movie.year != null && movie.year > req.query.year);
        const filteredMovies = await findMoviesByDirectorName(req.query.director);
        res.json(filteredMovies);
    } else {
        // This handles no query params
        const movies = await findAllMovies();
        let isEmpty = movies.length === 0;
        res.status(isEmpty ? 204 : 200).json(movies);
    }
});

router.get('/:id', objectIdValidator, async (req, res) => {
    const { id } = req.params;
    // const movie = movies.find(movie => movie.id === newId);
    const movie = await findMovieById(id);
    if (movie == null) {
        res.status(204).send();
    } else {
        res.json(movie);
    }
});

router.post('/', async (req, res) => {
    try {
        const movie = await createMovie(req.body);
        res.status(201).json(movie);
    } catch (err) {
        res.status(err?.status ?? 400).json({message: err.message});
    }
});

router.put('/:id', objectIdValidator, async (req, res) => {
    try {
        const { id } = req.params;
        const updatedMovie = await updateMovie(id, req.body);
        res.status(200).json(updatedMovie);
    } catch (err) {
        res.status(err?.status ?? 400).json({message: err.message});
    }
});

router.delete('/:id', objectIdValidator, async (req, res) => {
    try {
        await deleteMovieById(req.params.id);
        res.status(204).json();
    } catch (err) {
        res.status(err?.status ?? 400).json({message: err.message});
    }
});

module.exports = router;

Promise.reject(1)
.then(data => 1) // If you throw in one of these
.catch(data => 2)
