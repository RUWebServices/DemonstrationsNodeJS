const fs = require('fs');

fs.access('doesExist', fs.constants.F_OK, (err) => {
    if (!err) { console.log('The file exists!'); }
    else { console.log('The file does not exist.'); }
});

fs.appendFile('doesExist', 'Just nod if you can hear me\n', (err) => {
    if (err) { console.log('An error occurred.'); }
});

fs.createWriteStream('heman').write('By the power of Grayskull! I have the power!');

fs.readFile('heman', {
    encoding: 'utf-8'
}, (err, data) => {
    console.log(data);
});

fs.unlink('heman', (err) => {
    if (err) { console.log('Error deleting file \'heman\'.'); }
});
