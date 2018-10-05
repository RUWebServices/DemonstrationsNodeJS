
function splitOnChar(str, splitter) {
    return str.split(splitter);
};

function capitalize(str) {
    return str.split(' ').map(word => `${word[0].toUpperCase()}${word.slice(1)}`).join(' ');
}

module.exports = {
    splitOnChar,
    capitalize
};
