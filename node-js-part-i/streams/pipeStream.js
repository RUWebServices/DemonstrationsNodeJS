const fs = require('fs');
const zlib = require('zlib');
const request = require('request');

// Version 1:  Pipe HTML to standard out
var s = request('http://ru.is');

s.pipe(process.stdout);

// Version 2:  Chain request and pipe together
request('http://ru.is').pipe(process.stdout);

// Version 3:  Pipe HTML to a file instead of standard out
request('http://ru.is').pipe(fs.createWriteStream('ru.html'));

// Version 4:  Pipe HTML through a gzip stream to a compressed file
request('http://ru.is').pipe(zlib.createGzip()).pipe(fs.createWriteStream('ru.html.gz'));
