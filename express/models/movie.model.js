const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    name: String,
    director: String,
    actors: [String],
    img: String
});

//                         Model Name, schema to model, Collection name in MongoDB
const Movie = mongoose.model('Movie', movieSchema, 'Movies');

module.exports = Movie;