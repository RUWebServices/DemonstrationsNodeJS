const stringHelper = require('./stringHelper');

const splittedString = stringHelper.splitOnChar('hey ho silver away', ' ');
splittedString.map(s => console.log(s));

const capitalizedWord = stringHelper.capitalize('thunder thunder thundercats!');
console.log(capitalizedWord);
