const { Movie, Actor, connection } = require('./data/db');
const ObjectId = require('mongoose').Types.ObjectId;

// 4.
Movie.find({}, (err, movies) => {
    if (err) { throw new Error(err); }
    console.log(movies + '\n');
});

// 5.
Actor.find({}, (err, actors) => {
    if (err) { throw new Error(err); }
    console.log(actors + '\n');
});

// 6.
Movie.findById('5bb72e2efb6fc038040aaac1', (err, movie) => {
    if (err) { throw new Error(err); }
    console.log(movie + '\n');
});

// 7.
Actor.find({ movieId: '5bb72e2efb6fc038040aaac1' }, (err, actors) => {
    if (err) { throw new Error(err); }
    console.log(actors + '\n');
});

// 8.
Movie.create({
    title: 'Charlie and the Chocolate Factory',
    publishYear: 2005,
    category: 'adventure',
    director: 'Tim Burton'
}, err => {
    if (err) { throw new Error(err); }
    console.log('Successfully created!');
});

// 9.
Movie.findOne({ title: 'Charlie and the Chocolate Factory' }, (err, movie) => {
    if (err) { throw new Error(err); }
    Actor.create({
        name: 'Johnny Depp',
        profileImg: 'https://www.biography.com/.image/t_share/MTIwNjA4NjM0MDYyNTM4MjUy/johnny-depp-9542522-1-402.jpg',
        movieId: movie._id
    }, err => {
        if (err) { throw new Error(err); }
        console.log('Successfully created!');
    });
});
