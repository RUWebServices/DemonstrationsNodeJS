const dns = require('dns');

dns.lookup('mbl.is', function (err, address, family) {
    console.log(address);
    console.log(family);
});

dns.resolveMx('ru.is', function (err, addresses) {
    console.log(addresses);
});

dns.resolveNs('ru.is', function (err, addresses) {
    console.log(addresses);
});
