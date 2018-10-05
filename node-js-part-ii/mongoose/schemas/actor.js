const Schema = require('mongoose').Schema;

module.exports = new Schema({
    name: { type: String, required: true },
    profileImg: { type: String },
    movieId: { type: Schema.Types.ObjectId, required: true }
});
