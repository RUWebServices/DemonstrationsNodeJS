const EventPublisher = require('./eventPublisher');

const eventPublisher = new EventPublisher();

eventPublisher.on('chunk', function (chunk) {
    console.log(chunk);
});

eventPublisher.on('end', function () {
    console.log('End of all chunks!');
});

eventPublisher.sendChunk();
eventPublisher.sendChunk();
eventPublisher.sendChunk();
eventPublisher.sendChunk();
