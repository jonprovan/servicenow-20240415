const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Must Provide a Movie Name']
    },
    director: String,
    actors: {
        type: [String],
        validate: {
            validator: function() {
                return this.actors?.length > 0;
            },
            message: () => 'Too SHORT'
        }
    },
    img: String
});

//                         Model Name, schema to model, Collection name in MongoDB
const Movie = mongoose.model('Movie', movieSchema, 'Movies');

module.exports = Movie;