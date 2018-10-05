const EventEmitter = require('events');

class EventPublisher extends EventEmitter {
    constructor() {
        super();
        this.properties = {
            data: [
                "Chunk 1",
                "Chunk 2",
                "Chunk 3"
            ],
            currentChunk: 0
        }
    }
    sendChunk() {
        const { data, currentChunk } = this.properties;
        if (currentChunk === data.length) {
            this.emit('end');
            return;
        }
        this.emit('chunk', data[currentChunk]);
        this.properties = Object.assign({}, this.properties, {
            currentChunk: currentChunk + 1
        });
    }
};

module.exports = EventPublisher;
