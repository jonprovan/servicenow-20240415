const mongoose = require('mongoose');

const objectIdValidator = async (req, res, next) => {
    let { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({message: `Id parameter (${id}) is invalid`});
    }
    next();
}

module.exports = { objectIdValidator };