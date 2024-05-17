const mongoose = require('mongoose');

const actorSchema = new mongoose.Schema({
    name: String,
    movies: [{
        type: mongoose.Types.ObjectId,
        ref: 'Movie'
    }]
});

const Actor = mongoose.model('Actor', actorSchema, 'Actors');

module.exports = Actor;