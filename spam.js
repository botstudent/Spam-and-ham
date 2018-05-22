let fs = require('fs');

let getCategory = (line) => line.startsWith('ham') ? 'ham' : 'spam';

fs.readFileSync('spam.csv')
    .toString()
    .split(/\r?\n/)
    .forEach(function(line){
        let category = getCategory(line);
        console.log(category);

        line = line.substring(category.length + 1)
        console.log(line.split(" "));
    });


//let parseLine = (line) => ({ category: 'spam', text: ''}) //substring
//console.log(anyString.substring(5, 0));