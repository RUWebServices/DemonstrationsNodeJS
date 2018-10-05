const mongoose = require('mongoose');
const movieSchema = require('../schemas/movie');
const actorSchema = require('../schemas/actor');

const connection = mongoose.createConnection('mongodb://veft_dbuser:Abc.12345@ds123513.mlab.com:23513/veft-nodejs', {
    useNewUrlParser: true
});

module.exports = {
    Movie: connection.model('Movie', movieSchema),
    Actor: connection.model('Actor', actorSchema),
    connection
};
