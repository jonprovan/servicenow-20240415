const Actor = require('../models/actor.model.js');

const findAllActors = async () => {
    // populate the ref field and mongoose will do the lookup (join) for you
    return await Actor.find().populate('movies');
}

module.exports = { findAllActors };