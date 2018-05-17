let fs = require('fs');
fs.readFileSync('spam.csv')
    .toString()
    .split(/\r?\n/)
    .forEach(function(line){
        console.log(line);
    });