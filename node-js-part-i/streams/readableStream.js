var request = require('request');

var s = request('http://mbl.is');

s.on('data', function(chunk) {
    console.log(">>>Data>>> " + chunk + '\n\n');
});

s.on('end', function() {
    console.log(">>>Done!>>>");
});
