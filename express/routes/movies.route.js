const express = require('express');
const router = express.Router();

// Everything in this file is focused on movies

const movies = [{
    id: 1,
    name: 'Star Wars',
    year: 1977
}, {
    id: 2,
    name: 'Shawshank Redemption',
    year: 1995
}, {
    id: 3,
    name: 'Dune'
}, {
    id: 4,
    name: 'Scott Pilgrim vs The World'
}, {
    id: 5,
    name: 'Baby Driver'
}];

router.use((req, res, next) => {
    console.log('Movie Router!');
    next();
});

// /movies
router.get('/', async (req, res) => {
    if (req.query.year != null) {
        // this handles when a query is passed
        const filteredMovies = movies.filter(movie => movie.year != null && movie.year > req.query.year);
        res.json(filteredMovies);
    } else {
        // This handles no query params
        res.status(200).json(movies);
    }
});

router.get('/:id', (req, res) => {
    let { id } = req.params;
    newId = Number(id);
    if (typeof newId !== 'number' || Number.isNaN(newId)) {
        res.status(400).json({message: `Id parameter (${id}) is invalid`});
    } else {
        const movie = movies.find(movie => movie.id === newId);
        if (movie == null) {
            res.status(204).send();
        } else {
            res.json(movie);
        }
    }
});

router.post('/', (req, res) => {
    movies.push(req.body);
    res.sendStatus(201);
});

module.exports = router;