let fs = require('fs');

let getCategory = (line) => line.startsWith('ham') ? 'ham' : 'spam';

fs.readFileSync('spam.csv')
    .toString()
    .split(/\r?\n/)
    .forEach(function(line){
        let category = getCategory(line);
        console.log(category);

        line = line.substring(category.length + 1);
        let words = line.split(/[\.,"' ]+/g); 
        let lowerCaseWords = words.map((w) => w.toLowerCase());
        let cleanWords = lowerCaseWords.filter((w) => w != '');
        console.log(cleanWords);
        
    });

// See https://regexr.com/ to debug regular expressions